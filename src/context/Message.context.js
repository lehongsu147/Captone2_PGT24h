import React, { createContext, useEffect, useState, useContext, useCallback } from "react";
import { AuthContext } from "./auth.context";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [messengerList, setMessengerList] = useState([]);
  const compareTimestamps = (a, b) => b.createdAt.toDate().getTime() - a.createdAt.toDate().getTime();
  // Hàm để bắt đầu lắng nghe thay đổi đối với collection 'messengerList'
  
  const userId = String(user?.id); 
  const startMessengerListListener = useCallback(() => {
    if (user) {
      const notificationsQuery = query(
        collection(db,"chats"),
        where("chatId", ">=", userId)
        // where("chatId", "array-contains", userId),
        // orderBy("createdAt", "desc")
      );
      // Lắng nghe thay đổi và cập nhật state
      return onSnapshot(notificationsQuery, (querySnapshot) => {
        const updatedMessengerList = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }));
        // const sortMessengerList = updatedMessengerList.sort(compareTimestamps);
        setMessengerList(updatedMessengerList);
      });
    } else {
      setMessengerList([]);
      return undefined;
    }
  }, [user]);

  useEffect(() => {
    const unsubscribe = startMessengerListListener();
    return () => unsubscribe && unsubscribe();
  }, [startMessengerListListener]);

  const value = {
    messengerList,
  };

  return (
    <MessageContext.Provider value={value} >
      {children}
    </MessageContext.Provider>
  );
};

import React, { createContext, useEffect, useState, useContext, useCallback } from "react";
import { AuthContext } from "./auth.context";
import { collection, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [messengerList, setMessengerList] = useState([]);
  const [refreshMessengerList, setRefreshMessengerList] = useState(false);

  const compareTimestamps = (a, b) => b.createdAt?.toDate().getTime() - a.createdAt?.toDate().getTime();
  const userId = Number(user?.id);

  const startMessengerListListener = useCallback(() => {
    if (user) {
      const messagesRef = collection(db, "chats");
  
      const firstUserMessagesQuery = query(
        messagesRef,
        where("firstUserId", "==", userId)
      );
  
      const secondUserMessagesQuery = query(
        messagesRef,
        where("secondUserId", "==", userId)
      );
  
      // Combine the results of the two queries
      Promise.all([
        getDocs(firstUserMessagesQuery),
        getDocs(secondUserMessagesQuery),
      ]).then(([firstUserMessages, secondUserMessages]) => {
        const combinedMessages = [];
  
        firstUserMessages.forEach((doc) => {
          combinedMessages.push({ ...doc.data(), id: doc.id });
        });
  
        secondUserMessages.forEach((doc) => {
          combinedMessages.push({ ...doc.data(), id: doc.id });
        });
  
        // Update the state with the combined messages
        setMessengerList(combinedMessages);
      });
  
    } else {
      setMessengerList([]);
      return undefined;
    }
  }, [userId,refreshMessengerList]);

  const reloadMessengerList = () => {
    // Set the state to trigger the useEffect and reload the list
    setRefreshMessengerList((prev) => !prev);
  };
  useEffect(() => {
    const unsubscribe = startMessengerListListener();
    return () => unsubscribe && unsubscribe();
  }, [startMessengerListListener,refreshMessengerList]);

  const value = {
    messengerList,
    reloadMessengerList,
  };

  return (
    <MessageContext.Provider value={value} >
      {children}
    </MessageContext.Provider>
  );
};

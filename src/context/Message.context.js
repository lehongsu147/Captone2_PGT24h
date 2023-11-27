import React, { createContext, useEffect, useState, useContext, useCallback } from "react";
import { AuthContext } from "./auth.context";
import { collection, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [messengerList, setMessengerList] = useState([]);
  console.log("🚀 ~ file: Message.context.js:11 ~ MessageProvider ~ messengerList:", messengerList)
  const compareTimestamps = (a, b) => b.createdAt?.toDate().getTime() - a.createdAt?.toDate().getTime();
  const userId = Number(user?.id);
  console.log("🚀 ~ file: Message.context.js:14 ~ MessageProvider ~ userId:", userId)

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
  
      // Listen for changes and update state
      const unsubscribe = onSnapshot(
        messagesRef,
        (querySnapshot) => {
          const combinedMessages = [];
  
          querySnapshot.forEach((doc) => {
            combinedMessages.push({ ...doc.data(), id: doc.id });
          });
  
          // Update the state with the combined messages
          setMessengerList(combinedMessages);
        }
      );
  
      return () => unsubscribe && unsubscribe();
    } else {
      setMessengerList([]);
      return undefined;
    }
  }, [user, userId, setMessengerList]);

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

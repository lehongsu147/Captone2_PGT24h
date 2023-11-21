import React, { startTransition, useContext, useEffect, useState } from "react";
import classes from "./Chat.module.scss";
import { AutoComplete, Avatar, Col, Input, Row } from "antd";
import ChatBox from "../../components/ChatBox/ChatBox";
import { FaDotCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { MessageContext } from "../../context/Message.context";
import { serverTimestamp } from "firebase/firestore";

const Chat = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { messengerList } = useContext(MessageContext);
  const location = useLocation();
  const id = location.state?.chatId;
  const toUserName = location.state?.toUserName;
  const toUserAvatar = location.state?.toUserAvatar;
  const [messageId, setMessageId] = useState();

  const [chatList, setChatList] = useState();
  const [newChatInfo, setNewChatInfo] = useState();
  const [chatInfoExits, setChatInfoExist] = useState();
  const [isNewChat, setIsNewChat] = useState();

  const isUserInMesList = (mesList, id) => {
    return mesList.some(item =>
      parseInt(item.firstUserId) === parseInt(id) || parseInt(item.secondUserId) === parseInt(id)
    );
  };
  console.log('chat'.newChatInfo);
  useEffect(() => {
    if (id && toUserAvatar && toUserName) {
      const exitsChat = isUserInMesList(messengerList, id);
      if (!exitsChat) {
        const newChat = {
          chatId: `${user?.id}_${parseInt(id)}`,
          firstUserId: user?.id,
          secondUserId: parseInt(id),
          firstName: user?.userName,
          secondName: toUserName,
          firstAvatar: user?.avatar,
          secondAvatar: toUserAvatar,
          createdAt: serverTimestamp(),
          lastMessage: '',
          read: false,
        }
        setNewChatInfo(newChat);
        setIsNewChat(true);
      } else {
        setChatList(messengerList)
        setIsNewChat(false);
      }
    }
    else {
      setChatList(messengerList)
      setIsNewChat(false);
    }
  }, [id])

  useEffect(() => {
    const chatInfo = messengerList?.find(item => item?.chatId === messageId)
    setChatInfoExist(chatInfo)
  }, [messageId, messengerList])

  useEffect(() => {
    setChatList(messengerList)
  }, [messengerList])

  const handleSearch = (value) => {
    // console.log(value)
  }

  const handleClickMessageId = (value) => {
    startTransition(() => {
      setMessageId(value)
    })
  }

  return (
    <div className={classes.messenger}>
      <Row>
        <Col className={classes.sidebar} span={6}  >
          <Row>
            <span className={classes.label} >Chat</span>
          </Row>
          <Row>
            <AutoComplete
              style={{ width: '100%', margin: 10 }}
              onSearch={handleSearch}
              size="large"
            >
              <Input.Search size="large" placeholder="Tìm kiếm" enterButton />
            </AutoComplete>
          </Row>
          <div className={classes.mesageList}>
            {chatList?.map((message, index) => (
              <MessageItem
                key={index}
                index={index}
                userId={user?.id}
                message={message}
                messageChoseId={messageId}
                onClick={handleClickMessageId}
              />
            ))}
          </div>
        </Col>
        <Col span={18}>
          {isNewChat ?
            <ChatBox isNewChat userId={user?.id} chatInfo={newChatInfo ?? {}} id={messageId} />
            :
            <ChatBox userId={user?.id} chatInfo={chatInfoExits ?? {}} id={messageId} />
          }
        </Col>
      </Row>
    </div>
  );
};

export default Chat;


const MessageItem = ({ userId, index, message, messageChoseId, onClick }) => {
  const userName = userId === message?.firstUserId ? message?.secondName : message?.firstName;
  const userAvatar = userId === message?.firstUserId ? message?.secondAvatar : message?.firstAvatar;
  function handleClickMessage() {
    onClick(message?.chatId)
  }
  return (
    <>
      <Row className={` ${classes.boxMessage}  ${classes[messageChoseId === message?.id ? 'isAcitve' : '']}`} onClick={handleClickMessage}>
        <Col align='middle' span={5} style={{ heigth: '60px' }}>
          <div className={classes.avatar}>
            <Avatar size={46} icon={<img src={userAvatar ?? ''} alt="avatar mess" />} />
          </div>
        </Col>
        <Col span={19} style={{ maxHeight: '60px', padding: 5 }}>
          <Row>
            <Col span={22}>
              <Row >
                <span className={classes.textUserName}  > {userName}</span>
              </Row>
              <Row>
                <span className={classes.textLastMessage} > {message?.lastMessage}</span>
              </Row>
            </Col>
            {!message?.read &&
              <Col span={2} className={classes.readBox}>
                <FaDotCircle style={{ color: '#186ade' }} />
              </Col>
            }
          </Row>
        </Col >
      </Row >
    </>
  )
}

import React, { startTransition, useEffect, useState } from "react";
import classes from "./Chat.module.scss";
import { AutoComplete, Avatar, Col, Input, Row } from "antd";
import ChatBox from "../../components/ChatBox/ChatBox";
import { FaDotCircle } from "react-icons/fa";
import Temp from "../../utils/temp";
import { useParams } from "react-router-dom";

const Chat = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = useParams();
  const [messageId, setMessageId] = useState();

  const handleSearch = (value) => {
    // console.log(value)
  }

  useEffect(() => { 
    handleClickMessageId(id)
  }, [id])
  
  const handleClickMessageId = (value) => {
    startTransition(() => {
      setMessageId(value)
    })
  }
  return (
    <div className={classes.messenger}>
      <Row>
        <Col className={classes.sidebar} span={6}  >
          <Row  >
            <span className={classes.label} >Chat</span>
          </Row>
          <Row >
            <AutoComplete
              style={{ width: '100%', margin: 10 }}
              onSearch={handleSearch}
              size="large"
            >
              <Input.Search size="large" placeholder="Tìm kiếm" enterButton />
            </AutoComplete>
          </Row>
          <div className={classes.mesageList}>
            {Temp.messageList?.map((message, index) => (
              <MessageItem
                key={index}
                message={message}
                messageChoseId={messageId}
                onClick={handleClickMessageId}
              />
            ))}
          </div>

        </Col>

        <Col span={18}>
          <ChatBox id={messageId} />
        </Col>
      </Row>
    </div>
  );
};

export default Chat;


const MessageItem = ({ message, messageChoseId, onClick }) => {
  function handeClickMessage() {
    onClick(message?.id)
  }
  return (
    <>
      <Row className={` ${classes.boxMessage}  ${classes[messageChoseId === message?.id ? 'isAcitve' : '']}`} onClick={handeClickMessage}>
        <Col align='middle' span={5} style={{ heigth: '60px' }}>
          <div className={classes.avatar}>
            <Avatar size={46} icon={<img src={message?.avatar} alt="avatar mess" />} />
          </div>
        </Col>
        <Col span={19} style={{ maxHeight: '60px', padding: 5 }}>
          <Row>
            <Col span={22}>
              <Row >
                <span className={classes.textUserName}  > {message?.userName}</span>
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

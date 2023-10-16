import React, { startTransition, useState } from "react";
import classes from "./Chat.module.scss";
import { AutoComplete, Avatar, Col, Input, Row } from "antd";
import ChatBox from "../../components/ChatBox/ChatBox";
import { FaDotCircle } from "react-icons/fa";

const Chat = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [messageId, setMessageId] = useState();

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
            {MessageList && MessageList?.map((message, index) => (
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
      <Row className={` ${classes.boxMessage}  ${classes[messageChoseId == message?.id ? 'isAcitve' : '']}`} onClick={handeClickMessage}>
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

const MessageList = [
  {
    id: 1,
    avatar: 'https://playerduo.net/api/upload-service/images/a0b07166-1e65-4e77-a651-b2fef639aa86__68884ad0-61ed-11ee-bec4-f929e725acab__player_album.jpg',
    userName: 'Nguyễn Thị Yên Bình',
    lastMessage: 'Vâng anh',
    read: false,
  },
  {
    id: 2,
    avatar: 'https://playerduo.net/api/upload-service/images/bca8b642-764c-4ee6-a14a-823c2b3ec3dc__285409b0-f12a-11ed-a657-a54d6be1d46a__player_avatar.jpg',
    userName: 'Thư 🍀',
    lastMessage: 'Vâng anh',
    read: true,
  },
  {
    id: 3,
    avatar: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
    userName: 'Hạ Lạ',
    read: true,
    lastMessage: 'Vâng anh ahihihihihih ahihihihihi hihihi hihih ahihihihihi hihihi  ahihihihihi hihih  ahihihihihi hihih',
  },
  {
    id: 4,
    avatar: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
    userName: 'HimeChan',
    read: true,
    lastMessage: 'Vâng anh ahihihihihih ahihihihihi hihihi hihih ahihihihihi hihihi  ahihihihihi hihih  ahihihihihi hihih',
  },
  {
    id: 5,
    avatar: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
    userName: 'Phuong Lien',
    read: true,
    lastMessage: 'Vâng anh ahihihihihih ahihihihihi hihihi hihih ahihihihihi hihihi  ahihihihihi hihih  ahihihihihi hihih',
  },
  {
    id: 6,
    avatar: 'https://playerduo.net/api/upload-service/images/a0b07166-1e65-4e77-a651-b2fef639aa86__68884ad0-61ed-11ee-bec4-f929e725acab__player_album.jpg',
    userName: 'MÈO 3K 🍑',
    lastMessage: 'Vâng anh',
    read: false,
  },
  {
    id: 7,
    avatar: 'https://playerduo.net/api/upload-service/images/bca8b642-764c-4ee6-a14a-823c2b3ec3dc__285409b0-f12a-11ed-a657-a54d6be1d46a__player_avatar.jpg',
    userName: 'Windy',
    lastMessage: 'Vâng anh',
    read: true,
  },
  {
    id: 8,
    avatar: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
    userName: '$ℂ𝕚ℂ𝕚❤️',
    read: true,
    lastMessage: 'Vâng anh ahihihihihih ahihihihihi hihihi hihih ahihihihihi hihihi  ahihihihihi hihih  ahihihihihi hihih',
  },
  {
    id: 9,
    avatar: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
    userName: '𝓨𝓪𝓷 🐷',
    read: true,
    lastMessage: 'Vâng anh ahihihihihih ahihihihihi hihihi hihih ahihihihihi hihihi  ahihihihihi hihih  ahihihihihi hihih',
  },
  {
    id: 10,
    avatar: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
    userName: 'hihi',
    read: true,
    lastMessage: 'Vâng anh ahihihihihih ahihihihihi hihihi hihih ahihihihihi hihihi  ahihihihihi hihih  ahihihihihi hihih',
  },
  {
    id: 11,
    avatar: 'https://playerduo.net/api/upload-service/images/a0b07166-1e65-4e77-a651-b2fef639aa86__68884ad0-61ed-11ee-bec4-f929e725acab__player_album.jpg',
    userName: 'hihi',
    lastMessage: 'Vâng anh',
    read: false,
  },
  {
    id: 12,
    avatar: 'https://playerduo.net/api/upload-service/images/bca8b642-764c-4ee6-a14a-823c2b3ec3dc__285409b0-f12a-11ed-a657-a54d6be1d46a__player_avatar.jpg',
    userName: 'hihi',
    lastMessage: 'Vâng anh',
    read: true,
  },
  {
    id: 13,
    avatar: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
    userName: 'hihi',
    read: true,
    lastMessage: 'Vâng anh ahihihihihih ahihihihihi hihihi hihih ahihihihihi hihihi  ahihihihihi hihih  ahihihihihi hihih',
  },
  {
    id: 14,
    avatar: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
    userName: 'hihi',
    read: true,
    lastMessage: 'Vâng anh ahihihihihih ahihihihihi hihihi hihih ahihihihihi hihihi  ahihihihihi hihih  ahihihihihi hihih',
  },
  {
    id: 15,
    avatar: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
    userName: 'hihi',
    read: true,
    lastMessage: 'Vâng anh ahihihihihih ahihihihihi hihihi hihih ahihihihihi hihihi  ahihihihihi hihih  ahihihihihi hihih',
  },
  {
    id: 16,
    avatar: 'https://playerduo.net/api/upload-service/images/a0b07166-1e65-4e77-a651-b2fef639aa86__68884ad0-61ed-11ee-bec4-f929e725acab__player_album.jpg',
    userName: 'hihi',
    lastMessage: 'Vâng anh',
    read: false,
  },
  {
    id: 17,
    avatar: 'https://playerduo.net/api/upload-service/images/bca8b642-764c-4ee6-a14a-823c2b3ec3dc__285409b0-f12a-11ed-a657-a54d6be1d46a__player_avatar.jpg',
    userName: 'hihi',
    lastMessage: 'Vâng anh',
    read: true,
  },
  {
    id: 18,
    avatar: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
    userName: 'hihi',
    read: true,
    lastMessage: 'Vâng anh ahihihihihih ahihihihihi hihihi hihih ahihihihihi hihihi  ahihihihihi hihih  ahihihihihi hihih',
  },
]
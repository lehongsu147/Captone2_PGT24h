import { Row } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './ChatBox.module.scss';
import { Input } from 'antd';
import { Spin } from 'antd';
import Temp from '../../utils/temp';
const { Search } = Input;

const ChatBox = ({ id }) => {
    const [userInfo, setUserInfo] = useState();
    const [mesList, setMeslist] = useState([]);
    const [message, setMessage] = useState();
    const [sending, setSending] = useState();
    const [loading, setLoading] = useState(false);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        if (id === 1) {
            setUserInfo(Temp.UserPGT)
            setMeslist(Temp.dataMes2)
        }
        else if (id === 2) {
            setUserInfo(Temp.UserDemo)
            setMeslist(Temp.dataMes)
        }
    }, [id])
    function handleSendMessage() {
        // setSending(true);
        if (message) {
            const newMessage = {
                id: mesList.length + 1,
                userSend: false,
                content: message,
            };
            setMeslist([...mesList, newMessage]);
            setMessage("");
        }
    }

    return (
        <>
            {!loading ? (
                <>
                    <Row className={styles.header}>
                        <span className={styles.userName}>{userInfo?.userName}</span>
                    </Row>

                    <div className={styles.mainMessage} >
                        <div className={styles.messageBox}>
                            <div className={`${styles.welcomeMes}`}>
                                <div className={`${styles.textMes} ${styles.Kol}`}>
                                    <img src={userInfo?.avatar} alt='imageAlt' />
                                    <span>Chào mừng bạn đến với cuộc trò chuyện.</span>
                                </div>
                            </div>
                            {mesList?.map((mes) => (
                                <div key={mes?.id} className={`${styles.alignMessage} ${styles[mes?.userSend ? 'mesReciver' : '']} `}  >
                                    <div className={`${styles.messageItem} ${styles[mes?.userSend ? 'Kol' : '']} `} >
                                        <span>{mes?.content}</span>
                                    </div>
                                </div>
                            ))}
                            {typing &&
                                <div className={`${styles.alignMessage} ${styles.mesReciver}  `}  >
                                    <div className={styles['chat-bubble']}>
                                        <div className={styles['typing']}>
                                            <div className={styles['dot']}></div>
                                            <div className={styles['dot']}></div>
                                            <div className={styles['dot']}></div>
                                        </div>
                                    </div>
                                </div>}
                        </div>

                        <Row className={styles.sendBox}>
                            <Search onChange={(e) => setMessage(e.target.value)}
                                onSearch={() => handleSendMessage()} placeholder="Nhập tin nhắn"
                                enterButton="Gửi"
                                value={message}
                            // loading={sending}
                            />
                        </Row>
                    </div>

                </>
            ) : (
                <>
                    <Row className={styles.header}>
                        <span className={styles.userName}>Mesage</span>
                    </Row>
                    <div className={styles.loadingContainer}>
                        <Spin size='large' />
                    </div>
                </>

            )}
        </>
    );
};

export default ChatBox;
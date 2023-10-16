import { Row } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './ChatBox.module.scss';
import { Input } from 'antd';
import { Spin } from 'antd';
import Constants from '../../utils/constants';

const { Search } = Input;
const ChatBox = ({ id }) => {

    const [mesList, setMeslist] = useState();
    const [message, setMessage] = useState();
    const [sending, setSending] = useState();
    const [loading, setLoading] = useState(false);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        setMeslist(Constants.dataMes)
    }, [])
    function handleSendMessage() {
        console.log(message)
        setSending(true);
    }

    return (
        <>
            {!loading ? (
                <>
                    <Row className={styles.header}>
                        <span className={styles.userName}>{'Hihi'}</span>
                    </Row>

                    <div className={styles.mainMessage} >
                        <div className={styles.messageBox}>
                            <div className={`${styles.alignMessage} ${styles.mesReciver}  `}  >
                                <div className={`${styles.messageItem} ${styles.Kol}`} >
                                    <span>Message?.UserName</span>
                                </div>
                            </div>
                            <div className={styles.alignMessage} >
                                <div className={styles.messageItem}>
                                    <span>6h túi ni FC TVSV có trận đá bóng giao lưu với thầy Trọng pctsv, hi vọng các bạn tham gia cỗ vũ cho vui ạ :
                                    </span>
                                </div>
                            </div>

                            {mesList?.map((mes) => (
                                <div key={mes?.id} className={`${styles.alignMessage} ${styles[ mes?.userSend ? 'mesReciver' : '']} `}  >
                                    <div className={`${styles.messageItem} ${styles[ mes?.userSend ? 'Kol' : '']} `} >
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
                                loading={sending}
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
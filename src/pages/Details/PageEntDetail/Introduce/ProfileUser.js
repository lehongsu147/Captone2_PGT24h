import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CollapseContext } from '../../../../context/collapse.context';
import { AuthContext } from '../../../../context/auth.context';
import Feedback from '../../../../components/Feedback/Feedback';
import { BackTop, Button, Pagination, Tabs } from 'antd';
import IntroduceKOL from '../../PageKolDetail/IntroduceKOL/IntroduceKOL';
import styles from './Profile.module.scss'
import Avatar from '../../../../components/Avatar/Avatar';
import CardType from '../../../../components/catgegory/CardType';
import StarRating from '../../../../components/start-rating/StarRating';
import { EditFilled, EditOutlined } from '@ant-design/icons';
const GameList = [
    {
        id: 1,
        name: 'Hát',
        background: 'https://files.playerduo.net/production/game_backgrounds/715867c6-698f-411a-b4f9-1e9093130b60__90279220-37c9-11ed-838c-b120e70abb59__game_backgrounds.jpg',
    },
    {
        id: 2,
        name: 'Tâm Sự',
        background: 'https://files.playerduo.net/production/game_backgrounds/715867c6-698f-411a-b4f9-1e9093130b60__8b5d5fe0-37c9-11ed-838c-b120e70abb59__game_backgrounds.jpg',
    },
    {
        id: 3,
        name: 'Liên Minh Huyền Thoại',
        background: 'https://files.playerduo.net/production/game_backgrounds/715867c6-698f-411a-b4f9-1e9093130b60__c51b21f0-37c8-11ed-838c-b120e70abb59__game_backgrounds.jpg',
    },
    {
        id: 4,
        name: 'Proop And Seek',
        background: 'https://files.playerduo.net/production/game_backgrounds/715867c6-698f-411a-b4f9-1e9093130b60__90279220-37c9-11ed-838c-b120e70abb59__game_backgrounds.jpg',
    },
    {
        id: 5,
        name: 'ARK',
        background: 'https://files.playerduo.net/production/game_backgrounds/715867c6-698f-411a-b4f9-1e9093130b60__90279220-37c9-11ed-838c-b120e70abb59__game_backgrounds.jpg',
    },
    {
        id: 6,
        name: 'Among Us',
        background: 'https://files.playerduo.net/production/game_backgrounds/715867c6-698f-411a-b4f9-1e9093130b60__90279220-37c9-11ed-838c-b120e70abb59__game_backgrounds.jpg',
    },
    {
        id: 7,
        name: 'Business Tour',
        background: 'https://files.playerduo.net/production/game_backgrounds/715867c6-698f-411a-b4f9-1e9093130b60__90279220-37c9-11ed-838c-b120e70abb59__game_backgrounds.jpg',
    },
    {
        id: 8,
        name: 'GTA V',
        background: 'https://files.playerduo.net/production/game_backgrounds/715867c6-698f-411a-b4f9-1e9093130b60__820ede00-37c9-11ed-838c-b120e70abb59__game_backgrounds.jpg',
    },
    {
        id: 9,
        name: 'Farm Togethe',
        background: 'https://files.playerduo.net/production/game_backgrounds/715867c6-698f-411a-b4f9-1e9093130b60__90279220-37c9-11ed-838c-b120e70abb59__game_backgrounds.jpg',
    },
]

const FeedBack = [
    {
        avatar: null,
        userName: 'Pin',
        star: 2,
        timeRental: '60',
        date: '08:18:48 18/6/2023',
        comment: 'Với anh, hạnh phúc lớn nhất là khi em bên người khác .....Nhưng gọi thầm tên anh',
    },
    {
        avatar: 'https://files.playerduo.net/production/images/avatar27.png',
        userName: 'Dề Mi',
        star: 3,
        timeRental: '61',
        date: '04:37:32 6/6/2023',
        comment: 'thời buổi hiện đại dùng tới 720 rồi',
    },
    {
        avatar: null,
        userName: 'Khoa',
        star: 3,
        timeRental: '62',
        date: '08:18:48 18/6/2023',
        comment: 'Giọng dễ thương, chơi game hay. Đặc biệt hát rất hay nha. Recommend bạn này nha mọi người.'
    },
    {
        avatar: 'https://files.playerduo.net/production/images/b754fb2e-f91c-434f-8c36-89be33f224df__b3cd0380-66c5-11eb-b791-7d65823da7b3__page_avatar.jpg',
        userName: 'Pin',
        star: 3,
        timeRental: '30',
        date: '08:18:48 18/6/2023',
        comment: 'Với anh, hạnh phúc lớn nhất là khi em bên người khác .....Nhưng gọi thầm tên anh',
    },
    {
        avatar: 'https://files.playerduo.net/production/images/b754fb2e-f91c-434f-8c36-89be33f224df__b3cd0380-66c5-11eb-b791-7d65823da7b3__page_avatar.jpg',
        userName: 'Pin',
        star: 3,
        timeRental: '30',
        date: '08:18:48 18/6/2023',
        comment: 'Với anh, hạnh phúc lớn nhất là khi em bên người khác .....Nhưng gọi thầm tên anh',
    },
    {
        avatar: 'https://files.playerduo.net/production/images/b754fb2e-f91c-434f-8c36-89be33f224df__b3cd0380-66c5-11eb-b791-7d65823da7b3__page_avatar.jpg',
        userName: 'Pin',
        star: 3,
        timeRental: '30',
        date: '08:18:48 18/6/2023',
        comment: 'Với anh, hạnh phúc lớn nhất là khi em bên người khác .....Nhưng gọi thầm tên anh',
    },
    {
        avatar: 'https://files.playerduo.net/production/images/b754fb2e-f91c-434f-8c36-89be33f224df__b3cd0380-66c5-11eb-b791-7d65823da7b3__page_avatar.jpg',
        userName: 'Pin',
        star: 3,
        timeRental: '30',
        date: '08:18:48 18/6/2023',
        comment: 'Với anh, hạnh phúc lớn nhất là khi em bên người khác .....Nhưng gọi thầm tên anh',
    },
    {
        avatar: 'https://files.playerduo.net/production/images/b754fb2e-f91c-434f-8c36-89be33f224df__b3cd0380-66c5-11eb-b791-7d65823da7b3__page_avatar.jpg',
        userName: 'Pin',
        star: 3,
        timeRental: '30',
        date: '08:18:48 18/6/2023',
        comment: 'Với anh, hạnh phúc lớn nhất là khi em bên người khác .....Nhưng gọi thầm tên anh',
    },
    {
        avatar: 'https://files.playerduo.net/production/images/b754fb2e-f91c-434f-8c36-89be33f224df__b3cd0380-66c5-11eb-b791-7d65823da7b3__page_avatar.jpg',
        userName: 'Pin',
        star: 3,
        timeRental: '30',
        date: '08:18:48 18/6/2023',
        comment: 'Với anh, hạnh phúc lớn nhất là khi em bên người khác .....Nhưng gọi thầm tên anh',
    },
]

const ProfileUser = ({ type }) => {
    // const { user, setUser } = useContext(AuthContext);
    const { id } = useParams();
    const [kolInfo, setKolInfo] = useState();
    const [items, setItems] = useState();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState("");
    const { isCollapse } = useContext(CollapseContext);

    useEffect(() => {
        setKolInfo(
            {
                kol: {
                    firstName: 'Gấmmm',
                    type: 'KOL',
                    avatar: "https://playerduo.net/api/upload-service/images/dcfc2d0b-f15a-4348-b3f8-28400a0e0ff9__85153e20-341a-11ee-a657-a54d6be1d46a__player_album.jpg",
                    photoList: [
                        {
                            avatarLink: "https://playerduo.net/api/upload-service/images/dcfc2d0b-f15a-4348-b3f8-28400a0e0ff9__c06e9ef0-6415-11ee-bec4-f929e725acab__player_album.jpg",
                        },
                        {
                            avatarLink: "https://playerduo.net/api/upload-service/images/dcfc2d0b-f15a-4348-b3f8-28400a0e0ff9__6c1c9630-611e-11ee-bec4-f929e725acab__player_album.jpg"
                        },
                        {
                            avatarLink: "https://playerduo.net/api/upload-service/images/dcfc2d0b-f15a-4348-b3f8-28400a0e0ff9__c80a7d90-a490-11ed-a19f-23a3b10d190e__player_album.jpg",
                        },
                        {
                            avatarLink: "https://playerduo.net/api/upload-service/images/dcfc2d0b-f15a-4348-b3f8-28400a0e0ff9__aede2c90-68c7-11ed-838c-b120e70abb59__player_album.jpg"
                        },
                        {
                            avatarLink: "https://playerduo.net/api/upload-service/images/dcfc2d0b-f15a-4348-b3f8-28400a0e0ff9__26cf82a0-681c-11ed-838c-b120e70abb59__player_album.jpg"
                        },
                        {
                            avatarLink: "https://playerduo.net/api/upload-service/images/dcfc2d0b-f15a-4348-b3f8-28400a0e0ff9__cce51140-5dc8-11ed-838c-b120e70abb59__player_album.jpg"
                        },
                        {
                            avatarLink: "https://playerduo.net/api/upload-service/images/dcfc2d0b-f15a-4348-b3f8-28400a0e0ff9__f10966a0-50c4-11ec-911d-399f024e5d9b__player_album.jpg"
                        },
                        {
                            avatarLink: "https://playerduo.net/api/upload-service/images/dcfc2d0b-f15a-4348-b3f8-28400a0e0ff9__62902920-3b9a-11ec-8946-d727b5c174c4__player_album.jpg"
                        },
                    ],
                    lastName: 'Kami',
                    price: '99000',
                    id: 'gamrach',
                    postPrice: 'không chảnh',
                    videoPrice: 'https://youtu.be/WAg0jKqgmuI',
                    introduction: `Hello mình là Mẫn
              🌸 Giọng miền nam, chơi mic nhà không ồn
              🌸 Lần đầu gặp gỡ rất vui được làm quen!
              🌸 Chơi game từ 11h đêm đổ đi thì thuê giúp tớ 65k/giờ (thuê 2h giúp tớ nhé). Chơi đêm hơi mất sức!
              🌸 Rent hoặc donate, thanh toán trước giúp em. Đã từng bị user lạ có, quen biết có thanh toán sau không trả, mà tính tớ ngại mất lòng nên mọi người thông cảm tự làm trước giúp tớ. Tớ sẽ tính từ lúc game chạy nên mọi người yên tâm không có nhận duo liền mà không hỏi đâu ạ!
              🌸 KHÔNG NHẬN CHƠI NỢ DÙ LÀ KHÁCH QUEN.
              🌸 Mình có thể chơi:
              🍄 LMHT: mình có thể đi lane AD, SP, MID (gà nhưng đủ tự lo cho mình), riêng lane JUNG and TOP thì xin ôm trụ chờ gank. Nhận từ rank đất đoàn tới bạch kim đoàn <3
              🍄 PUBG MOBILE: đi làm y tá, nhặt full đồ trong ba lô chơi trên điện thoại ạ
              🍄 TFT: Xin top 8 của user. Chơi bản VN, NA
              🍄 Prop and seek: gà mới tập chơi
              🍄 Tốc chiến: đánh normal thôi ạ
              🍄 Liên quân: đánh normal luôn ạ
              🍄 Valorant: Sau khi mày mò tìm hiểu, em nhận rank đồng bạc :v
              🍄 PUBG PC: biết nhặt đồ, biết bắn đồng đội, biết năn nỉ địch bắn đồng đội trừ mình ra và biết "báo" đồng đội! ĐIỀU QUAN TRỌNG NHẤT KHÔNG BIẾT: KHÔNG BIẾT BẮN ĐỊCH!`
                },
                bookings: [],
                campaigns: [],
            }
        );
        // getKol(id).then((res) => {
        //   // setKol(res);

        //   checkStatus(res.bookings, user, res.kol);
        //   console.log(res);
        // });
    }, []);

    const renderFeedBack = () => {
        const onShowSizeChange = (current, pageSize) => {
            console.log(current, pageSize);
        };
        const handleChange = (e) => {
            console.log(e)
        }
        return (
            <>
                {FeedBack?.map((item, index) => (
                    <Feedback
                        key={index}
                        avatar={item?.avatar}
                        userName={item?.userName}
                        comment={item?.comment}
                        star={item?.star}
                        date={item?.date}
                        timeRental={item?.timeRental}
                        time={item?.time}
                    />
                ))}

                <div className={styles.boxPagination} >
                    <Pagination
                        showSizeChanger
                        // onShowSizeChange={onShowSizeChange}
                        defaultCurrent={10}
                        onChange={(e) => handleChange(e)}
                        total={100}
                    // responsive
                    />
                </div>
            </>
        )
    };
    const renderCategopryGame = () => {
        return (
            <>
                {GameList?.map((item, index) => (
                    <CardType
                        key={index}
                        id={item.id}
                        name={item.name}
                        background={item.background}
                    />
                ))}
            </>
        )
    };




    useEffect(() => {
        document.title = `PGT24h | ${kolInfo?.kol?.firstName} ${kolInfo?.kol?.lastName}`;

        return () => {
            document.title = "PGT24h";
        };
    }, [kolInfo?.kol?.id]);

    useEffect(() => {
        console.log(kolInfo)
        if (type === 'KOL') {
            setItems(
                [
                    {
                        key: '1',
                        label: 'Giới thiệu',
                        children: <IntroduceKOL canEdit introduction={kolInfo?.kol?.introduction} />,
                    }, {
                        key: '2',
                        label: 'Đánh giá',
                        children: renderFeedBack(),
                    }

                ])
        } else {
            setItems(
                [
                    {
                        key: '1',
                        label: 'Giới thiệu',
                        children: <IntroduceKOL introduction={kolInfo?.kol?.introduction} />,
                    }
                ])
        }

    }, [kolInfo]);



    const onCancelOpenHandler = () => {
        setOpen(false);
    };

    const onChange = (key) => {
        console.log(key);
    };
    return (
        <>
            <main className={styles["main-details"]} >
                <div
                    className={`${styles["container"]} ${styles[isCollapse ? "isCollapse" : '']}  `}
                >

                    <div className={styles.profile}>
                        <div className={styles.stickyProfile}>
                            <div className={styles.profileContainer}>
                                <Button >
                                    <span>
                                        Chỉnh sửa ảnh
                                    </span>
                                    <EditFilled width={30} />
                                </Button>
                                <Avatar
                                    avatar={kolInfo?.kol?.avatar ?? ''}
                                    photoList={kolInfo?.kol?.photoList ?? ''}
                                />
                            </div>

                            <div className={styles.statusInfo}>
                                <div className={` ${styles.boxStatus} ${styles.Pause}   `} >
                                    <div className={` ${styles.textStatus} ${styles.Pause}  `} >
                                        Đang làm việc
                                    </div>
                                </div>
                                <span className={styles.dateFrom}>Ngay tham gia: 22/06/2004</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.profileInfo}>
                            <div className={styles.title}>
                                <span className={` ${styles.userName}  `} >
                                    {kolInfo?.kol?.firstName} {kolInfo?.kol?.lastName}
                                </span>

                                {type == 'KOL' &&
                                    <buton className={` ${styles.buttonFollow}  `} >Theo dõi </buton>
                                }
                            </div>

                            <div className={styles.properties}>
                                <div className={styles.boxPropertie}>
                                    <span className={styles.namePropertie}>
                                        SỐ NGƯỜI THEO DÕI
                                    </span>
                                    <span className={styles.number}>
                                        628 người
                                    </span>
                                </div>
                                {type === 'KOL' &&
                                    <>
                                        <div className={styles.boxPropertie}>
                                            <span className={styles.namePropertie}>
                                                ĐÃ ĐƯỢC THUÊ
                                            </span>
                                            <span className={styles.number}>
                                                628 người
                                            </span>
                                        </div>

                                        <div className={styles.boxPropertie}>
                                            <span className={styles.namePropertie}>
                                                TỶ LỆ HOÀN THÀNH
                                            </span>
                                            <span className={styles.number}>
                                                87.85 %
                                            </span>
                                        </div>
                                    </>}
                            </div>

                        </div>

                        {type === 'KOL' && <div className={styles.category}>
                            {renderCategopryGame()}
                        </div>}

                        <div className={styles.infomation}>
                            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                        </div>

                    </div>

                    {type === 'KOL' &&
                        <div className={styles.contact}>
                            <div className={styles.stickyBox}>
                                <div className={styles.boxContainer}>
                                    <p>99,000 đ/h</p>
                                    <div className={styles['rateting-style']}>
                                        <StarRating starCount={4} />
                                        <span> 67 Đánh giá</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    }
                </div>
                <BackTop />
            </main >
        </>
    );
};

export default ProfileUser;
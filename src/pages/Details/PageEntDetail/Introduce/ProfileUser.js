import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CollapseContext } from '../../../../context/collapse.context';
import { AuthContext } from '../../../../context/auth.context';
import Feedback from '../../../../components/Feedback/Feedback';
import { BackTop, Button, Input, Pagination, Tabs, Upload, message } from 'antd';
import IntroduceKOL from '../../PageKolDetail/IntroduceKOL/IntroduceKOL';
import styles from './Profile.module.scss'
import Avatar from '../../../../components/Avatar/Avatar';
import CardType from '../../../../components/catgegory/CardType';
import StarRating from '../../../../components/start-rating/StarRating';
import { EditFilled, EditOutlined, UploadOutlined } from '@ant-design/icons';
import Temp from '../../../../utils/temp';
import useWindowSize from '../../../../hook/use-window-size';
import { convertStringToNumber } from '../../../../utils/Utils';

const ProfileUser = ({ type }) => {
    // const { user, setUser } = useContext(AuthContext);
    const { id } = useParams();
    const [userInfo, setUserInfo] = useState();
    const [items, setItems] = useState();
    const [editPrice, setEditPrice] = useState();
    const [newPrice, setNewPrice] = useState();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState("");
    const { isCollapse } = useContext(CollapseContext);

    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem("user")));
    }, []);

    useEffect(() => {
        setNewPrice(userInfo?.price)
    }, [userInfo?.price]);
    const renderFeedBack = () => {
        const onShowSizeChange = (current, pageSize) => {
            console.log(current, pageSize);
        };
        const handleChange = (e) => {
            console.log(e)
        }
        return (
            <>
                {Temp.FeedBack?.map((item, index) => (
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
                {Temp.GameList?.map((item, index) => (
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
        document.title = `PGT24h | ${userInfo?.firstName} ${userInfo?.lastName}`;
        return () => {
            document.title = "PGT24h";
        };
    }, [userInfo?.id]);

    useEffect(() => {
        console.log(userInfo)
        if (userInfo?.role === 2) {
            setItems(
                [
                    {
                        key: '1',
                        label: 'Giới thiệu',
                        children: <IntroduceKOL canEdit introduction={userInfo?.introduction} />,
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
                        children: <IntroduceKOL canEdit introduction={userInfo?.introduction} />,
                    }
                ])
        }
    }, [userInfo]);


    const onCancelOpenHandler = () => {
        setOpen(false);
    };

    const onChange = (key) => {
        console.log(key);
    };
    const handleChagePrice = () => {
        setEditPrice(!editPrice);
    };

    const props = {
        name: 'file',
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const { width, height } = useWindowSize();
    return (
        <>
            <main className={styles["main-details"]} >
                <div
                    style={{ minWidth: (width - 260) }}
                    className={`${styles["container"]} ${styles[isCollapse ? "isCollapse" : '']}  `}
                >
                    <div className={styles.profile}>
                        <div className={styles.stickyProfile}>
                            <div className={styles.profileContainer}>
                                <div >
                                    <Upload {...props}>
                                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                    </Upload>
                                </div>
                                <Avatar
                                    avatar={userInfo?.avatar ?? ''}
                                    photoList={userInfo?.photoList ?? ''}
                                />
                            </div>

                            <div className={styles.statusInfo}>
                                <div className={` ${styles.boxStatus} ${userInfo?.status === 1 ? '' : styles.Pause}  `} >
                                    <div className={`${styles.textStatus} ${userInfo?.status === 1 ? '' : styles.Pause}`}>
                                        {userInfo?.status === 1 ? 'Đang làm việc' : 'Đang tạm nghỉ'}
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
                                    {userInfo?.firstName} {userInfo?.lastName}
                                </span>

                            </div>

                            <div className={styles.properties}>
                                <div className={styles.boxPropertie}>
                                    <span className={styles.namePropertie}>
                                        SỐ NGƯỜI THEO DÕI
                                    </span>
                                    <span className={styles.number}>
                                        {userInfo?.follower ?? 0} người
                                    </span>
                                </div>
                                {userInfo?.role === 2 &&
                                    <>
                                        <div className={styles.boxPropertie}>
                                            <span className={styles.namePropertie}>
                                                ĐÃ ĐƯỢC THUÊ
                                            </span>
                                            <span className={styles.number}>
                                                {userInfo?.countRental} lượt
                                            </span>
                                        </div>

                                        <div className={styles.boxPropertie}>
                                            <span className={styles.namePropertie}>
                                                TỶ LỆ HOÀN THÀNH
                                            </span>
                                            <span className={styles.number}>
                                                {userInfo?.rate} %
                                            </span>
                                        </div>
                                    </>}
                            </div>

                        </div>

                        {userInfo?.role === 2 && <div className={styles.category}>
                            {renderCategopryGame()}
                        </div>}

                        <div className={styles.infomation}>
                            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                        </div>

                    </div>

                    {userInfo?.role === 2 &&
                        <div className={styles.contact}>
                            <div className={styles.stickyBox}>
                                <div className={styles.boxContainer}>
                                    <div className={styles.edit}>
                                        {editPrice ?
                                            <div>
                                                <Input placeholder={userInfo?.price} onChange={(e) => setNewPrice(e.target.value)} />
                                                <div className={styles.editbtn}>
                                                    <Button>Hủy</Button>
                                                    <Button onClick={handleChagePrice}>Lưu</Button>
                                                </div>
                                            </div>
                                            :
                                            <>
                                                <p>{ convertStringToNumber(newPrice)  ?? ''}/h</p>
                                                <EditFilled width={50} onClick={handleChagePrice} />
                                            </>

                                        }

                                    </div>
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
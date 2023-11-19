import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CollapseContext } from '../../../../context/collapse.context';
import { AuthContext } from '../../../../context/auth.context';
import Feedback from '../../../../components/Feedback/Feedback';
import { BackTop, Button, Input, InputNumber, Pagination, Tabs, Upload, message } from 'antd';
import IntroduceKOL from '../../PageKolDetail/IntroduceKOL/IntroduceKOL';
import styles from './Profile.module.scss'
import Avatar from '../../../../components/Avatar/Avatar';
import CardType from '../../../../components/catgegory/CardType';
import StarRating from '../../../../components/start-rating/StarRating';
import { EditFilled, UploadOutlined } from '@ant-design/icons';
import Temp from '../../../../utils/temp';
import useWindowSize from '../../../../hook/use-window-size';
import { convertStringToNumber } from '../../../../utils/Utils';
import PgtFactories from '../../../../services/PgtFatories';
import { toast } from 'react-toastify';
import AccountFactories from '../../../../services/AccountFactories';

const ProfileUser = ({ type }) => {
    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState();

    const [items, setItems] = useState();
    const [editPrice, setEditPrice] = useState();
    const [pricePgt, setPricePgt] = useState();
    const { isCollapse } = useContext(CollapseContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await PgtFactories.getPGTDetail(user?.id);
                setUserInfo(response[0]);
            } catch (error) {
                toast.error('Hệ thống lỗi, vui lòng thử lại sau')
                // Handle errors here
            }
        };
        fetchData();
        document.title = `Thồng tin cá nhân`;
    }, []);

    useEffect(() => {
        setPricePgt(userInfo?.price)
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
        document.title = `PGT24h | ${userInfo?.username}`;
        return () => {
            document.title = "PGT24h";
        };
    }, [userInfo?.id]);

    useEffect(() => {
        if (user?.role_id === 2) {
            setItems(
                [
                    {
                        key: '1',
                        label: 'Giới thiệu',
                        children: <IntroduceKOL id={user?.id} canEdit introduction={userInfo?.introduction} />,
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
                        children: <IntroduceKOL id={user?.id} canEdit introduction={userInfo?.introduction} />,
                    }
                ])
        }
    }, [userInfo]);

    const onChange = (key) => {
        console.log(key);
    };

    const fetchDataUpdate = async (data) => {
        try {
            const response = await AccountFactories.requestUpdate(user?.id, data);
            if (response?.status === 200) {
                toast.success('Cập nhật thông tin thành công')
                setPricePgt(response?.user?.price);
            }
        } catch (error) {
            console.log(error);
            toast.error('Hệ thống lỗi.')
        }
    };

    const onSubmitChangePrice = () => {
        const data = { price: pricePgt, }
        fetchDataUpdate(data)
        setEditPrice(!editPrice);
    };
    const handleChagePrice = () => {
        setEditPrice(pricePgt);
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
                                    avatar={userInfo?.image ?? ''}
                                    photoList={userInfo?.listImage ?? ''}
                                />
                            </div>

                            <div className={styles.statusInfo}>
                                <div className={` ${styles.boxStatus} ${user?.status === 1 ? '' : styles.Pause}  `} >
                                    <div className={`${styles.textStatus} ${user?.status === 1 ? '' : styles.Pause}`}>
                                        {user?.status === 1 ? 'Đang làm việc' : 'Đang tạm nghỉ'}
                                    </div>
                                </div>
                                {/* <span className={styles.dateFrom}>Ngay tham gia: 22/06/2023</span> */}
                            </div>
                        </div>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.profileInfo}>
                            <div className={styles.title}>
                                <span className={` ${styles.userName}  `} >
                                    {userInfo?.username}
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
                                {user?.role_id === 2 &&
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

                    {user?.role_id === 2 &&
                        <div className={styles.contact}>
                            <div className={styles.stickyBox}>
                                <div className={styles.boxContainer}>
                                    <div className={styles.edit}>
                                        {editPrice ?
                                            <div>
                                                <InputNumber
                                                    addonAfter="VND"
                                                    style={{ width: '100%' }}
                                                    // placeholder={pricePgt}
                                                    value={pricePgt}
                                                    onChange={(e) => setPricePgt(e)} 
                                                    formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                                />
                                                <div className={styles.editbtn}>
                                                    <Button onClick={handleChagePrice} >Hủy</Button>
                                                    <Button onClick={onSubmitChangePrice}>Lưu</Button>
                                                </div>
                                            </div>
                                            :
                                            <>
                                                <p>{convertStringToNumber(pricePgt) ?? ''}/h</p>
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
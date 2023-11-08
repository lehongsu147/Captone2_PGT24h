import React, { useEffect, useState } from 'react';
import styles from './Payment.module.scss'
import { Button, Input, Row, Space, Table, message } from 'antd';
import { toast } from 'react-toastify';
import { DownloadOutlined, EyeInvisibleOutlined, EyeTwoTone, MoneyCollectTwoTone, WalletTwoTone } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import Temp from '../../../../utils/temp';
const PaymentWallett = () => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [passwordVisible, setPasswordVisible] = React.useState(true);


    const validateFormData = (formData) => {
        let res = true;
        let errMsg = "";
        if (!formData.pass) {
            errMsg = "Vui lòng nhập tên của bạn!";
        } else if (!formData.confirmpass) {
            errMsg = "Vui lòng nhập họ của bạn!";
        } else if (!formData.newPass) {
            errMsg = "Vui lòng nhập địa chỉ cụ thể!";
        }
        if (errMsg) {
            messageApi.open({
                type: 'warning',
                content: errMsg,
            });
            res = false;
        }
        return res;
    };

    function onUpdate(event) {
        if (!validateFormData(profile)) return;
        setLoading(true);
        // updateEntProfile(profile).then(
        //     (res) => {
        //         console.log(res);
        //     }
        //     // messageApi.open({
        //     //     type: 'success',
        //     //     content: "Cập nhật thành công!",
        //     // })
        // )
        toast.success('🦄 Lưu dữ liệu thành công!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const columns = [
        {
            title: "Mã giao dịch",
            dataIndex: "code",
            width: 100,
            render: (text) => (
                <div className="text-data">
                    {text}
                </div>
            ),
        },
        {
            title: "Ngày giao dịch",
            dataIndex: "date",
            key: "date",
            width: 140,
            render: (text) => <div className="text-data">{text}</div>,
        },
        {
            title: "Nội dung",
            dataIndex: "content",
            key: "content",
            width: 140,
            render: (text,data) => <div className="text-data">{text}</div>,
        },
        {
            title: "Số tiền",
            dataIndex: "money",
            key: "money",
            align: 'right',
            width: 140,
            render: (text,data) => <div className="text-money" style={{ color: data?.send ? 'red' : 'rgb(102, 166, 240)'}}>{ data?.send ? '-' : '+' } {text} </div>,
        },
    ];
    const [historyWallet, setHistoryWallet] = useState([]);

    useEffect(() => {
        // const getData = async () => {
        //     setHistoryWallet([]);
        // };
        // getData();
    }, []);

    return (
        <main className={'booking-container'} >
            <div className={styles.formInfo}>
                <Title level={1} style={{color: 'red'}}> Ví DuoCoin</Title>
                <Space direction="horizontal" className={styles.spaceContent}  >
                    <Space direction="vertical" >
                        <span className={styles.textCoin}                            >
                            Số dư hiện tại
                        </span>
                        <span className={styles.textCoinValue}                            >
                            1.000.000 VND
                        </span>
                    </Space>
                    <Space direction="vertical">
                        <Button style={{ width: 170 }} type="primary" icon={<WalletTwoTone width={70} />} size={'large'} >
                            <span>
                                Nạp tiền
                            </span>
                        </Button>
                        <Button style={{ width: 170 }} type="primary" icon={<MoneyCollectTwoTone width={30} />} size={'large'} >
                            <span>
                                Rút tiền
                            </span>
                        </Button>
                    </Space>
                </Space>
                <div className="booking-table">
                    <Table
                        columns={columns}
                        dataSource={Temp.walletHistory} />
                </div>
            </div>
        </main >
    );
};

export default PaymentWallett;
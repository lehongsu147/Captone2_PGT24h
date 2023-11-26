import React, { useContext, useEffect, useState } from 'react';
import styles from './Payment.module.scss'
import { Button, Input, Row, Space, Table, message } from 'antd';
import { toast } from 'react-toastify';
import Title from 'antd/es/typography/Title';
import PaymentFactories from '../../../../services/PaymentFactories';
import { AuthContext } from '../../../../context/auth.context';
import { ToastNotiError, convertStringToNumber, getDate } from '../../../../utils/Utils';
import { MoneyCollectTwoTone, WalletTwoTone } from '@ant-design/icons';
const PaymentWallett = () => {
    const columns = [
        {
            title: "Mã giao dịch",
            dataIndex: "txn_ref",
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
            render: (text) => <div className="text-data">{getDate(text, 2)}</div>,
        },
        {
            title: "Nội dung",
            dataIndex: "description",
            key: "description",
            width: 140,
            render: (text, data) => <div className="text-data">{text}</div>,
        },
        {
            title: "Số tiền",
            dataIndex: "amount",
            key: "amount",
            align: 'right',
            width: 140,
            render: (text, data) => <div className="text-money" >{convertStringToNumber(text)} </div>,
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            align: 'right',
            width: 140,
            render: (text, data) => <div className="text-money" style={{ color: data?.status === 1 ? 'red' : 'rgb(102, 166, 240)' }}> {data?.status === 2 ? 'Thành công' : 'Thất bại'} </div>,
        },
    ];
    const [historyWallet, setHistoryWallet] = useState([]);
    const { user } = useContext(AuthContext);

    async function fetchDate(id) {
        try {
            const resp = await PaymentFactories.getPaymentListForUser(user?.id);
            if (resp?.status === 200) {
                setHistoryWallet(resp.data);
            }
        } catch (error) {
            ToastNotiError(error);
        }
    }
    useEffect(() => {
        fetchDate(user?.id);
    }, [user?.id]);

    return (
        <main className={'booking-container'} >
            <div className={styles.formInfo}>
                <Title level={1}>Ví & Lịch sử thanh toán</Title>
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
                        dataSource={historyWallet} />
                </div>
            </div>
        </main >
    );
};

export default PaymentWallett;
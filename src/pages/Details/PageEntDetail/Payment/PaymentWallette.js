// import React, { useEffect, useState } from 'react';
// import styles from './Payment.module.scss'
// import { Button, Input, Row, Space, Table, message } from 'antd';
// import { toast } from 'react-toastify';
// import { MoneyCollectTwoTone, WalletTwoTone } from '@ant-design/icons';
// import Title from 'antd/es/typography/Title';
// const PaymentWallett = () => {
//     const [profile, setProfile] = useState({});
//     const [loading, setLoading] = useState(false);
//     const [messageApi, contextHolder] = message.useMessage();
//     const [passwordVisible, setPasswordVisible] = React.useState(true);

//     const validateFormData = (formData) => {
//         let res = true;
//         let errMsg = "";
//         if (!formData.pass) {
//             errMsg = "Vui lòng nhập tên của bạn!";
//         } else if (!formData.confirmpass) {
//             errMsg = "Vui lòng nhập họ của bạn!";
//         } else if (!formData.newPass) {
//             errMsg = "Vui lòng nhập địa chỉ cụ thể!";
//         }
//         if (errMsg) {
//             messageApi.open({
//                 type: 'warning',
//                 content: errMsg,
//             });
//             res = false;
//         }
//         return res;
//     };

//     function onUpdate(event) {
//         if (!validateFormData(profile)) return;
//         setLoading(true);
     
//         toast.success('🦄 Lưu dữ liệu thành công!', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//         });
//     }

//     const columns = [
//         {
//             title: "Mã giao dịch",
//             dataIndex: "code",
//             width: 100,
//             render: (text) => (
//                 <div className="text-data">
//                     {text}
//                 </div>
//             ),
//         },
//         {
//             title: "Người gửi",
//             width: 150,
//             dataIndex: "username",
//             render: (text) => (
//                 <div className="text-data">
//                     {text}
//                 </div>
//             ),
//         },
//         {
//             title: "Người nhận",
//             dataIndex: "tenKOL",
//             width: 140,
//             align: 'left',
//             render: (text) => <div className="text-data">{text}</div>,
//         },
//         {
//             title: "Ngày giao dịch",
//             dataIndex: "createAt",
//             key: "createAt",
//             width: 140,
//             render: (text) => <div className="text-data">{text}</div>,
//         },
//         {
//             title: "Thời Gian",
//             dataIndex: "time",
//             width: 200,
//             render: (text) => <div className="text-data">{text}</div>,
//         },
//         {
//             title: "Số tiền",
//             dataIndex: "sotien",
//             key: "sotien",
//             width: 140,
//             render: (text) => <div className="text-data">{text}</div>,
//         },
//     ];
//     const [historyWallet, setHistoryWallet] = useState([]);

//     useEffect(() => {
//         const getData = async () => {
//             setHistoryWallet([]);
//         };
//         getData();
//     }, []);

//     return (
//         <main className={styles["main-details"]} >
//             <div
//                 className={`${styles["container"]} `}
//             >
//                 <div className={styles.formInfo}>
//                     <Title level={1}>Ví DuoCoin</Title>
//                     <Space direction="horizontal" className={styles.spaceContent}  >
//                         <Space direction="vertical" >
//                             <span className={styles.textCoin}                            >
//                                 Số dư hiện tại
//                             </span>
//                             <span className={styles.textCoinValue}                            >
//                                 1.000.000 VND
//                             </span>
//                         </Space>
//                         <Space direction="vertical">
//                             <Button style={{ width: 170 }} type="primary" icon={<WalletTwoTone width={70} />} size={'large'} >
//                                 <span>
//                                     Nạp tiền
//                                 </span>
//                             </Button>
//                             <Button style={{ width: 170 }} type="primary" icon={<MoneyCollectTwoTone width={30} />} size={'large'} >
//                                 <span>
//                                     Rút tiền
//                                 </span>
//                             </Button>
//                         </Space>
//                     </Space>
//                     <div className="booking-table">
//                         <Table
//                             columns={columns}
//                             dataSource={historyWallet} />
//                     </div>
//                 </div>
//             </div>
//         </main >
//     );
// };

// export default PaymentWallett;
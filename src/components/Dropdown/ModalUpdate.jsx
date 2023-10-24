import React, { useEffect, useState } from 'react'
import { Button, Modal, Select, Cascader, Row, Col, message, Image } from "antd";

import classes from './Dropdown.module.scss'
import { updateEntProfile } from '../../services/EnterpriseService';
import { useForm } from 'react-hook-form';
import Constants from '../../utils/constants';
import { toast } from 'react-toastify';

const ModalUpdate = ({ openUpdate, onCloseUpdateModalHandler, data, type = 'user' }) => {
    const [messageApi, contextHolder] = message.useMessage();

    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        if (data?.id) {
            setProfile(data)
        }
    }, [data?.id])

    const optionCategory = Constants.optionsCategory.map((field) => {
        return {
            value: field.id,
            label: field.name,
        };
    });

    const inputChangeHandler = (event) => {
        setProfile((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            };
        });
    };

    const onChangeCityHandler = (value) => {
        setProfile((prevState) => {
            return {
                ...prevState,
                cityId: value,
            };
        });
    };

    const onChangeSelectHandler = (value, name) => {
        setProfile((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    const onChangeFieldsHandler = (value) => {
        setProfile((prevState) => {
            return {
                ...prevState,
                listGame: value
            };
        });
    };

    const validateFormData = (formData) => {
        let res = true;
        let errMsg = "";
        if (!formData.firstName) {
            errMsg = "Vui lòng nhập tên của bạn!";
        } else if (!formData.lastName) {
            errMsg = "Vui lòng nhập họ của bạn!";
        } else if (!formData.email) {
            errMsg = "Vui lòng nhập tên doanh nghiệp!";
        } else if (!formData.phone) {
            errMsg = "Vui lòng nhập số điện thoại của bạn!";
        } else if (!formData.status) {
            errMsg = "Vui lòng trạng thái tài khoản";
        } else if (!formData.cityId) {
            errMsg = "Vui lòng chọn tỉnh/thành phố địa chỉ!";
        } else if (formData.listGame?.lenght == 0) {
            errMsg = "Vui lòng chọn lĩnh vực hoạt động!";
        } else if (!formData.addressDetails) {
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

  
    return (
        <Modal
            destroyOnClose={true}
            width={1200}
            open={openUpdate}
            onCancel={onCloseUpdateModalHandler}
            style={{
                top: '10vh',
            }}
            title="Thông tin chi tiết"
            footer={[
                <Button key="back" onClick={onCloseUpdateModalHandler}>
                    Hủy bỏ
                </Button>,
                <Button key="submit" type="primary" onClick={onUpdate}>
                    Cập nhật
                </Button>,
            ]}
        >
            {contextHolder}
            <div>
                <Row>
                    <Col span={4}>
                        <Image style={{ borderRadius: 10 }} width={160} height={160} src={data.image} />
                    </Col>
                    <Col span={20}>
                        <Row>
                            <Col span={12}  >
                                <div className={classes.formInfo}>
                                    <Row>
                                        <span>Họ:</span>
                                    </Row>
                                    <Row>
                                        <input
                                            placeholder="Họ của bạn"
                                            className={classes['modal-update-col-input']}
                                            value={profile.firstname}
                                            name="firstname"
                                            onChange={inputChangeHandler}
                                        />
                                    </Row>
                                </div>

                                <div className={classes.formInfo}>
                                    <Row>
                                        <span>Tên tài khoản:</span>
                                    </Row>
                                    <Row>
                                        <input
                                            placeholder="Tên tài khoản"
                                            className={classes['modal-update-col-input']}
                                            value={profile.username}
                                            name="username"
                                            onChange={inputChangeHandler}
                                        />
                                    </Row>
                                </div>

                                <div className={classes.formInfo}>
                                    <Row>
                                        <span>Giới tính:</span>
                                    </Row>
                                    <Row>
                                        <Select
                                            placeholder="Giới tính"
                                            defaultValue={'Nữ'}
                                            style={{
                                                width: "100%",
                                            }}
                                            onChange={(value) => onChangeSelectHandler(value, 'gender')}
                                            options={Constants.optionSex}
                                        />
                                    </Row>
                                </div>

                                <div className={classes.formInfo}>
                                    <Row>
                                        <span>Số điện thoại:</span>
                                    </Row>
                                    <Row>
                                        <input
                                            placeholder="Số điện thoại"
                                            className={classes['modal-update-col-input']}
                                            onChange={inputChangeHandler}
                                            value={profile.phone}
                                            name="phone"
                                        />
                                    </Row>
                                </div>

                                <div className={classes.formInfo}>
                                    <Row >
                                        <span>Tỉnh/Thành phố:</span>
                                    </Row>
                                    <Row>
                                        <Select
                                            style={{
                                                width: "100%",
                                            }}
                                            defaultValue={profile.cityId}
                                            options={Constants.vietnamProvinces}
                                            onChange={onChangeCityHandler}
                                            value={profile.cityId}
                                        />
                                    </Row>
                                </div>

                                {type === 'PGT' && <>

                                </>}
                            </Col>
                            <Col span={12}>
                                <div className={classes.formInfo}>
                                    <Row>
                                        <span>Tên:</span>
                                    </Row>
                                    <Row>
                                        <input
                                            placeholder="Tên của bạn"
                                            className={classes['modal-update-col-input']}
                                            value={profile.lastname}
                                            name="lastname"
                                            onChange={inputChangeHandler}
                                        />
                                    </Row>
                                </div>
                                <div className={classes.formInfo}>
                                    <Row>
                                        <span>Email:</span>
                                    </Row>
                                    <Row>
                                        <input
                                            placeholder="Email"
                                            className={classes['modal-update-col-input']}
                                            value={profile.email}
                                            name="email"
                                            onChange={inputChangeHandler}
                                        />
                                    </Row>
                                </div>

                                <div className={classes.formInfo}>
                                    <Row>
                                        <span>Địa chỉ cụ thể:</span>
                                    </Row>
                                    <Row>
                                        <input
                                            placeholder="Địa chỉ cụ thể"
                                            className={classes['modal-update-col-input']}
                                            value={profile.addressDetails}
                                            name="addressDetails"
                                            onChange={inputChangeHandler}
                                        />
                                    </Row>
                                </div>

                                {type == 'PGT' && <div className={classes.formInfo}>
                                    <Row>
                                        <span>Lĩnh vực:</span>
                                    </Row>
                                    <Row>
                                        <Select
                                            mode="multiple"
                                            style={{
                                                width: "100%",
                                            }}
                                            placeholder="Chọn lĩnh Vực"
                                            onChange={onChangeFieldsHandler}
                                            defaultValue={data?.listgame.map((item) => item.id)}
                                            options={optionCategory}
                                        />
                                    </Row>
                                </div>}


                                <div className={classes.formInfo}>
                                    <Row>
                                        <span>Trạng thái:</span>
                                    </Row>
                                    <Row>
                                        <Select
                                            style={{
                                                width: "100%",
                                            }}
                                            placeholder="Chọn trạng thái"
                                            onChange={(value) => onChangeSelectHandler(value, 'status')}
                                            value={profile.status}
                                            options={Constants.optionStatus}
                                        />
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Modal >
    )
}

export default ModalUpdate
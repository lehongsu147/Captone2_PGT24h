
import { ExclamationCircleFilled, ExclamationCircleOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import styles from './DropDownBookingRequest.module.scss'
import useOnClickOutside from '../../../hook/use-onclick-outside';
import { Button, Modal, message } from 'antd';
import BookingFactories from '../../../services/BookingFactories';
import { toast } from 'react-toastify';
const { confirm } = Modal;
const destroyAll = () => {
    Modal.destroyAll();
};

const DropDownBookingRequest = ({ icon, options, id,  onFetchData = () => { }, type = 'user' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    const dropRef = useRef();
    const [openViewModal, setOpenViewModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const fetchDataUpdateBooking = async (id,type) => {
        try {
            const response = await BookingFactories.updateBooking(id, type);
            if ( response?.status === 200){
                toast.success('Cập nhật yêu cầu booking thành công.')
                onFetchData();
            }
        } catch (error) {
            toast.error('Hệ thống lỗi, vui lòng thử lại sau.')
            // Handle errors here
        }
    };

    const handleClickOutside = (event) => {
        setIsOpen(false);
    };


    useOnClickOutside(dropRef, handleClickOutside);

    const showConfirm = () => {
        confirm({
            icon: <ExclamationCircleOutlined />,
            content: <Button onClick={destroyAll}>Bạn chấp nhận yêu cầu booking?</Button>,
            onOk() {
                fetchDataUpdateBooking(id, 2)
                onFetchData();
            },
            onCancel() {
            },
        });
    };

    const showConfirmDenied = () => {
        confirm({
            icon: <ExclamationCircleOutlined />,
            content: <Button onClick={destroyAll}>Bạn chắc chặn muốn hủy yêu cầu booking ?</Button>,
            onOk() {
                fetchDataUpdateBooking(id, 3)
                onFetchData();
            },
            onCancel() {
            },
        });
    };

    return (
        <div>
            <SettingOutlined style={{ fontSize: '25px' }} onClick={handleOpen} />
            {isOpen &&
                <div className={styles.selectOptions} ref={dropRef} >
                    <div className={styles.option} onClick={showConfirm}>Chấp nhận</div>
                    <div className={styles.option} onClick={showConfirmDenied} >Không chấp nhận</div>
                </div>
            }
        </div>
    );
};

export default DropDownBookingRequest;
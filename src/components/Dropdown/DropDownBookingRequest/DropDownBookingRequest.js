
import { ExclamationCircleFilled, SettingOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import styles from './DropDownBookingRequest.module.scss'
import useOnClickOutside from '../../../hook/use-onclick-outside';
import { message } from 'antd';

const DropDownBookingRequest = ({ icon, options, record, type = 'user' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    const dropRef = useRef();
    const [openViewModal, setOpenViewModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const onOpenViewHandler = (data) => {
        setOpenViewModal(true);
        setIsOpen(false)
        // console.log(data);
    };

    const onCloseViewHandler = () => {
        setOpenViewModal(false);
    };

    const onOpenUpdateModalHandler = (data) => {
        setOpenUpdateModal(true);
        setIsOpen(false)
    };

    const onCloseUpdateModalHandler = () => {
        setOpenUpdateModal(false);
    };

    const onClickGotoUpdate = () => {
        setOpenViewModal(false);
        setOpenUpdateModal(true);
    };

    const handleClickOutside = (event) => {
        setIsOpen(false);
    };

    
    useOnClickOutside(dropRef, handleClickOutside);
    return (
        <div>
            <SettingOutlined style={{ fontSize: '25px' }} onClick={handleOpen} />
            {isOpen &&
                <div className={styles.selectOptions} ref={dropRef} >
                    <div className={styles.option} onClick={onOpenViewHandler}>Chấp nhận</div>
                    <div className={styles.option} onClick={onOpenUpdateModalHandler} >Không cháp nhận</div>
                </div>
            }
        </div>
    );
};

export default DropDownBookingRequest;
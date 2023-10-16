
import { ExclamationCircleFilled, SettingOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import styles from './Dropdown.module.scss'
import ModalView from './ModalView';
import ModalUpdate from './ModalUpdate';
import { deleteUser } from '../../services/UserService';
import useOnClickOutside from '../../hook/use-onclick-outside';
import { Button, Modal, message } from 'antd';
const { confirm } = Modal;

const DropdownOperation = ({ icon, options, record, type='user' }) => {
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

    const showDeleteConfirm = () => {
        confirm({
            title: 'Cảnh báo',
            icon: <ExclamationCircleFilled />,
            content: 'Bạn có chắc muốn xóa tài khoản này Không ?',
            okText: 'Xóa tài khoản',
            okType: 'danger',
            cancelText: 'Hủy bỏ',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
        setIsOpen(false)
    };

    useOnClickOutside(dropRef, handleClickOutside);
    return (
        <div>
            <SettingOutlined style={{ fontSize: '25px' }} onClick={handleOpen} />
            {isOpen &&
                <div className={styles.selectOptions} ref={dropRef} >
                    <div className={styles.option} onClick={onOpenViewHandler}>Xem thông tin</div>
                    <div className={styles.option} onClick={onOpenUpdateModalHandler} >Sửa thông tin</div>
                    <Button className={styles.option} onClick={showDeleteConfirm} >Xóa tài khoản </Button>
                </div>
            }
            <ModalView
                openView={openViewModal}
                onCloseViewHandler={onCloseViewHandler}
                onClickUpdate={onClickGotoUpdate}
                data={record}
                type={type}
            />
            <ModalUpdate
                openUpdate={openUpdateModal}
                onCloseUpdateModalHandler={onCloseUpdateModalHandler}
                data={record}
                type={type}
            />
        </div>
    );
};

export default DropdownOperation;
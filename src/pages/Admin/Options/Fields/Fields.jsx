import React, { useEffect, useState } from "react";
import { Upload, Table, Input, Modal, Typography, Button } from "antd";
import classes from './Fields.module.css'
import CategoriesFactories from "../../../../services/CategoriesFatories";
import ImgCrop from 'antd-img-crop';
import { ToastNoti, ToastNotiError } from "../../../../utils/Utils";
const { Text } = Typography;

const Fields = () => {
    const [fields, setFields] = useState()
    const [inputSearch, setInputSearch] = useState("");
    const [openModalAdd, setOpenModalAdd] = useState(false)
    const [categoryAddName, setCategoryAddName] = useState()
    const [categoryAddImage, setcategotyAddImage] = useState()
    const [error, setError] = useState();
    const [categoryInfo, setCategoryInfo] = useState();
    const [showModalUpdate, setShowModalUpdate] = useState();

    const fetchData = async (Keyword) => {
        const response = await CategoriesFactories.getListCategories(Keyword);
        setFields(response);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
            width: 50,
            align: 'center',
            render: (id, record, index) => { ++index; return index; },
            showSorterTooltip: false,
        },
        {
            title: "Tên Lĩnh vực",
            dataIndex: "name",
            key: "name",
            render: (text, data) => <div className="name-title-table">{text}</div>,
        },
        {
            title: "Tác vụ",
            key: "action",
            render: (_, record) => (
                <div className="btn-action-group" >
                    <Button
                        style={{ marginRight: 10 }}
                        onClick={() => onDeleteFiledHandler(record?.id)}
                    >
                        Xóa
                    </Button>
                    <Button
                        onClick={() => onUpdateCategory(record)}
                    >
                        Sửa
                    </Button>
                </div>
            ),
        },
    ];

    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.keyCode === 13) {
            fetchData(inputSearch);
        }
    };
    function handleReset() {
        setInputSearch();
        fetchData();
    }
    function handleSearch() {
        fetchData(inputSearch);
    }
    const handleOnChangeInput = (event) => {
        setInputSearch(event.target.value);
    }

    const onDeleteFiledHandler = async (id) => {
        try {
            const resp = await CategoriesFactories.deleteCategory(id);
            if (resp.status){ ToastNoti();}
        } catch (error) {
            ToastNotiError();
        }
    }


    const onUpdateCategory = (data) => {
        setCategoryInfo(data)
        setShowModalUpdate(true);
    }
    const onCloseModalUpdate = (id) => {
        setShowModalUpdate(false);
    }
    const onOpenModalAddField = () => {
        setOpenModalAdd(true)
    }

    const onCloseModalAddField = () => {
        setOpenModalAdd(false)
    }

    const onChangeDataAddField = (event) => {
        setError()
        setCategoryAddName(event.target.value)
    }

    const onAddFieldHandler = async () => {
        if (!categoryAddName || categoryAddName?.trim() === '') {
            setError("Điền tên lĩnh vực")
        }
        else {
            setError();
            const data = {
                name: categoryAddName,
                image: categoryAddImage,
            }
            try {
                const resp = await CategoriesFactories.createCategory(data);
                console.log("🚀 ~ file: Fields.jsx:105 ~ onAddFieldHandler ~ resp:", resp)
            } catch (error) {
            }
        }
    }

    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ]);
    const onChangeSelectFile = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    return (
        <div className="booking-container" style={{ height: '100vh', overflow: 'scroll' }}>
            <div className="booking-title"><span>Nổi Bật</span></div>
            <div className="booking-search">
                <Input
                    placeholder="Tìm kiếm lĩnh vực"
                    size="middle "
                    value={inputSearch}
                    onKeyDown={(e) => handleKeyDown(e)}
                    onChange={(e) => handleOnChangeInput(e)}
                />
                <Button
                    type='default'
                    onClick={handleReset}
                >
                    Mặc định
                </Button>
                <Button
                    type='primary'
                    onClick={handleSearch}
                >
                    Tìm kiếm
                </Button>
                <Button type='primary' onClick={onOpenModalAddField} >Thêm lĩnh vực</Button>
            </div>
            <div className="booking-table">
                <Table
                    columns={columns}
                    dataSource={fields ?? []}
                    pagination={{
                        defaultPageSize: 10,
                        showSizeChanger: true,
                        pageSizeOptions: ["1", "5", "10", "20"],
                    }}
                />
            </div>
            <Modal
                width={800}
                title="Thêm lĩnh vực"
                open={openModalAdd}
                onCancel={onCloseModalAddField}
                footer={[]}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <ImgCrop rotationSlider style={{ width: '20%' }} >
                        <Upload
                            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChangeSelectFile}
                            onPreview={onPreview}
                            maxCount={1}
                            multiple={false}
                        >
                            {fileList.length < 2 && '+ Upload'}
                        </Upload>
                    </ImgCrop>

                    <div style={{ display: 'flex', margin: '20px 0px',flexDirection: 'row' }}>
                        <Input
                            type="text"
                            style={{ width: '100%' }}
                            placeholder="Nhập tên lĩnh vực"
                            className={classes['add-modal-input']}
                            onChange={onChangeDataAddField}
                            name="name"
                        />
                        {error && <Text type="danger">{error}</Text>}
                    </div>
                    <Button type='primary' style={{ width: '100%', float: 'right' }} onClick={onAddFieldHandler}>Thêm</Button>
                </div>
            </Modal >

            <Modal
                width={800}
                title="Sửa thông tin lĩnh vực"
                open={showModalUpdate}
                onCancel={onCloseModalUpdate}
                footer={[]}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <ImgCrop rotationSlider style={{ width: '20%' }} >
                        <Upload
                            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChangeSelectFile}
                            onPreview={onPreview}
                            maxCount={1}
                            multiple={false}
                        >
                            {fileList.length < 2 && '+ Upload'}
                        </Upload>
                    </ImgCrop>
                    <div style={{ display: 'flex', margin: '20px 0px',flexDirection: 'row' }}>
                        <Input
                            type="text"
                            style={{ width: '100%' }}
                            placeholder="Nhập tên lĩnh vực"
                            className={classes['add-modal-input']}
                            onChange={onChangeDataAddField}
                            value={categoryInfo?.name}
                            name="name"
                        />
                        {error && <Text type="danger">{error}</Text>}
                    </div>
                    <Button type='primary' style={{ width: '100%', float: 'right' }} onClick={onAddFieldHandler}>Thêm</Button>
                </div>
            </Modal >

        </div >
    )
}
export default Fields
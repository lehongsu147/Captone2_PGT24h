import React, { useState, useEffect, useLayoutEffect, useContext } from 'react'
import { getKolFields } from '../../services/FieldService';
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from './Sidebar.module.scss'
import { CollapseContext } from '../../context/collapse.context';
import Constants from '../../utils/constants';

const SideBar = ({ onChangeCollapse }) => {

    const [fields, setFields] = useState([])

    useEffect(() => {
        setFields(Constants.optionsCategory)
        // getKolFields().then(res => {
        //     setFields(res)
        // });
    }, [])


    const { isCollapse, setIsCollapse } = useContext(CollapseContext);
    const { id } = useParams();
    const navigator = useNavigate();
    function handleClickCollapse(value) {
        setIsCollapse(value)
    }
    function handleClickLink(value) {
        navigator(`/field/${value}`)
    }


    return (
        <div className={`${styles['container']}`} >
            <div className={`${styles['boxContainer']} ${styles[isCollapse ? 'boxCollapse' : '']} `}            >
                <div className={styles['title']} >
                    <span className={styles['textTitle']}>Danh sách lĩnh Vực </span>
                </div>
                <div className={styles['content']} >
                    {fields?.map((field) => {
                        return (
                            <div className={`${styles["item"]}   ${styles[id == field?.id ? "active" : '']} `}
                                onClick={() => handleClickLink(field?.id)}
                            >
                                <div className={styles["imageBox"]}>
                                    <img className={styles["imageImport"]} src={field?.image} alt='game' />
                                </div>
                                <div className={styles["linkItem"]} >
                                    <span >{field?.name}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={styles["collapse"]} onClick={() => handleClickCollapse(!isCollapse)}>
                <div className={styles["boxCollapse"]} >
                    <i className={`fa-solid fa-angle-left fa-lg ${isCollapse ? 'fa-rotate-180' : ''}  `}></i>
                </div>
            </div>
        </div >
    )

}

export default SideBar;
import React, { useEffect, useState } from 'react';
import styles from './HotKol.module.scss'
import CardKol from '../../card/CardKOL/CardKol';
import ContentLoader, { Facebook, List } from 'react-content-loader'
import MyLoader from '../../loader/Loader';
import Temp from '../../../utils/temp';
import PgtFactories from '../../../services/PgtFatories';
const HotHOL = () => {
    const [hotKols, setHotKols] = useState([]);
    useEffect(() => {
        // setHotKols(
        //     Temp.HotKOL
        // )
        const fetchData = async () => {
            const response = await PgtFactories.getListPGT();
            setHotKols(response);
        };
        fetchData();
    }, []);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await PgtFactories.getListHotPGT();
    //         setHotKols(response)
    //     };
    //     fetchData();
    // }, []);
    
    return (
        <div className={styles.container}>
            <span className={styles.title}>Hot PGT</span>

            <div className={styles["boxContent"]}>
                <div className={styles["content"]}>
                    {hotKols?.map((kol, i) => {
                        return (
                            <CardKol key={i} kol={kol} />
                        )
                    })}
                </div>
            </div>
            <div className={styles["content-pagination"]}>
                {/* <Pagination /> */}
            </div>
        </div>
    );
};

export default HotHOL;
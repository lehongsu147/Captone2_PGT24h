import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from './OutStandingKol.module.scss'
import CardKol from '../../card/CardKOL/CardKol';
import Temp from '../../../utils/temp';
import PgtFactories from '../../../services/PgtFatories';
const OutStandingKol = () => {
    const [hotKols, setHotKols] = useState([]);
    // useEffect(() => {
    //     setHotKols(
    //         Temp.OutstandingKOL
    //     )
    // }, []);

    useLayoutEffect(() => {
        const fetchData = async () => {
            const response = await PgtFactories.getListPGT();
            setHotKols(response);
        };
        fetchData();
    }, []);

    return (
        
        <div className={styles.container}>
            <span className={styles.title}>OutStandingKol</span>

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

export default OutStandingKol;
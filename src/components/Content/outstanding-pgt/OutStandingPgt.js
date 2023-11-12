import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from './OutStandingPgt.module.scss'
import CardKol from '../../card/CardKOL/CardKol';
import PgtFactories from '../../../services/PgtFatories';
const OutStandingPGT = () => {
    const [hotPgtList, setHotPgtList] = useState([]);

    useLayoutEffect(() => {
        const fetchData = async () => {
            const response = await PgtFactories.getListPGT(20);
            setHotPgtList(response);
        };
        fetchData();
    }, []);

    return (
        
        <div className={styles.container}>
            <span className={styles.title}>OutStanding PGT</span>

            <div className={styles["boxContent"]}>
                <div className={styles["content"]}>
                    {hotPgtList?.map((kol, i) => {
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

export default OutStandingPGT;
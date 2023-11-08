import React, { useEffect, useState } from 'react';
import styles from './HotKol.module.scss';
import CardKol from '../../card/CardKOL/CardKol';
import PgtFactories from '../../../services/PgtFatories';

const HotHOL = () => {
    const [hotKols, setHotKols] = useState([]);
    const [apiCalled, setApiCalled] = useState(false);

    useEffect(() => {
        if (!apiCalled) {
            const fetchData = async () => {
                try {
                    const response = await PgtFactories.getListPGT();
                    setHotKols(response);
                    setApiCalled(true);
                } catch (error) {
                    // Handle errors here
                }
            };

            fetchData();
        }
    }, [apiCalled]); 

    return (
        <div className={styles.container}>
            <span className={styles.title}>Hot PGT</span>

            <div className={styles["boxContent"]}>
                <div className={styles["content"]}>
                    {hotKols?.map((kol, i) => {
                        return (
                            <CardKol key={i} kol={kol} />
                        );
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

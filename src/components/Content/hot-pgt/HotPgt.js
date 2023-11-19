import React, { useEffect, useState } from 'react';
import styles from './HotPgt.module.scss';
import CardPgt from '../../card/CardPgt/CardPgt';
import PgtFactories from '../../../services/PgtFatories';

const HotHOL = () => {
    const [hotPgts, setHotPgtList] = useState([]);
    const [apiCalled, setApiCalled] = useState(false);

    useEffect(() => {
        if (!apiCalled) {
            const fetchData = async () => {
                try {
                    const response = await PgtFactories.getListPGT(10);
                    setHotPgtList(response);
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
                    {hotPgts?.map((pgt, i) => {
                        return (
                            <CardPgt key={i} pgt={pgt} />
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

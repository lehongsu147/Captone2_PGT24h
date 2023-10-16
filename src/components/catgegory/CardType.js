import React from 'react';
import styles from './CardType.module.scss'
import { useNavigate } from 'react-router-dom';
const CardType = ( { id, name= 'game', background } ) => {
    const navigator = useNavigate()
    function RedirectToCategory(id){
    navigator(`/field/${id}`); 
    }
    return (
        <div onClick={()=> RedirectToCategory(id)} className={styles.cardType} style={{ background: `url(${background}) center center no-repeat`}}>
            <p className={styles.content}>
                {name}
            </p>
        </div>
    );
};

export default CardType;
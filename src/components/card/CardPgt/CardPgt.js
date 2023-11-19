import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  useNavigate } from 'react-router-dom';
const Chanel = ({ item }) => {
    return (
        <div className='imageBorder'>
            <img className='imageChannel' src={item?.image} alt='chanel' />
        </div>
    )
}

const CardPgt = (props) => {
    const data = props.pgt;
    const navigate = useNavigate();
    const handleClickCard = () => {
        navigate(`/pgt/${data?.id}`);
    };
    return (
        <div className="card" onClick={handleClickCard}>
            <div className="card__view">
                <div className="card__view__data">
                    <img className='card_imgage' alt='card__view__data' src={data?.image} />
                </div>
            </div>
            <div className="card__content">
                <span className="channel__video__name">{data?.username}</span>
                <span className="channel__text_short">{data?.textShort}</span>
                <div className="channel__data">
                    <div className="channel__data__text">
                        <div className="channel__subdata">
                            <div className="channel__views">
                                {data?.listgame.map((item, index) => (
                                    <Chanel item={item} key={index} />
                                ))}
                            </div>
                        </div>
                        <FontAwesomeIcon icon="fa-sharp fa-solid fa-star-sharp" />
                        <p className="channel__star">{data?.star} <span className='channel__cmt'>({data?.comment})</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPgt;
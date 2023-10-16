import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PUBG from '../../../assets/images/PUBG.jpg'
import LQ from '../../../assets/images/LQ.jpg'
import LolMobile from '../../../assets/images/LolMobile.jpg'
import Valorant from '../../../assets/images/Valorant.jpg'
import { useHistory, useNavigate } from 'react-router-dom';
const Chanel = ({ item }) => {
    let imageLink;
    switch (item?.id) {
        case 1:
            imageLink = PUBG;
            break;

        case 2:
            imageLink = LQ;
            break;

        case 3:
            imageLink = LolMobile;
            break;

        case 4:
            imageLink = Valorant;
            break;

        default:
            break;
    }
    return (
        <div className='imageBorder'>
            <img className='imageChannel' src={imageLink} alt='chanel' />
        </div>
    )
}

const CardKol = (props) => {
    const data = props.kol;
    const navigate = useNavigate();
    const handleClickCard = () => {
        navigate(`/kols/${data?.id}`);
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
                    {/* <div className="channel__img"></div> */}
                    <div className="channel__data__text">
                        <div className="channel__subdata">
                            <div className="channel__views">
                                {data?.listgame.map((item, index) => (
                                    <Chanel item={item} key={index} />
                                ))}
                            </div>
                        </div>
                        <FontAwesomeIcon icon="fa-sharp fa-solid fa-star-sharp" />
                        <p className="channel__star">{data?.star} <span className='channel__cmt'>({data?.commnent})</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardKol;
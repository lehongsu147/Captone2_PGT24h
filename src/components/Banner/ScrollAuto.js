import banner1 from "../../assets/banner/banner_1.jpg";
import banner2 from "../../assets/banner/banner_2.jpg";
import styles from './styles.module.scss'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ScrollAuto = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };


    return (
        <div className={styles.mainContainer}>
            <img className={styles.image} src={banner1} alt="image 1" />

            {/* <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={260}
                totalSlides={3}
            >
                <Slide index={0}>
                    <img className={styles.image} src={banner1} alt="image 1" />
                </Slide>
                <Slide index={1}>
                    <img className={styles.image} src={banner1} alt="image 1" />
                </Slide>
                <Slide index={2}>         '
                    <img className={styles.image} src={banner1} alt="image 1" />
                </Slide>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider> */}
        </div >
    );
};
export default ScrollAuto;

// styling
import styles from './style.module.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';

// components
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade, Pagination, Autoplay} from 'swiper';
import Spring from '@components/Spring';

// assets
import img1 from '@assets/banner/1.webp';
import img2 from '@assets/banner/2.webp';
import img3 from '@assets/banner/3.webp';
import img4 from '@assets/banner/4.webp';

const Banner = () => {
    const data = [
        {
            title: 'Get rewarded up to 4030 USDT for signing up!',
            button: 'Sign up',
            img: img1
        },
        {
            title: 'Increase your trading volume with 100% bonus!',
            button: 'Learn more',
            img: img2
        },
        {
            title: 'Explore the world of crypto with starter bonus!',
            button: 'Claim now',
            img: img3
        },
        {
            title: 'Get limited time offer for 50% bonus!',
            button: 'Claim now',
            img: img4
        }
    ];

    return (
        <Spring>
            <Swiper
                modules={[EffectFade, Pagination, Autoplay]}
                effect="fade"
                fadeEffect={{crossFade: true}}
                pagination={{clickable: true}}
                autoplay={{pauseOnMouseEnter: true, disableOnInteraction: false}}
                loop={true}
                speed={1300}
                lazy={true}
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide className={`${styles.slide} card card--abstract`} key={index}>
                            <div className={styles.slide_main}>
                                <p className="text-large text-white">{item.title}</p>
                                <button className="btn btn--pill">{item.button}</button>
                            </div>
                            <img className={styles.slide_media} src={item.img} alt="media"/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Spring>
    )
}

export default Banner
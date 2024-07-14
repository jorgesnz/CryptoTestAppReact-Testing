// styling
import styles from './style.module.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';

// components
import Helmet from 'react-helmet';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade} from 'swiper';

// hooks
import {useWindowSize} from 'react-use';

// utils
import {memo} from 'react';

// assets
import img1 from '@assets/slides/slide1.webp';
import img2 from '@assets/slides/slide2.webp';
import img3 from '@assets/slides/slide3.webp';

const AuthLayout = ({title, children}) => {
    const {width} = useWindowSize();

    return (
        <div className={styles.container}>
            <Helmet>
                <title>{title} | Cryptotest App</title>
            </Helmet>
            {
                width >= 1280 &&
                <div className={styles.slider}>
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        speed={1700}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        effect="fade"
                        fadeEffect={{
                            crossFade: true
                        }}>
                        <SwiperSlide>
                            <div className="d-flex flex-column align-items-center g-40">
                                <img className={styles.slider_img} src={img1} alt="Exchange, Sell & Buy Cryptocurrency and Digital Arts"/>
                                <div className="d-flex flex-column g-16">
                                    <h2 className={styles.slider_title}>
                                        Intercambia, Vende y Compra <br/> Criptomonedas y Arte Digital
                                    </h2>
                                    <p className={styles.slider_text}>
                                        Compre fácilmente Bitcoin y otras criptomonedas utilizando una amplia gama de opciones de pago. 
                                        Descubra coleccionables digitales exclusivos utilizando Cryptotest App hoy. </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex flex-column align-items-center g-40">
                                <img className={styles.slider_img} src={img2} alt="Buy & Sell Each Digital Cryptocurrency and Arts"/>
                                <div className="d-flex flex-column g-16">
                                    <h2 className={styles.slider_title}>
                                        Compre y Venda Cada Arte y Criptomoneda Digital
                                    </h2>
                                    <p className={styles.slider_text}>
                                        Compre fácilmente Bitcoin y otras criptomonedas utilizando
                                         una amplia gama de opciones de pago. Descubra coleccionables digitales exclusivos utilizando Cryptotest App hoy.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex flex-column align-items-center g-40">
                                <img className={styles.slider_img} src={img3} alt="Track Value Change Each Digital Currency"/>
                                <div className="d-flex flex-column g-16">
                                    <h2 className={styles.slider_title}>
                                    Seguimiento del Cambio de Valor <br/>Cada Moneda Digital
                                    </h2>
                                    <p className={styles.slider_text}>
                                    Compre fácilmente Bitcoin y otras criptomonedas utilizando una amplia gama de opciones de pago. 
                                    Descubra coleccionables digitales exclusivos utilizando Cryptotest App hoy.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            }
            <div className={styles.main}>{children}</div>
        </div>
    )
}

export default memo(AuthLayout);
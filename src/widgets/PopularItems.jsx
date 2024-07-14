// styling
import 'swiper/css';
import 'swiper/css/keyboard';

// components
import NFTItem from '@components/NFTItem';
import Spring from '@components/Spring';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Keyboard} from 'swiper';

// hooks
import {useWindowSize} from 'react-use';

// data placeholder
import popular_nft from '@db/popular_nft';

const PopularItems = () => {
    const {width} = useWindowSize();
    const data = popular_nft.slice(0, 6);

    return (
        <Spring className={width < 768 ? 'pt-16' : ''}>
            <div className="widget_header">
                <span className="symbol">🔥</span>
                <h2>NFT Más Populares</h2>
            </div>
            <Swiper
                modules={[Keyboard]}
                slidesPerView={1}
                spaceBetween={16}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 2,
                    },
                    1440: {
                        slidesPerView: 3,
                    },
                }}
                className="w-100"
                style={{cursor: 'grab'}}
                keyboard={{enabled: true}}
                speed={1500}
                loop={true}>
                {
                    data.map((item, i) => (
                        <SwiperSlide key={item.id}>
                            <NFTItem item={item} index={i}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Spring>
    )
}

export default PopularItems
// components
import NFTItem from '@components/NFTItem';
import Spring from '@components/Spring';

// utils
import {memo} from 'react';

// data placeholder
import popular_nft from '@db/popular_nft';

const TopItem = () => {
    const mostPopular = popular_nft.find(item => item.isMostPopular);

    return (
        <Spring type="fade">
            <div className="widget_container">
                <div className="widget_header">
                    <span className="symbol">🔥</span>
                    <h2>El NFT Más Popular</h2>
                </div>
                <NFTItem item={mostPopular} />
            </div>
        </Spring>
    )
}

export default memo(TopItem);
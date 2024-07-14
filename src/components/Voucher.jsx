// styling
import styled from 'styled-components/macro';

// components
import LazyImage from '@components/LazyImage';

// assets
import img from '@assets/voucher_img.webp';
import bg from '@assets/voucher_bg.svg';

const StyledVoucher = styled.div`
  background: var(--body-dark) url(${bg}) no-repeat center center / cover;
  border-radius: 12px;
  padding: 24px 0 24px 16px;

  .title {
    max-width: 215px;
  }

  .text {
    max-width: 180px;
  }

  .media {
    display: none;
    
    @media screen and (min-width: 414px) {
      display: block;
      max-height: 116px;
      width: auto;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }

    @media screen and (min-width: 1024px) {
      display: block;
    }

    @media screen and (min-width: 1440px) {
      display: none;
    }

    @media screen and (min-width: 2000px) {
      display: block;
    }
  }
`;

const Voucher = ({...props}) => {
    return (
        <StyledVoucher className="d-flex align-items-center" {...props}>
            <div className="d-flex flex-column g-8 flex-1">
                <h3 className="title text-large text-white">
                    Get <span className="text-accent">100</span> USDT Cashback Voucher
                </h3>
                <p className="text text-dark text-12">When Inbitee accumulatively deposits more than $50.</p>
            </div>
            <LazyImage className="media" effect="opacity" src={img} alt="voucher"/>
        </StyledVoucher>
    )
}

export default Voucher
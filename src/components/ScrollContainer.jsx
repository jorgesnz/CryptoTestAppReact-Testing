// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// hooks
import useElementScroll from '@hooks/useElementScroll';

// utils
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Scroller = styled.div`
  height: calc(100% - ${props => props.height}px);
  position: relative;
  flex-grow: 1;

  &.has-overflow {
    &:before, &:after {
      content: '';
      display: block;
      height: ${props => props.isCompact ? '40px' : '80px'};
      position: absolute;
      width: 100%;
      left: 0;
      z-index: 300;
      transition: height var(--transition);
    }

    &:before {
      top: 0;
      transform: scaleY(-1);
      border-radius: 0 0 12px 12px;
    }

    &:after {
      bottom: 0;
      border-radius: 0 0 12px 12px;
    }

    &.is-top:before,
    &.is-bottom:after {
      height: 0;
    }

    &.body-bg {
      &:before, &:after {
        background: ${theme('theme', {
          light: 'linear-gradient(180deg, rgba(250, 250, 250, 0.0001) 0%, #fafafa 100%)',
          dark: 'linear-gradient(180deg, rgba(23, 23, 23, 0.0001) 0%, #171717 100%)'
        })};
        border-radius: 0;
      }
    }

    &.widget-bg {
      &:before, &:after {
        background: ${theme('theme', {
          light: 'linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #ffffff 100%)',
          dark: 'linear-gradient(180deg, rgba(32, 32, 32, 0.0001) 0%, #202020 100%)'
        })};
      }
    }
  }

  .track {
    height: 100%;
    overflow-y: auto;
  }
`;

const ScrollContainer = ({children, height, bg = 'body-bg', isCompact = false}) => {
    const {ref, isOverflown, isTop, isBottom} = useElementScroll();

    return (
        <Scroller className={classNames(bg, {'has-overflow': isOverflown, 'is-top': isTop, 'is-bottom': isBottom})}
                  height={height}
                  ref={ref}
                  isCompact={isCompact}>
            {children}
        </Scroller>
    );
}

ScrollContainer.propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.number.isRequired,
    bg: PropTypes.oneOf(['body-bg', 'widget-bg']),
    isCompact: PropTypes.bool,
}

export default ScrollContainer
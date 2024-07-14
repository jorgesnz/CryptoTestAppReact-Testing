// utils
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {lazy} from 'react';

// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// components
import Spring from '@components/Spring';

const NFTBanner = lazy(() => import('@components/NFTBanner'));

const Category = styled.button`
  ${theme('theme', {
    light: `
        background-color: #F7F7F7;
        color: var(--header-light);
        border: 1px solid transparent;
    `,
    dark: `
        background-color: transparent;
        color: var(--header-dark);
        border: 1px solid var(--border-dark);
        
        &:hover, &:focus {
            border-color: var(--header-light);
        }
    `
  })};

  &.active {
    background-color: var(--accent);
    color: var(--header-light);
    border: 1px solid var(--accent);
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 230px;

  @media screen and (min-width: 375px) {
    max-width: 315px;
  }
`;

const BrowseCategories = ({variant, active, onClick}) => {
    const categories = [
        {name: 'all', label: 'Todo'},
        {name: 'art', label: 'Arte'},
        {name: 'collectibles', label: 'Colleccionables'},
        {name: 'photo', label: 'Fotografia'},
        {name: 'games', label: 'Video Juegos'},
        {name: 'etc', label: 'Otros'},
    ];

    return (
        <Spring>
            <div className={`widget_body card g-24 h-100 ${variant === 'nav' ? 'bordered' : ''}`}>
                <div className="d-flex flex-column g-16">
                    {variant !== 'nav' && <h2>Categorías</h2>}
                    <List>
                        {
                            categories.map(category => {
                                const {name, label} = category;
                                const className = classNames({
                                    'btn btn--pill': true,
                                    'active': name === active
                                });
                                return (
                                    variant === 'nav' && name === 'all' ? null :
                                        <Category key={name} className={className} onClick={() => onClick(name)}>
                                            {label}
                                        </Category>
                                )
                            })
                        }
                    </List>
                </div>
                <NFTBanner/>
            </div>
        </Spring>
    )
}

BrowseCategories.propTypes = {
    variant: PropTypes.oneOf(['nav', 'filters']).isRequired,
    active: PropTypes.string,
    onClick: PropTypes.func
}

export default BrowseCategories
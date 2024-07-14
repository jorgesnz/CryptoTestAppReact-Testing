import React, { useRef } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useWindowSize } from 'react-use';

// layouts
import layouts from '../layouts';

// hooks
import { useThemeProvider } from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';

const ResponsiveGridLayout = WidthProvider(Responsive);

const AppGrid = ({ widgets, id }) => {
    const { fontScale } = useThemeProvider();
    const { width } = useWindowSize();
    const ref = useRef(null);

    const breakpoints = {
        xl: 1440,
        lg: 1280,
        md: 768,
        sm: 414,
        xs: 375,
        xxs: 0
    };

    const cols = {
        xl: 4,
        lg: 3,
        md: 2,
        sm: 1,
        xs: 1,
        xxs: 1
    };

    return (
        <div ref={ref}>
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts[id]}
                breakpoints={breakpoints}
                cols={cols}
                rowHeight={fontScale === 1 ? 205 : 205 + (fontScale * 3)}
                isDraggable={false}
                isResizable={false}
                margin={[16, 40]}
                useCSSTransforms={false}
            >
                {
                    Object.keys(widgets).map(widget => (
                        <div key={widget}>
                            {widgets[widget]}
                        </div>
                    ))
                }
            </ResponsiveGridLayout>
        </div>
    );
};

AppGrid.propTypes = {
    widgets: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

export default AppGrid;

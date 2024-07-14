// components
import {Tab} from '@mui/base/Tab';
import {TabsList} from '@mui/base/TabsList';
import {TabPanel} from '@mui/base/TabPanel';
import {Tabs} from '@mui/base/Tabs';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import useMeasure from 'react-use-measure';

// utils
import PropTypes from 'prop-types';

const TabsContent = ({tabs, bg = 'body-bg', withPadding}) => {
    const [ref, {height}] = useMeasure();

    return (
        <div className="h-100">
            <Tabs defaultValue={0}>
                <div className={`${withPadding ? 'pl-16 pr-16' : ''}`} ref={ref}>
                    <TabsList className="tab-list col-2 bordered">
                        {
                            tabs.map((tab, i) => <Tab value={i} key={tab.label}>{tab.label}</Tab>)
                        }
                    </TabsList>
                </div>
                <ScrollContainer height={height} bg={bg}>
                    <div className={`track ${withPadding ? 'pl-16 pr-16' : ''}`}>
                        {
                            tabs.map((tab, i) => {
                                return (
                                    <TabPanel key={i} value={i}>
                                        <div className="tab-panel">
                                            {tab.content}
                                        </div>
                                    </TabPanel>
                                )
                            })
                        }
                    </div>
                </ScrollContainer>
            </Tabs>
        </div>

    );
}

Tabs.propTypes = {
    tabs: PropTypes.array.isRequired,
    bg: PropTypes.oneOf(['body-bg', 'widget-bg'])
}

export default TabsContent
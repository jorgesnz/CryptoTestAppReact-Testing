// components
import Spring from '@components/Spring';
import { LineChart as Chart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import ChartTooltip from '@components/ChartTooltip';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import {commaFormatter, numFormatter} from '@utils/helpers';
import {memo} from 'react';

// data placeholder
import linechart_data from '@db/linechart_data';

const LineChart = ({period, withButtons}) => {
    const {theme} = useThemeProvider();
    const lineColor = theme === 'light' ? 'var(--header)' : 'var(--accent)';

    return (
        <Spring className="h-100">
            <ResponsiveContainer width="100%" height="100%">
                <Chart data={linechart_data[period]}
                       margin={{top: 0, right: 0, left: 0, bottom: withButtons ? -10 : -20}}>
                    <CartesianGrid vertical={false} stroke="var(--border)" />
                    <XAxis dataKey="date"
                           tickLine={false}
                           axisLine={{stroke: 'var(--border)'}}
                           tick={false} />
                    <YAxis orientation="right"
                           tickLine={false}
                           tickFormatter={(value) => value >= 10000 ? numFormatter(value) : commaFormatter(value)}
                           tick={{fill: 'var(--text)', fontSize: '0.625rem', fontWeight: 500}}
                           axisLine={false} />
                    <Tooltip cursor={{stroke: 'var(--border)'}} content={<ChartTooltip />} />
                    <Line type="linear"
                          dataKey="value"
                          stroke={lineColor}
                          strokeWidth={2} dot={false}
                          activeDot={{r: 5, stroke: 'var(--widget)', strokeWidth: 2}}
                    />
                </Chart>
            </ResponsiveContainer>
        </Spring>
    )
}

export default memo(LineChart);
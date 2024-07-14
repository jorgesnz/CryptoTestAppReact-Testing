// components
import Spring from '@components/Spring';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import ChartTooltip from '@components/ChartTooltip';

// utils
import {commaFormatter, numFormatter} from '@utils/helpers';
import {memo} from 'react';

// data placeholder
import mixedchart_data from '@db/mixedchart_data';

const MixedChart = ({period, withButtons}) => {
    return (
        <Spring className="h-100">
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    data={mixedchart_data[period]}
                    margin={{top: 0, right: 0, left: 0, bottom: withButtons ? -10 : -20}}>
                    <CartesianGrid stroke="var(--border)" vertical={false} />
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
                    <Bar dataKey="open" maxBarSize={10} fill="var(--green)" />
                    <Line type="linear" dataKey="close" stroke="var(--red)" strokeWidth={2} dot={false} activeDot={null} />
                </ComposedChart>
            </ResponsiveContainer>
        </Spring>
    );
}

export default memo(MixedChart);
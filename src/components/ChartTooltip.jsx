// utils
import dayjs from 'dayjs';
import {commaFormatter} from '@utils/helpers';

const styles = {
    background: 'var(--widget)',
    minHeight: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    border: ' 1px solid var(--accent)',
    padding: '0 8px',
    borderRadius: 4,
    fontSize: ' 0.625rem',
    color: 'var(--header)'
}

const ChartTooltip = ({active, payload}) => {
    if (!active || !payload[0]) return null

    return (
        <div style={styles}>
            <span>{dayjs(payload[0].payload.date).format('DD.MM.YY:')}</span>
            <span>{commaFormatter(payload[0].value)}</span>
        </div>
    )
}

export default ChartTooltip
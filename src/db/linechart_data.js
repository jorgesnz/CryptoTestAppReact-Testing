import dayjs from 'dayjs';

const linechart_data = {
    m15: [
        {
            date: dayjs(),
            value: 2400,
        },
        {
            date: dayjs().subtract(1, 'day'),
            value: 1398,
        },
        {
            date: dayjs().subtract(2, 'day'),
            value: 9800,
        },
        {
            date: dayjs().subtract(3, 'day'),
            value: 3908,
        },
        {
            date: dayjs().subtract(4, 'day'),
            value: 4800,
        },
        {
            date: dayjs().subtract(5, 'day'),
            value: 3800,
        },
        {
            date: dayjs().subtract(6, 'day'),
            value: 4300,
        },
    ],
    h1: [
        {
            date: dayjs(),
            value: 5684,
        },
        {
            date: dayjs().subtract(1, 'day'),
            value: 3612,
        },
        {
            date: dayjs().subtract(2, 'day'),
            value: 3021,
        },
        {
            date: dayjs().subtract(3, 'day'),
            value: 7841,
        },
        {
            date: dayjs().subtract(4, 'day'),
            value: 6214,
        },
        {
            date: dayjs().subtract(5, 'day'),
            value: 1241,
        },
        {
            date: dayjs().subtract(6, 'day'),
            value: 2087,
        },
    ],
    h4: [
        {
            date: dayjs(),
            value: 9871,
        },
        {
            date: dayjs().subtract(1, 'day'),
            value: 7210,
        },
        {
            date: dayjs().subtract(2, 'day'),
            value: 1021,
        },
        {
            date: dayjs().subtract(3, 'day'),
            value: 5987,
        },
        {
            date: dayjs().subtract(4, 'day'),
            value: 3698,
        },
        {
            date: dayjs().subtract(5, 'day'),
            value: 6984,
        },
        {
            date: dayjs().subtract(6, 'day'),
            value: 9741,
        },
    ],
    h12: [
        {
            date: dayjs(),
            value: 5674,
        },
        {
            date: dayjs().subtract(1, 'day'),
            value: 952,
        },
        {
            date: dayjs().subtract(2, 'day'),
            value: 3658,
        },
        {
            date: dayjs().subtract(3, 'day'),
            value: 4587,
        },
        {
            date: dayjs().subtract(4, 'day'),
            value: 2698,
        },
        {
            date: dayjs().subtract(5, 'day'),
            value: 9812,
        },
        {
            date: dayjs().subtract(6, 'day'),
            value: 7421,
        },
    ],
    day: [
        {
            date: dayjs(),
            value: 9847,
        },
        {
            date: dayjs().subtract(1, 'day'),
            value: 7215,
        },
        {
            date: dayjs().subtract(2, 'day'),
            value: 412,
        },
        {
            date: dayjs().subtract(3, 'day'),
            value: 2877,
        },
        {
            date: dayjs().subtract(4, 'day'),
            value: 7984,
        },
        {
            date: dayjs().subtract(5, 'day'),
            value: 200,
        },
        {
            date: dayjs().subtract(6, 'day'),
            value: 5668,
        },
    ]
}

export default linechart_data
export const truncateMiddle = (str, start = 9, end = 9) => {
    return str.slice(0, start) + '...' + str.slice(str.length - end);
}

export const numFormatter = num => {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(2) + 'K';
    } else if (num > 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num < 900) {
        return num;
    }
}

export const commaFormatter = num => {
    return num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

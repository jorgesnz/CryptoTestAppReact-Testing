const layouts = {
    dashboard: {
        xl: [
            {i: 'wallet', x: 0, y: 0, w: 1, h: 4},
            {i: 'buy', x: 1, y: 0, w: 2, h: 2},
            {i: 'leaders', x: 3, y: 0, w: 1, h: 4},
            {i: 'actions', x: 1, y: 2, w: 1, h: 2},
            {i: 'notifications', x: 2, y: 2, w: 1, h: 2},
        ],
        lg: [
            {i: 'wallet', x: 0, y: 0, w: 1, h: 4},
            {i: 'buy', x: 0, y: 4, w: 2, h: 2},
            {i: 'leaders', x: 2, y: 0, w: 1, h: 4},
            {i: 'actions', x: 1, y: 0, w: 1, h: 2},
            {i: 'notifications', x: 1, y: 2, w: 1, h: 2},
        ],
        md: [
            {i: 'wallet', x: 0, y: 0, w: 1, h: 4},
            {i: 'buy', x: 0, y: 4, w: 2, h: 2},
            {i: 'leaders', x: 1, y: 0, w: 1, h: 4},
            {i: 'actions', x: 0, y: 6, w: 1, h: 2},
            {i: 'notifications', x: 1, y: 6, w: 1, h: 2},
        ],
        sm: [
            {i: 'wallet', x: 0, y: 0, w: 1, h: 4},
            {i: 'buy', x: 0, y: 4, w: 1, h: 3.8},
            {i: 'leaders', x: 0, y: 7.8, w: 1, h: 4},
            {i: 'actions', x: 0, y: 11.8, w: 1, h: 2},
            {i: 'notifications', x: 0, y: 13.8, w: 1, h: 2},
        ],
        xs: [
            {i: 'wallet', x: 0, y: 0, w: 1, h: 4},
            {i: 'buy', x: 0, y: 4, w: 1, h: 3.8},
            {i: 'leaders', x: 0, y: 7.8, w: 1, h: 4},
            {i: 'actions', x: 0, y: 11.8, w: 1, h: 2},
            {i: 'notifications', x: 0, y: 13.8, w: 1, h: 2},
        ],
        xxs: [
            {i: 'wallet', x: 0, y: 0, w: 1, h: 4},
            {i: 'buy', x: 0, y: 4, w: 1, h: 3.8},
            {i: 'leaders', x: 0, y: 7.8, w: 1, h: 3.98},
            {i: 'actions', x: 0, y: 11.78, w: 1, h: 3.15},
            {i: 'notifications', x: 0, y: 14.95, w: 1, h: 2},
        ]
    },
    actions: {
        xl: [
            {i: 'deposit', x: 0, y: 0, w: 2, h: 2},
            {i: 'withdraw', x: 2, y: 0, w: 1, h: 2},
            {i: 'market', x: 3, y: 0, w: 1, h: 4},
            {i: 'exchange', x: 0, y: 2, w: 1, h: 2},
            {i: 'stacking', x: 1, y: 2, w: 1, h: 2},
            {i: 'aml', x: 2, y: 2, w: 1, h: 2},
        ],
        lg: [
            {i: 'deposit', x: 0, y: 0, w: 2, h: 2},
            {i: 'withdraw', x: 0, y: 4, w: 1, h: 2},
            {i: 'market', x: 2, y: 0, w: 1, h: 4},
            {i: 'exchange', x: 0, y: 2, w: 1, h: 2},
            {i: 'stacking', x: 1, y: 2, w: 1, h: 2},
            {i: 'aml', x: 1, y: 4, w: 1, h: 2},
        ],
        md: [
            {i: 'deposit', x: 0, y: 0, w: 2, h: 2},
            {i: 'withdraw', x: 1, y: 2, w: 1, h: 2},
            {i: 'market', x: 0, y: 4, w: 1, h: 4},
            {i: 'exchange', x: 0, y: 2, w: 1, h: 2},
            {i: 'stacking', x: 1, y: 4, w: 1, h: 2},
            {i: 'aml', x: 1, y: 6, w: 1, h: 2},
        ],
        sm: [
            {i: 'deposit', x: 0, y: 0, w: 2, h: 3.58},
            {i: 'withdraw', x: 0, y: 3.58, w: 1, h: 2},
            {i: 'market', x: 0, y: 4, w: 1, h: 4},
            {i: 'exchange', x: 0, y: 7.58, w: 1, h: 2},
            {i: 'stacking', x: 0, y: 9.58, w: 1, h: 2},
            {i: 'aml', x: 0, y: 12.12, w: 1, h: 2},
        ],
        xs: [
            {i: 'deposit', x: 0, y: 0, w: 2, h: 3.58},
            {i: 'withdraw', x: 0, y: 3.58, w: 1, h: 2},
            {i: 'market', x: 0, y: 4, w: 1, h: 4},
            {i: 'exchange', x: 0, y: 7.58, w: 1, h: 2},
            {i: 'stacking', x: 0, y: 9.58, w: 1, h: 2.6},
            {i: 'aml', x: 0, y: 12.18, w: 1, h: 2},
        ],
        xxs: [
            {i: 'deposit', x: 0, y: 0, w: 2, h: 3.58},
            {i: 'withdraw', x: 0, y: 3.58, w: 1, h: 2},
            {i: 'market', x: 0, y: 4, w: 1, h: 4},
            {i: 'exchange', x: 0, y: 7.58, w: 1, h: 2},
            {i: 'stacking', x: 0, y: 9.58, w: 1, h: 2.6},
            {i: 'aml', x: 0, y: 12.18, w: 1, h: 2},
        ]
    },
    wallet: {
        xl: [
            {i: 'wallet', x: 0, y: 0, w: 1, h: 4},
            {i: 'deposit', x: 1, y: 0, w: 2, h: 2},
            {i: 'trade', x: 3, y: 0, w: 1, h: 3},
            {i: 'history', x: 1, y: 2, w: 1, h: 2},
            {i: 'referral', x: 2, y: 2, w: 1, h: 2},
            {i: 'banner', x: 3, y: 3, w: 1, h: 1},
        ],
        lg: [
            {i: 'wallet', x: 0, y: 0, w: 1, h: 4},
            {i: 'deposit', x: 0, y: 4, w: 2, h: 2},
            {i: 'trade', x: 2, y: 0, w: 1, h: 3},
            {i: 'history', x: 1, y: 0, w: 1, h: 2},
            {i: 'referral', x: 1, y: 2, w: 1, h: 2},
            {i: 'banner', x: 2, y: 3, w: 1, h: 1},
        ],
        md: [
            {i: 'wallet', x: 0, y: 0, w: 1, h: 4},
            {i: 'deposit', x: 0, y: 4, w: 2, h: 2},
            {i: 'trade', x: 1, y: 0, w: 1, h: 3},
            {i: 'history', x: 0, y: 6, w: 1, h: 2},
            {i: 'referral', x: 1, y: 6, w: 1, h: 2},
            {i: 'banner', x: 1, y: 3, w: 1, h: 1},
        ],
        sm: [
            {i: 'wallet', x: 0, y: 0, w: 1, h: 4},
            {i: 'deposit', x: 0, y: 4, w: 2, h: 3.58},
            {i: 'trade', x: 0, y: 7.58, w: 1, h: 3},
            {i: 'history', x: 0, y: 10.58, w: 1, h: 2},
            {i: 'referral', x: 0, y: 12.58, w: 1, h: 2},
            {i: 'banner', x: 0, y: 14.58, w: 1, h: 1},
        ],
        xs: [
            {i: 'wallet', x: 0, y: 0, w: 1, h: 4},
            {i: 'deposit', x: 0, y: 4, w: 2, h: 3.58},
            {i: 'trade', x: 0, y: 7.58, w: 1, h: 3},
            {i: 'history', x: 0, y: 10.58, w: 1, h: 2},
            {i: 'referral', x: 0, y: 12.58, w: 1, h: 2},
            {i: 'banner', x: 0, y: 14.58, w: 1, h: 1},
        ],
        xxs: [
            {i: 'wallet', x: 0, y: 0, w: 1, h: 4},
            {i: 'deposit', x: 0, y: 4, w: 2, h: 3.58},
            {i: 'trade', x: 0, y: 7.58, w: 1, h: 3},
            {i: 'history', x: 0, y: 10.58, w: 1, h: 2},
            {i: 'referral', x: 0, y: 12.58, w: 1, h: 2},
            {i: 'banner', x: 0, y: 14.58, w: 1, h: 1},
        ]
    },
    trade: {
        xl: [
            {i: 'market', x: 0, y: 0, w: 1, h: 4},
            {i: 'buy', x: 1, y: 0, w: 2, h: 2},
            {i: 'wallet', x: 3, y: 0, w: 1, h: 4},
            {i: 'top', x: 1, y: 2, w: 1, h: 2},
            {i: 'history', x: 2, y: 2, w: 1, h: 2},
        ],
        lg: [
            {i: 'market', x: 0, y: 0, w: 1, h: 4},
            {i: 'buy', x: 0, y: 4, w: 2, h: 2},
            {i: 'wallet', x: 2, y: 0, w: 1, h: 4},
            {i: 'top', x: 1, y: 0, w: 1, h: 2},
            {i: 'history', x: 1, y: 2, w: 1, h: 2},
        ],
        md: [
            {i: 'market', x: 0, y: 0, w: 1, h: 4},
            {i: 'buy', x: 0, y: 4, w: 2, h: 2},
            {i: 'wallet', x: 1, y: 0, w: 1, h: 4},
            {i: 'top', x: 0, y: 6, w: 1, h: 2},
            {i: 'history', x: 1, y: 6, w: 1, h: 2},
        ],
        sm: [
            {i: 'market', x: 0, y: 0, w: 1, h: 4},
            {i: 'buy', x: 0, y: 4, w: 2, h: 3.8},
            {i: 'wallet', x: 0, y: 7.8, w: 1, h: 4},
            {i: 'top', x: 0, y: 11.8, w: 1, h: 2},
            {i: 'history', x: 0, y: 13.8, w: 1, h: 2},
        ],
        xs: [
            {i: 'market', x: 0, y: 0, w: 1, h: 3.6},
            {i: 'buy', x: 0, y: 3.6, w: 2, h: 3.7},
            {i: 'wallet', x: 0, y: 8, w: 1, h: 4},
            {i: 'top', x: 0, y: 12, w: 1, h: 2},
            {i: 'history', x: 0, y: 18, w: 1, h: 2},
        ],
        xxs: [
            {i: 'market', x: 0, y: 0, w: 1, h: 3.6},
            {i: 'buy', x: 0, y: 3.6, w: 2, h: 3.7},
            {i: 'wallet', x: 0, y: 8, w: 1, h: 4},
            {i: 'top', x: 0, y: 12, w: 1, h: 2},
            {i: 'history', x: 0, y: 18, w: 1, h: 2},
        ]
    },
    nft: {
        xl: [
            {i: 'explore', x: 0, y: 0, w: 3, h: 1.5},
            {i: 'profile', x: 3, y: 0, w: 1, h: 4.4},
            {i: 'popular', x: 0, y: 1.42, w: 3, h: 3},
        ],
        lg: [
            {i: 'explore', x: 0, y: 0, w: 3, h: 1.42},
            {i: 'profile', x: 0, y: 1.42, w: 1, h: 3},
            {i: 'popular', x: 1, y: 1.42, w: 2, h: 3},
        ],
        md: [
            {i: 'explore', x: 1, y: 2.9, w: 1, h: 3.48},
            {i: 'profile', x: 0, y: 2.9, w: 1, h: 3.48},
            {i: 'popular', x: 0, y: 0, w: 2, h: 2.9},
        ],
        sm: [
            {i: 'explore', x: 0, y: 0, w: 1, h: 3.48},
            {i: 'profile', x: 0, y: 3.48, w: 1, h: 4},
            {i: 'popular', x: 0, y: 7.48, w: 1, h: 3},
        ],
        xs: [
            {i: 'explore', x: 0, y: 0, w: 1, h: 3.48},
            {i: 'profile', x: 0, y: 3.48, w: 1, h: 4},
            {i: 'popular', x: 0, y: 7.48, w: 1, h: 2.65},
        ],
        xxs: [
            {i: 'explore', x: 0, y: 0, w: 1, h: 3.64},
            {i: 'profile', x: 0, y: 3.64, w: 1, h: 4},
            {i: 'popular', x: 0, y: 7.64, w: 1, h: 2.65},
        ]
    },
    collections: {
        xl: [
            {i: 'categories', x: 0, y: 4, w: 1, h: 4.4},
            {i: 'mover', x: 1, y: 0, w: 1, h: 4.4},
            {i: 'collection', x: 2, y: 0, w: 1, h: 4.4},
            {i: 'popular', x: 3, y: 0, w: 1, h: 1.4},
            {i: 'item', x: 3, y: 1.4, w: 1, h: 3},
        ],
        lg: [
            {i: 'categories', x: 0, y: 4, w: 1, h: 4},
            {i: 'mover', x: 1, y: 0, w: 1, h: 4},
            {i: 'collection', x: 2, y: 0, w: 1, h: 4},
            {i: 'popular', x: 1, y: 4, w: 1, h: 1.4},
            {i: 'item', x: 0, y: 4, w: 1, h: 3},
        ],
        md: [
            {i: 'categories', x: 0, y: 4, w: 1, h: 4.3},
            {i: 'mover', x: 0, y: 0, w: 1, h: 4},
            {i: 'collection', x: 1, y: 0, w: 1, h: 4},
            {i: 'popular', x: 1, y: 4, w: 1, h: 1.4},
            {i: 'item', x: 1, y: 5.4, w: 1, h: 2.9},
        ],
        sm: [
            {i: 'categories', x: 0, y: 0, w: 1, h: 4},
            {i: 'mover', x: 0, y: 4, w: 1, h: 4},
            {i: 'collection', x: 1, y: 8, w: 1, h: 4},
            {i: 'popular', x: 1, y: 12, w: 1, h: 1.4},
            {i: 'item', x: 1, y: 13.4, w: 1, h: 3},
        ],
        xs: [
            {i: 'categories', x: 0, y: 0, w: 1, h: 4},
            {i: 'mover', x: 0, y: 4, w: 1, h: 4},
            {i: 'collection', x: 1, y: 8, w: 1, h: 4},
            {i: 'popular', x: 1, y: 12, w: 1, h: 1.4},
            {i: 'item', x: 1, y: 13.4, w: 1, h: 2.6},
        ],
        xxs: [
            {i: 'categories', x: 0, y: 0, w: 1, h: 4.05},
            {i: 'mover', x: 0, y: 4.05, w: 1, h: 4},
            {i: 'collection', x: 1, y: 8, w: 1, h: 4},
            {i: 'popular', x: 1, y: 12, w: 1, h: 1.4},
            {i: 'item', x: 1, y: 13.4, w: 1, h: 2.6},
        ]
    }
}

export default layouts
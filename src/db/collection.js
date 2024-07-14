import cover from '@assets/collection/cover.webp';
import avatar from '@assets/collection/avatar.webp';
import item1 from '@assets/collection/item1.webp';
import item2 from '@assets/collection/item2.webp';
import item3 from '@assets/collection/item3.webp';
import item4 from '@assets/collection/item4.webp';
import item5 from '@assets/collection/item5.webp';
import item6 from '@assets/collection/item6.webp';
import item7 from '@assets/collection/item7.webp';
import item8 from '@assets/collection/item8.webp';

const collection = {
    main: {
        cover: cover,
        name: 'Force Coin',
        description: `Justo donec enim diam vulputate ut pharetra. Ut placerat  pellentesque dignissim.
                      Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt.`,
        author: {
            name: 'Avin Goldbreak',
            avatar: avatar
        }
    },
    data: {
        floor: 2.79,
        high: 30.00,
        total: 12782,
        issue: 10000
    },
    items: [
        {
            id: 'item-1',
            name: 'Insight',
            image: item1,
            price: 3.50,
            collection: 'Force Coin',
            isListed: false,
        },
        {
            id: 'item-2',
            name: 'Otherworldly',
            image: item2,
            price: 3.50,
            collection: 'Force Coin',
            isListed: false,
        },
        {
            id: 'item-3',
            name: 'Retro',
            image: item3,
            price: 3.50,
            collection: 'Force Coin',
            isListed: false,
        },
        {
            id: 'item-4',
            name: 'Hello World',
            image: item4,
            price: 3.50,
            collection: 'Force Coin',
            isListed: false,
        },
        {
            id: 'item-5',
            name: 'Ghost!',
            image: item5,
            price: 3.50,
            collection: 'Force Coin',
            isListed: false,
        },
        {
            id: 'item-6',
            name: 'Future',
            image: item6,
            price: 3.50,
            collection: 'Force Coin',
            isListed: false,
        },
        {
            id: 'item-7',
            name: 'Toxic',
            image: item7,
            price: 3.50,
            collection: 'Force Coin',
            isListed: false,
        },
        {
            id: 'item-8',
            name: 'My Unicorn',
            image: item8,
            price: 3.50,
            collection: 'Force Coin',
            isListed: false,
        }
    ]
}

export default collection
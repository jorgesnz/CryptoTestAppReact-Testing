import avatar from '@assets/mover/avatar.webp';
import item1 from '@assets/mover/item1.webp';
import item2 from '@assets/mover/item2.webp';
import item3 from '@assets/mover/item3.webp';
import item4 from '@assets/mover/item4.webp';
import item5 from '@assets/mover/item5.webp';
import item6 from '@assets/mover/item6.webp';
import item7 from '@assets/mover/item7.webp';
import item8 from '@assets/mover/item8.webp';
import collection1 from '@assets/mover/collection1.webp';
import collection2 from '@assets/mover/collection2.webp';
import collection3 from '@assets/mover/collection3.webp';
import collection4 from '@assets/mover/collection4.webp';
import collection5 from '@assets/mover/collection5.webp';
import collection6 from '@assets/mover/collection6.webp';
import collection7 from '@assets/mover/collection7.webp';
import collection8 from '@assets/mover/collection8.webp';
import collection9 from '@assets/mover/collection9.webp';
import collection10 from '@assets/mover/collection10.webp';
import collection11 from '@assets/mover/collection11.webp';
import collection12 from '@assets/mover/collection12.webp';

const mover = {
    name: 'aGEnSMAc',
    avatar: avatar,
    joined: '2022-05-01',
    bio: `Justo donec enim diam vulputate ut pharetra. Ut placerat orci nulla pellentesque. Laoreet
          suspendisse interdum consectetur libero id faucibus nisl tincidunt.`,
    items: [
        {
            id: 'item-1',
            name: 'Monkey #1',
            image: item1,
            price: 29.98,
            collection: 'Monkey Business',
            isListed: true,
        },
        {
            id: 'item-2',
            name: 'Monkey #2',
            image: item2,
            price: 14.22,
            collection: 'Monkey Business',
            isListed: false,
        },
        {
            id: 'item-3',
            name: 'Monkey #3',
            image: item3,
            price: 17.34,
            collection: 'Monkey Business',
            isListed: false,
        },
        {
            id: 'item-4',
            name: 'Monkey #4',
            image: item4,
            price: 9.99,
            collection: 'Monkey Business',
            isListed: false,
        },
        {
            id: 'item-5',
            name: 'Monkey #5',
            image: item5,
            price: 43.19,
            collection: 'Monkey Business',
            isListed: false,
        },
        {
            id: 'item-6',
            name: 'Monkey #6',
            image: item6,
            price: 3.50,
            collection: 'Monkey Business',
            isListed: false,
        },
        {
            id: 'item-7',
            name: 'Monkey #7',
            image: item7,
            price: 33.02,
            collection: 'Monkey Business',
            isListed: false,
        },
        {
            id: 'item-8',
            name: 'Monkey #8',
            image: item8,
            price: 39.99,
            collection: 'Monkey Business',
            isListed: false,
        }
    ],
    collections: [
        {
            id: 'collection-1',
            name: 'Pastel Dreams',
            image: collection1,
            description: 'Fabulous collection of beautiful 10 NFTs',
            avatar: avatar
        },
        {
            id: 'collection-2',
            name: 'Think Pink',
            image: collection2,
            description: 'Luxury collection of 70 stunning NFTs',
            avatar: avatar
        },
        {
            id: 'collection-3',
            name: 'All we need',
            image: collection3,
            description: 'Amazing collection of 22 mesmerizing NFTs',
            avatar: avatar
        },
        {
            id: 'collection-4',
            name: 'Abstract Art',
            image: collection4,
            description: 'Wonderful collection of 125 exclusive NFTs',
            avatar: avatar
        },
        {
            id: 'collection-5',
            name: 'Gold Rush',
            image: collection5,
            description: 'Hyped collection of 10 futuristic NFTs',
            avatar: avatar
        },
        {
            id: 'collection-6',
            name: 'The Asylum',
            image: collection6,
            description: 'Minimal collection of 23 simple NFTs',
            avatar: avatar
        },
        {
            id: 'collection-7',
            name: 'Lava Lamp',
            image: collection7,
            description: 'Hyped collection of 97 beautiful NFTs',
            avatar: avatar
        },
        {
            id: 'collection-8',
            name: 'Volcano',
            image: collection8,
            description: 'Dream collection of 56 memorable NFTs',
            avatar: avatar
        },
        {
            id: 'collection-9',
            name: 'Mango Mania',
            image: collection9,
            description: 'Fabulous collection of 10 NFTs',
            avatar: avatar
        },
        {
            id: 'collection-10',
            name: 'Hot Sand',
            image: collection10,
            description: 'Amazing collection of 22 mesmerizing NFTs',
            avatar: avatar
        },
        {
            id: 'collection-11',
            name: 'Logical Fallacies',
            image: collection11,
            description: 'Wonderful collection of 125 exclusive NFTs',
            avatar: avatar
        },
        {
            id: 'collection-12',
            name: 'NorWay',
            image: collection12,
            description: 'Hyped collection of 10 futuristic NFTs',
            avatar: avatar
        }
    ],
}

export default mover
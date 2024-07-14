import img1 from '@assets/nft/popular/item1.webp';
import img2 from '@assets/nft/popular/item2.webp';
import img3 from '@assets/nft/popular/item3.webp';
import img4 from '@assets/nft/popular/item4.webp';
import img5 from '@assets/nft/popular/item5.webp';
import img6 from '@assets/nft/popular/item6.webp';
import img7 from '@assets/nft/popular/item7.webp';
import avatar1 from '@assets/nft/popular/avatar1.webp';
import avatar2 from '@assets/nft/popular/avatar2.webp';
import avatar3 from '@assets/nft/popular/avatar3.webp';

import dayjs from 'dayjs';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
               nunc nisl aliquam lorem, nec ultricies nisl nisl sed nisl. Sed euismod, nisl nec ultricies lacinia,
               nunc nisl aliquam lorem, nec ultricies nisl nisl sed nisl. Sed euismod, nisl nec ultricies lacinia,
               nunc nisl aliquam lorem, nec ultricies nisl nisl sed nisl. Sed euismod, nisl nec ultricies lacinia,
               lorem, nec ultricies nisl nisl sed nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam lorem.`;

const history = [
    {
        name: 'Loren A.',
        image: avatar1,
        text: 'bid cancelled',
        date: dayjs().subtract(2, 'hours')
    },
    {
        name: 'Nick Doe',
        image: avatar2,
        text: 'bid cancelled',
        date: dayjs().subtract(3, 'hours')
    },
    {
        name: 'Cherry Boo',
        image: avatar3,
        text: 'listed for sale',
        date: dayjs().subtract(7, 'hours')
    }
];

const popular_nft = [
    {
        id: 'item-1',
        name: 'Oh My Deer',
        image: img1,
        price: 22.77,
        author: 'Lisa Mayfield',
        description: lorem,
        history
    },
    {
        id: 'item-2',
        name: 'Destiny',
        image: img2,
        price: 12.36,
        author: 'Willie Nelson',
        description: lorem,
        history
    },
    {
        id: 'item-3',
        name: 'Otherworldly',
        image: img3,
        price: 41.71,
        author: 'George Strait',
        description: lorem,
        history
    },
    {
        id: 'item-4',
        name: 'Purple Mystery',
        image: img4,
        price: 33.33,
        author: 'Johnny Cash',
        description: lorem,
        history,
    },
    {
        id: 'item-5',
        name: 'Catch The Light',
        image: img5,
        price: 99.14,
        author: 'Patsy Cline',
        description: lorem,
        history
    },
    {
        id: 'item-6',
        name: 'Under The Sea',
        image: img6,
        price: 10.54,
        author: 'Kate Lee',
        description: lorem,
        history
    },
    {
        id: 'item-7',
        name: 'Cyber Beauty',
        image: img7,
        price: 174.22,
        author: 'Linda Lee',
        description: lorem,
        history,
        isMostPopular: true
    }
]

export default popular_nft
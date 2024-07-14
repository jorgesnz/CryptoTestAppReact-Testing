// utils
import {lazy, memo} from 'react';

// hooks
import {useState, useRef, useEffect} from 'react';
import useMeasure from 'react-use-measure';

// data placeholder
import collections from '@db/collections';

// components
import Spring from '@components/Spring';
import ScrollContainer from '@components/ScrollContainer';
const BrowseCategories = lazy(() => import('@widgets/BrowseCategories'));
const CollectionItem = lazy(() => import('@components/CollectionItem'));

const CategorizedCollections = () => {
    const [category, setCategory] = useState('all');
    const [ref, {height}] = useMeasure();
    const containerRef = useRef();

    const filteredCollections = collections.filter(collection => {
        if (category === 'all') return true;
        return collection.categories.includes(category);
    });

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo(0, 0);
        }
    }, [category]);

    return (
        <Spring className="widget">
            <div className="d-flex flex-column g-16 h-100">
                <div ref={ref}>
                    <BrowseCategories variant="filters" active={category} onClick={setCategory} />
                </div>
                <ScrollContainer height={height + 14} bg="body-bg">
                    <div className="track d-grid col-2 g-16" ref={containerRef}>
                        {
                            filteredCollections.map((item, i) =>
                                <CollectionItem key={item.id} item={item} index={i} withBorder={false} />
                            )
                        }
                    </div>
                </ScrollContainer>
            </div>
        </Spring>
    )
}

export default memo(CategorizedCollections);
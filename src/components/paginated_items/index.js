import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import TourItem from '../tour_item';
import './paginated_item.scss';

function PaginatedItems({ itemsPerPage, data, selecter }) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        setItemOffset(0);
    }, [selecter]);
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };


    return (
        <>
            <TourItem currentItems={currentItems} />
            {pageCount > 1 && (
                <div className="box-panagition">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    />
                </div>
            )}
        </>
    );
}

export default PaginatedItems;
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import style from './search.module.scss';
// import TourItem from '~/components/tour_item';
import { toursSearchSelecter } from '~/redux/tour/tour_selecter';
import PaginatedItems from '~/components/paginated_items';

const cx = classNames.bind(style);

function Search() {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const textSearch = searchParams.get("q");
    const toursSearch = useSelector(toursSearchSelecter);

    useEffect(() => {
        if (textSearch.trim() !== '') {
            dispatch({
                type: "fetchSearchTours",
                payload: { textSearch: textSearch }
            })
        }
    }, [dispatch, textSearch]);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("box")}>
                <h1 className={cx("title-page")}>Từ khoá "{textSearch}" có {toursSearch.length} kết quả được tìm thấy</h1>
                <div className={cx("box-item")}>
                    <PaginatedItems
                        data={toursSearch}
                        itemsPerPage={8}
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;
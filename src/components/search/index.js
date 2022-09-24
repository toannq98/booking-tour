
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import style from './search.module.scss';
import ResultSearchItem from '~/components/result_search_item';
import { Box as SearchPopup } from '~/components/popup';
import { LoadingIcon, SearchIcon } from '../icons';
import { toursSearchSelecter } from '~/redux/tour/tour_selecter';


const cx = classNames.bind(style);

function Search() {
    const dispatch = useDispatch();

    const [textSearch, setTextSearch] = useState('');
    const [showResult, setShowResult] = useState(true);

    const toursSearch = useSelector(toursSearchSelecter);

    const handleChangeTextSearch = (valueSeach) => {
        setTextSearch(valueSeach);
    }
    const handleClearText = () => {
        setShowResult(false);
        setTextSearch('');
    }
    useEffect(() => {
        if (!textSearch.trim()) {
            dispatch({
                type: "tour/loadTourSearchEmpty",
                payload: { tours: [] }
            })
            return;
        }
        dispatch({
            type: "fetchSearchTours",
            payload: { textSearch: textSearch }
        })
    }, [dispatch, textSearch]);

    return (
        <Tippy
            interactive={true}
            visible={showResult && toursSearch.length > 0}
            placement="bottom"
            onClickOutside={() => setShowResult(false)}
            render={attrs => (
                <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                    <SearchPopup className={cx("popup-style-2")}>
                        <h3 className={cx("title-search-result")}>Các điểm đến</h3>
                        <div className={cx("box-item")}>
                            {toursSearch.map(tour => (
                                <Link key={tour.id} to={`/tour-detail/${tour.id}`}>
                                    <ResultSearchItem tour={tour} />
                                </Link>
                            ))}
                        </div>
                    </SearchPopup>
                </div>
            )}
        >
            <div className={cx("wrapper")}>
                <div className={cx("group-input")}>
                    <SearchIcon width="1.25rem" height="1.25rem" />
                    <input
                        value={textSearch}
                        onChange={(e) => handleChangeTextSearch(e.target.value)}
                        placeholder="Nơi bạn muốn đi?"
                        onFocus={() => setShowResult(true)}
                    />
                    {textSearch && (
                        <span
                            className={cx("clear")}
                            onClick={handleClearText}
                        >
                            Clear
                        </span>
                    )}
                    <span className={cx("loading")}>
                        <LoadingIcon />
                    </span>
                </div>

                <button><Link to={`/search?q=${textSearch}`}>Tìm kiếm</Link></button>
            </div>
        </Tippy>
    );
}

export default Search;
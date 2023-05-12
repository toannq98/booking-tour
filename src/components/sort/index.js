import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";
// import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import style from "./sort.module.scss";
import Button from "~/components/button";
import { useState } from 'react';
import { Box as SortPopup } from '~/components/popup';
import { SortIcon } from '../icons';

const cx = classNames.bind(style);

function Sort({ handleLoadSortTours }) {

    // const dispatch = useDispatch();

    const [showPopup, setShowPopup] = useState(false);
    const [typeCurrent, setTypeCurrent] = useState("tour hot");

    const sortType = [
        "Giá giảm dần",
        "Giá tăng dần",
        "Tour hot"
    ];

    const handleSellectSortType = (type) => {
        setTypeCurrent(type);
        setShowPopup(false);
    }
    useEffect(() => {
        handleLoadSortTours(typeCurrent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [typeCurrent]);

    return (
        <Tippy
            interactive={true}
            visible={showPopup}
            placement="bottom-end"
            onClickOutside={() => setShowPopup(false)}
            render={attrs => (
                <div className={cx("list-sort")} tabIndex="-1" {...attrs}>
                    <SortPopup>
                        <ul>
                            {sortType.map((type, index) => (
                                <li key={index}>
                                    <button onClick={() => handleSellectSortType(type)}>{type}</button>
                                </li>
                            ))}
                        </ul>
                    </SortPopup>
                </div>
            )}
        >
            <Button onClick={() => setShowPopup(!showPopup)}>
                {typeCurrent} <SortIcon />
            </Button>

        </Tippy>
    );
}

export default Sort;
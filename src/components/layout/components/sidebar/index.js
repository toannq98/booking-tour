import classNames from "classnames/bind";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import style from './sidebar.module.scss';
import { categoriesSelecter } from '~/redux/tour/tour_selecter';
import { CheckIcon } from "~/components/icons";


const cx = classNames.bind(style);

function SideBar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [checkedCate, setCheckedCate] = useState([]);
    const [checkedPrice, setCheckedPrice] = useState([]);
    const listCate = useSelector(categoriesSelecter);
    const { cateId } = useParams();

    let index;
    let listCateFilter = [];

    if (listCate.length > 0) {
        index = listCate[0].subCategory.findIndex(cate => cate.id === cateId);
        if (index !== -1) {
            listCateFilter = listCate[0].subCategory[index].subCategory;
        } else {
            navigate("/does-not-exist");
        }
    }

    const PRICE = [
        {
            id: "1",
            from: 0,
            to: 2000000
        },
        {
            id: "2",
            from: 2000000,
            to: 4000000
        },
        {
            id: "3",
            from: 4000000,
            to: 6000000
        },
        {
            id: "4",
            from: 6000000,
            to: 8000000
        },
        {
            id: "5",
            from: 8000000,
            to: 16000000
        }
    ];

    useEffect(() => {
        dispatch({ type: "fetchCategories" });
    }, [dispatch]);

    useEffect(() => {
        if (checkedCate.length > 0 || checkedPrice.length > 0) {
            const pramscate = checkedCate.map(el => 'idCate=' + el);
            const pramsPrice = checkedPrice.map(el => {
                const price = PRICE.find(p => p.id === el);
                return `price_gte=${price.from}&price_lte=${price.to}`;
            });
            const prams = [...pramscate, ...pramsPrice];
            dispatch({ type: "fetchFilterToursByCate", payload: { prams: prams.join("&") } });
        } else {
            dispatch({ type: "fetchToursCatePage", payload: { id: cateId } });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, cateId, checkedCate.length, checkedPrice.length]);

    const handleFilterByCate = (id) => {
        setCheckedCate(prev => {
            if (prev.includes(id)) {
                return prev.filter(el => el !== id);
            } else {
                return [...prev, id];
            }
        });

    }
    const handleFilterByPrice = (id) => {
        setCheckedPrice(prev => {
            if (prev.includes(id)) {
                return prev.filter(el => el !== id);
            } else {
                return [...prev, id];
            }
        });
    }
    return (
        <div className={cx("wrapper")}>
            <div className={cx("block-filter")}>
                <h3 className={cx("filter-header")}>Filter</h3>
                <div className={cx("filter-body")}>
                    <div className={cx("filter-by-category")}>
                        <h4 className={cx("filter-title")}>Category</h4>
                        <ul>
                            {listCateFilter.map(cate => (
                                <li key={cate.id}>
                                    <span className={cx("custom-checkbox")}>
                                        <input
                                            type="checkbox"
                                            checked={checkedCate.includes(cate.id)}
                                            onChange={() => handleFilterByCate(cate.id)}
                                        />
                                        <span>
                                            <CheckIcon />
                                        </span>
                                    </span>
                                    <span>{cate.subCategoryName}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx("filter-by-price")}>
                        <h4 className={cx("filter-title")}>Price</h4>
                        <ul>
                            {PRICE.map((el, i) => (
                                <li key={i}>
                                    <span className={cx("custom-checkbox")}>
                                        <input
                                            type="checkbox"
                                            checked={checkedPrice.includes(el.id)}
                                            onChange={() => handleFilterByPrice(el.id)}
                                        />
                                        <span>
                                            <CheckIcon />
                                        </span>
                                    </span>
                                    <span>{`${el.from} - ${el.to} (VNĐ)`}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
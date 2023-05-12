// import Slider from "react-slick";
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
import { useState, useEffect } from 'react';

import { history } from '~/utils';
import style from './tour_item.module.scss';
import FormatPrice from '../format_price';

const cx = classNames.bind(style);


function TourItem({ currentItems }) {
    const [itemId, setItemId] = useState();
    useEffect(()=>{
        if (itemId) {
            history.push(`/tour-detail/${itemId}`);
        }
    }, [itemId]);
    return (
        <div className={cx("wrapper")}>
            {currentItems && currentItems.map(item => (
                <div key={item.id} className={cx("item")} onClick={()=>setItemId(item.id)}>
                    <div className={cx("inner")}>
                        <div className={cx("image")}>
                            <img src={item.images[0]} alt={item.tourName} />
                        </div>
                        <div className={cx("meta")}>
                            <h4 className={cx("tour-name")}>
                                <Link to={`/tour-detail/${item.id}`}>{item.tourName}</Link>
                            </h4>
                            <p>Khởi hành từ: <span>{item.departureFrom}</span></p>
                            <p>Thời gian: <span>{item.time}</span></p>
                            <p>Giá từ: <span><FormatPrice>{item.price}</FormatPrice> VNĐ</span></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TourItem;
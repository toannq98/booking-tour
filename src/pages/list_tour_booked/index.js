import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import style from './list_tour_booked.module.scss';
import { toursBookedSelecter } from '~/redux/tour/tour_selecter';

const cx = classNames.bind(style);

function ListTourBooked() {
    const dispatch = useDispatch()
    const toursBooked = useSelector(toursBookedSelecter);

    useEffect(() => {
        dispatch({
            type: "tour/fetchToursBooked"
        });
    }, [dispatch]);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("box")}>
                <div className={cx("inner")}>
                    <div className={cx("page-header")}>
                        <h1>Lịch sử book tour</h1>
                    </div>
                    <div className={cx("page-content")}>

                        {toursBooked.map(el => (
                            <Link className={cx("content-block")} key={el.id} to={`/tour-booked-detail/${el.id}`}>
                                <h3>{el.tourName}</h3>
                                <span>{el.time}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListTourBooked;
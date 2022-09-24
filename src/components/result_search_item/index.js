import classNames from "classnames/bind";

import style from './result_search_item.module.scss'
import Image from "../image";

const cx = classNames.bind(style);

function ResultSearchItem({ tour }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("image")}>
                <Image src={tour.images[0]} alt={tour.tourName} />
            </div>
            <div className={cx("text")}>
                <h4>{tour.tourName}</h4>
            </div>
        </div>
    );
}

export default ResultSearchItem;
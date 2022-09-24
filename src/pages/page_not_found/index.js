import classNames from "classnames/bind";
// import { Link } from "react-router-dom";
import style from './page_not_found.module.scss';
import ImagePageNotFound from '~/assets/images/404.jpeg';

const cx = classNames.bind(style);

function PageNotFound() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("box")}>
                <div className={cx("inner")}>
                    <img src={ImagePageNotFound} alt="page not found" />
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
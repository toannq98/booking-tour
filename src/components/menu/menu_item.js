import classNames from "classnames/bind";
import { Link, useLocation } from "react-router-dom";

import style from './menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ data }) {

    const location = useLocation();

    return (
        <li className="nav-item">
            <Link
                className={cx("nav-link", {
                    active: location.pathname === data.to
                })}
                to={data.to}
            >
                {data.title}
            </Link>
        </li>
    );
}

export default MenuItem;
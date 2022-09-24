import classNames from "classnames/bind";

import style from './menu_popup.module.scss';
import MenuItem from "./menu_popup_item";

const cx = classNames.bind(style);

function MenuPopup({ items = [] }) {

    return (
        <div className={cx("wrapper")}>
            <ul className="navbar-nav">
                {items.map((item, index) => (
                    <MenuItem
                        key={index}
                        data={item}
                    />
                ))}
            </ul>
        </div>
    );
}

export default MenuPopup;
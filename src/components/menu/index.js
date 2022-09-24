import classNames from "classnames/bind";

import style from './menu.module.scss';
import MenuItem from "./menu_item";

const cx = classNames.bind(style);

function Menu({ items = [] }) {

    return (
        <div className={cx("wrapper")}>
            <nav className="navbar navbar-expand-lg">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {items.map((item, index) => (
                            <MenuItem
                                key={index}
                                data={item}
                            />
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Menu;
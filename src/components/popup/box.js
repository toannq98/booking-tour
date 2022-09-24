import classNames from "classnames/bind";
import style from './popup.module.scss';

const cx = classNames.bind(style);

function Box({ children, className }) {
    return (
        <div className={cx("box", className)}>
            {children}
        </div>
    );
}

export default Box;
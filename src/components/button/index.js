import style from './button.module.scss';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';

const cx = classNames.bind(style);

const Button = forwardRef(({ children, onClick }, ref) => {
    const classes = cx("wrapper");
    return (
        <button
            type="submit"
            className={classes}
            ref={ref}
            onClick={onClick}
        >
            <span>{children}</span>
        </button>
    );
});

export default Button;
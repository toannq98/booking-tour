import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from './account_manage.module.scss';

const cx = classNames.bind(style);

function AccountManage() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("box")}>
                <div className={cx("inner")}>
                    <div className={cx("page-header")}>
                        <h1>Quản lý tải khoản</h1>
                    </div>
                    <div className={cx("page-content")}>
                        <ul className={cx("wr-block")}>
                            <li>
                                <Link to="/change-account-infor">
                                    <div className={cx("block")}>
                                        <h3>Sửa thông tin tài khoản</h3>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/list-tour-booked">
                                    <div className={cx("block")}>
                                        <h3>Lịch sử book tour</h3>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountManage;
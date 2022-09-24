import classNames from 'classnames/bind';
import style from './sidebar_admin.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function SidebarAdmin() {

    return (
        <div className={cx("wrapper")}>
            <ul>
                <li>
                    <Link to="/admin/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/admin/manage-user">Manage User</Link>
                </li>
                <li>
                    <Link to="/admin/manage-tour">Manage Tour</Link>
                </li>
                <li>
                    <Link to="/admin/manage-booking-requests">Manage booking requests</Link>
                </li>
                <li>
                    <Link to="/admin/manage-user-review">Manage user reviews</Link>
                </li>
                <li>
                    <Link to="/admin/manage-category">Manage category</Link>
                </li>
            </ul>
        </div>
    );
}

export default SidebarAdmin;
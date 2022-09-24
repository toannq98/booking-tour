import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import SidebarAdmin from "../components/sidebar_admin";
import style from './admin_default_layout.module.scss';
// import { history } from "~/utils";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { userActions } from "~/redux/user/user_slice";
import { useEffect } from "react";
import { loginAdminSelecter } from "~/redux/user/user_selecter";
// import Button from "~/components/button";

const cx = classNames.bind(style);

function AdminDefaultLayout({ children }) {

    const dispatch = useDispatch();
    const loginAdmin = useSelector(loginAdminSelecter);
    useEffect(() => {
        dispatch({ type: "user/fetchAccoutAdmin" });
        dispatch({ type: "user/checkAdminLogin" });
    }, [dispatch]);

    const handleLogoutAdmin = () => {
        console.log('toan');
    }

    return (
        <>
            <div className={cx("header")}>
                <div className={cx("logo")}>
                    <h1><Link to="/dashboard">BookingTour</Link></h1>
                </div>
                <div className={cx("account")}>
                    <h3>Welcome {loginAdmin.currentUser && loginAdmin.currentUser.email}</h3>
                    <button onClick={handleLogoutAdmin}>Đăng xuất</button>
                </div>
            </div>
            <div className={cx("sidebar")}>
                <SidebarAdmin />
            </div>
            <div className={cx("content")}>
                {children}
            </div>
        </>
    );
}

export default AdminDefaultLayout;
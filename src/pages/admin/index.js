import classNames from "classnames/bind";
import style from './admin.module.scss';
import { useEffect, useState } from "react";
import Button from "~/components/button";
import { useDispatch, useSelector } from "react-redux";
import { loginAdminSelecter } from "~/redux/user/user_selecter";
import { history } from '~/utils';
import { userActions } from "~/redux/user/user_slice";
import { LoadingIcon } from "~/components/icons";
// import { userActions } from "~/redux/user/user_slice";

const cx = classNames.bind(style);

function Admin() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginAdmin = useSelector(loginAdminSelecter);
    useEffect(() => {
        dispatch({ type: "user/fetchAccoutAdmin" });

    }, [dispatch]);



    const handleSubmitLoginAdmin = (event) => {
        event.preventDefault();
        dispatch(userActions.loginAdmin());
        const loginAdminPromise = new Promise((resolve, reject) => {
            if (email === loginAdmin.currentUser.email && password === loginAdmin.currentUser.password) {
                setTimeout(() => {
                    resolve({ email, password });

                }, 500);
            } else {
                setTimeout(() => {
                    reject("Sai tài khoản hoặc mật khẩu. Vui lòng kiểm tra lại!");
                }, 1000);

            }
        })
        loginAdminPromise.then(data => {
            localStorage.setItem("loginAdmin", JSON.stringify({
                email,
                password,
            }));
            history.push("/admin/dashboard");
        }).catch(err => {
            dispatch(userActions.loginAdminFailed(err));
        });
    }


    return (
        <div className={cx("wrapper")}>
            <div className={cx("box")}>
                {loginAdmin.error && (
                    <p className={cx("error-admin-login")}>{loginAdmin.error}</p>
                )}
                <div className={cx("inner")}>
                    <div className={cx("header")}>
                        <div className={cx("logo")}>
                            <h1>Login to admin</h1>
                        </div>
                    </div>
                    <div className={cx("body")}>
                        <form onSubmit={(e) => handleSubmitLoginAdmin(e)}>
                            <div className={cx("group-field")}>
                                <label htmlFor="adminEmail">Email:</label>
                                <input
                                    id="adminEmail"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={cx("group-field")}>
                                <label htmlFor="adminPassword">Password:</label>
                                <input
                                    id="adminPassword"
                                    placeholder="············"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <Button>Đăng nhập {loginAdmin.loading && <LoadingIcon width="20px" height="20px" />}</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
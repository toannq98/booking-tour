import classNames from "classnames/bind";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import Button from "~/components/button";
import { ErrorSignIcon, LoadingIcon } from "~/components/icons";
import { loginSelecter } from "~/redux/user/user_selecter";
import style from './signin.module.scss';
// import { useFormik } from 'formik';
// import * as yup from 'yup';

const cx = classNames.bind(style);

function SignIn() {

    const dispatch = useDispatch();
    const login = useSelector(loginSelecter);
    // console.log(loginLoading);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClickLogin = (event) => {
        event.preventDefault();
        dispatch({
            type: "user/handleLogin",
            payload: {
                email,
                password
            }
        });
    }

    return (
        <div className={cx("wrapper")}>
            <div className={cx("box")}>
                <div className={cx("inner")}>
                    <div className={cx("page-header")}>
                        <h1>Đăng nhập vào tài khoản của bạn</h1>
                        {login.error && (
                            <p className={cx("box-login-error")}>
                                <ErrorSignIcon />
                                <span>{login.error}</span>
                            </p>
                        )}
                    </div>
                    <div className={cx("page-body")}>

                        <form onSubmit={(e) => handleClickLogin(e)}>
                            <div className="form-group">
                                <input
                                    value={email}
                                    placeholder=" "
                                    type="text"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={cx("form-control")}
                                />
                                <label className={cx("form-control-label")}>Email</label>
                            </div>
                            <div className="form-group">
                                <input
                                    value={password}
                                    placeholder=" "
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={cx("form-control")}
                                />
                                <label className={cx("form-control-label")}>Mật khẩu</label>
                            </div>
                            <div className={cx("form-footer")}>
                                <Button>
                                    Đăng nhập {login.loading && <LoadingIcon width="20px" height="20px" />}
                                </Button>
                            </div>
                        </form>
                        <hr />
                        <p>Bạn chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SignIn;
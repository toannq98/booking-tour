// import axios from "axios";
import classNames from "classnames/bind";
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import * as yup from 'yup';
import Tippy from "@tippyjs/react/headless";

import { birthdayTimes, currentDay, currentMonth, currentYear } from '~/birthday_times';
import Button from "~/components/button";
import style from './register.module.scss';
// import images from "~/assets/images";
const cx = classNames.bind(style);

function Register() {

    const dispatch = useDispatch();

    const [day, setDay] = useState(`${currentDay}`);
    const [month, setMonth] = useState(`${currentMonth}`);
    const [year, setYear] = useState(`${currentYear}`);
    const time = `${month}/${day}/${year}`;

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            gender: ""
        },
        validationSchema: yup.object({
            firstName: yup.string().required("Tên bạn là gì?"),
            lastName: yup.string().required("Tên bạn là gì?"),
            email: yup.string().required("Vui lòng nhập email").email("Vui lòng nhập lại địa chỉ email hợp lệ"),
            password: yup.string().required("Vui lòng nhập mật khẩu").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, "Vui lòng nhập mật khẩu hợp lệ: Tối thiểu tám và tối đa 20 ký tự, ít nhất một ký tự hoa, một ký tự thường, một số và một ký tự đặc biệt"),
            gender: yup.string().required("Vui lòng chọn giới tính")

        }),
        onSubmit: values => {
            dispatch({
                type: "user/fetchCreateUser",
                payload: {
                    params: {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        password: values.password,
                        sex: values.gender,
                        dateOfBirth: time
                    }
                }
            });
            // formik.touched.lastName = true;
        },
    });
    const SEXS = [
        "Nữ",
        "Nam",
        "Khác"
    ];


    return (
        <div className={cx("wrapper")}>
            <div className={cx("box")}>
                <div className={cx("inner")}>
                    <div className={cx("page-header")}>
                        <h1>Đăng ký một tài khoản</h1>
                        <p>Nhanh chóng và dễ dàng.</p>
                    </div>
                    <div className={cx("page-body")}>
                        <p><span>Bạn đã có tài khoản?</span> <Link to="/sign-in">Đăng nhập ngay</Link></p>
                        <form onSubmit={formik.handleSubmit}>
                            <div className={cx("box-name")}>
                                <Tippy
                                    interactive={true}
                                    placement="left"
                                    visible={formik.touched.firstName && formik.errors.firstName ? true : false}
                                    appendTo={document.body}
                                    render={attrs => (
                                        <div className={cx("tippy-box")} tabIndex="-1" {...attrs}>
                                            <span className={cx("msg-err")}>{formik.errors.firstName}</span>
                                        </div>
                                    )}
                                >
                                    <div className="form-group">
                                        <input
                                            value={formik.values.firstName}
                                            placeholder=" "
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className={cx("form-control")}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <label className={cx("form-control-label")}>Họ</label>
                                    </div>
                                </Tippy>
                                <Tippy
                                    interactive={true}
                                    placement="top-end"
                                    visible={formik.touched.lastName && formik.errors.lastName ? true : false}
                                    appendTo={document.body}
                                    content={formik.errors.lastName}
                                    render={attrs => (
                                        <div className={cx("tippy-box")} tabIndex="-1" {...attrs}>
                                            <span className={cx("msg-err")}>{formik.errors.lastName}</span>
                                        </div>
                                    )}
                                >
                                    <div className="form-group">
                                        <input
                                            value={formik.values.lastName}
                                            placeholder=" "
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className={cx("form-control")}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <label className={cx("form-control-label")}>Tên</label>
                                    </div>
                                </Tippy>
                            </div>
                            <Tippy
                                interactive={true}
                                placement="left"
                                visible={formik.touched.email && formik.errors.email ? true : false}
                                appendTo={document.body}
                                content={formik.errors.email}
                                render={attrs => (
                                    <div className={cx("tippy-box")} tabIndex="-1" {...attrs}>
                                        <span className={cx("msg-err")}>{formik.errors.email}</span>
                                    </div>
                                )}
                            >
                                <div className="form-group">
                                    <input
                                        value={formik.values.email}
                                        placeholder=" "
                                        type="text"
                                        id="email"
                                        name="email"
                                        className={cx("form-control")}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <label className={cx("form-control-label")}>Email</label>
                                </div>
                            </Tippy>
                            <Tippy
                                interactive={true}
                                placement="left"
                                visible={formik.touched.password && formik.errors.password ? true : false}
                                appendTo={document.body}
                                content={formik.errors.password}
                                render={attrs => (
                                    <div className={cx("tippy-box")} tabIndex="-1" {...attrs}>
                                        <span className={cx("msg-err")}>{formik.errors.password}</span>
                                    </div>
                                )}
                            >
                                <div className="form-group">
                                    <input
                                        value={formik.values.password}
                                        placeholder=" "
                                        type="password"
                                        id="password"
                                        name="password"
                                        className={cx("form-control")}
                                        autoComplete="on"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <label className={cx("form-control-label")}>Mật khẩu</label>
                                </div>
                            </Tippy>
                            <div className="form-group">
                                <label className={cx("label-group")}>Sinh nhật</label>
                                <div className={cx("box-select-birthday")}>
                                    <select
                                        className={cx("form-select select-day")}
                                        defaultValue={currentDay}
                                        aria-label="Default select example"
                                        onChange={(e) => setDay(e.target.value)}
                                    >
                                        {birthdayTimes.days.map(day => (
                                            <option
                                                key={day}
                                                value={day}
                                            >
                                                {day}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        className={cx("form-select select-mounth")}
                                        defaultValue={currentMonth}
                                        aria-label="Default select example"
                                        onChange={(e) => setMonth(e.target.value)}
                                    >
                                        {birthdayTimes.months.map(month => (
                                            <option
                                                key={month}
                                                value={month}
                                            >
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        className={cx("form-select select-day")}
                                        defaultValue={currentYear}
                                        aria-label="Default select example"
                                        onChange={(e) => setYear(e.target.value)}
                                    >
                                        {birthdayTimes.years.map(year => (
                                            <option
                                                key={year}
                                                value={year}
                                            >
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className={cx("label-group")}>Giới tính</label>
                                <Tippy
                                    interactive={true}
                                    placement="left"
                                    visible={formik.touched.gender && formik.errors.gender ? true : false}
                                    appendTo={document.body}
                                    content={formik.errors.gender}
                                    render={attrs => (
                                        <div className={cx("tippy-box")} tabIndex="-1" {...attrs}>
                                            <span className={cx("msg-err")}>{formik.errors.gender}</span>
                                        </div>
                                    )}
                                >
                                    <div className={cx("box-select-sex")}>
                                        {SEXS.map((sex, index) => (
                                            <div className={cx("box-radio")} key={sex}>
                                                <label htmlFor={`gender-${index + 1}`} className={cx("label-radio")}>{sex}</label>
                                                <input
                                                    id={`gender-${index + 1}`}
                                                    name="gender"
                                                    value={sex}
                                                    onChange={formik.handleChange}
                                                    checked={formik.values.gender === sex}
                                                    type="radio"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </Tippy>
                            </div>
                            <div className={cx("form-footer")}>
                                <Button>
                                    Đăng ký
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
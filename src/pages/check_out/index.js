import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import classNames from "classnames/bind";
import Button from "~/components/button";
import * as yup from 'yup';

import Tippy from "@tippyjs/react/headless";
import style from './check_out.module.scss';
import Image from '~/components/image';
import FormatPrice from '~/components/format_price';
import { loginSelecter } from '~/redux/user/user_selecter';

const cx = classNames.bind(style);

function CheckOut() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userCheckout = JSON.parse(localStorage.getItem("userCheckout"));
    const login = useSelector(loginSelecter);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""
        },
        validationSchema: yup.object({
            firstName: yup.string().required("Tên bạn là gì?"),
            lastName: yup.string().required("Tên bạn là gì?"),
            email: yup.string().required("Vui lòng nhập email").email("Vui lòng nhập lại địa chỉ email hợp lệ"),
            phoneNumber: yup.string().required("Vui lòng nhập số điện thoại"),
        }),
        onSubmit: values => {
            localStorage.setItem("tourBookedDetail", JSON.stringify({
                tourId: userCheckout.tourId,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phoneNumber: values.phoneNumber,
                tourName: userCheckout.tourName,
                time: userCheckout.time,
                tickets: {
                    adult: {
                        qty: userCheckout.qtyAdult,
                        price: userCheckout.priceAdult
                    },
                    child: {
                        qty: userCheckout.qtyChild,
                        price: userCheckout.priceChild
                    },
                    infant: {
                        qty: userCheckout.qtyInfant,
                        price: userCheckout.priceInfant
                    }
                }
            }));
            dispatch({
                type: "tour/handleBoookTour",
                payload: {
                    idTour: userCheckout.tourId,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    phoneNumber: values.phoneNumber,
                    tourName: userCheckout.tourName,
                    time: userCheckout.time,
                    tickets: {
                        adult: {
                            qty: userCheckout.qtyAdult,
                            price: userCheckout.priceAdult
                        },
                        child: {
                            qty: userCheckout.qtyChild,
                            price: userCheckout.priceChild
                        },
                        infant: {
                            qty: userCheckout.qtyInfant,
                            price: userCheckout.priceInfant
                        }
                    }
                }
            });
            localStorage.removeItem("userCheckout");
        },
    });

    useEffect(() => {
        if (login.currentUser) {
            formik.setValues({
                firstName: login.currentUser.firstName,
                lastName: login.currentUser.lastName,
                email: login.currentUser.email,
                phoneNumber: ''
            });
        }
    }, [login.currentUser]);

    console.log(formik.values);

    const redirectToHome = () => {
        navigate("/", { replace: true })
    }

    return (
        <>
            {!userCheckout ? redirectToHome() : (
                <div className={cx("wrapper")}>
                    <div className={cx("box")}>
                        <div className={cx("inner")}>
                            <div className={cx("main-content")}>
                                <h1>{userCheckout.tourName}</h1>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className={cx("your-detail")}>
                                        <h3>Thông tin của bạn</h3>
                                        {/* field name------------------------------ */}
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
                                        {/* field email------------------------------ */}
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
                                        {/* field phone number------------------------------ */}
                                        <Tippy
                                            interactive={true}
                                            placement="left"
                                            visible={formik.touched.phoneNumber && formik.errors.phoneNumber ? true : false}
                                            appendTo={document.body}
                                            content={formik.errors.phoneNumber}
                                            render={attrs => (
                                                <div className={cx("tippy-box")} tabIndex="-1" {...attrs}>
                                                    <span className={cx("msg-err")}>{formik.errors.phoneNumber}</span>
                                                </div>
                                            )}
                                        >
                                            <div className="form-group">
                                                <input
                                                    value={formik.values.phoneNumber}
                                                    placeholder=" "
                                                    type="text"
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    className={cx("form-control")}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                <label className={cx("form-control-label")}>Số điện thoại</label>
                                            </div>
                                        </Tippy>
                                    </div>
                                    <div className={cx("form-footer")}>
                                        <Button>
                                            Book Tour
                                        </Button>
                                    </div>
                                </form>
                            </div>
                            <div className={cx("sidebar-right")}>
                                <div className={cx("sidebar-top")}>
                                    <div className={cx("sidebar-image")}>
                                        <Image src={userCheckout.image} />
                                    </div>
                                    <div className={cx("sidebar-text")}>
                                        <h4>{userCheckout.tourName}</h4>
                                        <p className={cx("time")}>
                                            {new Date(userCheckout.time).toLocaleDateString('vi-VN', {
                                                weekday: 'short',
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </p>
                                        <p className={cx("price")}>
                                            <FormatPrice>{userCheckout.totalPrice}</FormatPrice> VNĐ
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className={cx("sidebar-bottom")}>
                                    <h3>Đang đặt {userCheckout.allQty} vé</h3>
                                    {userCheckout.qtyAdult > 0 && (
                                        <div className={cx("group-sidebar-price")}>
                                            <label>{userCheckout.qtyAdult} x Người Lớn</label>
                                            <span><FormatPrice>{userCheckout.qtyAdult * userCheckout.priceAdult}</FormatPrice> VNĐ</span>
                                        </div>
                                    )}
                                    {userCheckout.qtyChild > 0 && (
                                        <div className={cx("group-sidebar-price")}>
                                            <label>{userCheckout.qtyChild} x Trẻ em</label>
                                            <span><FormatPrice>{userCheckout.qtyChild * userCheckout.priceChild}</FormatPrice> VNĐ</span>
                                        </div>
                                    )}
                                    {userCheckout.qtyInfant > 0 && (
                                        <div className={cx("group-sidebar-price")}>
                                            <label>{userCheckout.qtyInfant} x Người Lớn</label>
                                            <span>0 VNĐ</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CheckOut;
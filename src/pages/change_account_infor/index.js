import classNames from "classnames/bind";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSelecter } from '~/redux/user/user_selecter';
import style from './change_account_infor.module.scss';
import { birthdayTimes } from '~/birthday_times';
import Image from "~/components/image";

const cx = classNames.bind(style);

function ChangeAccoutInfor() {
    const dispatch = useDispatch();
    const login = useSelector(loginSelecter);
    const SEXS = [
        "Nữ",
        "Nam",
        "Khác"
    ];

    const [avatar, setAvatar] = useState(null);
    const [openAvatar, setOpenAvater] = useState(false);
    const [disableAvater, setDisableAvater] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [openName, setOpenName] = useState(false);
    const [disableName, setDisableName] = useState(false);

    const [email, setEmail] = useState("");
    const [openEmail, setOpenEmail] = useState(false);
    const [disableEmail, setDisableEmail] = useState(false);

    const [sex, setSex] = useState("");
    const [openSex, setOpenSex] = useState(false);
    const [disableSex, setDisableSex] = useState(false);

    const [dateOfBirth, setDateOfBirth] = useState("");
    const [openDateOfBirth, setOpenDateOfBirth] = useState(false);
    const [disableDateOfBirth, setDisableDateOfBirth] = useState(false);

    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();



    useEffect(() => {
        const setUserUpdate = () => {
            const { firstName, lastName, email, sex, dateOfBirth } = login.currentUser;
            setFirstName(firstName);
            setLastName(lastName);
            setEmail(email);
            setSex(sex);
            setDateOfBirth(dateOfBirth);
            setDay(new Date(dateOfBirth).getDate());
            setMonth(new Date(dateOfBirth).getMonth() + 1);
            setYear(new Date(dateOfBirth).getFullYear());
        }
        if (login.currentUser !== undefined) {
            setUserUpdate();
        }
    }, [login.currentUser]);

    const closeField = () => {
        setOpenAvater(false);
        setOpenName(false);
        setOpenEmail(false);
        setOpenSex(false);
        setOpenDateOfBirth(false);
    }
    const disableField = () => {
        setDisableAvater(true);
        setDisableName(true);
        setDisableEmail(true);
        setDisableSex(true);
        setDisableDateOfBirth(true);
    }
    const unDisableField = () => {
        setDisableAvater(false);
        setDisableName(false);
        setDisableEmail(false);
        setDisableSex(false);
        setDisableDateOfBirth(false);
    }

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.image);
        }
    }, [avatar]);


    const handleAvatar = (file) => {
        file.image = URL.createObjectURL(file);
        setAvatar(file);
    }

    const handleChangeAvatar = () => {
        dispatch({
            type: "user/handleUpdateAvatar",
            payload: {
                ...login.currentUser,
                avatar: avatar.image
            }
        });
        closeField();
        setOpenAvater(false);
        unDisableField();
    }

    const handleChangeName = () => {
        dispatch({
            type: "user/handleUpdateName",
            payload: {
                ...login.currentUser,
                firstName,
                lastName
            }
        });
        closeField();
        setOpenName(false);
        unDisableField();
    }
    const handleChangeEmail = () => {
        dispatch({
            type: "user/handleUpdateEmail",
            payload: {
                ...login.currentUser,
                email
            }
        });
        closeField();
        setOpenEmail(false);
        unDisableField();

    }
    const handleChangeSex = () => {
        dispatch({
            type: "user/handleUpdateEmail",
            payload: {
                ...login.currentUser,
                sex
            }
        });
        closeField();
        setOpenSex(false);
        unDisableField();

    }
    const handleChangeDateOfBirth = () => {
        dispatch({
            type: "user/handleUpdateEmail",
            payload: {
                ...login.currentUser,
                dateOfBirth: `${month}/${day}/${year}`
            }
        });
        closeField();
        setOpenDateOfBirth(false);
        unDisableField();
    }

    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("box")}>
                    <div className={cx("page-header")}>
                        <h1>Thông tin cá nhân</h1>
                        <p>Cập nhật thông tin cá nhân</p>
                    </div>
                    <div className={cx("page-content")}>
                        {/* Avater ------------------------------------------------*/}
                        <div className={cx("group-field")}>
                            <div className={cx("group-field-inner")}>
                                <div className={cx("user-label")}>
                                    <label>Ảnh đại diện</label>
                                </div>
                                {!openAvatar ? (
                                    <div className={cx("show-info-user")}>
                                        <Image src={avatar === null ? "error" : avatar.image} alt="avatar" />
                                        <div className={cx("wr-edit-cancel")}>
                                            <button
                                                disabled={disableAvater}
                                                className={cx("edit-cancel")}
                                                onClick={() => {
                                                    disableField();
                                                    setDisableAvater(false);
                                                    setOpenAvater(true);
                                                    setAvatar("error");
                                                }}
                                            >
                                                Chỉnh Sửa
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={cx("change-info-user")}>
                                        <form>
                                            <div className="form-group">
                                                <input
                                                    type="file"
                                                    id="avatar"
                                                    className={cx("form-control")}
                                                    onChange={(e) => handleAvatar(e.target.files[0])}
                                                />
                                                <span className={cx("msg-err")}></span>
                                            </div>
                                        </form>
                                        <div className={cx("edit-info-user")}>
                                            <div className={cx("wr-edit-cancel")}>
                                                <button
                                                    className={cx("btn-edit-cancel")}
                                                    onClick={() => {
                                                        setOpenAvater(false);
                                                        unDisableField();
                                                    }}
                                                >
                                                    Huỷ bỏ
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {openAvatar && (
                                <div className={cx("save-info-user")}>
                                    <button onClick={handleChangeAvatar}>Lưu thay đổi</button>
                                </div>
                            )}
                        </div>
                        {/* Name ------------------------------------------------*/}
                        <div className={cx("group-field")}>
                            <div className={cx("group-field-inner")}>
                                <div className={cx("user-label")}>
                                    <label>Họ tên</label>
                                </div>
                                {!openName ? (
                                    <div className={cx("show-info-user")}>
                                        <span>{`${firstName} ${lastName}`}</span>
                                        <div className={cx("wr-edit-cancel")}>
                                            <button
                                                disabled={disableName}
                                                className={cx("edit-cancel")}
                                                onClick={() => {
                                                    disableField();
                                                    setDisableName(false);
                                                    setOpenName(true)
                                                }}
                                            >
                                                Chỉnh Sửa
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={cx("change-info-user")}>
                                        <form>
                                            <div className={cx("box-name")}>
                                                <div className="form-group">
                                                    <input
                                                        value={firstName}
                                                        placeholder=" "
                                                        type="text"
                                                        id="first-name"
                                                        className={cx("form-control")}
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                    />
                                                    <label className={cx("form-control-label")}>Họ</label>
                                                    <span className={cx("msg-err")}></span>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        value={lastName}
                                                        placeholder=" "
                                                        type="text"
                                                        id="last-name"
                                                        className={cx("form-control")}
                                                        onChange={(e) => setLastName(e.target.value)}
                                                    />
                                                    <label className={cx("form-control-label")}>Tên</label>
                                                    <span className={cx("msg-err")}></span>
                                                </div>
                                            </div>
                                        </form>
                                        <div className={cx("edit-info-user")}>
                                            <div className={cx("wr-edit-cancel")}>
                                                <button
                                                    className={cx("edit-cancel")}
                                                    onClick={() => {
                                                        setOpenName(false);
                                                        unDisableField();
                                                    }}
                                                >
                                                    Huỷ bỏ
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {openName && (
                                <div className={cx("save-info-user")}>
                                    <button onClick={handleChangeName}>Lưu thay đổi</button>
                                </div>
                            )}
                        </div>
                        {/* Email ------------------------------------------------*/}
                        <div className={cx("group-field")}>
                            <div className={cx("group-field-inner")}>
                                <div className={cx("user-label")}>
                                    <label>Địa chỉ email</label>
                                </div>
                                {!openEmail ? (
                                    <div className={cx("show-info-user")}>
                                        <span>{`${email}`}</span>
                                        <div className={cx("wr-edit-cancel")}>
                                            <button
                                                disabled={disableEmail}
                                                className={cx("edit-cancel")}
                                                onClick={() => {
                                                    disableField();
                                                    setDisableEmail(false);
                                                    setOpenEmail(true);
                                                }}
                                            >
                                                Chỉnh Sửa
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={cx("change-info-user")}>
                                        <form>
                                            <div className="form-group">
                                                <input
                                                    value={email}
                                                    placeholder=" "
                                                    type="text"
                                                    id="email"
                                                    className={cx("form-control")}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <label className={cx("form-control-label")}>Email</label>
                                                <span className={cx("msg-err")}></span>
                                            </div>
                                        </form>
                                        <div className={cx("edit-info-user")}>
                                            <div className={cx("wr-edit-cancel")}>
                                                <button
                                                    className={cx("edit-cancel")}
                                                    onClick={() => {
                                                        setOpenEmail(false);
                                                        unDisableField();
                                                    }}
                                                >
                                                    Huỷ bỏ
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {openEmail && (
                                <div className={cx("save-info-user")}>
                                    <button onClick={handleChangeEmail}>Lưu thay đổi</button>
                                </div>
                            )}
                        </div>
                        {/* Giới tính ------------------------------------------------*/}
                        <div className={cx("group-field")}>
                            <div className={cx("group-field-inner")}>
                                <div className={cx("user-label")}>
                                    <label>Giới tính</label>
                                </div>
                                {!openSex ? (
                                    <div className={cx("show-info-user")}>
                                        <span>{`${sex}`}</span>
                                        <div className={cx("wr-edit-cancel")}>
                                            <button
                                                disabled={disableSex}
                                                className={cx("edit-cancel")}
                                                onClick={() => {
                                                    disableField();
                                                    setDisableSex(false);
                                                    setOpenSex(true)
                                                }}
                                            >
                                                Chỉnh Sửa
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={cx("change-info-user")}>
                                        <form>
                                            <div className="form-group">
                                                <div className={cx("box-select-sex")}>
                                                    {SEXS.map((s, index) => (
                                                        <div className={cx("box-radio")} key={s}>
                                                            <label htmlFor={`radio-buton-${index + 1}`} className={cx("label-radio")}>{s}</label>
                                                            <input
                                                                id={`radio-buton-${index + 1}`}
                                                                value={s}
                                                                onChange={() => setSex(s)}
                                                                checked={s === sex}
                                                                type="radio"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </form>
                                        <div className={cx("edit-info-user")}>
                                            <div className={cx("wr-edit-cancel")}>
                                                <button
                                                    className={cx("edit-cancel")}
                                                    onClick={() => {
                                                        setOpenSex(false);
                                                        unDisableField();
                                                    }}
                                                >
                                                    Huỷ bỏ
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {openSex && (
                                <div className={cx("save-info-user")}>
                                    <button onClick={handleChangeSex}>Lưu thay đổi</button>
                                </div>
                            )}
                        </div>
                        {/* Sinh nhật ------------------------------------------------*/}
                        <div className={cx("group-field")}>
                            <div className={cx("group-field-inner")}>
                                <div className={cx("user-label")}>
                                    <label>Sinh nhật</label>
                                </div>
                                {!openDateOfBirth ? (
                                    <div className={cx("show-info-user")}>
                                        <span>{`${dateOfBirth}`}</span>
                                        <div className={cx("wr-edit-cancel")}>
                                            <button
                                                disabled={disableDateOfBirth}
                                                className={cx("edit-cancel")}
                                                onClick={() => {
                                                    disableField();
                                                    setDisableDateOfBirth(false);
                                                    setOpenDateOfBirth(true);
                                                }}
                                            >
                                                Chỉnh Sửa
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={cx("change-info-user")}>
                                        <form>
                                            <div className="form-group">
                                                <div className={cx("box-select-birthday")}>
                                                    <select
                                                        className={cx("form-select select-day")}
                                                        defaultValue={new Date(dateOfBirth).getDate()}
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
                                                        defaultValue={new Date(dateOfBirth).getMonth() + 1}
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
                                                        defaultValue={new Date(dateOfBirth).getFullYear()}
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
                                        </form>
                                        <div className={cx("edit-info-user")}>
                                            <div className={cx("wr-edit-cancel")}>
                                                <button
                                                    className={cx("edit-cancel")}
                                                    onClick={() => {
                                                        setOpenDateOfBirth(false);
                                                        unDisableField();
                                                    }}
                                                >
                                                    Huỷ bỏ
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {openDateOfBirth && (
                                <div className={cx("save-info-user")}>
                                    <button onClick={handleChangeDateOfBirth}>Lưu thay đổi</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangeAccoutInfor;
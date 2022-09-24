import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import style from './header.module.scss';
// import { useSelector } from 'react-redux';

import Button from '~/components/button';
import { ReviewIcon, SignOutIcon, UserIcon } from '~/components/icons';
// import Image from '~/components/image';
import Menu from '~/components/menu';
import MenuPopup from '~/components/menu_popup';
import { Box as BoxMenuPopup } from '~/components/popup';
import { loginSelecter } from '~/redux/user/user_selecter';
import Image from '~/components/image';


const cx = classNames.bind(style);

function Header() {

    const [showMenu, setShowMenu] = useState(false);
    const login = useSelector(loginSelecter);

    const MENU_IEMS = [
        {
            title: "Trang chủ",
            to: "/",
            active: true
        },
        {
            title: "Tour trong nước",
            to: "/category/1"
        },
        {
            title: "Tour nước ngoài",
            to: "/category/2"
        },
        {
            title: "Tour hè 2022",
            to: "/category/3"
        },
        {
            title: "Liên hệ",
            to: "/contact"
        }
    ]

    const USER_MENU_IEMS = [
        {
            title: "Account manage",
            icon: <UserIcon />,
            to: "/account-manage"
        },
        {
            title: "Manage review",
            icon: <ReviewIcon />,
            to: "/manage-review"
        },
        {
            title: "Sign out",
            icon: <SignOutIcon />,
            to: "/signout"
        }
    ]

    return (
        <header className={cx("wrapper")}>
            <nav className={cx("box-top")}>
                <div className={cx("logo")}>
                    <Link to="/">Booktour.vn</Link>
                </div>
                <div className={cx("account")}>
                    {login.isLogin ? (
                        <Tippy
                            interactive={true}
                            visible={showMenu}
                            placement="bottom-end"
                            onClickOutside={() => setShowMenu(false)}
                            render={attrs => (
                                <div className={cx("content")} tabIndex="-1" {...attrs}>
                                    <BoxMenuPopup>
                                        <MenuPopup items={USER_MENU_IEMS} />
                                    </BoxMenuPopup>
                                </div>
                            )}
                        >
                            <div className={cx("user-logged")} onClick={() => setShowMenu(!showMenu)}>

                                <Image
                                    src={login.currentUser.avatar || "error"}
                                    alt="avatar"
                                />
                                <div className={cx("user-info")}>
                                    <h4>{`${login.currentUser.firstName} ${login.currentUser.lastName}`}</h4>
                                </div>
                            </div>
                        </Tippy>
                    ) : (
                        <div className={cx("register-signin")}>
                            <Link to="/register"><Button>Đăng ký</Button></Link>
                            <Link to="/sign-in"><Button>Đăng nhập</Button></Link>
                        </div>
                    )}

                </div>
            </nav>
            <nav className={cx("box-bottom")}>
                <div className={cx("box-menu")}>
                    <Menu items={MENU_IEMS} />
                </div>
            </nav>
        </header>
    );
}

export default Header;
import classNames from "classnames/bind";
import style from './sidebar_left_layout.module.scss';

import Sidebar from "~/components/layout/components/sidebar";
import Header from "~/components/layout/components/header";
import Footer from "~/components/layout/components/footer";

const cx = classNames.bind(style);

function SidebarLeftLayout({ children }) {
    return (
        <>
            <Header />
            <div className={cx("content")}>
                <div className={cx("box")}>
                    <div className={cx("inner")}>
                        <div className={cx("content-left")}>
                            <Sidebar />
                        </div>
                        <div className={cx("main-content")}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SidebarLeftLayout;
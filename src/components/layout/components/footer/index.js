import classNames from 'classnames/bind';
import style from './footer.module.scss';
import { Link } from 'react-router-dom';

import brand1 from '~/assets/images/brands/brand1.png';
import brand2 from '~/assets/images/brands/brand2.png';
import brand3 from '~/assets/images/brands/brand3.png';
import brand4 from '~/assets/images/brands/brand4.png';
import brand5 from '~/assets/images/brands/brand5.png';
import brand6 from '~/assets/images/brands/brand6.png';

const cx = classNames.bind(style);

function Footer() {
    return (
        <footer>
            <div className={cx("wrapper")}>
                <div className={cx("box-top", "box")}>
                    <div className="row">
                        <div className={cx("column", "col-md-4")}>
                            <Link className={cx("logo")} to="/">Booktour.vn</Link>
                            <p>Du lịch Việt Nam công ty cổ phần đầu tư dịch vụ du lịch dịch vụ du lịch chuyên tổ chức tour du lịch trong nước & quốc tế</p>
                            <p>Address: Ha Noi, Vietnam</p>
                            <p>Tel: <a href="tel:02837077777">028 3707 7777</a></p>
                            <p>Email: bookingtour@gmail.com</p>
                            <p>Website: bookingtour.vn</p>
                        </div>
                        <div className={cx("column", "col-md-2")}>
                            <h4 className={cx("block-title")}>Về chúng tôi</h4>
                            <ul>
                                <li><Link to="/history">Lịch sử phát triển</Link></li>
                                <li><Link to="/vision-and-mission">Tầm nhìn & Sứ mệnh</Link></li>
                            </ul>
                        </div>
                        <div className={cx("column", "col-md-2")}>
                            <h4 className={cx("block-title")}>Thông tin hỗ trợ</h4>
                            <ul>
                                <li><Link to="/">Chính sách bảo mật thông tin</Link></li>
                                <li><Link to="/">Chính sách đổi/trả và hoàn tiền</Link></li>
                                <li><Link to="/">Chính sách vận chuyển</Link></li>
                            </ul>
                        </div>
                        <div className={cx("column", "col-md-4")}>
                            <h4 className={cx("block-title")}>Đăng ký nhận khuyến mãi</h4>
                            <p className={cx("sub-title-email")}>Đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn</p>
                            <div className={cx("block-emaill")}>
                                <input placeholder="Nhập email của bạn" />
                                <button>Gửi đi</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("box-bottom", "box")}>
                    <p className={cx("copyright")}>Copyright © 2022 Booktour.vn™. All rights reserved.</p>
                    <ul>
                        <li>
                            <img
                                src={brand1}
                                title="Booking.com"
                                alt="Booking.com"
                                height={26}
                                width={91}
                            />
                        </li>
                        <li>
                            <img
                                src={brand2}
                                title="Priceline"
                                alt="Priceline"
                                height={26}
                                width={91}
                            />
                        </li>
                        <li>
                            <img
                                src={brand3}
                                title="Kayak"
                                alt="Kayak"
                                height={26}
                                width={79}
                            />
                        </li>
                        <li>
                            <img
                                src={brand4}
                                title="Agoda"
                                alt="Agoda"
                                height={26}
                                width={70}
                            />
                        </li>
                        <li>
                            <img
                                src={brand5}
                                title="Rentalcars"
                                alt="Rentalcars"
                                height={26}
                                width={109}
                            />
                        </li>
                        <li>
                            <img
                                src={brand6}
                                title="OpenTable"
                                alt="OpenTable"
                                height={26}
                                width={95}
                            />
                        </li>
                    </ul>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
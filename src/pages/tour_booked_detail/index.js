import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Button from "~/components/button";
import FormatPrice from "~/components/format_price";
import style from './tour_booked_detail.module.scss';

const cx = classNames.bind(style);

function TourBookedDetail() {
    const tourBookedDetail = JSON.parse(localStorage.getItem("tourBookedDetail"));
    console.log(tourBookedDetail);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("box")}>
                <div className={cx("inner")}>
                    <h1>Chi tiết tour bạn đã book</h1>
                    <div className={cx("page-content")}>
                        <h3>Thông tin của bạn</h3>
                        <div className={cx("group-info")}>
                            <label>Họ:</label>
                            <span>{tourBookedDetail.firstName}</span>
                        </div>
                        <div className={cx("group-info")}>
                            <label>Tên:</label>
                            <span>{tourBookedDetail.lastName}</span>
                        </div>
                        <div className={cx("group-info")}>
                            <label>Email:</label>
                            <span>{tourBookedDetail.email}</span>
                        </div>
                        <div className={cx("group-info")}>
                            <label>Số điện thoại:</label>
                            <span>{tourBookedDetail.phoneNumber}</span>
                        </div>
                        <h3>Thông tin tour</h3>
                        <div className={cx("group-info")}>
                            <label>tour:</label>
                            <span>{tourBookedDetail.tourName}</span>
                        </div>
                        <div className={cx("group-info tickets")}>
                            <span>Vé: </span>
                            <div className={cx("ticket-item")}>
                                <label>+ Người lớn:</label>
                                <span>
                                    {tourBookedDetail.tickets.adult.qty} vé giá <FormatPrice>{tourBookedDetail.tickets.adult.price}</FormatPrice> VNĐ
                                </span>
                            </div>
                            <div className={cx("ticket-item")}>
                                <label>+ Trẻ em:</label>
                                <span>
                                    {tourBookedDetail.tickets.child.qty} vé giá <FormatPrice>{tourBookedDetail.tickets.child.price}</FormatPrice> VNĐ
                                </span>
                            </div>
                            <div className={cx("ticket-item")}>
                                <label>+ Trẻ sơ sinh:</label>
                                <span>
                                    {tourBookedDetail.tickets.infant.qty} vé giá <FormatPrice>{tourBookedDetail.tickets.infant.price}</FormatPrice> VNĐ
                                </span>
                            </div>
                        </div>
                        <div className={cx("group-info")}>
                            <label>Thời gian:</label>
                            <span>{tourBookedDetail.time}</span>
                        </div>
                    </div>
                    <div className={cx("page-footer")}>
                        <Link to="/"><Button> Xem thêm các tour khác</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TourBookedDetail;
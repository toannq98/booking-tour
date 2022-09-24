import classNames from "classnames/bind";
import style from './manage_booking_requests.module.scss';

const cx = classNames.bind(style);

function ManageBookingRequests() {
    return (
        <div className={cx("wrapper")}>
            ManageBookingRequests
        </div>
    );
}

export default ManageBookingRequests;
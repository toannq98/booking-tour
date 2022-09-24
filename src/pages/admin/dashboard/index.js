import classNames from "classnames/bind";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import style from './dashboard.module.scss';

const cx = classNames.bind(style);

function Dashboard() {
    return (
        <div className={cx("wrapper")}>
            <div className="small-box">
                <table border="2">
                    <tbody><tr>
                        <th>Page name</th>
                        <th>Go to page</th>
                    </tr>
                        <tr>
                            <td>Manage User</td>
                            <td><Link to="/admin/manage-user">Go to manage user</Link></td>
                        </tr>
                        <tr>
                            <td>Manage Tour</td>
                            <td><Link to="/admin/manage-tour">Go to manage tour</Link></td>
                        </tr>
                        <tr>
                            <td>Manage booking requests</td>
                            <td><Link to="/admin/manage-booking-requests">Go to manage booking requests</Link></td>
                        </tr>
                        <tr>
                            <td>Manage user reviews</td>
                            <td><Link to="/admin/manage-user-reviews">Go to manage user reviews</Link></td>
                        </tr>
                        <tr>
                            <td>Manage category</td>
                            <td><Link to="/admin/manage-category">Go to manage category</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;
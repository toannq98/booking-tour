import classNames from "classnames/bind";
import style from './manage_user.module.scss';

const cx = classNames.bind(style);

function ManageUser() {

    return (
        <div className={cx("wrapper")}>
            <div className={cx("box-header")}>
                <div className={cx("header-title")}>
                    <h1>Manage your Customers</h1>
                </div>
                <div className={cx("header-content")}>
                    <button>Add new customer</button>
                </div>
            </div>
            <div className={cx("box-content")}>
                <div className="table-responsive">
                    <table className="table mb-0">
                        <thead>
                            <tr>
                                <th scope="col" className="text-nowrap">
                                    <div className="inner-th">
                                        <span className="th-name">ID</span>
                                        <span className="th-sort" />
                                    </div>
                                </th>
                                <th scope="col" className="text-nowrap">
                                    <div className="inner-th">
                                        <span className="th-name">First name</span>
                                        <span className="th-sort" />
                                    </div>
                                </th>
                                <th scope="col" className="text-nowrap">
                                    <div className="inner-th">
                                        <span className="th-name">Last name</span>
                                        <span className="th-sort" />
                                    </div>
                                </th>
                                <th scope="col" className="text-nowrap">
                                    <div className="inner-th">
                                        <span className="th-name">Email address</span>
                                        <span className="th-sort" />
                                    </div>
                                </th>
                                <th scope="col" className="text-nowrap">
                                    <div className="inner-th">
                                        <span className="th-name">Actions</span>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th scope="col" className="text-nowrap">
                                    <input
                                        id="searchID"
                                        placeholder="Search ID"
                                    />
                                </th>
                                <th scope="col" className="text-nowrap">
                                    <input
                                        id="searchFirstName"
                                        placeholder="Search first name"
                                    />
                                </th>
                                <th scope="col" className="text-nowrap">
                                    <input
                                        id="searchLastName"
                                        placeholder="Search last name"
                                    />
                                </th>
                                <th scope="col" className="text-nowrap">
                                    <input
                                        id="searchEmail"
                                        placeholder="Search email"
                                    />
                                </th>
                                <th scope="col" className="text-nowrap">
                                    <button
                                        id="searchAll"
                                    >
                                        Search
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-nowrap">1</td>
                                <td className="text-nowrap">Table cell</td>
                                <td className="text-nowrap">Table cell</td>
                                <td className="text-nowrap">Table cell</td>
                                <td className="text-nowrap">Table cell</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ManageUser;
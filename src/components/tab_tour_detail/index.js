import { memo } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import classNames from 'classnames/bind';

import style from './tab_tours_detail.module.scss';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { loginSelecter } from '~/redux/user/user_selecter';
import ReviewTour from '../review_tour';

const cx = classNames.bind(style);

function TabTourDetail({ itemActive, data }) {
    // const dispatch = useDispatch();
    const [key, setKey] = useState(itemActive);
    const login = useSelector(loginSelecter);

    return (
        <div className={cx("wrapper")}>
            <Tab.Container
                id="left-tabs-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Nav variant="pills" className={cx("nav-pills-custom")}>
                    <Nav.Item className={cx("nav-item-custom")}>
                        <Nav.Link eventKey="tour_schedule" href="#" onClick={(e) => e.preventDefault()}>
                            Lịch trình tour
                        </Nav.Link>
                        <Nav.Link eventKey="tour_detail" href="#" onClick={(e) => e.preventDefault()}>
                            Chi tiết tour
                        </Nav.Link>
                        {login.isLogin && (
                            <Nav.Link eventKey="tour_review" href="#" onClick={(e) => e.preventDefault()}>
                                Review tour
                            </Nav.Link>
                        )}
                    </Nav.Item>
                </Nav>
                <Tab.Content className={cx("tab-content-custom")}>
                    <Tab.Pane eventKey="tour_schedule">
                        {data.tourSchedule}
                    </Tab.Pane>
                    <Tab.Pane eventKey="tour_detail">
                        {data.description}
                    </Tab.Pane>
                    {login.isLogin && (
                        <Tab.Pane eventKey="tour_review">
                            <ReviewTour />
                        </Tab.Pane>
                    )}

                </Tab.Content>
            </Tab.Container>
        </div>
    );
}

export default memo(TabTourDetail);
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import style from './homepage.module.scss';
import Search from '~/components/search';
import TourItem from '~/components/tour_item';
import TabToursInCountry from '~/components/tab_tours_in_country';
import TabToursOverseas from '~/components/tab_tours_overseas';
import { toursSelecter } from '~/redux/tour/tour_selecter'
import { ServiceIcon1, ServiceIcon2, ServiceIcon3 } from '~/components/icons';

const cx = classNames.bind(style);

function HomePage() {

    const dispatch = useDispatch();
    const tours = useSelector(toursSelecter);
    const newTours = tours.filter((tour, index) => {
        return index < 3 && tour;
    });


    useEffect(() => {
        dispatch({ type: "fetchTours" });
        dispatch({ type: "fetchCategories" });
    }, [dispatch]);

    return (
        <div className={cx("wrapper")}>
            <section className={cx("box-search-top")}>
                <div className={cx("box")}>
                    <h1>Tìm và đặt một trải nghiệm tuyệt vời</h1>
                    <p>Khám phá thêm điểm đến của bạn và tận dụng tối đa chuyến đi của bạn</p>
                    <div className={cx("search")}>
                        <Search />
                    </div>
                </div>
            </section>
            <div className={cx("main-content")}>
                <div className={cx("box")}>
                    <section className={cx("tour-hot")}>
                        <h3 className={cx("block-title")}>Những địa điểm hot</h3>
                        <div className={cx("list-tour")}>
                            <TourItem currentItems={newTours} />
                        </div>
                    </section>
                    <section className={cx("service")}>
                        <h3 className={cx("block-title")}>Dịch vụ của chúng tôi</h3>
                        <ul className={cx("list-service")}>
                            <li className={cx("service-item")}>
                                <div className={cx("service-icon")}><ServiceIcon1 /></div>
                                <div className={cx("service-text")}>
                                    <h4>Các điểm tham quan hàng đầu</h4>
                                    <p>Trải nghiệm tốt nhất điểm đến của bạn, với các điểm tham quan, tour du lịch</p>
                                </div>
                            </li>
                            <li className={cx("service-item")}>
                                <div className={cx("service-icon")}> <ServiceIcon2 /></div>
                                <div className={cx("service-text")}>
                                    <h4>Nhanh chóng và linh hoạt</h4>
                                    <p>Đặt vé trực tuyến trong vài phút, hủy miễn phí tại nhiều điểm tham quan</p>
                                </div>
                            </li>
                            <li className={cx("service-item")}>
                                <div className={cx("service-icon")}><ServiceIcon3 /></div>
                                <div className={cx("service-text")}>
                                    <h4>Hỗ trợ khi bạn cần</h4>
                                    <p>Dịch vụ hỗ trợ Khách hàng luôn sẵn sàng trợ giúp 24/7</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className={cx("tour-in-country")}>
                        <h3 className={cx("block-title", "has-sub")}>Tour trong nước</h3>
                        <p className={cx("subtitle-block")}>Việt Nam vẻ đẹp bất tận, điểm đến của mọi nhà</p>
                        <div className={cx("box-tabtours")}>
                            <TabToursInCountry cateParentId="0" subCateActiveId="1_2" />
                        </div>
                    </section>
                    <section className={cx("overseas-tour")}>
                        <h3 className={cx("block-title", "has-sub")}>Tour nước ngoài</h3>
                        <p className={cx("subtitle-block")}>Thế giới vẻ đẹp bất tận, điểm đến của mọi nhà</p>
                        <div className={cx("box-tabtours")}>
                            <TabToursOverseas cateParentId="1" subCateActiveId="2_1" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
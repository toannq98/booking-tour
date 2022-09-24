import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookTickets from '~/components/book_tickets';

import { ImageIcon } from '~/components/icons';
import ModalFullImages from '~/components/modal_full_images';
import TabTourDetail from '~/components/tab_tour_detail';
import { tourSelecter } from '~/redux/tour/tour_selecter';
import { loginSelecter } from '~/redux/user/user_selecter';
import style from './tour_detail.module.scss';

const cx = classNames.bind(style);

function TourDetail() {
    const dispatch = useDispatch();
    const [dateSelected, setDateSelected] = useState();
    const { tourId } = useParams();
    const tour = useSelector(tourSelecter);
    const login = useSelector(loginSelecter);
    const [openModalImage, setOpenModalImage] = useState(false);

    let images = [];
    if (Object.keys(tour).length > 0) {
        images = tour.images.filter((el, index) => index < 3 && el);
    }
    const currentDate = new Date();

    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
    const handleSelectDate = (date) => {
        setDateSelected(date);
    }
    useEffect(() => {
        dispatch({
            type: "fetchTour",
            payload: {
                id: tourId,
            }
        });
    }, [dispatch, tourId]);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("box no-padding")}>
                <div className={cx("inner")}>
                    <div className={cx("tour-images")}>
                        {images.map((img, index) => (
                            <img key={index} src={img} alt={index} />
                        ))}
                        <button
                            className={cx("show-all-images")}
                            onClick={() => setOpenModalImage(true)}
                        >
                            <ImageIcon />
                            <span>Xem tất cả {Object.keys(tour).length > 0 && tour.images.length} hình ảnh</span>
                        </button>
                        <ModalFullImages open={openModalImage} data={tour.images} onClose={() => setOpenModalImage(false)} />
                    </div>
                </div>
            </div>
            <div className={cx("box")}>
                <div className={cx("inner")}>
                    <div className={cx("tour-content")}>
                        <div className={cx("content-left")}>
                            <TabTourDetail data={tour} itemActive="tour_schedule" />
                        </div>
                        <div className={cx("content-right")}>
                            {login.isLogin ? (
                                <>
                                    <h3>Vé và giá</h3>
                                    <div className={cx("block-time")}>
                                        <h4>Bạn đi khi nào?</h4>
                                        <input
                                            type="date"
                                            value={formatDate(currentDate)}
                                            min={formatDate(currentDate)}
                                            max="2022-12-30"
                                            onChange={(e) => handleSelectDate(e.target.value)}
                                        />
                                    </div>
                                    {dateSelected && (
                                        <div className={cx("block-book-tickets")}>
                                            <BookTickets tour={tour} time={dateSelected} />
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                    <h3>Hãy đăng nhập để book tour</h3>
                                </>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TourDetail;
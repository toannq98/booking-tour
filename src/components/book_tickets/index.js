import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux';
import classNames from "classnames/bind";
import FormatPrice from "../format_price";
import style from './book_tickets.module.scss';

const cx = classNames.bind(style);

function BookTickets({ tour, time }) {
    // const dispatch = useDispatch();
    // console.log('tour', tour);
    const [priceAdult, setPriceAdult] = useState(0);
    const [priceChild, setPriceChild] = useState(0);
    const priceInfant = 0;

    const [qtyAdult, setQtyAdult] = useState(0);
    const [qtyChild, setQtyChild] = useState(0);
    const [qtyInfant, setQtyInfant] = useState(0);
    const [messError, setMessError] = useState();
    const allQty = qtyAdult + qtyChild + qtyInfant;

    useEffect(() => {
        if (allQty > 15) {
            setMessError("Vui lòng chọn nhiều nhất 15 vé");
        } else if (allQty <= 0) {
            setMessError("Vui lòng chọn ít nhất một vé");
        } else {
            setMessError(false);
        }
    }, [allQty]);

    useEffect(() => {
        qtyAdult >= 0 && setPriceAdult(tour.price * qtyAdult);
    }, [qtyAdult, tour.price]);

    useEffect(() => {
        qtyChild >= 0 && setPriceChild(tour.price * 0.8 * qtyChild);
    }, [qtyChild, tour.price]);

    const totalPrice = priceAdult + priceChild;

    const handleSetUserCheckout = () => {
        localStorage.setItem("userCheckout", JSON.stringify({
            tourId: tour.id,
            tourName: tour.tourName,
            time,
            qtyAdult,
            qtyChild,
            qtyInfant,
            allQty,
            priceAdult,
            priceChild,
            priceInfant,
            totalPrice,
            image: tour.images[0]
        }));
    }

    return (
        <div className={cx("wrapper")}>
            <h4>{tour.tourName}</h4>
            <div className={cx("ticket-options")}>
                <div className={cx("option-quantity")}>
                    <h5>Tuỳ chọn số lượng vé: ({allQty} vé)</h5>
                    <div className={cx("quantity-item")}>
                        <div className={cx("item-left")}>
                            <label>Người lớn (10-80 tuổi)</label>
                            <span><FormatPrice>{priceAdult}</FormatPrice> VNĐ</span>
                        </div>
                        <div className={cx("item-right")}>
                            <button onClick={() => qtyAdult > 0 && setQtyAdult(qtyAdult - 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 12.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5z"></path></svg>
                            </button>
                            <span>{qtyAdult}</span>
                            <button onClick={() => setQtyAdult(qtyAdult + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className={cx("quantity-item")}>
                        <div className={cx("item-left")}>
                            <label>Trẻ em (4-9 tuổi)</label>
                            <span><FormatPrice>{priceChild}</FormatPrice> VNĐ</span>
                        </div>
                        <div className={cx("item-right")}>
                            <button onClick={() => qtyChild > 0 && setQtyChild(qtyChild - 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 12.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5z"></path></svg>
                            </button>
                            <span>{qtyChild}</span>
                            <button onClick={() => setQtyChild(qtyChild + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className={cx("quantity-item")}>
                        <div className={cx("item-left")}>
                            <label>Trẻ sơ sinh (0-3 tuổi)</label>
                            <span>{priceInfant} VNĐ</span>
                        </div>
                        <div className={cx("item-right")}>
                            <button onClick={() => qtyInfant > 0 && setQtyInfant(qtyInfant - 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 12.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5z"></path></svg>
                            </button>
                            <span>{qtyInfant}</span>
                            <button onClick={() => setQtyInfant(qtyInfant + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className={cx("quantity-item")}>
                        <div className={cx("item-left")}>
                            <span>Tổng tiền</span>
                            <span><FormatPrice>{totalPrice}</FormatPrice> VNĐ</span>
                        </div>
                        <div className={cx("item-right")}>
                            {messError ? (
                                <button>
                                    Next
                                </button>
                            ) : (
                                <Link to="/check-out">
                                    <button onClick={handleSetUserCheckout}>
                                        Next
                                    </button>
                                </Link>

                            )}

                        </div>
                    </div>
                </div>
            </div>
            {messError && (<p className={cx("mess-error")}>{messError}</p>)}
        </div>
    );
}

export default BookTickets;
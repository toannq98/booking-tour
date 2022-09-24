import { memo } from 'react';
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { reviewsSelecter } from "~/redux/review/review_selecter";
import { loginSelecter } from "~/redux/user/user_selecter";
import style from './review_tour.module.scss';
import ReviewItem from './review_item';
import Button from '~/components/button';

const cx = classNames.bind(style);

function ReviewTour() {

    const dispatch = useDispatch();

    const [rvMessage, setRvMessage] = useState();
    const login = useSelector(loginSelecter);
    const { tourId } = useParams();
    const reviews = useSelector(reviewsSelecter);




    const handleChangeReview = (value) => {
        setRvMessage(value);
    }
    const handleSubmitReview = (e) => {
        e.preventDefault();
        const review = {
            userId: login.currentUser.id,
            tourId: tourId,
            message: rvMessage
        }
        dispatch({
            type: "review/handleAddReview",
            payload: review
        });
        dispatch({
            type: "review/handleFetchReviews",
            payload: tourId
        });
    }

    useEffect(() => {
        dispatch({
            type: "review/handleFetchReviews",
            payload: tourId
        });
    }, [dispatch, tourId]);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("list-review")}>
                {reviews.length > 0 ?
                    reviews.map(review => <ReviewItem key={review.id} review={review} />)
                    :
                    <p>Chưa có đánh giá nào</p>
                }
            </div>
            <div className={cx("review-form")}>
                <form onSubmit={handleSubmitReview}>
                    <textarea
                        placeholder="Hãy nhập đánh giá của bạn..."
                        name="message-review"
                        rows="5"
                        cols="30"
                        onChange={(e) => handleChangeReview(e.target.value)}
                    >
                        {rvMessage}
                    </textarea>
                    <Button>Gửi đi</Button>
                </form>
            </div>
        </div>
    );
}

export default memo(ReviewTour);
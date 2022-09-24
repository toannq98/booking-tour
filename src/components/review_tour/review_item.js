import { memo } from "react";
import classNames from "classnames/bind";
import Image from "~/components/image";
import style from './review_tour.module.scss';

const cx = classNames.bind(style);

function ReviewItem({ review }) {
    return (
        <>
            {review.user && (
                <div className={cx("wrapper-item")}>
                    <div className={cx("box-avatar")}>
                        <Image
                            src={review.avatar === undefined ? "error" : review.avatar}
                            alt="avatar"
                        />
                    </div>
                    <div className={cx("box-text")}>
                        <h4 className={cx("author")}>{`${review.user.firstName} ${review.user.lastName}`}</h4>
                        <p className={cx("message")}>{review.message}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default memo(ReviewItem);
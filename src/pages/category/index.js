
import classNames from "classnames/bind";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

import style from "./category.module.scss";
import { toursCatePageSelecter } from '~/redux/tour/tour_selecter';
import Sort from "~/components/sort";
import PaginatedItems from "~/components/paginated_items";


const cx = classNames.bind(style);

function Category() {

    const dispatch = useDispatch();
    const toursCatePage = useSelector(toursCatePageSelecter);
    const { cateId } = useParams();

    const handleLoadSortTours = (type) => {
        if (type === "Giá giảm dần") {
            dispatch({ type: "fetchSortPriceHightToLow", payload: { id: cateId } });
        } else if (type === "Giá tăng dần") {
            dispatch({ type: "fetchSortPriceLowToHight", payload: { id: cateId } });
        } else {
            dispatch({ type: "fetchToursCatePage", payload: { id: cateId } });
        }
    }
    let cateName = "";

    if (cateId === "1") {
        cateName = "Tour trong nước";
    } else if (cateId === "2") {
        cateName = "Tour nước ngoài";
    } else if (cateId === "3") {
        cateName = "Tour Hè 2022";
    }

    return (
        <div className={cx("wrapper")}>
            <h1>{cateName}</h1>
            <p>Có {toursCatePage.length} tour </p>
            {toursCatePage.length > 0 && (
                <>
                    <div className={cx("list-top")}>
                        <div className={cx("sort-by")}>
                            <Sort
                                handleLoadSortTours={handleLoadSortTours}
                                cateId={cateId}
                            />
                        </div>
                    </div>
                    <div className={cx("list-tour")}>
                        <PaginatedItems
                            data={toursCatePage}
                            itemsPerPage={8}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default Category;
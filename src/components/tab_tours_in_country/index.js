import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './tab_tours_in_country.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { categoriesSelecter, toursByCategoryInCountrySelecter } from '~/redux/tour/tour_selecter'
import PaginatedItems from '../paginated_items';

const cx = classNames.bind(style);

function TabToursInCountry({ cateParentId, subCateActiveId }) {

    const dispatch = useDispatch();
    const [key, setKey] = useState(subCateActiveId);
    const toursByCategory = useSelector(toursByCategoryInCountrySelecter);
    const categories = useSelector(categoriesSelecter);

    // dispatch when click tab item
    useEffect(() => {
        dispatch({
            type: "fetchTourByCategoryInCountry",
            payload: { cateId: key }
        })
    }, [dispatch, key]);

    return (
        <div className={cx("wrapper")}>
            <Tab.Container
                id="left-tabs-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Nav variant="pills" className={cx("nav-pills-custom")}>
                    {categories.length > 0 && categories[0].subCategory[cateParentId].subCategory.map((subCate, index) => (
                        index < 5 && (
                            <Nav.Item key={subCate.id} className={cx("nav-item-custom")}>
                                <Nav.Link eventKey={subCate.id} href="#" onClick={(e) => e.preventDefault()}>
                                    {subCate.subCategoryName}
                                </Nav.Link>
                            </Nav.Item>
                        )
                    ))}
                    <Nav.Item className={cx("nav-item-custom")}>
                        <Link to={`/category/1`}>
                            Tất cả danh mục
                        </Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content className={cx("tab-content-custom")}>
                    <PaginatedItems selecter={key} itemsPerPage={8} data={toursByCategory} itemType="item_tab" />
                </Tab.Content>
            </Tab.Container>
        </div>
    );
}

export default TabToursInCountry;
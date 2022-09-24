import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginSelecter } from "~/redux/user/user_selecter";
import { LoadingIcon } from "../icons";

function MenuPopupItem({ data }) {

    const dispatch = useDispatch();
    const login = useSelector(loginSelecter);

    const handleClickLogout = (even) => {
        even.preventDefault();
        localStorage.removeItem("userLogged");
        dispatch({
            type: "user/handleLogout"
        });
    }

    return (
        <>
            {data.to === "/signout" ? (
                <li>
                    <a href="/signout" onClick={(e) => handleClickLogout(e)}>
                        {data.icon}
                        <span>{data.title}</span>
                        {login.loading && <LoadingIcon width="20px" height="20px" />}
                    </a>
                </li>
            ) : (
                <li>
                    <Link
                        to={data.to}
                    >
                        {data.icon}
                        <span>{data.title}</span>
                    </Link>
                </li>
            )}
        </>
    );
}

export default MenuPopupItem;
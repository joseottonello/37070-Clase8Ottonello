import logo from "../../img/logo.jpg";
import { NavLink } from "react-router-dom";
import { CardImg } from "reactstrap";
import styles from "./LogoVans.module.css";

const LogoVans = () => {

    return (
        <>
            <NavLink
            to="/">
                <CardImg
                className={styles.logo}
                alt="Vans Store"
                src={logo}
                />
            </NavLink>
        </>
    )
}

export default LogoVans
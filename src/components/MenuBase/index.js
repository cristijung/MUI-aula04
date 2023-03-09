import { Link, useLocation } from "react-router-dom";
import styles from './MenuBase.module.scss'

export default function MenuBase({children, to}) {
    const local = useLocation();
    return(
        <Link className={styles.linkMenu} to={to}>
            {children}
        </Link>
    )
}
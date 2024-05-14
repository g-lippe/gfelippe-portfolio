import styles from './navbar.module.scss'
import { Link, useLocation } from "react-router-dom"


export default function NavBar() {

  const location = useLocation().pathname

  return (
    <div className={styles.navbar}>
      <header>
        {location != "/" &&
          <Link to={"/"}>
            <div>←</div>
          </Link>
        }
        {location == "/" &&
          <div>-</div>
        }
      </header>
    </div>
  )
}
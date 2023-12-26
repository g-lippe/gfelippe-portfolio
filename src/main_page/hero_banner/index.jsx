import carbonAvatar from '../../assets/images/ice_cube_transparent.png'
import styles from './hero_banner.module.scss'

function HeroBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles.hero_text}>
                <h5>Hello there! I am</h5>
                <h1 >Gabriel A. Felippe</h1>
                <h2>
                    I combine <span className={styles.art_type}>art</span> and <span className={styles.code_type}>{'<code/>'}</span> into products
                </h2>
                <p>
                    Welcome to my portfolio<br />
                    this is a compilation of all my public works and projects<br />
                </p>
            </div>
            <div className={styles.hero_img}>
                <img src={carbonAvatar} alt="avatar" />
            </div>
        </div>
    )
}

export default HeroBanner;
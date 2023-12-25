import styles from './main_page.module.scss'
import carbonAvatar from '../images/carbon_avatar.png'

export default function MainPage() {
    return (
        <div className={styles.banner}>
            <div className={styles.hero_text}>
                <h3 >Hello there!</h3>
                <p>
                    Welcome to my portfolio website <br />
                    I'm Gabriel, 24 years old

                </p>
            </div>
            <div className={styles.hero_img}>
                <img src={carbonAvatar} alt="avatar" />
            </div>
        </div>
    )
}
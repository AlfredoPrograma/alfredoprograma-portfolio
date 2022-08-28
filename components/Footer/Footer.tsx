import styles from './Footer.module.scss'
import {
  FaGithub as GithubIcon,
  FaInstagram as InstagramIcon,
  FaLinkedinIn as LinkedInIcon,
} from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightWrapper}>
        <i className="bi bi-github"></i>
        &copy; 2022. Developed by me with a lot of ☕ and 💙
      </div>

      <div className={styles.socialMediaWrapper}>
        <Link href="#">
          <a className={styles.iconWrapper}>
            <GithubIcon className={styles.icon} />
          </a>
        </Link>
        <Link href="#">
          <a className={styles.iconWrapper}>
            <InstagramIcon className={styles.icon} />
          </a>
        </Link>
        <Link href="#">
          <a className={styles.iconWrapper}>
            <LinkedInIcon className={styles.icon} />
          </a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer

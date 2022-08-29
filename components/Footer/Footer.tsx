import styles from './Footer.module.scss'
import {
  FaGithub as GithubIcon,
  FaInstagram as InstagramIcon,
  FaLinkedinIn as LinkedInIcon,
  FaEnvelope as MailIcon,
} from 'react-icons/fa'
import Link from 'next/link'
import { SocialMediaIconLink } from 'types/SocialMediaIconLink'

const socialMediaLinks: SocialMediaIconLink[] = [
  {
    to: '#',
    icon: GithubIcon,
  },

  {
    to: '#',
    icon: InstagramIcon,
  },

  {
    to: '#',
    icon: LinkedInIcon,
  },

  {
    to: '#',
    icon: MailIcon,
  },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightWrapper}>
        &copy; 2022. Developed with a lot of ☕ and 💙
      </div>

      <div className={styles.socialMediaWrapper}>
        {socialMediaLinks.map(({ to, icon }) => (
          <Link key={to} href={to}>
            <a className={styles.iconWrapper}>
              {icon({ className: styles.icon })}
            </a>
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer

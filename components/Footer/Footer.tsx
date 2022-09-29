import styles from './Footer.module.scss'
import {
  FaGithub as GithubIcon,
  // FaInstagram as InstagramIcon,
  // FaLinkedinIn as LinkedInIcon,
  FaEnvelope as MailIcon,
} from 'react-icons/fa'
import { SocialMediaIconLink } from 'types/SocialMediaIconLink'

const socialMediaLinks: SocialMediaIconLink[] = [
  {
    to: 'https://github.com/AlfredoPrograma',
    icon: GithubIcon,
  },

  // {
  //   to: '#',
  //   icon: InstagramIcon,
  // },

  // {
  //   to: '#',
  //   icon: LinkedInIcon,
  // },

  {
    to: 'mailto:alfredoprograma.dev@gmail.com',
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
          <a key={to} href={to} className={styles.iconWrapper}>
            {icon({ className: styles.icon })}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer

import { useRouter } from 'next/router'
import { RouteLink } from 'types/RouteLink'
import NavLink from './NavLink/NavLink'
import styles from './NavBar.module.scss'

const navBarRoutes: RouteLink[] = [
  {
    text: 'Home',
    to: '/home',
  },

  {
    text: 'About me',
    to: '/about-me',
  },

  {
    text: 'Projects',
    to: '/projects',
  },
]

const NavBar = () => {
  const { asPath } = useRouter()

  return (
    <nav className={styles.nav}>
      {navBarRoutes.map(({ text, to }) => (
        <NavLink key={to} text={text} to={to} isActive={to === asPath} />
      ))}
    </nav>
  )
}

export default NavBar

import classNames from 'classnames'
import Link from 'next/link'
import { RouteLink } from 'types/RouteLink'
import styles from './NavLink.module.scss'

interface NavLinkProps extends RouteLink {
  isActive: boolean
}

const NavLink = ({ text, to, isActive }: NavLinkProps) => {
  return (
    <Link href={to}>
      <a className={classNames(styles.navLink, { [styles.active]: isActive })}>
        {text}
      </a>
    </Link>
  )
}
export default NavLink

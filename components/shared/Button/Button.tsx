import classNames from 'classnames'
import { HTMLProps } from 'react'
import styles from './Button.module.scss'

type ButtonVariants = 'primary' | 'secondary'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  onClick: (...args: unknown[]) => unknown
  children: JSX.Element | JSX.Element[] | string
  variant: ButtonVariants
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  extraStyles?: string
}

const Button = ({
  onClick,
  variant,
  extraStyles,
  leftIcon,
  rightIcon,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, extraStyles, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
      })}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  )
}
export default Button

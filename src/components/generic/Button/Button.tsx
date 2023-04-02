import React, { FC } from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
  text: string
  svg?: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ text, svg, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`${styles.btn} ${!text && styles.unbtn}`}>
        {text} {svg && <img src={svg} alt='svg' />}
      </button>
    </>
  )
}

export default Button

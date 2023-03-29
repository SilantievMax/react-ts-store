import React, { FC } from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
  text: string
  svg?: string
}

const Button: FC<ButtonProps> = ({ text, svg }) => {
  return (
    <>
      <button className={`${styles.btn} ${!text && styles.unbtn}`}>
        {text} {svg && <img src={svg} alt='svg' />}
      </button>
    </>
  )
}

export default Button

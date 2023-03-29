import React, { FC } from 'react'

import styles from './ButtonCard.module.scss'

interface ButtonProps {
  text: string
  svg?: string
}

const ButtonCard: FC<ButtonProps> = ({ text, svg }) => {
  return (
    <>
      <button className={`${styles.btn} ${!text && styles.unbtn}`}>
        {text} {svg && <img src={svg} alt='svg' />}
      </button>
    </>
  )
}

export default ButtonCard

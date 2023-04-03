import React, { FC } from 'react'

import styles from './ButtonCard.module.scss'

interface ButtonProps {
  text: string
  svg?: string
  onClick?: () => void
}

const ButtonCard: FC<ButtonProps> = ({ text, svg, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`${styles.btn} ${!text && styles.unbtn}`}>
        {text} {svg && <img src={svg} alt='svg' />}
      </button>
    </>
  )
}

export default ButtonCard

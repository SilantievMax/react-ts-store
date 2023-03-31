import React from 'react'

import romb from 'assets/gif/romb.gif'

import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img className={styles.img} src={romb} alt='' />
    </div>
  )
}

export default Loading

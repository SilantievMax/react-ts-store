import React, { FC, useState } from 'react'

import styles from './Sorting.module.scss'

interface SortingProps {
  heading: string
}

const Sorting: FC<SortingProps> = ({ heading }) => {
  const [selectValue, setSelectValue] = useState('a-z')
  return (
    <div className={styles.continer}>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.select_wrapper}>
        <span className={styles.sort}>Сортировка:</span>
        <select
          value={selectValue}
          onChange={e => setSelectValue(e.target.value)}
          className={styles.select}
        >
          <option value='a-z'>По названию (а-я)</option>
          <option value='0-1'>По возрастанию цены</option>
          <option value='z-a'>По названию (я-а)</option>
          <option value='1-0'>По убыванию цены</option>
        </select>
      </div>
    </div>
  )
}

export default Sorting

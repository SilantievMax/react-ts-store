import { useAppDispatch } from 'hooks/redux'
import React, { FC } from 'react'
import { IProduc } from 'types/types'

import Button from 'components/generic/Button/Button'

import { getProductInBasket } from 'store/reducers/BasketSlice'

import basket from 'assets/svg/basket-w.svg'
import g from 'assets/svg/g.svg'
import ml from 'assets/svg/ml.svg'
import share from 'assets/svg/share.svg'

import styles from './CardOneProduct.module.scss'

interface CardOneProductProps {
  data: IProduc
}

const CardOneProduct: FC<CardOneProductProps> = ({ data }) => {
  const dispatch = useAppDispatch()
  // const weight = data.specifications.brand

  // const isWeight = weight[weight.length - 1] === 'л' ? ml : g
  return (
    <div className={styles.card}>
      <div className={styles.img_card}>
        <img className={styles.img} src={data.url_img} alt='' />
      </div>
      <div>
        <div className={styles.eee}>В наличии</div>
        <div className={styles.heading}>
          {/* <span>{data.specifications.weight}</span> */}
          {data.title}
        </div>
        <div className={styles.weight}>
          {/* <div
            style={{
              backgroundImage: `url(${isWeight})`
            }}
            className={styles.weight_img}
          ></div> */}
          {/* {data.specifications.weight} */}
        </div>
        <div className={styles.count_price}>
          <span className={styles.price}>{data.price}</span>
          <div className={styles.btn_span}>
            <span>-</span> 1 <span>+</span>
          </div>
          <Button onClick={() => dispatch(getProductInBasket(data.barcode))} text='В корзину' svg={basket} />
        </div>
        <div className={styles.diwload}>
          <div className={styles.share}>
            <img src={share} alt='' />
          </div>

          <div className={styles.diwload_c}>
            При покупке от 10 000 ₸ бесплатная <br /> доставка по Кокчетаву и области
          </div>
          <div className={styles.diwload_p}>Прайс-лист</div>
        </div>
        <ul className={styles.list1}>
          <li>{/* Производитель: <span>{data.specifications.manufacturer}</span> */}</li>
          <li>{/* Бренд: <span>{data.specifications.brand}</span> */}</li>
          <li>
            Артикул: <span>460404</span>
          </li>
          <li>
            Штрихкод: <span>{data.barcode}</span>
          </li>
        </ul>
        <div className={styles.description}>
          <h5>Описание</h5>
          <p> {data.description}</p>
        </div>
        <div className={styles.list2_block}>
          <h5>Характеристики</h5>
          {/* <ul className={styles.list1}>
            <li>
              Назначение: <span>BioMio</span>
            </li>
            <li>
              Тип: <span>{data.specifications.type.join(', ')}</span>
            </li>
            <li>
              Производитель: <span>{data.specifications.manufacturer}</span>
            </li>
            <li>
              Бренд: <span>{data.specifications.brand}</span>
            </li>
            <li>
              Артикул: <span>4604049097548</span>
            </li>
            <li>
              Штрихкод: <span>{data.barcode}</span>
            </li>
            <li>
              Вес: <span>{weight}</span>
            </li>
            <li>
              Объем: <span>90 г</span>
            </li>
            <li>
              Кол-во в коробке: <span>90 г</span>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default CardOneProduct

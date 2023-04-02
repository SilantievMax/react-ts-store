import React from 'react'

import Button from 'components/generic/Button/Button'

import basket from 'assets/svg/basket-w.svg'
import g from 'assets/svg/g.svg'
import ml from 'assets/svg/ml.svg'
import share from 'assets/svg/share.svg'

import styles from './CardProduct.module.scss'

const weight = '90 г    '

const isWeight = weight[weight.length - 1] === 'л' ? ml : g

const CardProduct = () => {
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.img} src='https://alania-market.ru/image/cache/catalog/stirka-i-uhod-za-belyem/stiralnye-poroshki/5/16328296-1-640x640.jpg' alt='' />
      </div>
      <div>
        <div className={styles.eee}>В наличии</div>
        <div className={styles.heading}>
          <span>BioMio BIO-SOAP</span>
          Экологичное туалетное мыло. Литсея и бергамот
        </div>
        <div className={styles.weight}>
          <div
            style={{
              backgroundImage: `url(${isWeight})`
            }}
            className={styles.weight_img}
          ></div>
          {weight}
        </div>
        <div className={styles.count_price}>
          <span className={styles.price}>53.67</span>
          <div className={styles.btn_span}>
            <span>-</span> 1 <span>+</span>
          </div>
          <Button text='В корзину' svg={basket} />
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
          <li>
            Производитель: <span>BioMio</span>
          </li>
          <li>
            Бренд: <span>BioMio</span>
          </li>
          <li>
            Артикул: <span>460404</span>
          </li>
          <li>
            Штрихкод: <span>4604049097548</span>
          </li>
        </ul>
        <div className={styles.description}>
          <h5>Описание</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum
            duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
          </p>
        </div>
        <div className={styles.list2_block}>
          <h5>Характеристики</h5>
          <ul className={styles.list1}>
            <li>
              Назначение: <span>BioMio</span>
            </li>
            <li>
              Тип: <span>BioMio</span>
            </li>
            <li>
              Производитель: <span>460404</span>
            </li>
            <li>
              Бренд: <span>4604049097548</span>
            </li>
            <li>
              Артикул: <span>4604049097548</span>
            </li>
            <li>
              Штрихкод: <span>4604049097548</span>
            </li>
            <li>
              Вес: <span>90 г</span>
            </li>
            <li>
              Объем: <span>90 г</span>
            </li>
            <li>
              Кол-во в коробке: <span>90 г</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardProduct

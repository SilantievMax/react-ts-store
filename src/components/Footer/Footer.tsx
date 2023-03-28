import React, { FC } from 'react'
import Input, { InputVariant } from 'components/generic/Input/Input'
import Logo from 'components/generic/Logo/Logo'
import Layout from 'components/Layout/Layout'
import styles from './Footer.module.scss'
import Nav, { NavVariant } from 'components/generic/Nav/Nav'
import Button from 'components/generic/Button/Button'
import arrowr from 'assets/svg/arrow-r.svg'
import arrow from 'assets/svg/arrow.svg'
import whatsapp from 'assets/svg/whatsapp.svg'
import telegram from 'assets/svg/telegram.svg'
import visa from 'assets/svg/visa.svg'
import mastercard from 'assets/svg/mastercard.svg'
import Operator from 'components/generic/Operator/Operator'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Layout>
				<ul className={styles.footer__list}>
					<li className='footer__item'>
						<Logo />
						<p className={styles.footer__description}>
							Компания «Султан» — снабжаем <br /> розничные магазины товарами
							<br /> "под ключ" в Кокчетаве и Акмолинской области
						</p>
						<a className={styles.footer__link} href='#'>
							Подпишись на скидки и акции
						</a>
						<Input
							svg={arrowr}
							variant={InputVariant.white}
							placeholder='Введите ваш E-mail'
						/>
					</li>

					<li className='footer__item'>
						<h6 className={styles.footer__heading}>Меню сайта:</h6>
						<Nav variant={NavVariant.footer} />
					</li>
					<li className='footer__item'>
						<h6 className={styles.footer__heading}>Категории:</h6>
						<div className={styles.footer__linkscategory}>
							<a href='#' className={styles.footer__linkcategory}>
								Бытовая химия
							</a>
							<a href='#' className={styles.footer__linkcategory}>
								Косметика и гигиена
							</a>
							<a href='#' className={styles.footer__linkcategory}>
								Товары для дома
							</a>
							<a href='#' className={styles.footer__linkcategory}>
								Товары для детей и мам
							</a>
							<a href='#' className={styles.footer__linkcategory}>
								Посуда
							</a>
						</div>
					</li>
					<li className='footer__item'>
						<h6 className={styles.footer__heading}>Скачать прайс-лист:</h6>
						<Button text='Прайс-лист' svg={arrow} />
						<p className={styles.footer__link_p}>Связь в мессенджерах:</p>
						<div className={styles.footer__wrapper_message}>
							<a href='#'>
								<img
									className={styles.footer__img_link}
									src={whatsapp}
									alt='whatsapp'
								/>
							</a>
							<a href='#'>
								<img
									className={styles.footer__img_link}
									src={telegram}
									alt='telegram'
								/>
							</a>
						</div>
					</li>
					<li className='footer__item'>
						<h6 className={styles.footer__heading}>Контакты:</h6>
						<Operator footer />
						<a href='mailto:opt.sultan@mail.ru' className={styles.contact}>
							opt.sultan@mail.ru
							<span>На связи в любое время</span>
						</a>

						<div className={styles.bloc_card}>
							<img className={styles.bloc_card_img} src={visa} alt='visa' />
							<img
								className={styles.bloc_card_img}
								src={mastercard}
								alt='mastercard'
							/>
						</div>
					</li>
				</ul>
			</Layout>
		</footer>
	)
}

export default Footer

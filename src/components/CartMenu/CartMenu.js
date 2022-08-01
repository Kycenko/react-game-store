import React from 'react';
import styles from './CartMenu.module.scss';
import { calcTotalPrice } from '../CartBlock/utils';
import GameBuyBtn from '../GameBuyBtn/GameBuyBtn';
import CartItem from '../CartItem/CartItem';
const CartMenu = ({ items, onClick }) => {
	return (
		<div className={styles.cart_menu}>
			<div className={styles.cart_games_list}>
				{items.length > 0
					? items.map(game => (
							<CartItem
								key={game.title}
								price={game.price}
								title={game.title}
								id={game.id}
							/>
					  ))
					: 'Корзина пуста'}
			</div>
			{items.length > 0 ? (
				<div className={styles.cart_menu_arrange}>
					<div className={styles.cart_total_price}>
						<span>Итого:</span>
						<span>{calcTotalPrice(items)} руб.</span>
					</div>
					<GameBuyBtn onClick={onClick}>Оформить заказ</GameBuyBtn>
				</div>
			) : null}
		</div>
	);
};

export default CartMenu;

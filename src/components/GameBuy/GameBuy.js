import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import GameBuyBtn from '../GameBuyBtn/GameBuyBtn';
import styles from './GameBuy.module.scss';
const GameBuy = ({ game }) => {
	const dispatch = useDispatch();
	const items = useSelector(state => state.cart.itemsInCart);
	const isItemInCart = items.some(item => item.id === game.id);

	const handleClick = e => {
		e.stopPropagation();
		if (isItemInCart) {
			dispatch(deleteItemFromCart(game.id));
		} else {
			dispatch(setItemInCart(game));
		}
	};

	return (
		<div className={styles.game_buy}>
			<span>{game.price} руб.</span>
			<GameBuyBtn className={styles.buy_btn} onClick={handleClick}>
				{isItemInCart ? 'Убрать из корзины' : 'В корзину'}
			</GameBuyBtn>
		</div>
	);
};

export default GameBuy;

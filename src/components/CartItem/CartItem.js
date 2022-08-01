import React from 'react';
import styles from './CartItem.module.scss';
const CartItem = ({ title, price, id }) => {
	return (
		<div className={styles.cart_item}>
			<span>{title}</span>
			<div className={styles.cart_item_price}>
				<span>{price} руб.</span>
			</div>
		</div>
	);
};

export default CartItem;

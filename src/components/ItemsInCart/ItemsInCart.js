import React from 'react';
import styles from './ItemsInCart.module.scss';
const ItemsInCart = ({ quantity = 0 }) => {
	return quantity > 0 ? (
		<div className={styles.items_in_cart}>{quantity}</div>
	) : null;
};

export default ItemsInCart;

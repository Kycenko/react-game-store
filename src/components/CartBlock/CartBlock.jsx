import React, { useCallback, useState } from 'react';
import styles from './CartBlock.module.scss';
import ItemsInCart from '../ItemsInCart/ItemsInCart';
import { BiCart } from 'react-icons/bi';
import { useSelector } from 'react-redux/es/exports';
import CartMenu from '../CartMenu/CartMenu';
import { calcTotalPrice } from './utils';
import { useNavigate } from 'react-router-dom';
const CartBlock = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
	const navigate = useNavigate();
	const handleClick = useCallback(() => {
		setIsCartMenuVisible(false);
		navigate('/order');
	}, [navigate]);

	const items = useSelector(state => state.cart.itemsInCart);
	const totalPrice = calcTotalPrice(items);

	return (
		<div className={styles.cart_block}>
			<ItemsInCart quantity={items.length} />
			<BiCart
				size={25}
				className={styles.cart_icon}
				onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
			/>
			{totalPrice > 0 ? (
				<span className={styles.cart_price}>{totalPrice} руб.</span>
			) : null}
			{isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
		</div>
	);
};

export default CartBlock;

import React from 'react';
import OrderItem from '../../components/OrderItem/Orderitem';
import styles from './OrderPage.module.scss';
import { useSelector } from 'react-redux/es/exports';
import { calcTotalPrice } from '../../components/CartBlock/utils';
export const OrderPage = () => {
	const items = useSelector(state => state.cart.itemsInCart);
	if (items.length < 1) {
		return <h1>Корзина пуста</h1>;
	}

	return (
		<div className={styles.order_page}>
			<div className={styles.order_page_left}>
				{items.map(game => (
					<OrderItem game={game} />
				))}
			</div>
			<div className={styles.order_page_right}>
				<div className={styles.order_page_price}>
					<span>
						{items.length} товаров на сумму {calcTotalPrice(items)} руб.
					</span>
				</div>
			</div>
		</div>
	);
};

export default OrderPage;

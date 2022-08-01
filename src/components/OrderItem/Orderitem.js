import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import styles from './OrderItem.module.scss';
import GameCover from '../GameCover/GameCover';
const Orderitem = ({ game }) => {
	const dispatch = useDispatch();

	return (
		<div className={styles.order_item}>
			<div className={styles.order_item_cover}>
				<GameCover image={game.image} />
			</div>
			<div className={styles.order_item_title}>
				<span>{game.title}</span>
			</div>
			<div className={styles.order_item_price}>
				<span>{game.price} руб.</span>
			</div>
		</div>
	);
};

export default Orderitem;

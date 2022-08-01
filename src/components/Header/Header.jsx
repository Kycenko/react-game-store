import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import CartBlock from '../CartBlock/CartBlock';
import { GiGamepad } from 'react-icons/gi';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.wrapper}>
				<GiGamepad size={25} />
				<Link to='/' className={styles.header_title}>
					Game Store
				</Link>
			</div>

			<div className={styles.cart_wrapper}>
				<CartBlock />
			</div>
		</div>
	);
};

export default Header;

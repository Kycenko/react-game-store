import React, { useState } from 'react';
import styles from './GameBuyBtn.module.scss';
const GameBuyBtn = ({ onClick, type, children }) => {
	return (
		<button className={styles.buy_btn} onClick={onClick}>
			{children}
		</button>
	);
};

export default GameBuyBtn;

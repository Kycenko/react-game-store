import React from 'react';
import styles from './GameGenre.module.scss';
const GameGenre = ({ genre }) => {
	return <span className={styles.game_genre}>{genre}</span>;
};

export default GameGenre;

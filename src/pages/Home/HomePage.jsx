import React from 'react';
import Header from '../../components/Header/Header';
import GameItem from '../../components/GameItem/GameItem';
import { GAMES } from './HomeGames';
import styles from './HomePage.module.scss';
const HomePage = () => {
	return (
		<>
			<Header />
			<div className={styles.home_page}>
				{GAMES.map(game => (
					<GameItem game={game} key={game.id} />
				))}
			</div>
		</>
	);
};

export default HomePage;

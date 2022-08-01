import React from 'react';
import { useSelector } from 'react-redux';
import GameBuy from '../../components/GameBuy/GameBuy';
import GameCover from '../../components/GameCover/GameCover';
import GameGenre from '../../components/GameGenre/GameGenre';
import Header from '../../components/Header/Header';
import styles from './GamePage.module.scss';

const GamePage = () => {
	const game = useSelector(state => state.game.currentGame);
	if (!game) return null;

	return (
		<>
			<Header />
			<div className={styles.game_page}>
				<h1 className={styles.game_page_title}>{game.title}</h1>
				<div className={styles.game_page_content}>
					<div className={styles.game_page_left}>
						<iframe
							width='90%'
							height='400px'
							src={game.video}
							title='Youtube Video Player'
							frameBorder='0'
						></iframe>
					</div>
					<div className={styles.game_page_right}>
						<GameCover image={game.image} />
						<p>{game.description}</p>
						<p className={styles.secondary_text}>
							Популярные метки этого продукта:
						</p>
						{game.genres.map(genre => (
							<GameGenre genre={genre} key={genre} />
						))}
						<div className={styles.game_page_buy_game}>
							<GameBuy game={game} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GamePage;

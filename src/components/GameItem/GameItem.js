import React from 'react';
import GameCover from '../GameCover/GameCover';
import GameBuy from '../GameBuy/GameBuy';
import GameGenre from '../GameGenre/GameGenre';
import { setCurrentGame } from '../../redux/games/reducer';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import styles from './GameItem.module.scss';

export const GameItem = ({ game }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(setCurrentGame(game));
		navigate(`/app/${game.title}`);
	};

	return (
		<div className={styles.game_item} onClick={handleClick}>
			<GameCover image={game.image} />
			<div className={styles.game_item_details}>
				<span className={styles.game_item_title}>{game.title}</span>
				<div className={styles.game_item_genre}>
					{game.genres.map(genre => (
						<GameGenre genre={genre} key={genre} />
					))}
				</div>
				<div className={styles.game_item_buy}>
					<GameBuy game={game} />
				</div>
			</div>
		</div>
	);
};

export default GameItem;

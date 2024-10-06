import styles from "./GameCard.module.scss";

interface GameCardProps {
  gameData: GameData;
}

export default function GameCard({ gameData }: GameCardProps) {
  return (
    <div className={styles.container}>
      <img
        className={styles.container}
        src={gameData.imageURL}
        alt="game_banner"
      />
    </div>
  );
}

import { useGame } from '../../game/useGame';
import GameSolved from './GameSolved/GameSolved';
import GameDifficulty from './GameDifficulty/GameDifficulty';
import GameBoard from './GameBoard/GameBoard';
import type { Translation } from '../../locales';

type GameProps = {
  text: Translation;
};

function Game({ text }: GameProps) {
  const {
    readyDeck,
    setGameStarted,
    gameStarted,
    selectCard,
    solvedCards,
    wrongCards,
    blockCards,
    gameSolved,
    restartGame,
    gameDifficulty,
    selectDifficulty,
    wrongCounter
  } = useGame();

  if (gameSolved) {
    return (
      <GameSolved
        text={text}
        wrongCounter={wrongCounter}
        restartGame={restartGame}
      />
    );
  }

  if (gameDifficulty === "") {
    return (
      <GameDifficulty
        text={text}
        selectDifficulty={selectDifficulty}
      />
    );
  }

  return (
    <GameBoard
      text={text}
      gameStarted={gameStarted}
      wrongCounter={wrongCounter}
      readyDeck={readyDeck}
      selectCard={selectCard}
      solvedCards={solvedCards}
      wrongCards={wrongCards}
      blockCards={blockCards}
      setGameStarted={setGameStarted}
    />
  );
}

export default Game;

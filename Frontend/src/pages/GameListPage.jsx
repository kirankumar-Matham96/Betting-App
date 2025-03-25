import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, List, Button } from "antd";
import { gameSelector } from "../redux/gameSlice";

const GameListPage = () => {
  const {games} = useSelector(gameSelector);

  return (
    <div style={{ maxWidth: 600, margin: "50px auto" }}>
      <h2>Available Games</h2>
      <List
        dataSource={games}
        renderItem={(game) => (
          <Card style={{ marginBottom: 10 }}>
            <h3>{game.name}</h3>
            <p>
              Min Bet: ₹{game.minBet} | Max Bet: ₹{game.maxBet}
            </p>
            <p>Status: {game.status}</p>
            <Link to={`/bet/${game.id}`}>
              <Button type="primary" disabled={game.status !== "OPEN"}>
                Place Bet
              </Button>
            </Link>
          </Card>
        )}
      />
    </div>
  );
};

export default GameListPage;

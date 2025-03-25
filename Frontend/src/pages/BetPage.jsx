import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { gameSelector, placeBet } from "../redux/gameSlice";
import { Card, Form, InputNumber, Button, Alert } from "antd";

const BetPage = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");

  const { games, bets } = useSelector(gameSelector);

  const game = games.find((game) => game.id === parseInt(gameId));

  const walletBalance = 5000; // Mocked balance, will fetch from backend later

  if (!game) return <Alert message="Game not found" type="error" showIcon />;

  const handleBet = () => {
    if (amount < game.minBet || amount > game.maxBet) {
      setError(`Bet must be between ₹${game.minBet} and ₹${game.maxBet}`);
      return;
    }
    if (amount > walletBalance) {
      setError("Insufficient balance");
      return;
    }

    dispatch(placeBet({ gameId: game.id, amount }));
    navigate("/games"); // Redirect to game list after placing bet
  };

  return (
    <Card
      title={`Place Bet on ${game.name}`}
      style={{ maxWidth: 400, margin: "50px auto" }}
    >
      {error && <Alert message={error} type="error" showIcon />}
      <Form layout="vertical">
        <Form.Item label="Bet Amount">
          <InputNumber
            min={game.minBet}
            max={game.maxBet}
            value={amount}
            onChange={setAmount}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleBet} block>
            Place Bet
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default BetPage;

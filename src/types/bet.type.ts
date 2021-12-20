type Bet = {
  choosen_numbers: string;
  created_at: string;
  price: number;
  game_id: number;
  type: {
    id: number;
    type: string;
  };
};

export default Bet;

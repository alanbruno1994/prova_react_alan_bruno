export type CartType = {
  id: number;
  color: string;
  numbers: number[];
  price: number;
  type: string;
  id_game: number;
};

export type CartRedux = {
  items: CartType[];
};

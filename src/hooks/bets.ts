import { headerBase, urlBase } from "@src/constants/api_constants";
import Bet from "@src/types/bet.type";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useBets() {
  const [bets, setBets] = useState<Bet[]>([]);
  const login = useSelector((state: any) => state.login);

  const getBets = useCallback(
    async (params: string = "") => {
      const response = await axios.get(urlBase + "bet/all-bets" + params, {
        headers: { ...headerBase, Authorization: "Bearer " + login.token },
      });
      const data = await response.data;
      setBets(data);
    },
    [login.token]
  );

  function formatPriceCreateAt(bet: Bet): string {
    let price = bet.price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    let date = bet.created_at
      .match(/\d+/g)
      ?.reduce((previos, current, index) => {
        if (index <= 1) return previos + "/" + current;
        else if (index === 2) return previos + current;
        else return previos;
      });
    return `${date} - (R$ ${price})`;
  }

  useEffect(() => {
    getBets();
  }, [getBets]);

  return { bets, getBets, formatPriceCreateAt };
}

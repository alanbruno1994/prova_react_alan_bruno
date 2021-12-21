import mensagesFailure from "@src/common/messages_failure";
import { headerBase, urlBase } from "@src/constants/api_constants";
import Bet from "@src/types/bet.type";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useBets(openFailure: any) {
  const [bets, setBets] = useState<Bet[]>([]);
  const login = useSelector((state: any) => state.login);

  const getBets = useCallback(
    async (params: string = "") => {
      try {
        const response = await axios.get(urlBase + "bet/all-bets" + params, {
          headers: { ...headerBase, Authorization: "Bearer " + login.token },
        });
        const data = await response.data;
        setBets(data);
      } catch (failure: any) {
        mensagesFailure(failure, openFailure);
      }
    },
    [login.token, openFailure]
  );

  function formatPriceCreateAt(bet: Bet): string {
    let price = bet.price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    let dates = bet.created_at.match(/\d+/g);
    let date = "";
    if (dates) date = dates[2] + "/" + dates[1] + "/" + dates[0];

    return `${date} - (R$ ${price})`;
  }

  function formatNumber(bet: Bet) {
    let vector = bet.choosen_numbers.split(",");
    return vector
      .map((current) => {
        let value = +current;
        return value <= 9 ? "0" + value : "" + value;
      })
      .toString();
  }

  useEffect(() => {
    getBets();
  }, [getBets]);

  return { bets, getBets, formatPriceCreateAt, formatNumber };
}

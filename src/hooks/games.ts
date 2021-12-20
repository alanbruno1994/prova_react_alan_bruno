import mensagesFailure from "@src/common/messages_failure";
import { headerBase, urlBase } from "@src/constants/api_constants";
import Game from "@src/types/game.type";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useGames(openFailure: any) {
  const [games, setGames] = useState<Game[]>([]);
  const getGames = useCallback(async () => {
    try {
      const response = await axios.get(urlBase + "cart_games", {
        headers: headerBase,
      });
      const data = await response.data;
      setGames(data.types);
    } catch (failure: any) {
      mensagesFailure(failure, openFailure);
    }
  }, [openFailure]);

  useEffect(() => {
    getGames();
  }, [getGames]);

  return { games };
}

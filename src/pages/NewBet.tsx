import Cart from "@components/Cart";
import Footer from "@components/footer";
import TwoViews from "@components/TwoViews";
import Header from "@components/Header/Header";
import useFailure from "@src/hooks/failure";
import ErrorPortal from "@src/portals/ErrorPortal";
import useGames from "@src/hooks/games";
import RegionGame from "@components/Region/RegionGame";
import CardAnimation from "@src/animation/CardMsgAnimation";
import { useSelector } from "react-redux";
import { State } from "@src/types/state.type";

const NewBet = () => {
  const { failure, openFailure, closeFailure } = useFailure();
  const { games, minCart } = useGames(openFailure);
  const cart = useSelector((state: State) => state.cart);

  return (
    <>
      <ErrorPortal>
        <CardAnimation
          enable={failure.enable}
          menssage={failure.message}
          closeEnable={closeFailure}
        ></CardAnimation>
      </ErrorPortal>
      <Header />
      <TwoViews header={true}>
        <div className={cart.items.length > 0 ? "leftDiv" : "full-width"}>
          <RegionGame games={games} />
        </div>
        <div className={cart.items.length > 0 ? "rightDiv" : ""}>
          {cart.items.length > 0 && <Cart minCart={minCart} />}
        </div>
      </TwoViews>
      <Footer content="Copyright 2021 Luby Software" />
    </>
  );
};

export default NewBet;

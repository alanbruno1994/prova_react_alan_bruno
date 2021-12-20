import Game from "@src/types/game.type";
import ButtonsChose from "./ButtonsChose";
import FilterRegionStyled from "@components/SyledComponents/FilterRegionStyled";

type FilterRegionType = {
  chooseGame: { id: number; index: number };
  setChooseGame: (value: { id: number; index: number }) => void;
  games: Game[];
};

const FilterRegion: React.FC<FilterRegionType> = (props) => {
  return (
    <FilterRegionStyled>
      <span className="filter">Filters</span>
      <ButtonsChose
        chooseGame={props.chooseGame}
        setChooseGame={props.setChooseGame}
        games={props.games}
      />
    </FilterRegionStyled>
  );
};
export default FilterRegion;

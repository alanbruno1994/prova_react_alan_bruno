import Content from "./SyledComponents/MyGamesRecentsStyled";

const MyGamesRecents: React.FC<{
  numbers: string;
  priceDate: string;
  typeGame: string;
  typeColor: string;
}> = (props) => {
  return (
    <Content typeColor={props.typeColor}>
      <div className="bar"></div>
      <div className="infos-recent-games">
        <span className="numbers">{props.numbers}</span>
        <span className="price-date">{props.priceDate}</span>
        <span className="type-game">{props.typeGame}</span>
      </div>
    </Content>
  );
};

export default MyGamesRecents;

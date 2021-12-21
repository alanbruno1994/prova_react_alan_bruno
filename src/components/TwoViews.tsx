import Div from "./SyledComponents/TwoViewsStyled";

const TwoViews: React.FC<{ header: boolean; home?: boolean }> = (props) => {
  return (
    <Div isHeader={props.header} home={props.home}>
      {props.children}
    </Div>
  );
};

export default TwoViews;

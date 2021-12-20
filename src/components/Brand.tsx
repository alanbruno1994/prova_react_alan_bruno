import styled from "styled-components";

const DIVBrand = styled.div`
  &.brand {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 70px);
    width: 100%;
  }
`;

const DIVBrandIntern = styled.div`
  &.organization {
    display: flex;
    flex-direction: column;
    font-family: Helvetica, Arial, sans-serif;
    font-style: italic;
    font-size: 65px;
    font-weight: bolder;
    color: #707070;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const FOR = styled.div`
  background-color: #b5c401;
  width: 144px;
  height: 39px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    font-size: 22px;
    color: white;
    text-align: center;
    font-style: italic;
    font-weight: bold;
  }
`;

const Brand = () => {
  return (
    <DIVBrand className="brand">
      <DIVBrandIntern className="organization">
        <span>The </span>
        <span>Geatest</span>
        <span>App</span>
        <FOR>
          <span>for</span>
        </FOR>
        <span style={{ textTransform: "uppercase" }}> Lottery</span>
      </DIVBrandIntern>
    </DIVBrand>
  );
};

export default Brand;

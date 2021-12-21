import { DIVBrand, DIVBrandIntern, FOR } from "./SyledComponents/BrandStyled";

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

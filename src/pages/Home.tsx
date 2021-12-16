import Footer from "@components/footer";
import Header from "@components/Header";
import TwoViews from "@components/TwoViews";

const Home=()=>
{
    return <>
        <Header/>
        <TwoViews header={true}></TwoViews>
        <Footer content="Copyright 2021 Luby Software"/>    
    </>
}

export default Home;
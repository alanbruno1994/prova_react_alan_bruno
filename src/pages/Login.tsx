import Brand from "@components/Brand"
import RegionLogin from "@components/RegionLogin"
import TwoViews from "@components/TwoViews"


const Login=()=>{

    return <>
    <TwoViews>
            <div><Brand/></div>
            <div><RegionLogin></RegionLogin></div>        
    </TwoViews>
    </>
}

export default Login
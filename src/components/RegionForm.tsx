import Card from "./UI/Card"
import { DIVFather, Form } from "./RegionFormStyled";

const RegionLogin: React.FC<{linkFooter?:JSX.Element,title:string}>=(props)=>{
    return <DIVFather>
                <span>{props.title}</span>
                <Card>
                    <Form>
                        {props.children}                       
                    </Form>
                </Card>
               {props.linkFooter}
            </DIVFather>
}

export default RegionLogin
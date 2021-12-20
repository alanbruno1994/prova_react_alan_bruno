import Card from "./UI/Card";
import React from "react";
import { DIVFather, Form } from "./SyledComponents/RegionFormStyled";

const RegionLogin: React.FC<{
  linkFooter?: JSX.Element;
  title: string;
  action?: (event: React.FormEvent) => void;
}> = (props) => {
  return (
    <DIVFather>
      <span>{props.title}</span>
      <Card>
        <Form onSubmit={props.action}>{props.children}</Form>
      </Card>
      {props.linkFooter}
    </DIVFather>
  );
};

export default RegionLogin;

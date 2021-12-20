import ReactDOM from "react-dom";

const ErrorPortal: React.FC = (props) => {
  const insert = document.getElementById("error");
  return ReactDOM.createPortal(props.children, insert ? insert : document.body);
};

export default ErrorPortal;

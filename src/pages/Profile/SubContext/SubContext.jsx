import React from "react";
import FormProfileKOL from "../FormContent/FormProfileKOL";
import FormProfileEnterprise from "../FormContent/FormProfileEnterprise";
import FormEmail from "../FormContent/FormEmail";
import FormPassword from "../FormContent/FormPassword";
import FormActivity from "../FormContent/FormActivity";
import FormPayment from "../FormContent/FormPayment";
import PaymentWallett from "../FormContent/Payment/PaymentWallett";
import Booking from "../FormContent/Book/Booking";

const componentKOL = [
  { key: "1", component: <FormProfileKOL /> },
  { key: "sub1", component: <FormEmail /> },
  { key: "sub2", component: <FormPassword /> },
  { key: "3", component: <FormActivity /> },
  { key: "4", component: <PaymentWallett /> },
  { key: "5", component: <Booking /> },

];

const componentEnt = [
  { key: "1", component: <FormProfileEnterprise /> },
  { key: "sub1", component: <FormEmail /> },
  { key: "sub2", component: <FormPassword /> },
  { key: "3", component: <FormActivity /> },
  { key: "4", component: <FormPayment /> },
];

const SubContext = (props) => {
  return (
    <div className="sub-context" style={{ width: "100%"  }}>
      {props.user.role === 2 &&
        Object.keys(props.changeContent).length === 0 && <FormProfileKOL />}
      {props.user.role === 2 &&
        componentKOL.map((component) => {
          if (component.key === props.changeContent) return component.component;
        })}

      {props.user.role === 1 &&
        Object.keys(props.changeContent).length === 0 && (
          <FormProfileEnterprise />
        )}
      {props.user.role === 1 &&
        componentEnt.map((component) => {
          if (component.key === props.changeContent) return component.component;
        })}
    </div>
  );
};

export default SubContext;

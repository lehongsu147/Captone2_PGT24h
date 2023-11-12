import React, { useContext } from "react";
import styles from './content.module.scss';
import HotPgt from "./hot-pgt/HotPgt";
import { CollapseContext } from "../../context/collapse.context";
import ScrollAuto from "../Banner/ScrollAuto";
import OutStandingPGT from "./outstanding-kol/OutStandingPgt";

const ContentHome = (props) => {
  const { isCollapse } = useContext(CollapseContext);
  return (
    <div className={styles.container}>
      <div className={styles.boxContainer} >
        <ScrollAuto />
      </div>
      <div className={`${styles.boxContainer} ${styles[isCollapse ? 'Collapse' : '']}`} >
        <HotPgt />
        <OutStandingPGT />
      </div>
    </div>
  );
};

export default ContentHome;

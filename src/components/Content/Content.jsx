import React, { useContext } from "react";
import styles from './content.module.scss';
import HotHOL from "./hot-kol/HotHOL";
import OutStandingKol from "./outstanding-kol/OutStandingKol";
import ModalSearch from "./PagePagination/ModalSearch";
import { CollapseContext } from "../../context/collapse.context";
import ScrollAuto from "../Banner/ScrollAuto";

const Content = (props) => {
  const { serchValue } = props;
  const { isCollapse } = useContext(CollapseContext);
  return (
    <div className={styles.container}>
      <div className={styles.boxContainer} >
        <ScrollAuto />
      </div>
      {serchValue && <div className={styles.boxContainer}>
        <ModalSearch serchValue={serchValue} />
      </div>}

      <div className={`${styles.boxContainer} ${styles[isCollapse ? 'Collapse' : '']}`} >
        <HotHOL />
        <OutStandingKol />
      </div>
    </div>
  );
};

export default Content;

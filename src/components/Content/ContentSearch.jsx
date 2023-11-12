import React, { useContext } from "react";
import styles from './content.module.scss';
import ScrollAuto from "../Banner/ScrollAuto";
import ModalSearch from "./search-pgt/ModalSearch";

const ContentSearch = (props) => {
  const { serchValue,categoryId } = props;
  return (
    <div className={styles.container}>
      <div className={styles.boxContainer} >
        <ScrollAuto />
      </div>
      <div className={styles.boxContainer}>
        <ModalSearch categoryId={categoryId} searchValue={serchValue} />
      </div>
    </div>
  );
};

export default ContentSearch;

import React, { useContext, useEffect, useState } from "react";
import styles from './content.module.scss';
import HotPgt from "./hot-pgt/HotPgt";
import { CollapseContext } from "../../context/collapse.context";
import Banner from "../Banner/Banner";
import BannerFactories from "../../services/BannerFactories";
import { ToastNotiError } from "../../utils/Utils";
import OutStandingPGT from "./outstanding-pgt/OutStandingPgt";

const ContentHome = (props) => {
  const { isCollapse } = useContext(CollapseContext);
   
  const [data, setData] = useState([]);
  const fetchApiList = async (value) => {
      try {
          const response = await BannerFactories.getListBanner();
          if (response?.status === 200) {
              setData(response.data);
          } else {
              ToastNotiError()
              console.error("API response does not contain expected data:", response);
          }
      } catch (error) {
          ToastNotiError()
      }
  };

  useEffect(() => {
      fetchApiList();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.boxContainer} >
        <Banner data={data}/>
      </div>
      <div className={`${styles.boxContainer} ${styles[isCollapse ? 'Collapse' : '']}`} >
        <HotPgt />
        <OutStandingPGT />
      </div>
    </div>
  );
};

export default ContentHome;

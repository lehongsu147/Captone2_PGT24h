import React, { useState, useEffect } from "react";
import { getKolFields } from "../../../services/FieldService";
import { getCities } from "../../../services/CityService";
import { getKols } from "../../../services/KolService";

import styles from "../content.module.scss";
import styled from "styled-components";
import { Button, Input, Pagination, Select } from 'antd';
import { ReloadOutlined, SearchOutlined } from '@ant-design/icons'

import ResultSearch from './ResultSearch';
import Constants from "../../../utils/constants";

const Title = styled.h2`
  color: #f0564a;
`;

const ModalSearch = ({ serchValue = '' }) => {
  const [kolFields, setKolFields] = useState([]);
  const [cities, setCities] = useState([]);
  const [kols, setKols] = useState([]);

  const [openResult, setOpenResult] = useState(false);

  const [searchField, setSearchField] = useState("");
  const [searchName, setSearchName] = useState();
  const [searchCity, setSearchCity] = useState("");

  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(10);

  useEffect(() => {
    setSearchName(serchValue)
  }, [serchValue])

  useEffect(() => {
    getKolFields().then((res) => {
      setKolFields(res);
    });

    getCities().then((res) => {
      setCities(res);
    });

    getKols().then((res) => {
      setKols(res);
    });
  }, []);

  const onChangeFieldHandler = (event) => {
    setSearchField(event.target.value);
  };

  const onChangeCityHandler = (event) => {
    setSearchCity(event.target.value);
  };

  const onChangeNameHandler = (event) => {
    setSearchName(event.target.value);
  };

  const regex = /(.*)\s\((.*)\)/;

  const resultKolFlter = kols.filter((kol) => {
    return (searchName === "" ? null : kol.firstName.includes(searchName) || kol.lastName.includes(searchName))
      && (searchField === "" ? kol : kol.fields?.find(field => field?.name === searchField))
      && (searchCity === "" ? kol : kol.city?.name === searchCity)
  })

  const onSearchHandler = () => {
    setOpenResult(true)
  }

  const onResetHandler = () => {
    setSearchField("")
    setSearchName("")
    setSearchCity("")
    setOpenResult(false)
  }

  const optionCategory = Constants.optionsCategory.map((field) => {
    return {
      value: field.id,
      label: field.name,
    };
  });

  return (
    <div style={{ width: '98%' }}>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'space-between', width: '100%' }}>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-start', height: 30, width: '60%' }} >
          <Input
            type="text"
            value={searchName}
            style={{ width: 300 }}
            placeholder='Nhập tên cần tìm'
            onChange={onChangeNameHandler}
          />
          <Select
            style={{ width: 150 }}
            options={optionCategory}
            onChange={onChangeFieldHandler}
            placeholder='Chọn lĩnh vực'
          />
          <Select
            style={{ width: 150 }}
            onChange={onChangeCityHandler}
            options={Constants.vietnamProvinces}
            placeholder='Chọn khu vực'
          />
        </div>
        <div style={{ marginLeft: 10, display: 'flex', gap: 8, justifyContent: 'flex-end', height: 30, width: '30%' }} >
          <Button onClick={onSearchHandler} className={styles['btn-search']}>Tìm kiếm <SearchOutlined /></Button>
          <Button onClick={onResetHandler} className={styles['btn-renew']}>Làm mới <ReloadOutlined /></Button>
        </div>
      </div>
      {openResult && <div className={styles['search-result']}>
        <Title>Kết quả tìm kiếm</Title>
        <ResultSearch resultKolFlter={resultKolFlter} />
      </div>}
    </div>
  );
};

export default ModalSearch;

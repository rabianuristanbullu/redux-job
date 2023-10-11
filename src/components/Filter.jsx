import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleInputChange,
  handleStatusChange,
  handleSortChange,
  handleReset,
} from "../app/jobSlice";
import { toast } from "react-toastify";

const Filter = () => {
  const dispatch = useDispatch();

  const onSearchChange = (event) => {
    dispatch(handleInputChange(event.target.value));
  };

  const onStatusChange = (event) => {
    dispatch(handleStatusChange(event.target.value));
  };

  const onSortChange = (event) => {
    dispatch(handleSortChange(event.target.value));
  };
  const onResetButtonClick = () => {
    dispatch(handleReset());

    toast.warn("Filtreler Temizlendi", { autoClose:2000 })
  };

  return (
    <section className="add-sec filter-sec">
      <h2>İş Arayın...</h2>
      <div className="inputs">
        <div className="input-field">
          <label>Şirket İsmi</label>
          <input type="text" onChange={onSearchChange} />
        </div>

        <div className="input-field">
          <label>Durum</label>
          <select onChange={onStatusChange}>
            <option hidden>Hepsi</option>
            <option value="Mülakat">Mülakat</option>
            <option value="Reddedildi">Reddedildi</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
          </select>
        </div>

        <div className="input-field">
          <label>Sırala:</label>
          <select onChange={onSortChange}>
            <option hidden>Sırala</option>
            <option value="Önce Yeni">En Yeni</option>
            <option value="Önce Eski">En Eski</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </div>
        <button onClick={onResetButtonClick}>Filtreleri Temizle</button>
      </div>
    </section>
  );
};

export default Filter;

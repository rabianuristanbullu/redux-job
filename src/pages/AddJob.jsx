import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJob = () => {
  const navigate=useNavigate()
  const [formState, setFormState] = useState({
    id: Number(new Date().getTime()),
    position: "",
    company: "",
    location: "",
    status: "Durum",
    type: "İş Türü",
    date: new Date().toLocaleDateString().replaceAll(".", "/"),
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formState.position ||
      !formState.company ||
      !formState.location ||
      formState.status === "Durum" ||
      formState.type === "İş Türü"
    ) {
      toast.dark("Tüm Alanlar Zorunludur");
    } else {
      axios
        .post("http://localhost:3004/jobs", formState)
        .then((res) => {
          toast.success("İşiniz Başarıyla Eklendi");
          navigate("/")
        })
        .catch((err) => {
          toast.warning("Veriyi Ekleme sırasında Bir Hata ile Karşılaştık...");
        });
    }
  };
  return (
    <section className="add-sec">
      <h2>Yeni İş Ekle</h2>
      <div className="inputs">
        <div className="input-field">
          <label>Pozisyon</label>
          <input
            type="text"
            onChange={(event) =>
              setFormState({ ...formState, position: event.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label>Şirket</label>
          <input
            type="text"
            onChange={(event) =>
              setFormState({ ...formState, company: event.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label>Lokasyon</label>
          <input
            type="text"
            onChange={(event) =>
              setFormState({ ...formState, location: event.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label>Durum</label>
          <select
            onChange={(event) => {
              setFormState({ ...formState, status: event.target.value });
            }}
          >
            <option hidden>Durum</option>
            <option value={"Mülakat"}>Mülakat</option>
            <option value={"Devam Ediyor"}>Devam Ediyor</option>
            <option value={"Reddedildi"}>Reddedildi</option>
          </select>
        </div>

        <div className="input-field">
          <label>Tür</label>
          <select
            onChange={(event) => {
              setFormState({ ...formState, type: event.target.value });
            }}
          >
            <option hidden>İş Türü</option>
            <option value={"Tam Zamanlı"}>Tam Zamanlı</option>
            <option value={"Yarı Zamanlı"}>Yarı Zamanlı</option>
            <option value={"Uzaktan"}>Uzaktan</option>
            <option value={"Staj"}>Staj</option>
          </select>
        </div>

        <button onClick={handleSubmit}>EKLE</button>
      </div>
    </section>
  );
};

export default AddJob;

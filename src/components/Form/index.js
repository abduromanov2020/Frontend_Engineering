import React, { useState } from "react";
import data from "../../utils/constants/provinces";
import Button from "../Button";
import Img from "../Image";
import styles from "./index.module.css";

function Form(props) {
  const { provinces, setProvinces } = props;

  const [provinsi, setProvinsi] = useState();
  const [status, setStatus] = useState();
  const [jumlah, setJumlah] = useState();

  const [isProvinsiEmpty, setIsProvinsiEmpty] = useState(false);
  const [isStatusEmpty, setIsStatusEmpty] = useState(false);
  const [isJumlahEmpty, setIsJumlahEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!provinsi) {
      setIsProvinsiEmpty(true);
      return;
    }

    if (!status) {
      setIsProvinsiEmpty(false);
      setIsStatusEmpty(true);
      return;
    }

    if (!jumlah) {
      setIsProvinsiEmpty(false);
      setIsStatusEmpty(false);
      setIsJumlahEmpty(true);
      return;
    }

    const province = {
        kota: provinsi,
        [status]: jumlah,
      };

    const newProvince = [...provinces];

    const data = newProvince.map(p =>
      p.kota === province.kota
        ? { ...p, [status] : p[status] += Number(jumlah) }
        : p
    );

    setProvinces(data);

    setIsProvinsiEmpty(false);
    setIsStatusEmpty(false);
    setIsJumlahEmpty(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.form__left}>
          <Img>img/form.svg</Img>
        </div>
        <div className={styles.form__right}>
          <div className={styles.form__title}>
            <h2>Form Covid</h2>
          </div>
          <div className={styles.form__container}>
            <form action="" onSubmit={handleSubmit}>
              <div className={styles.form__group}>
                <label htmlFor="">Provinsi</label>
                <select onChange={(e) => setProvinsi(e.target.value)}>
                  <option>Pilih Provinsi</option>
                  {data.provinces.map((data) => (
                    <option key={data.kota} value={data.kota}>
                      {data.kota}
                    </option>
                  ))}
                </select>
                {isProvinsiEmpty && <span>Provinsi Wajib Di Isi</span>}
              </div>
              <div className={styles.form__group}>
                <label htmlFor="">Status</label>
                <select onChange={(e) => setStatus(e.target.value)}>
                  <option>Pilih Status</option>
                  <option value="kasus">Positif</option>
                  <option value="sembuh">Sembuh</option>
                  <option value="dirawat">Di Rawat</option>
                  <option value="meninggal">Meninggal</option>
                </select>
                {isStatusEmpty && <span>Status Wajib Di Isi</span>}
              </div>
              <div className={styles.form__group}>
                <label htmlFor="">Jumlah</label>
                <input
                  type="text"
                  onChange={(e) => setJumlah(e.target.value)}
                />
                {isJumlahEmpty && <span>Jumlah Wajib Di Isi</span>}
              </div>
              <div className={styles.form__button}>
                <Button>Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;

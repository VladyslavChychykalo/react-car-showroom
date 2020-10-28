import React from "react";
import style from "./Loader.module.css";

const Loader: React.FC = () => (
  <div className={style.loadingioSpinnerGear}>
    <div className={style.ldio}>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
);

export default Loader;

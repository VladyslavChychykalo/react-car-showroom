import React from "react";
import style from "./Footer.module.css";
import { ReactComponent as FacebookLogo } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/icons/instagram.svg";
import { ReactComponent as YouTubeLogo } from "../../assets/icons/youtube.svg";

const Footer = () => (
  <div className={style.wrapper}>
    <div>
      <div className={style.topBlock}>
        <p>Arrow-Benz в Украине</p>
        <button>Наверх</button>
      </div>

      <div className={style.middleBlock}>
        <p>Arrow-Benz в социальных сетях: </p>
        <div className={style.logoContainer}>
          <FacebookLogo className={style.logo} />
          <YouTubeLogo className={style.logo} />
          <InstagramLogo className={style.logo} />
        </div>
      </div>

      <div className={style.bottomBlock}>
        <div className={style.linksContainer}>
          <p>Приобрести автомобиль</p>
          <a href="#">Обзор моделей</a>
          <a href="#">Акции и предложения</a>
        </div>
        <div className={style.linksContainer}>
          <p>Владельцам</p>
          <a href="#"></a>
          <a href="#"></a>
        </div>
        <div className={style.linksContainer}>
          <p>Услуги</p>
          <a href="#">Брошюры</a>
          <a href="#">Найти дилера</a>
        </div>
        <div className={style.linksContainer}>
          <p>Мир Arrow-Benz</p>
          <a href="#">Спорт</a>
          <a href="#">История</a>
          <a href="#">Дизайн</a>
          <a href="#">Спорт</a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;

import type { NextPage } from "next";
import styles from "./styles.module.css";
import Harry from "../../assets/harryUndefind.png";

import Wizard from "../../assets/wizardIMG.svg";
import Image from "next/image";
const Box = ({
  name,
  house,
  img,
}: {
  name: string;
  house: string;
  img: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={img} alt="" className={styles.img} />
        <span className={styles.name}>{name}</span>
        <div className={styles.lineStyle}>
          <Image src={Wizard} alt="harry esteve aqui" />
          <span>{house}</span>
        </div>
      </div>
    </div>
  );
};
export default Box;

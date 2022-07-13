import type { NextPage } from "next";
import SearchBar from "../../components/SearchBar";
import styles from "./styles.module.css";
import Image from "next/image";
import HarryIcon from "../../assets/harryIcon.svg";
import MagicWand from "../../assets/magicWand.svg";
import Box from "../../components/Box";
import axios from "axios";

import { useState, useEffect } from "react";
import type IHarry from "../../interfaces/interface.service.harry";
const Harry: NextPage = () => {
  const [info, setInfo] = useState<IHarry[]>([]);
  const fetchAllData = async () => {
    const response = await axios.get<IHarry[]>(
      "http://hp-api.herokuapp.com/api/characters"
    );
    setInfo(response.data);
  };
  useEffect(() => {
    fetchAllData();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Image src={HarryIcon} alt="harry esteve aqui" loading="eager" />
        <SearchBar />

        <Image
          src={MagicWand}
          alt="harry esteve aqui"
          loading="eager"
          onClick={fetchAllData}
        />
      </div>
      <div className={styles.mainPage}>
        <div className={styles.image}>
          <div className={styles.wrap}>
            {info.map((character, index) => {
              return (
                <Box
                  house={character.house}
                  name={character.name}
                  key={index}
                  img={character.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Harry;

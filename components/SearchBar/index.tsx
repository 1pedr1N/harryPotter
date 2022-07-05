import type { NextPage } from "next";
import styles from "./styles.module.css";
import Image from "next/image";

import Search from "../../assets/searchIcon.svg";
import { useEffect, useState } from "react";
const SearchBar: NextPage = () => {
  return (
    <div className={styles.container}>
      <Image src={Search} alt="legal" className={styles.image} />

      <input
        type="text"
        required
        placeholder="pesquise seu favorito!"
        className={styles.inputSearch}
      />
    </div>
  );
};
export default SearchBar;

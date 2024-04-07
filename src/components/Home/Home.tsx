import React, { FC, useState } from "react";
import styles from "./Home.module.css";
import ReactDOM from "react-dom";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [isExpand, setIsExpand] = useState(false);

  function handleClick(): void {
    let ttt = document.body.className;
    if (ttt == "toggle-sidebar") {
      document.body.className = "";
    } else {
      document.body.className = "toggle-sidebar";
    }
  }

  return (
    <>
      <Header handleClick={handleClick} />
      <SideNav />
    </>
  );
};

export default Home;

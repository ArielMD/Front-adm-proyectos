import React from "react";
import HomeStyled from "./homeStyled";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import FormTaks from "../../components/formTask/FormTask";
import ListTask from "../../components/listTask/ListTask";
const Home = () => {
  return (
    <HomeStyled>
      <Sidebar />
      <div className="container">
        <Navbar />
        <main>
          <FormTaks />
          <ListTask></ListTask>
        </main>
      </div>
    </HomeStyled>
  );
};

export default Home;

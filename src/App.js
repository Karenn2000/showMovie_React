import React from "react";
import Layout from "./layout";
import SideBar from "./components/SideBar";
import TitleNam from "./TitleNam";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <SideBar />
        <TitleNam />
      </Layout>
    </>
  );
}

export default App;

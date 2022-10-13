import React from "react";
import Layout from "../../components/Layout";
import Home from "../../components/Home/";
import * as Styles from "./styles";

const HomeTemplate = () => {
  return (
    <Layout>
      <Styles.ContainerMain>
        <Home />
      </Styles.ContainerMain>
    </Layout>
  );
};

export default HomeTemplate;

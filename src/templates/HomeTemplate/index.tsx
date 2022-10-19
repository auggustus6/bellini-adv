import React from "react";
import Layout from "../../components/Layout";
import Home from "../../components/Home/";
import * as Styles from "./styles";
import Work from "../../components/Work";
import About from "../../components/About";
import ContentContact from "../../components/ContentContact";
import OurClientes from "../../components/OurClients";
import BlogSection from "../../components/BlogSection";

const HomeTemplate = () => {
  return (
    <Layout>
      <Styles.ContainerMain>
        <Home />
        <Work />
        <About />
        <ContentContact />
        <OurClientes />
        <BlogSection />
      </Styles.ContainerMain>
    </Layout>
  );
};

export default HomeTemplate;

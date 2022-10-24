import React from "react";
import * as Styles from "../Menu/styles";
import { IconMenuProps } from "../IconMenu/index";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

const Menu = ({ expanded }: IconMenuProps) => {
  const elementRef = useAnimateOnScroll();
  return (
    <Styles.Nav className={expanded ? "active" : ""}>
      <Styles.Teste ref={elementRef}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#culture">Cultural</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </Styles.Teste>
    </Styles.Nav>
  );
};

export default Menu;

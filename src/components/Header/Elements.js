import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const HeaderSection = styled.header`
  position: relative;
  width: 100%;
  height: 100px;
  background-color: #000000;
  top: 0;
  margin-top: -25px;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
`;

export const Logo = styled.div`
  width: 50%;
`;
export const LogoText = styled.h1`
  color: #ffffff;
  text-align: left;
`;
export const Menu = styled.div`
  width: 50%;
`;
export const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    color: #ffffff;
  }
`;
export const CustomIcon = styled.h1`
  font-size: 30px;
  color: #ffffff;
  margin-top: 40px;
  text-align: right;
`;
export const DeskMenu = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;
export const MenuLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
`;

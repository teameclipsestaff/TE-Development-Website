import React from "react";
import {
  HeaderSection,
  Wrapper,
  Logo,
  LogoText,
  Menu,
  Hamburger,
  CustomIcon,
  DeskMenu,
  MenuLink
} from "./Elements";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <HeaderSection>
        <Wrapper>
          <Logo>
            <LogoText>Team Eclipse</LogoText>
          </Logo>
          <Menu>
            <Hamburger>
              <CustomIcon>
                <FaBars />
              </CustomIcon>
            </Hamburger>
            <DeskMenu>
              <MenuLink to="https://youtube.com">About Us</MenuLink>
              <MenuLink to="#">The Team</MenuLink>
              <MenuLink to="#">Videos</MenuLink>
            </DeskMenu>
          </Menu>
        </Wrapper>
      </HeaderSection>
    </>
  );
};

export default Header;

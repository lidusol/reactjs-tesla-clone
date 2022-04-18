import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerNavStatus, setBurgerNavStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="Site logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a href="#" key={index}>
              {car}
            </a>
          ))}
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panel</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setBurgerNavStatus(true)}>Menu</CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerNavStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerNavStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}

        <li>
          <a href="#">Solar Roof</a>
        </li>
        <li>
          <a href="#">Solar Panels</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    padding: 6px 10px;
    flex-wrap: nowrap;
    margin-right: 10px;
    transition: color 0.33s ease, background-color 0.33s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.072);
      border-radius: 12px;
    }
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    padding: 6px 10px;
    margin-right: 15px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.072);
      border-radius: 12px;
    }
  }
`;

const CustomMenu = styled.div`
  cursor: pointer;
  padding: 6px 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.072);
    border-radius: 12px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 30px 20px 40px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  height: 100%;
  overflow-y: scroll;
  li {
    padding: 15px 0;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

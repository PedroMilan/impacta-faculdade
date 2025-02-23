import React from "react";

import * as Styled from "./styles";

import { Container } from "@mui/material";

import { isMobile } from "react-device-detect";

import Logo from "../../shared/assets/logo-faculdade-branco.png";

const HeaderApp: React.FC = () => {
  return (
    <Styled.Container>
      <Container maxWidth={isMobile ? "md" : "xl"}>
        <Styled.Container>
          <Styled.Image src={Logo} alt="Logo" />
        </Styled.Container>
      </Container>
    </Styled.Container>
  );
};

export { HeaderApp };

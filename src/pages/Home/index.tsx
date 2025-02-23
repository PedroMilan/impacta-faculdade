import React from "react";

import * as Styled from "./styles";
import { Container } from "@mui/material";
import { HeaderApp } from "../../components/Header";
import { ReservationList } from "../../components/Reservation";

const HomePage: React.FC = () => {
  return (
    <>
      <HeaderApp />
      <Styled.Header>
        <Container maxWidth="xl">
          <Styled.CenterTitleFlex>
            <Styled.HeaderCenterTitle>
              <Styled.HeaderTitle>Planeje sua viagem</Styled.HeaderTitle>
              <Styled.HeaderSubTitle>com facilidade</Styled.HeaderSubTitle>
              <Styled.HeaderText>
                Descubra hotéis, passeios e experiências incríveis. Reserve
                agora e aproveite cada momento da sua viagem.
              </Styled.HeaderText>
            </Styled.HeaderCenterTitle>
          </Styled.CenterTitleFlex>
        </Container>
      </Styled.Header>
      <ReservationList />
    </>
  );
};

export { HomePage };

import styled from "styled-components";

import { Container, DialogActions } from "@mui/material";

export const ContainerPage = styled(Container)`
  padding-top: 10px;
`;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const DialogExclude = styled(DialogActions)`
  display: flex;
  justify-content: space-between !important;
  align-items: center !important;
`;

export const BoxMargin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

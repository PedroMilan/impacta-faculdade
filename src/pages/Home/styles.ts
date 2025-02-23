import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  //background: url("/picture.jpeg") no-repeat center center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/picture2.jpg");
  background-size: cover;
  height: 480px;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const CenterTitleFlex = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const HeaderCenterTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeaderTitle = styled.div`
  font-size: 52px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const HeaderSubTitle = styled.div`
  font-size: 54px;
  font-weight: bold;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const HeaderText = styled.div`
  font-size: 24px;
  width: 460px;
  color: #fff;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const SelectPlan = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  border-radius: 4px;
  margin-top: 20px;

  .MuiFormLabel-root {
    background-color: transparent !important;
    padding-right: 15px !important;
    font-weight: bold;
  }

  @media (max-width: 728px) {
    background-color: white;
    width: 100%;
    .MuiFormLabel-root {
      padding-right: 0px !important;
      width: 50% !important;
    }
  }
`;

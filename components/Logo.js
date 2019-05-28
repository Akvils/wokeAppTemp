import React from "react";
import styled from "styled-components";

const Logo = props => (
  <Container>
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
  </Container>
);

export default Logo;

const Container = styled.View`
  background: white;
  height: 60px;
  width: auto;
  padding: 12px 16px 12px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  margin: 0 8px;
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
  margin-left: 10px;
  margin-top: 10px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  padding-left: 30px;
`;

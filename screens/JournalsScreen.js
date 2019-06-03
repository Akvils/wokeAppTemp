import React from "react";
import styled from "styled-components";

class JournalsScreen extends React.Component {
  static navigationOptions = {
    // title: "Journals",
    header: null
  };

  render() {
    return (
      <Container>
        <Title>Journals</Title>
        <Text>Journals Screen</Text>
      </Container>
    );
  }
}

export default JournalsScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Title = styled.Text`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 24px;
  color: #241824;
  font-weight: 600;
  margin-top: 50px;
  margin-left: 20px;
  width: 220px;
`;

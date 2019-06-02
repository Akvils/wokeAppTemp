import React from "react";
import styled from "styled-components";
import { LinearGradient } from "expo";
import CourseSection from "../components/CourseSection";
import Courses from "../components/Courses";
import { Dimensions } from "react-native";

let screenWidth = Dimensions.get("window").width;

class CoursesScreen extends React.Component {
  static navigationOptions = { title: "Courses", header: null };

  render() {
    return (
      <Container>
        <ScrollView>
          <Hero>
            {/* <Background source={require("../assets/background13.jpg")} /> */}
            {/* <LinearGradient
              colors={["rgba(245, 180, 227, 1)", "rgba(139, 119, 186, 1)"]}
              // colors={["rgba(36, 24, 36, 0.1)", "rgba(36, 24, 36, 0.9)"]}
              style={{ position: "absolute", width: screenWidth, height: 300 }}
            /> */}
            {/* <Logo source={require("../assets/logo-meditate.png")} /> */}
            {/* <Caption>12 Sections</Caption> */}
            <Title>Explore</Title>
            <Sections>
              <SectionScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {sections.map((section, index) => (
                  <CourseSection
                    key={index}
                    title={section.title}
                    image={section.image}
                    progress={section.progress}
                  />
                ))}
              </SectionScrollView>
            </Sections>
            {/* <Author>
              <Avatar source={require("../assets/avatar.jpg")} />
              <Name>Topic: Meditation</Name>
            </Author> */}
          </Hero>
          <Subtitle>{"All Series".toUpperCase()}</Subtitle>
          <Courses />
        </ScrollView>
      </Container>
    );
  }
}

export default CoursesScreen;

const Container = styled.View`
  background: #f5f7fa;
`;

const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const Hero = styled.View`
  height: 300px;
  background: #f5f7fa;
`;

const Background = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: ${screenWidth};
  height: 300px;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  margin-top: 50px;
  margin-left: 20px;
  align-self: center;
`;

const Caption = styled.Text`
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  color: #b8bece;
  margin-top: 20px;
  margin-left: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #241824;
  font-weight: 600;
  margin-top: 50px;
  margin-left: 20px;
  width: 220px;
`;

const Sections = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

const SectionScrollView = styled.ScrollView`
  padding: 10px 0;
`;

const Author = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-left: 20px;
`;

const Avatar = styled.Image`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background: white;
`;

const Name = styled.Text`
  margin-left: 8px;
  color: #b8bece;
`;

const Subtitle = styled.Text`
  font-size: 15;
  text-transform: uppercase;
  font-weight: 600;
  color: #7c8495;
  margin: 20px 0 0 20px;
`;

const sections = [
  {
    title: "Meditation",
    progress: 0.2,
    image: require("../assets/background1.jpg")
  },
  {
    title: "Energy",
    progress: 0.3,
    image: require("../assets/background2.jpg")
  },
  {
    title: "Spirituality",
    progress: 0.9,
    image: require("../assets/background3.jpg")
  },
  {
    title: "Healing",
    progress: 0.5,
    image: require("../assets/background4.jpg")
  },
  {
    title: "World",
    progress: 0.1,
    image: require("../assets/background6.jpg")
  }
];

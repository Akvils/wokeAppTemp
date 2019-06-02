import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
  Platform
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
// import { Icon } from "expo";
import Logo from "../components/Logo";
import Course from "../components/Course";
import Menu from "../components/Menu";
import { connect } from "react-redux";
import Avatar from "../components/Avatar";

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    // title: "Home"
    header: null
  };

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);

    if (Platform.OS == "android") StatusBar.setBarStyle("light-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity
          }}
        >
          <SafeAreaView>
            <ScrollView style={{ height: "100%" }}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 20 }}
                >
                  <Avatar />
                </TouchableOpacity>
                <Title>Welcome back,</Title>
                <Name>{this.props.name}</Name>
                <WokeIcon source={require("../assets/icon.png")} />
              </TitleBar>
              <ScrollView
                horizontal={true}
                style={{
                  padding: 20,
                  paddingLeft: 12,
                  paddingTop: 30
                }}
                showsHorizontalScrollIndicator={false}
              >
                {logos.map((logo, index) => (
                  <Logo key={index} image={logo.image} text={logo.text} />
                ))}
              </ScrollView>
              <Subtitle>{"Continue Learning".toUpperCase()}</Subtitle>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                {cards.map((card, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      this.props.navigation.push("Section", {
                        section: card
                      });
                    }}
                  >
                    <Card
                      title={card.title}
                      image={card.image}
                      caption={card.caption}
                      logo={card.logo}
                      subtitle={card.subtitle}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Subtitle>{"Popular Series".toUpperCase()}</Subtitle>
              <CoursesContainer>
                {courses.map((course, index) => (
                  <Course
                    key={index}
                    title={course.title}
                    image={course.image}
                    subtitle={course.subtitle}
                    logo={course.logo}
                    topic={course.topic}
                    avatar={course.avatar}
                    caption={course.caption}
                  />
                ))}
              </CoursesContainer>
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

//styled components

const CoursesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 10px;
`;

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Subtitle = styled.Text`
  color: #7c8495;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const WokeIcon = styled.Image`
  width: 44px;
  height: 44px;
  background: transparent;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 5;
  right: 20;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f5f7fa;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #7c8495;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

//data
const logos = [
  {
    image: require("../assets/logo-framerx.png"),
    text: "Samadhi Journal "
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Autolysis Journal "
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Chat "
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Self Analysis "
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Truth "
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Self Esteem "
  }
];

const cards = [
  {
    title: "Meditation",
    image: require("../assets/background1.jpg"),
    subtitle: "Foundation",
    caption: "4 of 12 sections",
    logo: require("../assets/logo-meditate.png")
  },
  {
    title: "Maturity",
    image: require("../assets/background2.jpg"),
    subtitle: "Foundation",
    caption: "3 of 12 sections",
    logo: require("../assets/logo-meditate.png")
  },
  {
    title: "Energy",
    image: require("../assets/background13.jpg"),
    subtitle: "Foundation",
    caption: "2 of 12 sections",
    logo: require("../assets/logo-meditate.png")
  },
  {
    title: "Love",
    image: require("../assets/background14.jpg"),
    subtitle: "Foundation",
    caption: "1 of 12 sections",
    logo: require("../assets/logo-meditate.png")
  }
];

const courses = [
  {
    title: "Vastu Foundations",
    subtitle: "12 sections",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-meditate.png"),
    topic: "Energy",
    avatar: require("../assets/avatar.jpg"),
    caption: "Programming the subconscious by designing the space"
  },
  {
    title: "Rekie",
    subtitle: "10 sections",
    image: require("../assets/background12.jpg"),
    logo: require("../assets/logo-meditate.png"),
    topic: "Energy",
    avatar: require("../assets/avatar.jpg"),
    caption: "Holistic healing by the divine energy of existence"
  },
  {
    title: "Past Life Regression",
    subtitle: "10 sections",
    image: require("../assets/background1.jpg"),
    logo: require("../assets/logo-meditate.png"),
    topic: "Spirituality",
    avatar: require("../assets/avatar.jpg"),
    caption: "Know how your present is shaped by who you were in the past"
  },
  {
    title: "Astral Projection",
    subtitle: "10 sections",
    image: require("../assets/background2.jpg"),
    logo: require("../assets/logo-meditate.png"),
    topic: "Spirituality",
    avatar: require("../assets/avatar.jpg"),
    caption: "Enter the spiritual realm and Bon voyage"
  }
];

import React from "react";
import styled from "styled-components";
import Process from "../components/Process";
import { PanResponder, Animated } from "react-native";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    action: state.action
  };
}

function getNextIndex(index) {
  var nextIndex = index + 1;
  if (nextIndex > process.length - 1) {
    return 0;
  }
  return nextIndex;
}

class ProcessScreen extends React.Component {
  static navigationOptions = {
    // title: "Section",
    header: null
  };

  state = {
    pan: new Animated.ValueXY(),
    scale: new Animated.Value(0.9),
    translateY: new Animated.Value(44),
    thirdScale: new Animated.Value(0.8),
    thirdTranslateY: new Animated.Value(-50),
    index: 0,
    opacity: new Animated.Value(0)
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (event, gestureState) => {
        if (gestureState.dx === 0 && gestureState.dy === 0) {
          return false;
        } else {
          if (this.props.action === "openCard") {
            return false;
          } else {
            return true;
          }
        }
      },

      onPanResponderGrant: () => {
        Animated.spring(this.state.scale, { toValue: 1 }).start();
        Animated.spring(this.state.translateY, { toValue: 0 }).start();

        Animated.spring(this.state.thirdScale, { toValue: 0.9 }).start();
        Animated.spring(this.state.thirdTranslateY, { toValue: 44 }).start();

        Animated.timing(this.state.opacity, { toValue: 1 }).start();
      },

      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),

      onPanResponderRelease: () => {
        const positionY = this.state.pan.y.__getValue();
        Animated.timing(this.state.opacity, { toValue: 0 }).start();
        // console.log(positionY);

        if (positionY > 200) {
          Animated.timing(this.state.pan, {
            toValue: { x: 0, y: 1000 }
          }).start(() => {
            this.state.pan.setValue({ x: 0, y: 0 });
            this.state.scale.setValue(0.9);
            this.state.translateY.setValue(44);
            this.state.thirdScale.setValue(0.8);
            this.state.thirdTranslateY.setValue(-50);
            this.setState({ index: getNextIndex(this.state.index) });
          });
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 }
          }).start();

          Animated.spring(this.state.scale, { toValue: 0.9 }).start();
          Animated.spring(this.state.translateY, { toValue: 44 }).start();

          Animated.spring(this.state.thirdScale, { toValue: 0.8 }).start();
          Animated.spring(this.state.thirdTranslateY, { toValue: -50 }).start();
        }
      }
    });
  }

  render() {
    return (
      <Container>
        <Title>Processes</Title>
        <AnimatedMask style={{ opacity: this.state.opacity }} />
        <Animated.View
          style={{
            transform: [
              { translateX: this.state.pan.x },
              { translateY: this.state.pan.y }
            ]
          }}
          {...this._panResponder.panHandlers}
        >
          <Process
            title={process[this.state.index].title}
            image={process[this.state.index].image}
            author={process[this.state.index].author}
            text={process[this.state.index].text}
            canOpen={true}
          />
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            transform: [
              { scale: this.state.scale },
              { translateY: this.state.translateY }
            ]
          }}
        >
          <Process
            title={process[getNextIndex(this.state.index)].title}
            image={process[getNextIndex(this.state.index)].image}
            author={process[getNextIndex(this.state.index)].author}
            text={process[getNextIndex(this.state.index)].text}
          />
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -3,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            transform: [
              { scale: this.state.thirdScale },
              { translateY: this.state.thirdTranslateY }
            ]
          }}
        >
          <Process
            title={process[getNextIndex(this.state.index + 1)].title}
            image={process[getNextIndex(this.state.index + 1)].image}
            author={process[getNextIndex(this.state.index + 1)].author}
            text={process[getNextIndex(this.state.index + 1)].text}
          />
        </Animated.View>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(ProcessScreen);

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

const Mask = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  z-index: -3;
`;

const AnimatedMask = Animated.createAnimatedComponent(Mask);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
`;

const Text = styled.Text``;

//Data
const process = [
  {
    title: "Catharsis",
    image: require("../assets/background5.jpg"),
    author: "Osho ",
    text:
      "Most powerful technique to eliminate noise from the subconscious mind and take one out of lower leves of consciousness, developed for todays man by Osho"
  },
  {
    title: "Anapansati Yog",
    image: require("../assets/background6.jpg"),
    author: "Buddha ",
    text:
      "Foundation technique of Meditation developed by Buddha to focus consciousness. "
  },
  {
    title: "Latehan",
    image: require("../assets/background7.jpg"),
    author: "Old Testament ",
    text:
      "Powerful technique to eliminate the mental noise from the subconscious. "
  }
];

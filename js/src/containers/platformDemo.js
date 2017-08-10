import React, { Component } from "react";
import { Container, Text, Content, Thumbnail } from "native-base";
import { Platform, View } from "react-native";

import MainHeader from "../dump-components/header/index";

const ic_smile = require("../../img/ic_smile.png");
export default class PlatformDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hourOfDay: 3,
      minute: 30
    };
  }

  componentWillMount() {}

  componentWillUpdate() {}

  render() {
    return (
      <Container>
        <MainHeader title="PlatformDemo" {...this.props} />
        <Content>
          
        </Content>
      </Container>
    );
  }

  componentDidUpdate() {}

  componentDidMount() {}
}

import React, { Component } from "react";
import {View} from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Input
} from "native-base";

import styles from "./styles";

class IconInput extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Icon Input</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Item>
            <Icon active name="home" />
            <View style={{backgroundColor:'gray',width:0.5,height:'100%'}}/>
            <Input placeholder="Icon Textbox" />
          </Item>
          <Item>
            <Input placeholder="Icon Alignment in Textbox" />
            <Icon active name="swap" />
          </Item>
        </Content>
      </Container>
    );
  }
}

export default IconInput;

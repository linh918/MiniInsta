import React, { Component } from "react";
import { 
  Container,
  Left,
  Text,
  Right,
  Body,
  Icon,
  Header

 } from "native-base";
import {Image,TouchableOpacity} from 'react-native'
import styles from './styles'

const ic_user = require("../../../img/ic_user_50px.png")

export default class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentWillUpdate() {}

  render() {
    return (
      <Header androidStatusBarColor="#21425D" style={styles.header} >
        <Left
          style={{
            flexDirection: "row",
          
          }}
        > 
          <TouchableOpacity>
           <Icon name="menu" style={{ color: 'white' ,marginLeft:16}}   />
          </TouchableOpacity>
        </Left>
        <Body >
          <Text style={styles.text} >Mini Insta </Text>
        </Body>
        <Right>
           <TouchableOpacity>
          <Icon name="search" style={{ color: 'white' ,marginRight:16}}   />
           </TouchableOpacity>
        </Right>
      </Header>
    );
  }

  componentDidUpdate() {}

  componentDidMount() {}
}

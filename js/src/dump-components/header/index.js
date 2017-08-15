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
            flex:1
          }}
        > 
          <TouchableOpacity>
           <Icon name="menu" style={{ color: 'white' ,marginLeft:8}}   />
          </TouchableOpacity>
        </Left>
        <Body style={{flex:1,alignItems:'center',justifyContent:'center'}}  >
          <Text style={styles.text} >Instagram </Text>
        </Body>
        <Right style={{flex:1}} >
          <TouchableOpacity>
           <Icon name="send" style={{ color: 'white' ,marginRight:8}}   />
          </TouchableOpacity>
        </Right>
      </Header>
    );
  }

  componentDidUpdate() {}

  componentDidMount() {}
}

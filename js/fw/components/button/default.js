import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  H3,
  StyleProvider ,
} from "native-base";


import styles from "./styles";

class Default extends Component {
  // eslint-disable-line

  render() {
    return (
       
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button 
            
            transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Default</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#fff", padding: 20, }}>
          <Button light  style={styles.mb15}><Text>Light</Text></Button>
          <Button primary style={{ backgroundColor:'black'}}><Text>Info</Text></Button>
          <Button primary style={styles.mb15}><Text>Primary</Text></Button>
          <Button success style={styles.mb15}><Text>Success</Text></Button>
          <Button warning style={styles.mb15}><Text>Warning</Text></Button>
          <Button danger style={styles.mb15}><Text>Danger</Text></Button>
          <Button dark style={styles.mb15}><Text>Dark</Text></Button>
         
         
        </Content>
      </Container>
     
    );
  }
}

export default Default;

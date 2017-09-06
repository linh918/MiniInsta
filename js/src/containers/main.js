import React, { Component } from "react";
import { Container, Content, Fab, Icon,Button } from "native-base";
import {Image} from 'react-native'

import MainHeader from "../dump-components/header/index";
import NewsFeed from "../dump-components/newsfeed/index";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as types from "../constant/actionTypes";
import * as fetchActions from "../actions/fetchActions";
import * as changeColorActions from "../actions/changeColorActions";

var ImagePicker = require('react-native-image-picker');

// More info on all the options is below in the README...just some common use cases shown here
var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
       avatarSource: {},
       isHasData:false,
    };
  }

  render() {
    const {
      fetchActionData,
      fetchs,
      changeColorActionData,
      changeColors
    } = this.props;
    return (
      <Container style={{ backgroundColor: "#EEEEEE" }}>
        <MainHeader title="CulturePlex" {...this.props} />
        <Content padder>
        <Image source={this.state.avatarSource} style={{height:200,width:null}} />
        {this.state.isHasData&& 
        <Button info onPress={this._up.bind(this)}> 
          <Text>Up</Text>
          </Button>}
        </Content>
        <Fab position="bottomRight" style={{ backgroundColor: "#01BCD5" }} onPress={this._pick.bind(this)}  >
          <Icon name="logo-instagram" style={{ color: "white" }} />
        </Fab>
      </Container>
    );
  }
  _up(){

  }

  _pick(){
    ImagePicker.showImagePicker(options, (response) => {
  

  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
    let source = { uri: response.uri };

    // You can also display the image using data:
    // let source = { uri: 'data:image/jpeg;base64,' + response.data };

    this.setState({
      avatarSource: source,
      isHasData:true
    });
  }
});
  }
}



function mapStateToProps(state) {
  return {
    fetchActionData: state.fetcher,
    changeColorActionData: state.changer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchs: bindActionCreators(fetchActions, dispatch),
    changeColors: bindActionCreators(changeColorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

import React, { Component } from "react";
import { Container,Content,Fab,Icon } from "native-base";

import MainHeader from "../dump-components/header/index";
import NewsFeed from "../dump-components/newsfeed/index";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as types from "../constant/actionTypes";
import * as fetchActions from "../actions/fetchActions";
import * as changeColorActions from "../actions/changeColorActions";

 class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { fetchActionData, fetchs,changeColorActionData,changeColors } = this.props;
    return (
      <Container style={{backgroundColor:'#EEEEEE'}}>
        <MainHeader title="CulturePlex" {...this.props}  />
        <Content padder>
          <NewsFeed />
             
         
        </Content>
        <Fab
         position='bottomRight'
        style={{backgroundColor:'#01BCD5'}}
         >
         <Icon name="logo-instagram"  style={{color:'white'}}/>
          </Fab> 
      </Container>
    );
  }
}

  function mapStateToProps(state){
    return {
      fetchActionData:state.fetcher,
      changeColorActionData:state.changer
    }
  }

  function mapDispatchToProps(dispatch){
    return {
      fetchs:bindActionCreators(fetchActions,dispatch),
      changeColors:bindActionCreators(changeColorActions,dispatch)
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

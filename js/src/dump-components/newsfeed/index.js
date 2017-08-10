import React, {Component} from 'react'
import {Container,List,ListItem,Card,CardItem} from 'native-base'
import {ListView,Image,View} from 'react-native'
import styles from './styles'

export default class ComponentName extends Component {
  constructor(props) {
    super(props);
    this.state={
        datas:[],


    };
  }

  componentWillMount(){
  }

  componentWillUpdate(){
  }

  _renderRow(item){
    <ListItem>
      <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail small source={item.avatar} x />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 200,
                  flex: 1
                }}
                source={item.image}
              />
            </CardItem>

           
          </Card>
     </ListItem> 

  }

  render(){
    return(
      <Container>
        <List
        dataArray={this.state.datas}
        renderRow={this._renderRow(item)}
        />
          

      </Container>
    )
  }

  componentDidUpdate(){
  }

  componentDidMount(){
  }
}
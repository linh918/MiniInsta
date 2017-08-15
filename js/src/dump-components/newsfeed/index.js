import React, {Component} from 'react'
import {
  Container,
  List,
  ListItem,
  Card,
  CardItem,
  Left,
  Body,
  Thumbnail,
  Text,
  Button,
  Icon,
  Right,
} from 'native-base'
import {ListView,Image,View} from 'react-native'
import styles from './styles'
var datas=
[
    {
         "username":"linh918",
    "avatar":"https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295402_960_720.png",
    "image":"https://onextrapixel.com/wp-content/uploads/2012/03/instagram-cover.jpg",
    "likecount":6996,
    "caption":"You will need to install Android Studio, if you haven’t already and you would also need to create an account with Parse.com."
    },
     {
         "username":"tanga",
    "avatar":"https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295402_960_720.png",
    "image":"https://onextrapixel.com/wp-content/uploads/2012/03/covered-in-snow.jpg",
     "likecount":6996,
    "caption":"You will need to install Android Studio, if you haven’t already and you would also need to create an account with Parse.com."
  
    },
     {
         "username":"ducngu",
    "avatar":"https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295402_960_720.png",
    "image":"https://onextrapixel.com/wp-content/uploads/2012/03/patrol-flash-lite.jpg",
     "likecount":6996,
    "caption":"You will need to install Android Studio, if you haven’t already and you would also need to create an account with Parse.com."
  
    },
     {
         "username":"uymatxe",
    "avatar":"https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295402_960_720.png",
    "image":"https://onextrapixel.com/wp-content/uploads/2012/03/west-minister-skyline.jpg",
     "likecount":6996,
    "caption":"You will need to install Android Studio, if you haven’t already and you would also need to create an account with Parse.com."
  
    }
    
    
];
export default class ComponentName extends Component {
  constructor(props) {
    super(props);
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(datas),
    };
   

  }

  componentWillMount(){
  }

  componentWillUpdate(){
  }

  _renderRow(item){
         return(
            <Card style={styles.card}>
             <CardItem>
              <Left>
                <Thumbnail  small source={{uri: item.avatar}} />
                <Body>
                  <Text style={styles.text}>{item.username}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: item.image}} style={{height: 300, width: null, flex: 1,resizeMode:'cover'}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Icon name="heart" active={true} style={{color:'#356186',width:25,height:null}} />
                <Body>
                  <Text style={styles.text} >6969 {item.likecount}</Text>
                 </Body> 
               </Left>
            </CardItem>
            <CardItem>
              <Text style={styles.textCaption} ><Text style={styles.text}>{item.username} </Text>{item.caption}</Text>
             </CardItem>
          </Card>
         )


  }
  render(){
    return(
     <View>
      <ListView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
       dataSource={this.state.dataSource}
       
       renderRow={(item)=>this._renderRow(item)}
      />
      
       
    </View>
     
    )
  }

  componentDidUpdate(){
  }

  componentDidMount(){
  }
}
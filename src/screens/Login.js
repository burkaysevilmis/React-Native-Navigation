import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
const {width, heigth} = Dimensions.get('window');
import Video from 'react-native-video';
export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={require('../img/adko.mp4')}
          style={styles.backgroundVideo}
          muted={true}
          repeat={true}
          resizeMode={'cover'}
          rate={1.0}
          ignoreSilentSwitch={'obey'}
        />
        <View style={styles.box1}></View>
        <View style={styles.box2}>
          <View style={styles.logo}>
            <Image source={require('../img/adko.png')} />
          </View>
          <View style={styles.form}>
            <TextInput
              placeholder="Kullanıcı Adı"
              placeholderTextColor="white"
              style={{
                width: '70%',
                height: 45,
                borderWidth: 1,
                borderColor: 'white',
                marginBottom: 20,
                paddingLeft: 15,
              }}></TextInput>
            <TextInput
              placeholder="Şifre"
              placeholderTextColor="white"
              style={{
                width: '70%',
                height: 45,
                borderWidth: 1,
                borderColor: 'white',
                paddingLeft: 15,
              }}></TextInput>
            <TouchableOpacity style={{width: '100%', alignItems: 'center'}}>
              <View
                style={{
                  marginTop: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '70%',
                  height: 40,
                  borderRadius: 2,
                  backgroundColor: 'white',
                }}>
                <Text style={{fontSize:20}}>Giriş</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.lang}>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
              <Image
                style={{
                  marginRight: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '30%',
                  height: 35,
                  borderRadius: 20,
                  resizeMode: 'cover',
                }}
                source={require('../img/tr.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
              <Image
                style={{
                  marginRight: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '30%',
                  height: 35,
                  borderRadius: 20,
                  resizeMode: 'cover',
                }}
                source={require('../img/eng.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}}>
              <Image
                style={{
                  marginRight: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '30%',
                  height: 35,
                  borderRadius: 20,
                  resizeMode: 'cover',
                }}
                source={require('../img/arab.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box3}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 1,
  },

  box2: {
    flex: 4,
    opacity: 0.6,
    backgroundColor: 'black',
  },

  box3: {
    flex: 1,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lang: {
    flex: 1,
    flexDirection: 'row',
  },
  backgroundVideo: {
    height: heigth,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
});

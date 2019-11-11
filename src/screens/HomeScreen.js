import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
//this.props.navigation.popToTop  ilk ekrana döner

class LogoTitle extends Component {
  render() {
    return (
      <>
        <Image
          source={require('../img/logo.png')}
          style={{width: 32, height: 32}}
        />
        <Text> Home </Text>
      </>
    );
  }
}
export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'BRF',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
       
        <Button
          title="Go to Detail"
          onPress={() =>
            navigate('Detail', {
              title: 'Burkayy',
            })
          }
        />
        <Button
          title="Go to Contact"
          onPress={() =>
            navigate('Contact', {
              title: 'Burkayy',
            })
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#9DC8C8',
  },
});

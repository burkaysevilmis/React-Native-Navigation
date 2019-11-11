import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
export default class DetailScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title'),
      headerBackTitle: 'geri',
    };
  };
  render() {
    const {navigate, goBack} = this.props.navigation;
    //const title = getParam('title');
    return (
      <View style={styles.container}>
        <Text> Detay </Text>

        <Button title="Go to Home" onPress={() => navigate('Home')} />
        <Button title="Go to Back" onPress={() => goBack()} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

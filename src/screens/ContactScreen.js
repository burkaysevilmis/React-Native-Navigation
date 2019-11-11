import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class ContactScreen extends Component {
  render() {
    const {navigate, goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> ContactScreen </Text>
        <Button title="Go to Back" onPress={() => goBack(null)} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#387387',
  },
});

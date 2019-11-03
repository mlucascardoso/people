import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { Line } from '../components'

export default class PeopleDetailScreen extends React.Component {

  render () {

    const { person } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: person.picture.large }}/>
        <View style={styles.detailContainer}>
          <Line label="Email:" content={person.email} />
          <Line label="Cidade:" content={person.location.city} />
          <Line label="Estado:" content={person.location.state} />
          <Line label="Tel:" content={person.phone} />
          <Line label="Naturalidade:" content={person.nat} />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  detailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1,
  },
  avatar: {
    aspectRatio: 1,
    borderRadius: 150,
  },
});

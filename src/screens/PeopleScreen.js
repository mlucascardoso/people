import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { PeopleList } from '../components';

import axios from 'axios';

export default class PeopleScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      people: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get('https://randomuser.me/api/?nat=br&results=15')
      .then(response => {
        const { results } = response.data;
        this.setState({
          people: results,
          loading: false,
        })
      })
      .catch(err => {
        this.state({ 
          error: true,
          loading: false,
        });
      });
  }

  renderPage() {
    if (this.state.loading) {
      return this.renderLoading();
    } 
    
    if (this.state.error) {
      return this.renderError();
    }

    return this.renderList();
  }

  renderLoading() {
    return <ActivityIndicator size="large" color="#6ca2f7" />;
  }

  renderList() {
    return <PeopleList people={this.state.people} onPressItem={ pageParams => { this.props.navigation.navigate('PeopleDetail', pageParams) }} />;
  }

  renderError() {
    return <Text style={styles.error}>Ops... deu merda :(</Text>;
  }

  render () {
    return (
      <View style={styles.container}>
        { this.renderPage() }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
  }
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => (
	<View style={style.container}>
		<Text style={style.title}>{props.title}</Text>
	</View>
);

//StyleSheet create -> melhor manipulação de erros e melhora na performance
const style = StyleSheet.create({
	container: {
		marginTop: 25,
		backgroundColor: '#6ca2f7',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 50,
		color: '#fff',
	}
});

export default Header;

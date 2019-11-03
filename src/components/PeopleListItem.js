import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { capitalizeFirstLetter } from '../util'

const PeopleListItem = (props) => {
	const { people, navigateToPeopleDetail } = props;
	const { title,  first, last } = people.name;
	const { thumbnail } = people.picture;

	return (
		<TouchableOpacity onPress={() => navigateToPeopleDetail({ person: people }) }>
			<View key={first} style={styles.line}>
				<Image style={ styles.avatar } source={{ uri: thumbnail }}/>
				<Text style={styles.lineText}>
					{ `${capitalizeFirstLetter(title)} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}` }
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	line: {
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: '#bbb',
		alignItems: 'center',
		flexDirection: 'row',
	},
	lineText: {
		fontSize: 20,
		paddingLeft: 15,
		flex: 7
	},
	avatar: {
		aspectRatio: 1,
		flex: 1,
		borderRadius: 40,
		marginLeft: 15,
	}
});

export default PeopleListItem;

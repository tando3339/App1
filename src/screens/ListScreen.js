import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
	const friendsList = [
		{ name: "Tan#1", age: 20 },
		{ name: "Tan#2", age: 45 },
		{ name: "Tan#3", age: 32 },
		{ name: "Tan#4", age: 27 },
		{ name: "Tan#5", age: 53 },
		{ name: "Tan#6", age: 50 },
	];

	return (
		<FlatList
			keyExtractor={(key) => key.name}
			data={friendsList}
			renderItem={({ item }) => {
				return (
					<Text style={styles.textStyle}>
						{item.name} - Age {item.age}
					</Text>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 16,
		color: "red",
	},
});

export default ListScreen;

import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<View style={styles.textOneStyle} />
			<View style={styles.textTwoStyle} />
			<View style={styles.textThreeStyle} />
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 3,
		borderColor: "black",
		height: 200,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	textOneStyle: {
		height: 50,
		width: 50,
		backgroundColor: "red",
	},
	textTwoStyle: {
		height: 50,
		width: 50,
		backgroundColor: "purple",
		alignSelf: "flex-end",
	},
	textThreeStyle: {
		height: 50,
		width: 50,
		backgroundColor: "green",
	},
});

export default BoxScreen;

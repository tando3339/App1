import React from "react";
import { Text, StyleSheet } from "react-native";

const TestScreen = () => {
	return <Text style={styles.textStyle}>Hello Stupid</Text>;
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 50,
		color: "red",
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "black",
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
});

export default TestScreen;

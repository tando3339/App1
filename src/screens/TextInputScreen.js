import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

const TextInputScreen = () => {
	const [change, onChange] = useState("");

	return (
		<View>
			<Text>Enter Password: </Text>
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				placeholder='Type something bitchess'
				style={styles.input}
				onChangeText={(newText) => {
					onChange(newText);
				}}
				value={change}
			/>
			{change.length < 4 ? (
				<Text style={styles.text}>Password must be more than 4 characters</Text>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	text: {
		textAlign: "center",
		fontSize: 30,
		color: "red",
	},
});

export default TextInputScreen;

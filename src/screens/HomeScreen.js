import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>TESTING APP</Text>
			<Button
				onPress={() => navigation.navigate("Components")}
				title='Components Screen'
			/>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("List")}>
				<Text style={styles.title}>TouchableOpacity Button</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.testButton}
				onPress={() => navigation.navigate("ComponentTest")}>
				<Text style={styles.title}>Test Screen</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Image")}>
				<Text style={styles.title}>Image Screen</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.testButton}
				onPress={() => navigation.navigate("Counter")}>
				<Text style={styles.title}>Counter Screen</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Color")}>
				<Text style={styles.title}>Color Screen</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.testButton}
				onPress={() => navigation.navigate("Square")}>
				<Text style={styles.title}>Square Screen</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Text")}>
				<Text style={styles.title}>Text Screen</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.testButton}
				onPress={() => navigation.navigate("Box")}>
				<Text style={styles.title}>Box Screen</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		textAlign: "center",
		justifyContent: "center",
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
	title: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
		textAlign: "center",
	},
	testButton: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(111, 202, 186, 1)",
		borderRadius: 5,
		height: 50,
		width: "100%",
	},
});

export default HomeScreen;

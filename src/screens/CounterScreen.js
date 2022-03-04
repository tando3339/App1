import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";

const CounterScreen = () => {
	const [counter, setCounter] = useState(0);

	return (
		<View>
			<Button
				title='Plus'
				onPress={() => {
					setCounter(counter + 1);
				}}
			/>
			<Button
				title='Minus'
				onPress={() => {
					setCounter(counter - 1);
				}}
			/>

			<Text>Current Count: {counter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default CounterScreen;

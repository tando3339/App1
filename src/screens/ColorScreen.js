import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";

const ColorScreen = () => {
	const [colors, setColors] = useState([]);

	return (
		<View>
			<Button
				title='Add a color'
				titleStyle={{ fontWeight: "500" }}
				buttonStyle={{
					backgroundColor: "rgba(199, 43, 98, 1)",
					borderColor: "transparent",
					borderWidth: 0,
				}}
				containerStyle={{
					marginHorizontal: 50,
					marginVertical: 10,
				}}
				onPress={() => {
					setColors([...colors, randomRgb()]);
				}}
			/>

			<FlatList
				keyExtractor={(item) => item}
				data={colors}
				renderItem={({ item }) => {
					return (
						<View
							style={{
								height: 100,
								width: 100,
								backgroundColor: item,
							}}
						/>
					);
				}}
			/>
		</View>
	);
};

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;

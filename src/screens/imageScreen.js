import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
	return (
		<View>
			<ImageDetail
				title='Meo'
				imageSource={require("../../assets/images/meo.jpg")}
			/>
			<ImageDetail
				title='Ca'
				imageSource={require("../../assets/images/ca.jpg")}
			/>
			<ImageDetail
				title='Sin'
				imageSource={require("../../assets/images/sin.jpg")}
			/>
			<ImageDetail
				title='Bad'
				imageSource={require("../../assets/images/bad.jpg")}
			/>
		</View>
	);
};

const style = StyleSheet.create({});

export default ImageScreen;

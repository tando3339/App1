import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";
const ImageDetail = (props) => {
	return (
		<>
			<ScrollView>
				<View>
					<Card>
						<Card.Title>{props.title}</Card.Title>
						<Card.Divider />
						<Card.Image style={{ padding: 0 }} source={props.imageSource} />
					</Card>
				</View>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: 30,
		height: 30,
		marginRight: 10,
	},
	name: {
		fontSize: 16,
		marginTop: 5,
	},
});

export default ImageDetail;

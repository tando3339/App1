import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import TestScreen from "./src/screens/TestScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/imageScreen";

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		ComponentTest: TestScreen,
		List: ListScreen,
		Image: ImageScreen,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "App",
		},
	}
);

export default createAppContainer(navigator);

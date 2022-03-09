import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import TestScreen from "./src/screens/TestScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/imageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextInputScreen from "./src/screens/TextInputScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		ComponentTest: TestScreen,
		List: ListScreen,
		Image: ImageScreen,
		Counter: CounterScreen,
		Color: ColorScreen,
		Square: SquareScreen,
		Text: TextInputScreen,
		Box: BoxScreen,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "App",
		},
	}
);

export default createAppContainer(navigator);

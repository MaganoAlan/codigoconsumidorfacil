import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./src/routers/Drawer.navigation";

import Store from "./src/store/Store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#06aa50" />
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}

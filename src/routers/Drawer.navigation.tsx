import { createDrawerNavigator } from "@react-navigation/drawer";
import { IconButton, NativeBaseProvider } from "native-base";
import { MoonStars, SunDim } from "phosphor-react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Articles } from "../screens/Articles";
import { Home } from "../screens/Home";
import { toDarkTheme, toLightTheme } from "../store/Theme.store";

import { IThemeState } from "../types/IThemeState";

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  const dispatch = useDispatch();
  const { currentTheme, selected } = useSelector(
    (state: IThemeState) => state.themeState
  );
  console.log(currentTheme);

  function handleDark() {
    dispatch(toDarkTheme());
  }
  function handleLight() {
    dispatch(toLightTheme());
  }

  return (
    <NativeBaseProvider theme={selected}>
      <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen
          name="home"
          component={Home}
          options={{
            headerShown: true,
            title: "Página inicial",
            headerTintColor: "green",
            headerRight: () => (
              <IconButton
                mr={4}
                onPress={currentTheme === "light" ? handleDark : handleLight}
                icon={
                  currentTheme === "light" ? (
                    <MoonStars color="green" size={26} />
                  ) : (
                    <SunDim color="green" size={26} />
                  )
                }
              />
            ),
          }}
        />
        <Drawer.Screen
          name="artigos"
          component={Articles}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NativeBaseProvider>
  );
}

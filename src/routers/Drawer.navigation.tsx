import { createDrawerNavigator } from "@react-navigation/drawer";
import { IconButton, NativeBaseProvider } from "native-base";
import { MoonStars, SunDim } from "phosphor-react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Articles } from "../screens/Articles";
import { Home } from "../screens/Home";
import { toDarkTheme, toLightTheme } from "../store/Theme.store";

import { IThemeState } from "../types/IThemeState";
import { Titulo2 } from "../screens/Titulo2";
import { Titulo3 } from "../screens/Titulo3";
import { Titulo4 } from "../screens/Titulo4";
import { Titulo5 } from "../screens/Titulo5";
import { Titulo6 } from "../screens/Titulo6";

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
          name="Titulo 1"
          component={Articles}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Titulo 2"
          component={Titulo2}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Titulo 3"
          component={Titulo3}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Titulo 4"
          component={Titulo4}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Titulo 5"
          component={Titulo5}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Titulo 6"
          component={Titulo6}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NativeBaseProvider>
  );
}

const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LandingPageIcon from "./screens/LandingPageIcon";
import MyPartyIcon from "./screens/MyPartyIcon";
import CombatScreenIcon from "./screens/CombatScreenIcon";
import TransactIcon from "./screens/TransactIcon";
import RollAttackIcon from "./screens/RollAttackIcon";
import SavingThrowIcon from "./screens/SavingThrowIcon";
import DiceRollScreen from "./screens/DiceRollScreen";
import UtilitiesScreenIcon from "./screens/UtilitiesScreenIcon";
import CharacterProfileIcon from "./screens/CharacterProfileIcon";
import MessagesIcon from "./screens/MessagesIcon";
import GuildboardIcon from "./screens/GuildboardIcon";
import SettingsPageIcon from "./screens/SettingsPageIcon";
import RegistrationIcon from "./screens/RegistrationIcon";
import AbilityCheckIcon from "./screens/AbilityCheckIcon";
import HomeScreenIcon from "./screens/HomeScreenIcon";
import WelcomePageIcon from "./screens/WelcomePageIcon";
import WelcomePage from "./screens/WelcomePage";
import LoginPageIcon from "./screens/LoginPageIcon";
import { PlayerContextProvider} from "./contexts/PlayerContext";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Twinkle Star_regular": require("./assets/fonts/Twinkle_Star_regular.ttf"),
    Milonga_regular: require("./assets/fonts/Milonga_regular.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    "Dancing Script_regular": require("./assets/fonts/Dancing_Script_regular.ttf"),
    "Akaya Telivigala_regular": require("./assets/fonts/Akaya_Telivigala_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <PlayerContextProvider>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="LandingPage"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="LandingPage"
                component={LandingPageIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MyParty"
                component={MyPartyIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CombatScreen"
                component={CombatScreenIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Transact"
                component={TransactIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RollAttack"
                component={RollAttackIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SavingThrow"
                component={SavingThrowIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DiceRollScreen"
                component={DiceRollScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UtilitiesScreen"
                component={UtilitiesScreenIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CharacterProfile"
                component={CharacterProfileIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Messages"
                component={MessagesIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Guildboard"
                component={GuildboardIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SettingsPage"
                component={SettingsPageIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Registration"
                component={RegistrationIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AbilityCheck"
                component={AbilityCheckIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreenIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WelcomePage"
                component={WelcomePage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginPage"
                component={LoginPageIcon}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </PlayerContextProvider>
    </>
  );
};
export default App;

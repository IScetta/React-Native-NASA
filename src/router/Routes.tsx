import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParams } from "../components/types";
import Home from "../view/Home";
import Detail from "../view/Detail";

const Stack = createNativeStackNavigator<RootStackParams>();
const rounteScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: "rgba(7,26,93,255)",
  },
  headerTitleStyle: {
    color: "#fff",
   
  },
};

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={rounteScreenDefaultOptions}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={rounteScreenDefaultOptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { PeopleScreen, PeopleDetailScreen } from "./src/screens";

import { capitalizeFirstLetter } from './src/util'

const AppNavigator = createStackNavigator({
  Home: {
    screen: PeopleScreen
  },
  PeopleDetail: {
    screen: PeopleDetailScreen,
    navigationOptions: ({ navigation }) => {
      const personName = navigation.state.params.person.name.first;
      return ({
        title: capitalizeFirstLetter(personName),
        headerTitleStyle: {
          color: "#fff",
          fontSize: 30,
          flexGrow: 1,
        },
      })
    }
  }
}, {
  defaultNavigationOptions: {
    title: "Pessoas",
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: "#6ca2f7",
      borderBottomWidth: 1,
      borderBottomColor: "#c5c5c5",
    },
    headerTitleStyle: {
      color: "#fff",
      fontSize: 30,
      flexGrow: 1,
      textAlign: "center"
    },
  }
});
 
export default createAppContainer(AppNavigator);

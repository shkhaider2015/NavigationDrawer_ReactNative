import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./home";
import About from "./about";
import { Text } from 'react-native';
import { DrawerContent } from "./drawerContent";


const Drawer = createDrawerNavigator();

class navigationDrawer extends React.Component {


    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home" drawerContent={ props => <DrawerContent {...props} /> } >
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Profile" component={About}/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

export default navigationDrawer;
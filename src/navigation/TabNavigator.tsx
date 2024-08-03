// import React from "react";
// import HomeScreen from "../Screens/HomeScreen.tsx";
// import SearchScreen from "../Screens/SearchScreen.tsx";
// import TicketScreen from "../Screens/TicketScreen.tsx";
// import CustomIcon from "../components/CustomIcon.ts";
// import UserAccountScreen from "../Screens/UserAccountScreen.tsx";
// import { COLOR,FONTSIZE,SPACING} from "../Themes/themes.tsx";
// import {View,StyleSheet} from "react-native";
// import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
//
// const Tab = createBottomTabNavigator();
//
// const TabNavigator = () =>{
//   return(
//     <Tab.Navigator
//       screenOptions={{
//         tabBarHideOnKeyboard:true,
//         headerShown:false,
//         tabBarStyle:{
//           backgroundColor: COLOR.Black,
//           borderTopWidth:0,
//           height:SPACING.space_10 * 10,
//         },
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarShowLabel: false,
//           tabBarIcon: ({focused, color, size}) => {
//             return (
//               <View
//                 style={[
//                   styles.activeTabBackground,
//                   focused ? {backgroundColor: COLOR.Orange} : {},
//                 ]}>
//                 <CustomIcon
//                   name="video"
//                   color={COLOR.White}
//                   size={FONTSIZE.size_30}
//                 />
//               </View>
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={SearchScreen}
//         options={{
//           tabBarShowLabel: false,
//           tabBarIcon: ({focused, color, size}) => {
//             return (
//               <View
//                 style={[
//                   styles.activeTabBackground, focused ? {backgroundColor: COLOR.Orange} : {},
//                 ]}>
//                 <CustomIcon
//                   name="search"
//                   color={COLOR.White}
//                   size={FONTSIZE.size_30}
//                 />
//               </View>
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Ticket"
//         component={TicketScreen}
//         options={{
//           tabBarShowLabel: false,
//           tabBarIcon: ({focused, color, size}) => {
//             return (
//               <View
//                 style={[
//                   styles.activeTabBackground,
//                   focused ? {backgroundColor: COLOR.Orange} : {},
//                 ]}>
//                 <CustomIcon
//                   name="ticket"
//                   color={COLOR.White}
//                   size={FONTSIZE.size_30}
//                 />
//               </View>
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="User"
//         component={UserAccountScreen}
//         options={{
//           tabBarShowLabel: false,
//           tabBarIcon: ({focused, color, size}) => {
//             return (
//               <View
//                 style={[
//                   styles.activeTabBackground,
//                   focused ? {backgroundColor: COLOR.Orange} : {},
//                 ]}>
//                 <CustomIcon
//                   name="user"
//                   color={COLOR.White}
//                   size={FONTSIZE.size_30}
//                 />
//               </View>
//             );
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
//
// const styles = StyleSheet.create({
//   activeTabBackground: {
//     backgroundColor: COLOR.Black,
//     padding: SPACING.space_18,
//     borderRadius: SPACING.space_18 * 10,
//   }
// });
//
// export default TabNavigator;

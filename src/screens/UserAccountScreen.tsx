// import * as React from 'react';
// import { Text, View, StyleSheet, StatusBar, Image, ScrollView } from "react-native";
// import {COLOR, FONTFAMILY, FONTSIZE, SPACING} from "../Themes/themes.tsx";
// import AppHeader from "../components/utils/AppHeader.tsx";
// import SettingComponent from "../components/utils/SettingComponent.tsx";
//
// const UserAccountScreen = ({navigation}: any) => {
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <StatusBar hidden />
//         <View style={styles.appHeaderContainer}>
//           <AppHeader
//             name="close"
//             header={'My Profile'}
//             action={() => navigation.goBack()}
//           />
//         </View>
//
//         <View style={styles.profileContainer}>
//           <Image
//             source={require('../assets/image/avatar.png')}
//             style={styles.avatarImage}
//           />
//           <Text style={styles.avatarText}>John Doe</Text>
//         </View>
//
//         <View style={styles.profileContainer}>
//           <SettingComponent
//             icon="user"
//             heading="Account"
//             subheading="Edit Profile"
//             subtitle="Change Password"
//           />
//           <SettingComponent
//             icon="setting"
//             heading="Settings"
//             subheading="Theme"
//             subtitle="Permissions"
//           />
//           <SettingComponent
//             icon="dollar"
//             heading="Offers & Refferrals"
//             subheading="Offer"
//             subtitle="Refferrals"
//           />
//           <SettingComponent
//             icon="info"
//             heading="About"
//             subheading="About Movies"
//             subtitle="more"
//           />
//         </View>
//       </View>
//     </ScrollView>
//
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flex: 1,
//     backgroundColor: COLOR.Black,
//   },
//   appHeaderContainer: {
//     marginHorizontal: SPACING.space_36,
//     marginTop: SPACING.space_20 * 2,
//   },
//   profileContainer: {
//     alignItems: 'center',
//     padding: SPACING.space_36,
//   },
//   avatarImage: {
//     height: 80,
//     width: 80,
//     borderRadius: 80,
//   },
//   avatarText: {
//     fontFamily: FONTFAMILY.poppins_medium,
//     fontSize: FONTSIZE.size_16,
//     marginTop: SPACING.space_16,
//     color: COLOR.White,
//   },
// });
//
// export default UserAccountScreen;


import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class UserAccountScreen extends Component {
  render() {
    return (
        <View>
          <Text> textInComponent </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({})

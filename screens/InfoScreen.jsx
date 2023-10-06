import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const InfoScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text><p><h1>App Information</h1><br/>
<h3>About Us</h3><br/>
We are committed to providing an exceptional chat app experience to our users. Our app is designed to facilitate seamless communication, connecting people across the globe.
</p>
<br/><br/>
<p><h3>Features</h3><br/>
Our chat app boasts a range of powerful features designed to enhance your communication experience:<br/><br/>

-Real-time Messaging: Instantly chat with friends and family in real-time, whether they're across the street or across the world.<br/>

-Group Chats: Create groups and chat with multiple friends or colleagues simultaneously, making coordinating plans or discussing projects easy.<br/>

-End-to-End Encryption: Your messages and media are secure and private with end-to-end encryption, ensuring only you and the recipient can access the content.<br/>

-Customization: Personalize your chat experience with a perfect profile of  your own.<br/></p></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InfoScreen;

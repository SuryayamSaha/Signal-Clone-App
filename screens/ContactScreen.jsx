import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text><p><h2>General Inquiries:</h2>
For general inquiries or feedback regarding our chat app, please feel free to reach out to us at:<br/>

Email: suryayamsaha@gmail.com<br/>
Phone: +91-824-071-4449<br/></p>
<br/><br/>
<p><h2>Social Media:</h2>
Connect with us on social media to stay updated with the latest news, updates, and announcements:
<br/>
Facebook: https://www.facebook.com/suryayam.saha?mibextid=ZbWKwL<br/>
X:  https://x.com/SuryayamS?t=LkEcTKD-hGyzCNjlvek4xw&s=08<br/>
Instagram: https://www.instagram.com/_i_am_jerusalem_/?igshid=YTQwZjQ0NmI0OA==<br/></p>
</Text>

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

export default ContactScreen;

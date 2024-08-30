import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  TextInput,
  Text,
  Alert,
  Image
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import Footer from '../component/Footer';
import { useNavigation } from '@react-navigation/native';


function Home() {
  const navigation = useNavigation()


  return (

    <SafeAreaProvider>
      <NativeBaseProvider>
        <View style={styles.container}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reloy-internal.s3.ap-south-1.amazonaws.com/ReloyAssets/Images/JPG-Png/All_Brand_Logos/Aura-Smart.png',
            }}
          />
        </View>

        <Text>Hi home screen  page</Text>
       
        <Button
          onPress={() => navigation.navigate("Login")}
          title="Goo to login"
          color="#841584"

        />
        <Text>hello</Text>


        <Button
          onPress={() => navigation.navigate("Signup")}
          title="Goo to SIgnup"
          color="#841584"

        />


        <TextInput
          style={styles.input}

          placeholder="useless placeholder"
        />
        <Footer />





      </NativeBaseProvider>
    </SafeAreaProvider>

  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 18,
    borderWidth: 2,
    padding: 10,
  },
  container: {
    paddingTop: 50,
    alignItems: 'center', // Center the image horizontally
  },
  tinyLogo: {
    width: 100,  // Increased size for better visibility
    height: 100,
  },
});
export default Home;

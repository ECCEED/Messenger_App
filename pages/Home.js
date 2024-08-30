import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import Footer from '../component/Footer';

function Home() {

  return (

    <SafeAreaProvider>
      <NativeBaseProvider>
        <Text>Hi home screen  page  niger</Text>
        <Footer />
      </NativeBaseProvider>
    </SafeAreaProvider>

  );
}
export default Home;
 
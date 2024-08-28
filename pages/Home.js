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
// import React from 'react';
// import { Text, View } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { NativeBaseProvider } from 'native-base';

// function Home() {
//   return (
//     <SafeAreaProvider>
//       <NativeBaseProvider>
//         <View>
//           <Text>Hi home screen</Text>
//         </View>
//       </NativeBaseProvider>
//     </SafeAreaProvider>
//   );
// }

// export default Home;
import React, { useEffect } from 'react';
import { NativeBaseProvider, Box, HStack, Pressable, Center, Text } from 'native-base';
import { useNavigation, useNavigationState } from '@react-navigation/native';

function Footer() {
  const navigation = useNavigation();
  
  // Retrieve current route name using useNavigationState
  const currentRouteName = useNavigationState(state => state.routes[state.index].name);
  
  // Determine selected state based on the current route
  const [selected, setSelected] = React.useState(-1); // -1 indicates no selection

  useEffect(() => {
    if (currentRouteName === "Home") {
      setSelected(-1); // No item selected on the Home screen
    } else if (currentRouteName === "Account") {
      setSelected(2); // Select "Account" when on the Account screen
    }
  }, [currentRouteName]);

  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg="white"
        safeAreaTop
        width="100%"
        alignSelf="center"
        flexDirection="column"
        justifyContent="flex-end"
      >
        <HStack
          bg="indigo.600"
          alignItems="center"
          safeAreaBottom
          shadow={6}
          width="100%"
        >
          <Pressable
            cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <Text color="white" fontSize="12">Messages</Text>
            </Center>
          </Pressable>

          <Pressable
            cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Text color="white" fontSize="12">Friends</Text>
            </Center>
          </Pressable>

          <Pressable
            cursor="pointer"
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => {
              setSelected(2); // Update state to 'Account'
              navigation.navigate("Account"); // Navigate to Account page
            }}
          >
            <Center>
              <Text color="white" fontSize="12">Account</Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default Footer;
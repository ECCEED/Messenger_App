import React from 'react';
import { NativeBaseProvider, Box, HStack, Pressable, Center, Icon, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';


function Footer() {
    const [selected, setSelected] = React.useState(1);
    const navigation = useNavigation()

    return (
        <NativeBaseProvider>
            <Box flex={1} bg="white" safeAreaTop width="100%" alignSelf="center" flexDirection="column" justifyContent="flex-end">
                <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6} width="100%">
                    <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
                        <Center>
                            {/* <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" /> */}
                            <Text color="white" fontSize="12">
                                Messages
                            </Text>
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
                        <Center>
                            {/* <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" /> */}
                            <Text color="white" fontSize="12">
                                Friends
                            </Text>
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => navigation.navigate("Account")}>
                        <Center>
                            {/* <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'cart' : 'cart-outline'} />} color="white" size="sm" /> */}
                            <Text color="white" fontSize="12">
                                Account
                            </Text>
                        </Center>
                    </Pressable>
                </HStack>
            </Box>
        </NativeBaseProvider>
    );
}

export default Footer;
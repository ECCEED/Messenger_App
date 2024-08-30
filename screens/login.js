import React from 'react';
import { Box, HStack, Center, Text, Heading, VStack, FormControl, Input, Button, Link, NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const Navigation = useNavigation()
    return (
        <SafeAreaProvider>
            <NativeBaseProvider>
                <Center w="100%" flex={1}>
                    <View style={styles.container}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://reloy-internal.s3.ap-south-1.amazonaws.com/ReloyAssets/Images/JPG-Png/All_Brand_Logos/Aura-Smart.png',
                            }}
                        />
                    </View>

                    <Box safeArea p="2" py="8" w="90%" maxW="290">
                        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            Welcome
                        </Heading>
                        <Heading mt="1" _dark={{
                            color: "warmGray.200"
                        }} color="coolGray.600" fontWeight="medium" size="xs">
                            Sign in to continue!
                        </Heading>

                        <VStack space={3} mt="5">
                            <FormControl>
                                <FormControl.Label>Email ID</FormControl.Label>
                                <Input />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>Password</FormControl.Label>
                                <Input type="password" />
                                <Link _text={{
                                    fontSize: "xs",
                                    fontWeight: "500",
                                    color: "indigo.500"
                                }} alignSelf="flex-end" mt="1">
                                    Forget Password?
                                </Link>
                            </FormControl>
                            <Button mt="2" colorScheme="indigo" onPress={() => Navigation.navigate("Home")}>
                                Sign in
                            </Button>
                            <Button mt="2" colorScheme="indigo" onPress={() => Navigation.navigate("Home")}>
                                Login with google
                            </Button>

                            <HStack mt="6" justifyContent="center">
                                <Text fontSize="sm" color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }}>
                                    I'm a new user.{" "}
                                </Text>
                                <Link _text={{
                                    color: "indigo.500",
                                    fontWeight: "medium",
                                    fontSize: "sm"
                                }} href="#">
                                    Sign Up
                                </Link>
                            </HStack>
                        </VStack>
                    </Box>
                </Center>
            </NativeBaseProvider>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: 'center', // Center the image horizontally
    },
    tinyLogo: {
        width: 100,  // Increased size for better visibility
        height: 100,
    },
});

export default Login;

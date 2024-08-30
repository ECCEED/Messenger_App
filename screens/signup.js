import React, { useState } from 'react';
import { Box, Center, Heading, VStack, FormControl, Input, Button, Text, NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Firebase';  // Ensure correct path

const Signup = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Signed up successfully, navigate to the Home screen
                navigation.navigate("Home");
            })
            .catch(error => {
                // Handle Errors here.
                setError(error.message);
            });
    };

    return (
        <SafeAreaProvider>
            <NativeBaseProvider>
                <Center w="100%">
                    <Box safeArea p="2" w="90%" maxW="290" py="8">
                        <Heading size="lg" color="coolGray.800" fontWeight="semibold">
                            Welcome
                        </Heading>
                        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
                            Sign up to continue!
                        </Heading>
                        <VStack space={3} mt="5">
                            <FormControl>
                                <FormControl.Label>Email</FormControl.Label>
                                <Input value={email} onChangeText={text => setEmail(text)} />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>Password</FormControl.Label>
                                <Input type="password" value={password} onChangeText={text => setPassword(text)} />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>Confirm Password</FormControl.Label>
                                <Input type="password" value={confirmPassword} onChangeText={text => setConfirmPassword(text)} />
                            </FormControl>
                            {error ? <Text color="red.500">{error}</Text> : null}
                            <Button mt="2" colorScheme="indigo" onPress={handleSignUp}>
                                Sign up
                            </Button>
                        </VStack>
                    </Box>
                </Center>
            </NativeBaseProvider>
        </SafeAreaProvider>
    );
};

export default Signup;

import React from 'react';
import { useAuth } from '../hooks/useAuth';
import AuthStack from './AuthStack';
// import Footer from '../component/Footer';
import UserStack from './UserStack';

export default function RootNavigation() {
  const { user } = useAuth();

  return user ? <UserStack /> : <AuthStack />;
}
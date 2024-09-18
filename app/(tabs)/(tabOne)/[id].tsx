import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import textStyles from '@/constants/Styles';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text style={textStyles.title}>Number is {id}</Text>
    </View>
  );
};

export default Page;

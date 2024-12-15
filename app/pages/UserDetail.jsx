import React from 'react';
import { Box, ScrollView, Text, Pressable, Icon, Image } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default function UserDetail({ route, navigation }) {
  const { user } = route.params;

  return (
    <ScrollView bg="#D6D7D8" paddingTop="3">
    <Box mt="12" mx="5">
      <Pressable mb="4" onPress={() => navigation.goBack()}>
        <Icon as={Ionicons} name="arrow-back-circle" size="4xl" color="#012C5C" />
      </Pressable>
  
      <Box bg="#1C5992" p="6" borderRadius="3xl">
        <Box alignItems="center" mb="4">
          <Image
            alt="User Profile"
            height="100px"
            width="90px"
            borderRadius="full"
            backgroundColor="amber.100"
            source={require('../../assets/images/user.png')}
            mb="2"
          />
          <Text fontSize="3xl" fontWeight="bold" color="white" >
            {user.name}
          </Text>
        </Box>

        <Text fontSize="lg" color="white" mb="2">
          <Text bold>Email: </Text> {user.email}
        </Text>
  
        <Text fontSize="lg" color="white" mb="2">
          <Text bold>Username: </Text> {user.username}
        </Text>
  
        <Text fontSize="lg" color="white" mb="2">
          <Text bold>Phone: </Text> {user.phone}
        </Text>
  
        <Text fontSize="lg" color="white" mb="2">
          <Text bold>Website: </Text> {user.website}
        </Text>
  
        <Text fontSize="lg" color="white" mb="2">
          <Text bold>Company: </Text> {user.company.name}
        </Text>
  
        <Text fontSize="lg" color="white" mb="2">
          <Text bold>Business Strategy: </Text> {user.company.bs}
        </Text>
  
        <Text fontSize="lg" color="white" mb="2">
          <Text bold>Address: </Text>
          {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
        </Text>
  
        <Text fontSize="lg" color="white" mb="2" bold>
          Location:
        </Text>
        <Text fontSize="lg" color="white" mb="1" ml="5">
          Lat: {user.address.geo.lat},
        </Text>
        <Text fontSize="lg" color="white" mb="2" ml="6">
          Lng: {user.address.geo.lng}
        </Text>
      </Box>
    </Box>
  </ScrollView>
  
  );
}

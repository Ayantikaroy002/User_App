import { Box, Text, FlatList, Pressable, Image, HStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function UserList({ level, searchQuery, users }) {
  const navigation = useNavigation();
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    filterUsers();
  }, [searchQuery, users]);

  const filterUsers = () => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const usersToDisplay = searchQuery.length !== 0 ? filteredUsers : users;

  return (
    <Box paddingLeft="4" paddingRight="4" borderRadius="2xl">
      <Text fontSize="5xl" paddingLeft="4" fontFamily="ubuntuMedium">
        Users
      </Text>

      <FlatList
        data={usersToDisplay}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate('user-detail', {
                user: item,
              })
            }
          >
            <Box
              p="4"
              m="2"
              borderRadius="xl"
              bg="#AFB6BD"
              shadow={3}
              elevation={10}
            >
              <HStack alignItems="center" space={4}>
                <Image
                  alt="User Profile"
                  height={12}
                  width={12}
                  borderRadius="full"
                  source={require('../../assets/images/user.png')}
                />
                <Box>
                  <Text fontSize="xl" fontFamily="RowdiesRegular" isTruncated>
                    {item.name}
                  </Text>
                  <Text mt="1" fontSize="md" fontFamily="RubikMedium" isTruncated>
                    {item.email}
                  </Text>
                </Box>
              </HStack>
            </Box>
          </Pressable>
        )}
      />
    </Box>
  );
}
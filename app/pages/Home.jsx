import { View, ScrollView, StatusBar, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import UserList from './UserList';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users') 
      .then(response => {
        setUsers(response.data); 
        console.log(response.data);
        setIsLoading(false); 
      })
      .catch(err => {
        console.log(err.message); 
        setIsLoading(false); 
      });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#D6D7D8' }}>
      <StatusBar translucent backgroundColor={'transparent'} />

      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <>
          <ScrollView>
          <Header users={users} setSearchQuery={setSearchQuery} />
          <UserList users={users} searchQuery={searchQuery} />
          </ScrollView>
        </>
      )}
    </View>
  );
}

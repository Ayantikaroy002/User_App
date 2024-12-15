import { View, Image, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ setSearchQuery }) { 
    
  
    return  (
      <View style={{backgroundColor:'#012C5C',  paddingTop:60,}}>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:25,}}>
          <View style={{display:'flex', flexDirection:'row', gap:10, alignItems:'center'}}>
          <Image style={{height: 48, width: 48, borderRadius: 50, backgroundColor:'#053B77'}} source={require('../../assets/images/user.png')}/>
             <View>
              <Text style={{color:'#C9C9C9', fontFamily:'ubuntuRegular'}}> Welcome,</Text>
              <Text style={{color:'#C9C9C9', fontSize:20, fontFamily:'ubuntuBold', paddingLeft:5}}>users name</Text>
            </View>
            
          </View>
          <View style={{display:'flex', flexDirection:'row', gap:10, alignItems:'center', }}>
            <Ionicons style={{paddingRight:4}} name="settings-sharp" size={25} color="#C9C9C9"/> 
            <Ionicons style={{paddingRight:4}} name="information-circle-sharp" size={30} color="#C9C9C9"/> 
          </View>
        </View>
    
         <View style={{backgroundColor:'#AFB6BD', marginVertical:25, marginHorizontal:25, alignItems:'center', borderRadius:50, display:'flex', flexDirection:'row',justifyContent:'space-between' }}> 
           <TextInput 
             style={{fontSize:13, paddingLeft:18, width: '85%'}} 
             placeholder='Search Courses'
             onChangeText={setSearchQuery} 
           />
            <Ionicons style={{paddingRight:4}} name="search-circle" size={45} color="#053B77"/> 
        </View>
      </View>
    );
}

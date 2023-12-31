import React, { useEffect, useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
// import { ScrollView } from 'react-native-gesture-handler';
import CustomListItem from '../components/CustomListItem';
import { auth, db } from "../firebase";
import {AntDesign,SimpleLineIcons} from "@expo/vector-icons";

const HomeScreen = ({navigation}) => {

    const [chats, setChats] = useState([]);
    
    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot(snapshot =>(
            setChats(snapshot.docs.map(doc =>({
                id:doc.id,
                data:doc.data()
            })))
        ))

        return unsubscribe;
    }, [])    
    
    const signOutUser =()=>{
        auth.signOut().then(()=>{
            navigation.replace("Login");
        })
    }


    useLayoutEffect(() => {
        navigation.setOptions({
            title:'Signal',
            headerStyle:{backgroundColor:'#fff'},
            headerTitleStyle:{color:'#000' , alignSelf:'center'},
            headerLeft: () => (
                <View style={{marginLeft:20}}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                        <Avatar rounded source={{uri:auth?.currentUser?.photoURL}}/>
                    </TouchableOpacity>
            </View>),
            
            headerRight: ()=>(
                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    width:80,
                    marginRight:20
                }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camera" size={24} color="#000"/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <SimpleLineIcons onPress={()=>navigation.navigate('AddChat')} name="pencil" size={24} color="#000"/>
                    </TouchableOpacity>

                </View>
            )
        });
    }, [navigation]);


    const enterChat = (id,chatName) => {
        navigation.navigate('Chat',{
            id:id,
            chatName:chatName,
        })
    }
    
    return (
        <SafeAreaView>
            <ScrollView style = {styles.container}>
                {chats.map(({id,data:{chatName}})=>(
                    <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({

    container: {
        height:'100%'
    }

})
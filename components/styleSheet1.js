import { View, Text,StyleSheet } from 'react-native'
import * as Font from 'expo-font';

 Font.loadAsync({
    'Poppins-SemiBold':require('./fonts/Poppins-SemiBold.ttf'),
    'LemonLove':require('./fonts/LemonLove.ttf')
 })
export default StyleSheet.create({
    
    buttons:{
        borderRadius:20,
        height:40,
        width:300,
        justifyContent:'center' ,
        fontSize:30, 
        backgroundColor:'purple',
        marginTop:15,
        marginLeft:40 ,
        
    },
    Textinput:{
        height:50,
        borderRadius:30,
        backgroundColor:'white',
       width:350,
       borderColor:'black',
       borderWidth:1,
       paddingLeft:10,
       marginTop:20,
       marginLeft:20,
       fontFamily:'Poppins-SemiBold',
    },
    text:{
        flex:1,
        fontSize:15,
        justifyContent:'center',
        fontFamily:'Poppins-Bold',
        color:'white',
        marginLeft:130,
        alignContent:'center',
        marginTop:10,
    },
    forgot:{
        marginLeft:210,
        marginTop:5,
        color:'blue',
        fontFamily:'Poppins-SemiBold'
    },
    login:{
        marginTop:80,
        fontSize:30,
        fontWeight:'bold',
        marginBottom:100,
        //fontStyle:'italic',
        marginLeft:20,
        fontFamily:'LemonLove'
    },
    image:{
        height:250,
        width:250,
        marginLeft:50,
        marginBottom:20
    },
    register:{
        marginTop:210,
        marginLeft:110,
        fontSize:15,
        marginBottom:3,
        fontFamily:'Poppins-SemiBold'
    },
    register1:{
        color:'blue',
        fontSize:15,
        marginLeft:150,
        paddingLeft:10,
        fontFamily:'Poppins-SemiBold'
        
    },
    container: {
        flex: 1,
        backgroundColor:'lavender',
    },
    account:{
        marginTop:10,
        marginLeft:110,
        fontSize:15,
        marginBottom:3,
        fontFamily:'Poppins-SemiBold'
    },
    account1:{
        color:'blue',
        fontSize:15,
        marginLeft:160,
        paddingLeft:10,
        fontFamily:'Poppins-SemiBold'
    },
    mainscreencloth: {
        flex: 0.3,
        backgroundColor:'white',
        flexDirection:"column",
        //justifyContent:'center',
        marginLeft:5,
        marginRight:5,
        marginTop:20,
        borderColor:'black',
        borderRadius:10,
        borderWidth:1
    },
    clothimage:{
        height:150,
        width:150,
       marginLeft:220,
        //sssmarginBottom:20
        borderRadius:10
    },
    mainscreenbags: {
        flex: 0.05,
        backgroundColor:'lightgrey',
        marginLeft:20,
        marginRight:20,
        marginTop:50,
        borderColor:'black',
        borderRadius:10,
        borderWidth:1,
        
        
    },
    texts:{
        fontSize:20,
        paddingLeft:20,
       // alignContent:'center'
       fontWeight:'bold',
       paddingTop:10,
       fontFamily:'Poppins-SemiBold'
    },
    innertexts:{
        fontSize:20,
        paddingLeft:50,
        opacity:0.4,
        fontFamily:'Poppins-SemiBold'
       // alignContent:'center'
       //fontWeight:'bold',
       //paddingTop:10,
    },
    btneye:{
        position:'absolute',
        right:25,
        top:8,
        marginTop:315,
        marginRight:10
    },
    btneye1:{
        position:'absolute',
        right:25,
        top:8,
        marginTop:442,
        marginRight:10
    },
    register2:{
        marginTop:80,
        fontSize:30,
        fontWeight:'bold',
        marginBottom:10,
        marginLeft:20,
        fontFamily:'LemonLove'
    },
    flatlistimages:{
        width:300,
      height:300,
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:30,
      borderColor:'black',
      resizeMode:'contain',
      margin:8,
      borderRadius:20
    },
    flatbuttons:{
        borderRadius:20,
        height:40,
        width:120,
        justifyContent:'center' ,
        fontSize:30, 
        backgroundColor:'brown',
        marginTop:30,
        marginLeft:20,  
        marginBottom:20,
    },
    flatbuttontext:{
        fontSize:15,
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        paddingLeft:20,
        alignContent:'center',
        fontFamily:'Poppins-SemiBold'
    },
    flattitle:{
        fontSize:27,
       // color:'white',
        //backgroundColor:'red',
        fontWeight:'bold',
        marginTop:10,
        marginLeft:20,
        marginRight:10,
        fontFamily:'Poppins-SemiBold'
    },
    container1: {
        flex: 1,
        backgroundColor:'white',
       // borderWidth:5,
        //borderColor:'red'

    },
    separator: {
        height: 7,
        marginTop:5,
        backgroundColor: 'lightpink',
        borderWidth:1,
        borderColor:'black'
        // Add more styles as needed
      },

})
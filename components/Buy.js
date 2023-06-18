import { View, Text, Alert,StyleSheet,Image, ScrollView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import styleSheet1 from './styleSheet1'
import { TextInput,ActivityIndicator} from 'react-native'
import FlatButtons from './FlatButtons'
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from './firebase'
import { checkfordetails } from './CreditCard'
import { auth } from './firebase'



const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginTop: 20
  },
});
export default function Buy({navigation}) {
  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCVC] = useState('');
  const [date, setdate] = useState('')
  const [address, setaddress] = useState('')
  const [check, setcheck] = useState(false)
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [mobile, setmobile] = useState('')
  const [loading, setloading] = useState(true)

  const handleCardNumberChange = (text) => {
    // Remove non-numeric characters from input
    const cleanedText = text.replace(/[^0-9]/g, '');
    setCardNumber(cleanedText);
  };

  const handleCVCChange = (text) => {
    // Remove non-numeric characters from input
    const cleanedText = text.replace(/[^0-9]/g, '');
    setCVC(cleanedText);
  };
  function order() {
    if (check === true)  {
      if(cvc.length!==3){
        Alert.alert('Provide a valid CVC.')
      }
      else if(cardNumber.length!==16){
        Alert.alert('Please enter a valid card number.')
      }
      else if(date===''){
        Alert.alert('Please enter expiry date.')
      }
      else{
        savedata();
        Alert.alert('Your address is updated and order is confirmed')
        navigation.navigate('MainScreen')
      }
    }
    else if(check===false){
      if(cvc.length!==3){
        Alert.alert('Provide a valid CVC.')
      }
      else if(cardNumber.length!==16){
        Alert.alert('Please enter a valid card number.')
      }
      else if(date===''){
        Alert.alert('Please enter expiry date.')
      }
      else{
        Alert.alert('Your order is confirmed')
        navigation.navigate('MainScreen')
        
      }


    }
      
    }
    
  useEffect(() => {
    const readdata = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setname(docSnap.data().name)
        setemail(docSnap.data().email)
        setmobile(docSnap.data().mobile)
        setaddress(docSnap.data().address)
      }
      else {
        setloading(false);
      }

    }
    readdata();
  }, [])
  const savedata = async () => {

    await setDoc(doc(db, "users", auth.currentUser.uid), {
      name: name,
      email: email,
      mobile: mobile,
      address: address,
    })
  }

 
  useEffect(() => {
    const readdata = async () => {
      try{
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setaddress(docSnap.data().address)
      }
    }
    catch (error) {
      console.log('Error fetching data:', error);
    } finally {
      setloading(false);
    }


    }
    readdata();
  }, [])

  if (loading) {
    return (
      <View style={ {flex: 1,
        justifyContent: 'center',
        alignItems: 'center',}}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading...</Text>
      </View>
    );
  }
  return (

<ScrollView style={{backgroundColor:'lavender'}}>
    <View >
      <Image style={{ height: 220, width: 350, margin: 15 }} source={require('./Images/creditcard.png')} />
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={handleCardNumberChange}
        keyboardType="numeric"
        maxLength={16} // Adjust based on the required card number length

      />
      <TextInput
        style={styles.input}
        placeholder="CVC"
        value={cvc}
        onChangeText={handleCVCChange}
        keyboardType="numeric"
        maxLength={3} // Adjust based on the required CVC length
        placeholderTextColor={'red'}


      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          fontSize: 16,
          marginTop: 20
        }}
        placeholder="Enter expiry date (MM/DD/YYYY)"
        value={date}
        keyboardAppearance='light'
        focusable
        autoFocus
        onChangeText={(text) => {
          setdate(text);
        }
        }

        maxLength={10} // "MM/DD/YYYY" format
      />
      <Text style={{margin:8,marginTop:50,fontWeight:'bold',fontSize:15}}>
        your delivery address
      </Text>

      <TextInput style={styleSheet1.Textinput}
        placeholder='Enter your delivery address'
        value={address}
        multiline={true}
        onChangeText={(text) => {
          setaddress(text);
          setcheck(true);
        }}
      />
      

      <View style={{ marginLeft: 100 }}>
        <FlatButtons fun={order} data={'Place Order'} />
      </View>

    </View>
    </ScrollView>
  )

}
import { CardActionError } from '@stripe/stripe-react-native';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';


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
        marginTop:20
    },
});
const checkfordetails = () => {
    if(1){
    if (date === '') {
      Alert.alert("Please enter the expiry date.")
      
    }
    else if (cardNumber === '') {
      Alert.alert("Please enter your mobile number.")
    }
    else if (cardNumber.length != 16) {
      Alert.alert("Please enter a valid card number.")
    }
    else if (cvc === '') {
      Alert.alert("Please provide .")
    }
return 1;
}

    else
     return 0;
  }
 
  

const CreditCardForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cvc, setCVC] = useState('');
    const [date, setdate] = useState('');

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

    return (
        <View style={styles.container}>
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
                        marginTop:20
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
        </View>
    );
};

export {CreditCardForm,checkfordetails}

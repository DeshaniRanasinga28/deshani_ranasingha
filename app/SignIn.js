import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Butt } from 'react-native';

export default class SignIn extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.sign_txt}>SignIn</Text>

                <View style={styles.sub_container}>
                    <Text style={styles.text}>Email</Text>

                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter username"
                    />

                    <Text style={styles.text}>Password</Text>

                    <TextInput
                        style={styles.text}
                        placeholder="password"
                    />

                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}> Sign-in </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>




            //      <TextInput 
            //         style={styles.text} 
            //         placeholder="Enter username"
            //         onChangeText={ TextInputValue => this.setState({username : TextInputValue }) }
            //         />

            //      <TextInput
            //        style={styles.text} 
            //        placeholder="password"
            //        onChangeText={ TextInputValue => this.setState({password: TextInputValue }) }
            //        secureTextEntry={true}   onPress={this.Login.bind(this)}
            //       />

            //      <TouchableOpacity>
            //       <View style={styles.button}>
            //       <Text style={styles.buttonText}> Sign-in </Text>
            //     </View>
            //    </TouchableOpacity> 



        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10

    },
    sub_container: {
        flex: 1,
        marginTop: 100
    },
    sign_txt: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    lableTxt: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },


    text: {
        height: 40,
        width: 300,
        margin: 0,
        marginRight: 7,
        marginLeft: 30,
    },

    inputText: {
        height: 40,
        width: 300,
        margin: 0,
        marginRight: 7,
        marginLeft: 30,

    },
    button: {
        height: 40,
        width: 300,
        marginLeft: 30,
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#0E580F',
        borderColor: '#0E580F',
        
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    }
});
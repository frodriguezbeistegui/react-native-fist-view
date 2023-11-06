import { View, Button, TextInput, StyleSheet, Modal, Image } from 'react-native' 
import { useState } from 'react'


export default function GoalInput ({ addGoalHandler, showModal, onCancel }) {
    const [ enteredGoal, setEnteredGoal ] = useState('')

    function goalInputHadler(enteredText) {
       setEnteredGoal(enteredText);
    };

    function addGoal () {
        addGoalHandler(enteredGoal);
        setEnteredGoal('')
    }

    return (
        <Modal visible={showModal} animationType='slide' >
            <View style={styles.inputContainer}>
            <Image 
                source={require(`../assets/images/goal.png`)} 
                style={styles.image}
            />
                <TextInput
                    placeholder='Your course goal!' 
                    style={styles.textInput} 
                    onChangeText={goalInputHadler} 
                    value={enteredGoal} 
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={() => addGoal(enteredGoal)} color='#5e0acc' />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onCancel} color='#f31282' />
                    </View> 
                </View>
            </View>
       </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 6,
      },
      image: {
        width: 100,
        height: 100,
        margin: 20,
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
      },
      button: {
        width: '40%',
        marginHorizontal: 8,
      }
})
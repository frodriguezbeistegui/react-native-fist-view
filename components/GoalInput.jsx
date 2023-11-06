import { View, Button, TextInput, StyleSheet } from 'react-native' 
import { useState } from 'react'


export default function GoalInput ({ addGoalHandler }) {
    const [ enteredGoal, setEnteredGoal ] = useState('')

    function goalInputHadler(enteredText) {
       setEnteredGoal(enteredText);
    };

    function addGoal () {
        addGoalHandler(enteredGoal);
        setEnteredGoal('')
    }

    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHadler} value={enteredGoal} />
                <Button title="Add Goal" onPress={() => addGoal(enteredGoal)} />
            </View>
       </>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        maxHeight:200,
        minHeight:180,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: "#cccccc",
    
    
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: '70%',
        marginRight: 8,
        padding: 8,
      },
})
import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [ enteredGoal, setEnteredGoal ] = useState('')
  const [ curseGoals, setCurseGoals ] = useState([])

  function goalInputHadler(enteredText) {
     setEnteredGoal(enteredText)
  };

  function addGoalHandler() {
    setCurseGoals( currentCourseGoals => [
      ...currentCourseGoals,
      {
        text: enteredGoal,
        id: Math.random().toString()
      }
    ]);
  };

  return (
    <View style={ styles.appCointainer }>
      <View style={styles.inputContainer}>
      <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHadler} />
      <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <FlatList
       alwaysBounceVertical={false}
       style={styles.goalsContainer}
       data={curseGoals}
       renderItem={({item: {key, text}})=>{
        return(
          <View style={styles.goalItem} >
            <Text style={styles.goalItemText} >{text}</Text>
          </View>
        )
      }}
      keyExtractor={(item, index) => item.id}
      />      
    </View>
  );
}

const styles = StyleSheet.create({ 
  appCointainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
    minHeight:50
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    color: 'white',
  }
});

import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [ courseGoals, setCourseGoals ] = useState([])

  function addGoalHandler(enteredGoal) {
    setCourseGoals( currentCourseGoals => [
      ...currentCourseGoals,
      {
        text: enteredGoal,
        id: Math.random().toString()
      }
    ]);
    endAddGoalHander()
  };

  function deleteGoalHander (id) {
    setCourseGoals((goals) => {
      return goals.filter((item) => {
        return item.id !== id
      })
    });
  }

  function startAddGoalHandler () {
    setModalIsVisible(true)
  }

  function endAddGoalHander () {
    setModalIsVisible(false)
  }


  return (
    <>
      <StatusBar style='light' />

      <View style={ styles.appCointainer }>
        <GoalInput addGoalHandler={addGoalHandler} showModal={modalIsVisible} onCancel={endAddGoalHander} />
        <View style={styles.titleContainer} >
          <Text style={styles.titleText} >Course Goals:</Text>
        </View>
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            renderItem={({item})=>{
                return(
                <GoalItem
                  text={item.text}
                  onDeletetItem={deleteGoalHander}
                  id={item.id}
                />
                )
            }}
            keyExtractor={(item) => item.id}
           />  
        </View>
        <Button title='Add New Goal' color="#a065ec" onPress={startAddGoalHandler}  />
      </View>
    </>
  );
}

const styles = StyleSheet.create({ 
  appCointainer: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,
    marginVertical: 20
  },
  titleText: {
    fontSize: 30,
    fontWeight: '800',
    color: '#fafafa'
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 20,
    flex: 1,
  } 
});

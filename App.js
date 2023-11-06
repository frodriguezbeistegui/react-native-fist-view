import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
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
        <Button title='Add New Goal' color="#a065ec" onPress={startAddGoalHandler} />
        <GoalInput addGoalHandler={addGoalHandler} showModal={modalIsVisible} onCancel={endAddGoalHander} />
        <FlatList
              alwaysBounceVertical={false}
              style={styles.goalsContainer}
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
              keyExtractor={(item, index) => item.id}
              />      
      </View>
    </>
  );
}

const styles = StyleSheet.create({ 
  appCointainer: {
    flex: 1,
    paddingTop: 50,
    paddingVertical: 40,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,
  },
});

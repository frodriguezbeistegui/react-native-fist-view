import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [ courseGoals, setCourseGoals ] = useState([])

  function addGoalHandler(enteredGoal) {
    setCourseGoals( currentCourseGoals => [
      ...currentCourseGoals,
      {
        text: enteredGoal,
        id: Math.random().toString()
      }
    ]);
  };

  function deleteGoalHander (id) {
    setCourseGoals((goals) => {
      return goals.filter((item) => {
        return item.id !== id
      })
    });
  }

  return (
    <View style={ styles.appCointainer }>
      <GoalInput addGoalHandler={addGoalHandler} />
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
  );
}

const styles = StyleSheet.create({ 
  appCointainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
    minHeight:50
  },
});

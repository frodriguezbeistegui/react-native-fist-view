import { StyleSheet, View, Text, Pressable  } from "react-native"

export default function GoalItem({ text, onDeletetItem, id }) {

    return(
        <Pressable onPress={onDeletetItem.bind(this, id)} android_ripple={{color: '#000000'}} >
            <View style={styles.goalItem} >
                <Text style={styles.goalItemText} >{text}</Text>
            </View>
        </Pressable>
        
    )
}

const styles =  StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalItemText: {
        color: 'white',
    }
})
import { StyleSheet, View, Text, Pressable } from "react-native"

export default function GoalItem({ text, onDeletetItem, id }) {

    return(
            <View style={styles.goalItem} >
                    <Pressable 
                        onPress={onDeletetItem.bind(this, id)} 
                        android_ripple={{color: '#210644'}}
                        style={({pressed})=> pressed && styles.pressedItem }
                    >
                        <Text style={styles.goalItemText} >{text}</Text>
                    </Pressable>
            </View>
    )
}

const styles =  StyleSheet.create({
    goalItem: {
        margin: 8, 
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalItemText: {
        color: 'white',
        padding: 8
    }
})
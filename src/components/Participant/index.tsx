import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const Participant = () => {
  const handleParticipantRemove = () => {
    console.log("Remove");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Felipe
      </Text>

      <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantRemove}
        >
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  )
}
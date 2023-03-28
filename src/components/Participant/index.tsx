import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface IParticipantProps {
  name: string;
}

export const Participant = ({ name }: IParticipantProps) => {
  const handleParticipantRemove = () => {
    console.log("Remove");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
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
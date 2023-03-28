import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { ParticipantRemoveProps } from '../../screens/Home';
import { styles } from './styles';


interface IParticipantProps {
  data: ParticipantRemoveProps;
  removeParticipant: (data: ParticipantRemoveProps) => void;
}

export const Participant = ({ data, removeParticipant }: IParticipantProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {data.name}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => removeParticipant(data)}
      >
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}
import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export interface ParticipantRemoveProps {
  id: string;
  name: string;
}

export function Home() {
  const [participantName, setParticipantName] = useState('');
  const [participants, setParticipants] = useState([
    {
      id: '1',
      name: 'Felipe'
    },
    {
      id: '2',
      name: 'Ana'
    },
  ]);

  const handleParticipantAdd = () => {
    const newParticipant = {
      id: Date.now().toString(36),
      name: participantName
    };

    setParticipants(prevState => [...prevState, newParticipant]);
    setParticipantName('');
  }

  const handleParticipantRemove = (item: ParticipantRemoveProps) => {
    Alert.alert('Remover', `Remover o participante ${item.name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant.id !== item.id))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      
      <Text style={styles.eventDate}>
        Segunda, 27 de Março de 2023.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          value={participantName}
          onChangeText={setParticipantName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            data={item}
            removeParticipant={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguêm chegou no evento ainda? Adicione participantes à sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}


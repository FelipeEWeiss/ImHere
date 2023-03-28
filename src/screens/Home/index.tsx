import { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState([
    {
      id: '1',
      name: 'Felipe'
    },
    {
      id: '2',
      name: 'Ana'
    },
    {
      id: '3',
      name: 'Ana'
    },
    {
      id: '4',
      name: 'Ana'
    },
    {
      id: '5',
      name: 'Ana'
    },
    {
      id: '6',
      name: 'Ana'
    },
    {
      id: '7',
      name: 'Ana'
    },
    {
      id: '8',
      name: 'Ana'
    },
    {
      id: '9',
      name: 'Ana'
    },
  ]);

  const handleParticipantAdd = () => {
    console.log("Adicionar");
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
            name={item.name}
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


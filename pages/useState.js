import { StatusBar } from 'expo-status-bar';
import { useState,} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';

export default function App() {

  // useState é um Hook(função) que permite que você tenha variáveis de estado em componentes
  // funcionais você passa o estado inicial para essa função é ela retorna uma variável com o valor do estado atual
  // (não necessariamente o estado inicial) e outra função para atualizar esse valor(set)

  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{fontSize: 18, marginBottom: 20}}>{count}</Text>
      <View style={styles.cont}>
        <TouchableOpacity onPress={() => setCount(count-1)}>
          <View style={styles.menos}>
            <Text>-</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCount(0)}>
          <View style={styles.zero}>
            <Text style={{color: 'white'}}>0</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCount(count+1)}>
          <View style={styles.mais}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont:{
    flexDirection: 'row',
    margin: 10,
  },
  menos:{
    marginRight: 10,
    height: 40,
    width: 40,
    borderRadius: 40/2,
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  zero:{
    marginRight: 10,
    height: 40,
    width: 40,
    borderRadius: 40/2,
    backgroundColor: '#98FB98',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mais:{
    marginRight: 10,
    height: 40,
    width: 40,
    borderRadius: 40/2,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';

export default function App() {

  //[] -> Toda vez q alguma variavel q esta dentro desse array tiver seu valor modificado sera executado
  // -> Se tiver vazio soo vai ser executado na primeira vez

  // const [image, setImage] = useState()

  // useEffect(()=>{
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //   .then((resp) => resp.json())
  //   .then((obj) => {
  //     setImage(obj.message);
  //     console.log("Recursos incluidos")
  //   })
  // },[])


  const [numero, setNumero] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [maior, setMaior] = useState(0)


  const pegaMaior = (n1, n2) => {
    if(n1 > n2) {
      return n1;
    }else{
      return n2;
    }
  }

  useEffect(() => {
    numeros()
    numeros2()
  }, [numero, numero2])

  function numeros(){
    let text = ''

    text = `${numero + numero2} cliques`
    setMaior(pegaMaior(numero, numero2))
  }

  function numeros2(){
    let text = ''

    console.log(`${numero + numero2} cliques`)
    setMaior(pegaMaior(numero, numero2))
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{marginBottom: 20, fontSize: 20}}>{`Numero 1: ${numero} | Numero 2: ${numero2}`}</Text>
      <Text style={{marginBottom: 20, fontSize: 18}}>{`O maior numero é ${maior}`}</Text>
      <View style={styles.cont}>
        <TouchableOpacity onPress={() => setNumero(numero + 1)}>
          <View style={styles.n1}>
            <Text>N1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setNumero2(numero2 + 1)}>
          <View style={styles.n2}>
            <Text>N2</Text>
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
  n1:{
    marginRight: 10,
    height: 40,
    width: 40,
    borderRadius: 40/2,
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  n2:{
    marginRight: 10,
    height: 40,
    width: 40,
    borderRadius: 40/2,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont:{
    flexDirection: 'row',
    margin: 10,
  }
});

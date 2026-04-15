import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const MeuBotao = ({ titulo, cor, onPress }) => {
  return (
    <TouchableOpacity style={[styles.botao, { backgroundColor: cor }]} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};


export default function App() {
  return (
    <View style={styles.container}>
      <MeuBotao titulo="Sorvete de chiclete" cor="#e994b7" onPress={() => alert('PARABÉNS VOCÊ GANHOU UM SORVETE DE CHICLETE!')} />
      <MeuBotao titulo="Sorvete de paçoca" cor="#eed0b6" onPress={() => alert('PARABÉNS VOCÊ GANHOU UM SORVETE DE PAÇOCA!')} />
      <MeuBotao titulo="sorvete de banana" cor="#ffee8c" onPress={() => alert('PARABÉNS VOCÊ GANHOU UM SORVETE DE BANANA!')} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  botao: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  texto: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
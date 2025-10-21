import { StyleSheet, View, TextInput, Text, Button, ScrollView } from 'react-native';
import { Aluno } from '../class/aluno';
import { useState } from 'react';

export default function SecondScreen({ navigation, route }: any) {
  const { listaAlunos } = route.params;
  const [nome, setnome] = useState('');
  const [nota1, setnota1] = useState(0);
  const [nota2, setnota2] = useState(0);
  const [lista, setlista] = useState<Aluno[]>(listaAlunos || []);
  const [saida, setSaida] = useState('');

  function procurar() {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].nome === nome) {
        alert(
          'Aluno encontrado: ' + lista[i].nome + ' / ' + 'Notas: ' + lista[i].nota1 + ' ' + lista[i].nota2
        );
        return;
      }
    }
    alert('Aluno não encontrado');
  }

  function showall() {
    let s = '';
    lista.forEach(element => {
      s += element.nome + ' / ' + 'Notas: ' + element.nota1 + ' ' + element.nota2 + '\n';
    });
    setSaida(s);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔎 Procurar por aluno</Text>
      <TextInput
        value={nome}
        onChangeText={setnome}
        placeholder="Digite o nome do aluno"
        style={styles.input}
      />

      <View style={styles.buttonSpacing}>
        <Button title="🔍 Procurar aluno" color="#007bff" onPress={procurar} />
      </View>

      <View style={styles.buttonSpacing}>
        <Button title="📋 Mostrar alunos cadastrados" color="#17a2b8" onPress={showall} />
      </View>

      <ScrollView style={styles.resultBox}>
        <Text style={styles.resultText}>{saida}</Text>
      </ScrollView>

      <View style={styles.buttonSpacing}>
        <Button title="⬅️ Voltar" color="#6c757d" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: '#fdfdfd',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  buttonSpacing: {
    marginBottom: 12,
  },
  resultBox: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
    maxHeight: 200,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});

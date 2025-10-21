import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { useState } from 'react';
import { Aluno } from '../class/aluno';

export default function HomeScreen({ navigation }: any) {
  const [nome, setnome] = useState('');
  const [nota1, setnota1] = useState(0);
  const [nota2, setnota2] = useState(0);
  const [lista, setlista] = useState<Aluno[]>([]);

  function cadastrar() {
    let a = new Aluno(nome, nota1, nota2);
    setlista([...lista, a]);
    alert('Aluno cadastrado');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📘 Cadastro de Alunos</Text>

      <TextInput
        value={nome}
        onChangeText={setnome}
        placeholder="Digite o nome do aluno"
        style={styles.input}
      />
      <TextInput
        value={String(nota1)}
        onChangeText={text => setnota1(Number(text))}
        placeholder="Digite a primeira nota"
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        value={String(nota2)}
        onChangeText={text => setnota2(Number(text))}
        placeholder="Digite a segunda nota"
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.buttonSpacing}>
        <Button title="✅ Cadastrar aluno" color="#28a745" onPress={cadastrar} />
      </View>
      <View style={styles.buttonSpacing}>
        <Button title="➡️ Ir para próxima página" color="#007bff" onPress={() => navigation.navigate('Second', { listaAlunos: lista })} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  buttonSpacing: {
    marginBottom: 12,
  },
});

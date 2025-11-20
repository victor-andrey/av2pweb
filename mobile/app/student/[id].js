import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

export default function StudentDetails() {
  const { id } = useLocalSearchParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`https://proweb.leoproti.com.br/alunos/${id}`)
      .then(response => setStudent(response.data))
      .catch(error => console.log(error));
  }, []);

  if (!student) {
    return <Text style={styles.loading}>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Aluno</Text>
      <Text style={styles.text}>ID: {student.id}</Text>
      <Text style={styles.text}>Nome: {student.nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 20, marginBottom: 10 },
  loading: { marginTop: 60, textAlign: "center", fontSize: 20 }
});

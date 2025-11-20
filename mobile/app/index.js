import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [students, setStudents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const res = await axios.get("https://proweb.leoproti.com.br/alunos");
      setStudents(res.data);
    }
    load();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lista de Alunos</Text>

      {students.map((aluno) => (
        <TouchableOpacity
          key={aluno.id}
          style={styles.card}
          onPress={() => router.push(`/student/${aluno.id}`)}
        >
          <Text style={styles.name}>{aluno.nome}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 30, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#e5e5e5",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15
  },
  name: { fontSize: 20 }
});

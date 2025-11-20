import api from "./api";

export async function getStudents() {
  const response = await api.get("/alunos");
  return response.data;
}

export async function getStudentById(id) {
  const response = await api.get(`/alunos/${id}`);
  return response.data;
}

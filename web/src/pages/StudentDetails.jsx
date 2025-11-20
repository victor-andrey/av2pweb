import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getStudentById } from "../services/studentService";

function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await getStudentById(id);
      setStudent(data);
    }
    loadData();
  }, [id]);

  if (!student) return <p>Carregando...</p>;

  return (
    <div className="container mt-4">
      <h1>Detalhes do Aluno</h1>

      <ul className="list-group mt-4">
        <li className="list-group-item"><strong>ID:</strong> {student.id}</li>
        <li className="list-group-item"><strong>Nome:</strong> {student.nome}</li>
        <li className="list-group-item"><strong>Email:</strong> {student.email}</li>
        <li className="list-group-item"><strong>Idade:</strong> {student.idade}</li>
      </ul>

      <Link to="/" className="btn btn-secondary mt-4">
        Voltar
      </Link>
    </div>
  );
}

export default StudentDetails;

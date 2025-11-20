import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { getStudents } from "../services/studentService";

function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getStudents();
      setStudents(data);
    }
    loadData();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Lista de Alunos</h1>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {students.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>
                <Link to={`/aluno/${aluno.id}`} className="btn btn-primary">
                  Ver mais
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;

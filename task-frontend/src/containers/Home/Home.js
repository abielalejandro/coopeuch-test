import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import List from "../../components/Task/List";
import TaskForm from "../../components/Task/Form";
import {
  persistTask,
  findTasks,
  deleteTask,
  changeTask,
} from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const task = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(findTasks());
  }, []);
  const onAdd = () => {
    dispatch(changeTask({ ...task, description: "", active: false }));
  };

  const onEdit = (item) => {
    dispatch(changeTask({ ...item }));
  };

  const onDelete = (task) => {
    dispatch(deleteTask(task.id));
  };

  const onSave = (evt) => {
    evt.preventDefault();
    dispatch(persistTask({ ...task }));
  };

  const onChange = (evt) => {
    const name = evt.target.name;
    const value =
      evt.target.type === "checkbox"
        ? evt.target.checked
          ? true
          : false
        : evt.target.value;
    dispatch(changeTask({ ...task, [name]: value }));
  };

  console.log(tasks, task);
  return (
    <Container>
      <Card>
        <CardHeader>
          Administrador de tareas
          <Button
            type="button"
            style={{ float: "right" }}
            outline
            color="primary"
            onClick={onAdd}
          >
            Add
          </Button>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="4">
              <TaskForm task={task} onSubmit={onSave} onChange={onChange} />
            </Col>

            <Col>
              Tareas
              <List tasks={tasks.data} onEdit={onEdit} onDelete={onDelete} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Home;

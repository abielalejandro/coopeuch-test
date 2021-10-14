import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Label, FormGroup, Button } from "reactstrap";

const TaskForm = ({ onSubmit, onChange, task }) => {
  return (
    <Form onSubmit={onSubmit} id="form">
      <FormGroup>
        <Label>Descripcion</Label>
        <Input
          value={task.description}
          onChange={onChange}
          required
          name="description"
          type="text"
          placeholder="Descripcion"
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            name="active"
            onChange={onChange}
            checked={task.active}
            type="checkbox"
          />{" "}
          Activo
        </Label>
      </FormGroup>
      <FormGroup>
        <Button
          type="submit"
          color="primary"
          disabled={task.description.length === 0}
        >
          Guardar
        </Button>
      </FormGroup>
    </Form>
  );
};

TaskForm.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string,
    active: PropTypes.bool,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TaskForm;

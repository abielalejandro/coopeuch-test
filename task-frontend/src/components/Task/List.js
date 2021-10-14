import React from "react";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";
import { Table, ButtonGroup, Button } from "reactstrap";

const List = ({ tasks, onEdit, onDelete }) => {
  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th style={{ width: "60%" }}>Descripcion</th>
          <th style={{ width: "20%" }}>Creaci&oacute;n</th>
          <th style={{ width: "20%" }}>Activo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tasks &&
          tasks.map((row, i) => {
            return (
              <tr key={row.id}>
                <td style={{ width: "60%" }}>{row.description}</td>
                <td style={{ width: "20%" }}>{row.createdAt}</td>
                <td style={{ width: "20%" }}>
                  {row.active ? <FaCheck /> : null}
                </td>
                <td className="text-center">
                  <ButtonGroup>
                    <Button
                      type="button"
                      color="info"
                      onClick={() => onEdit(row)}
                    >
                      Editar
                    </Button>
                    <Button
                      type="button"
                      color="danger"
                      onClick={() => onDelete(row)}
                    >
                      Eliminar
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      active: PropTypes.bool,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default List;

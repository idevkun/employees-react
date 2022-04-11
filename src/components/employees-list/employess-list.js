import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployessList = ({ data }) => {
  const elements = data.map(item => {
    const { id, ...itemProps } = item;
    //name={item.name} salary={item.salary}
    return (
      <EmployeesListItem key={id} {...itemProps} />
    )
  });
    return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployessList;
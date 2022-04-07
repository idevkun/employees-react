import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployessList = ({ data }) => {
  const elements = data.map(item => {
    //name={item.name} salary={item.salary}
    return (
      <EmployeesListItem {...item} />
    )
  });
  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployessList;
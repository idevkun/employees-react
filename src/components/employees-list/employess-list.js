import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployessList = () => {
  return (
    <ul className="app-list list-group">
        <EmployeesListItem/>
        <EmployeesListItem/>
        <EmployeesListItem/>
    </ul>
  )
}

export default EmployessList;
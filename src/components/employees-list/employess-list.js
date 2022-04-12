import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployessList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map(item => {
    const { id, ...itemProps } = item;
    //name={item.name} salary={item.salary}
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
       
      />
    )
  });
  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployessList;
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployessList from '../employees-list/employess-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
function App() {

    const data = [
        { name: 'Pilk M', salary: 800, increase: false },
        { name: 'Alex C', salary: 3200, increase: true },
        { name: 'Kristina Si', salary: 5000, increase: false }
    ]

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployessList data={data} />
            <EmployeesAddForm />
        </div>
    )
}

export default App;

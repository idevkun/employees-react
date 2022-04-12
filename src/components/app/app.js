import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployessList from '../employees-list/employess-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Pilk M', salary: 800, increase: false, id: 1 },
                { name: 'Alex C', salary: 3200, increase: true, id: 2 },
                { name: 'Kristina Si', salary: 5000, increase: false, id: 3 }
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployessList data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EmployeesAddForm />
            </div>
        )
    }
}

export default App;

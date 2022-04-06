import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployessList from '../employees-list/employess-list';
function App() {
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter/>
            </div>
                <EmployessList/>
        </div>
    )
}

export default App;

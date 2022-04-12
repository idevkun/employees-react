import './app-info.css';
const AppInfo = ({increased, employees}) => {
    return (
        <div className='app-info mt-3'>
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию у нас получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;
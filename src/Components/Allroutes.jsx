import { Routes, Route } from 'react-router-dom';
import { AddEmployees } from './routes/AddEmployees';
import { Employee } from './routes/Employee';
import { Employees } from './routes/Employees';
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { Register } from './routes/Register';

export const Allroutes = () => {




    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/employees' element={<Employees/>} />
            <Route path='/employees/create' element={<AddEmployees/>} />
            <Route path='/employees/:id' element={<Employee />} />
        </Routes>
    )
}
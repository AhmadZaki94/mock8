import { Routes, Route } from 'react-router-dom';
// import { AuthWrapper } from './AuthWrapper';
import { AddEmployees } from './routes/AddEmployees';
import { Employee } from './routes/Employee';
import { Employees } from './routes/Employees';
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { Register } from './routes/Register';

export const Allroutes = () => {




    return (
        <Routes>
            <Route path='/' element={
                // <AuthWrapper>
                    <Home/>
                // </AuthWrapper>
            } 
                />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/employees' element={
                // <AuthWrapper>
                    <Employees/>
                // </AuthWrapper>
            } />
            <Route path='/employees/create' element={
                // <AuthWrapper>
                    <AddEmployees/>
                // </AuthWrapper>
            } />
            <Route path='/employees/:id' element={
                // <AuthWrapper>
                    <Employee />
                // </AuthWrapper>
            } />
        </Routes>
    )
}
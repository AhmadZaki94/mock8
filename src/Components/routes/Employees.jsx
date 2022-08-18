import { useNavigate } from 'react-router-dom';
import { Button, 
         Table,
         Thead,
         Tbody,
         Tr,
         Th,
         Td,
         TableCaption,
         TableContainer, } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import axios from 'axios'
export const Employees = () => {

    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const [dele, setDele] = useState([]);


    const getData = () => {
        axios.get('http://localhost:8080/employeesDetails')
        .then((r) => {
            setData(r.data);
            console.log(r.data);
        })
        .catch((e) => console.log(e.message));
    };

    const deleteFunc = (id) => {
        axios.delete(`http://localhost:8080/employeesDetails/${id}`)
        .then((r) => {
            setDele(r.data)})
        .catch((e) => console.log(e));
    };

    useEffect(() => {
        getData();
    },[dele]);


    return (
        <div>
            <Button onClick={() => navigate('/employees/create')} mt='25px' mb='25px'>Add New Employee</Button>
            <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <TableCaption>Employees Data</TableCaption>
                <Thead>
                <Tr>
                    <Th>Sr.No</Th>
                    <Th>Name</Th>
                    <Th>Gender</Th>
                    <Th>Age</Th>
                    <Th>Contact Number</Th>
                    <Th>Department</Th>
                    <Th>Salary</Th>
                    <Th>Image</Th>
                    <Th>View</Th>
                    <Th>Edit</Th>
                    <Th>Delete</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {data[0] && data.map((e, i) => (
                        <Tr key={i}>
                            <Td>{e.id}</Td>
                            <Td>{e.name}</Td>
                            <Td>{e.gender}</Td>
                            <Td>{e.age}</Td>
                            <Td>{e.contact_no}</Td>
                            <Td>{e.department}</Td>
                            <Td>{e.salary}</Td>
                            <Td>{e.image}</Td>
                            <Td><Button onClick={() => navigate('/employees/:id')}>View</Button></Td>
                            <Td><Button>Edit</Button></Td>
                            <Td><Button onClick={() => {deleteFunc(e.id)}}>Delete</Button></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
        </div>
    )
}
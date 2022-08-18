import {
    FormControl,
    FormLabel,
    Box,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Select,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddEmployees = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        gender: "",
        age: "",
        contact_no: "",
        department: "",
        image: "",
        salary: ""
    });

    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { name, value }  = e.target;
        setForm({
            ...form,
            [name] : value,
        });
        console.log(e.target);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, form]);

        axios.post('https://serverjsonmock.herokuapp.com/employeesDetails', form)
        .then((r) => {
             alert("Data Successflly Submitted");
             navigate('/employees');
             console.log(r.data);
        })
        .catch((e) => console.log(e.message));
    };

    return (
        <Box margin='auto' mt='25px' h='750px' width='350px'>
            <h1>Add New Employee Details</h1> 
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel margin='auto'>Name</FormLabel>
                    <Input value={form.name} onChange={handleChange} name='name' placeholder='Enter Name' mb='20px' border='3px solid' type='text'/> <br />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel margin='auto'>Contact Number</FormLabel>
                    <Input value={form.contact_no} onChange={handleChange} name='contact_no' placeholder='Enter Contact Number' mb='20px' border='3px solid' type='text'/> <br />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel margin='auto'>Gender</FormLabel>
                        <RadioGroup mb='20px'>
                            <Stack direction='row'>
                                <Radio onChange={handleChange} value='male' name='gender' checked={form.gender === 'male'}>Male</Radio>
                                <Radio onChange={handleChange} value='female' name='gender' checked={form.gender === 'female'}>Female</Radio>
                            </Stack>
                        </RadioGroup>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel margin='auto'>Department</FormLabel>
                        <Select onChange={handleChange} name='department' value={form.department} mb='20px' border='3px solid' placeholder='----Select Branch----'>
                            <option value='admin'>Admin</option>
                            <option value='hr'>HR</option>
                            <option value='engineering'>Engineering</option>
                            <option value='marketing'>Marketing</option>
                            <option value='technical'>Technical</option>
                            <option value='sales'>Sales</option>
                        </Select>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel margin='auto'>Age</FormLabel>
                    <Input value={form.age} onChange={handleChange} name='age' placeholder='Enter Age' mb='20px' border='3px solid' type='number' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel margin='auto'>Salary</FormLabel>
                    <Input value={form.salary} name='salary' onChange={handleChange} placeholder='Enter Enter Salary' mb='20px' border='3px solid' type='number' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel margin='auto'>Image</FormLabel>
                    <Input value={form.image} onChange={handleChange} name='image' placeholder='Enter Image Address' mb='20px' border='3px solid' type='text' />
                </FormControl>
                <Input className='submit_btn' type='submit' value='Submit' bg='teal' color='white' fontSize='25px' />
            </form>
        </Box>
    )
}





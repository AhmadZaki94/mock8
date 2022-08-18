import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import axios from 'axios';
  import { Link, useNavigate } from 'react-router-dom'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: ""
    });

    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
        console.log(e.target);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData([...data, userData]);

        axios.post('https://masai-api-mocker.herokuapp.com/auth/register', userData)
        .then(() => {
            alert('User is Register Successfully');
            navigate('/login');

            setUserData({
                name: "",
                email: "",
                password: "",
                username: "",
                mobile: "",
                description: ""
            });
        });
    };

    const getData = () => {
        axios.get('https://masai-api-mocker.herokuapp.com/auth/register')
        .then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    };


    useEffect(() => {
        getData();
    },[]);


    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input name='name' onChange={handleChange} value={userData.name} type="text" placeholder='Enter name' />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="username" isRequired>
                    <FormLabel>User Name</FormLabel>
                    <Input name='username' onChange={handleChange} value={userData.username} placeholder='Enter User Name' type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input name='email' onChange={handleChange} value={userData.email} placeholder='Enter Email' type="email" />
              </FormControl>
              <FormControl id="mobile" isRequired>
                <FormLabel>Mobile No</FormLabel>
                <Input name='mobile' onChange={handleChange} value={userData.mobile} placeholder='Enter Mobile Number' type="number" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input name='password' onChange={handleChange} value={userData.password} placeholder='Enter Password' type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="description" isRequired>
                <FormLabel>Description</FormLabel>
                <Input name='description' onChange={handleChange} value={userData.description} placeholder="Enter Description" type="text" />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'#1cd6ce'}
                  color={'#293462'}
                  _hover={{
                    bg: '#293462',
                    color: '#1cd6ce'
                  }}
                  onClick={handleSubmit}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <span style={{ color: '#1cd6ce'}}><Link to='/login'>Login</Link></span>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
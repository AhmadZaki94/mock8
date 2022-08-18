import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { signIn } from '../Redux/auth/action';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    // const dispatch = useDispatch();
    const navigate = useNavigate();
    // const location = useLocation();
    // const authStatus = useSelector((store) => store.authReducer.auth);
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleUserPassword = (e) => {
        setUserPassword(e.target.value);
    }

    const submitHandler = (e) => {
        // e.preventDefault();
        // console.log("UserName", userName, "UserPassword", userPassword);
        // dispatch(signIn({ username: userName, password: userPassword}));
        // alert('Log In Successfull');
        // console.log(authStatus);
        axios.post('https://masai-api-mocker.herokuapp.com/auth/login', {
                username: userName,
                password: userPassword,
            })
            .then((res) => {
                console.log("response",res.data);
                navigate('/');
            })
            .catch((e) => {
                navigate('/signup');
                console.log("Messgae:", e);
            });
    };

    // useEffect(() => {
        // if(location?.state?.pathname && authStatus)
        // {
        //     navigate(location?.state?.pathname, { replace: true });
        // }

    // }, [location.state, navigate, authStatus]);

    // console.log(location?.state?.pathname);


    return (
        <Flex
            minH={'80vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                <Stack spacing={4}>
                    <FormControl id="username">
                    <FormLabel>User Name</FormLabel>
                    <Input value={userName} onChange={handleUserName} placeholder='Enter User Name' type="text" />
                    </FormControl>
                    <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input value={userPassword} onChange={handleUserPassword} placeholder='Enter Password' type="password" />
                    </FormControl>
                    <Stack spacing={10}>
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Checkbox>Remember me</Checkbox>
                        <Link color={'#1cd6ce'}>Forgot password?</Link>
                    </Stack>
                    <Button
                        bg={'#1cd6ce'}
                        color={'#293462'}
                        _hover={{
                        bg: '#293462',
                        color: '#1cd6ce'
                        }}
                        onClick={submitHandler}
                        >
                        Sign in
                    </Button>
                    </Stack>
                </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}
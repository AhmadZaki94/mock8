import { useEffect, useState } from "react";
import axios from 'axios';
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

  const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export const Home = () => {

    const [profile, setProfile] = useState([]);

    const navigate = useNavigate();

    const getProfile = () => {

        axios({
            url: 'https://masai-api-mocker.herokuapp.com/user/farz',
            method: "GET",
            headers: {
                Authorization: `Bearer 1b2504f1ecbfaf98242155fd688d9c38`
            } 
        })
        .then((r) => {
            setProfile(r.data);
            console.log(r.data)
        })
        .catch((e) => console.log("Error:", e.message));
    };

    useEffect(() => {
        getProfile();
    },[])

    return (
        <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
           UserName: {profile.username}
          </Text>
          <Heading>
            {profile.name}
          </Heading>
          <Text fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {profile.mobile}
          </Text>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              {profile.email}
            </Text>
            <Text color={'gray.600'}>
                {profile.description}
            </Text>
          </Stack>
        </Stack>
      <Button onClick={() => navigate('/employees')}>Go to Employees Page</Button>
      </Box>
    </Center>
    )
} 
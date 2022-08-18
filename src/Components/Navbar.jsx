import {
    Box,
    Flex,
    IconButton,
    Stack,
    Heading,
    Collapse,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
  } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';


export const Navbar = () => {

    const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('#1CD6CE', 'gray.800')}
        color={useColorModeValue('#293462', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} gap='50px'>
          <Link to='/'>
            <Heading
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily={'heading'}
                color={useColorModeValue('#293462', 'white')}
                p='15px' as='h4' size='md'>
                Home
            </Heading>
          </Link>
          <Link to='/login'>
            <Heading p='15px' as='h4' size='md'>Login</Heading>
          </Link>
          <Link to='/register'>
            <Heading p='15px' as='h4' size='md'>Register</Heading>
          </Link>
          <Link to='/employees'>
            <Heading p='15px' as='h4' size='md'>Employees</Heading>
          </Link>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
            <Box position='relative' padding='0 0.5rem 0 0'>
            </Box>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {/* <MobileNav /> */}
      </Collapse>
    </Box>
  );
}
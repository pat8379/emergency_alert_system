import React from 'react'
import { GridItem, Flex, Tooltip, Button, useDisclosure,   
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text} from '@chakra-ui/react'
import { useAppContext } from '../context/useAppContext'

function MapItem(item, data) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {isContextOpen,
        onContextOpen,
        onContextClose} = useAppContext()
    let exitArrays = [1,2,3,4,5,6]
  return (
    <GridItem border='1px solid grey'>
        {item ? 
        <Flex justify='center' align='center' h='100%'>
            <Tooltip label={item.key == 1 ? `Crowd Level: ${data}` : `Crowd Level: ${item.crowd}`} placement='top' isOpen={!isContextOpen}
                bg={item.key == 1 ?
                    data > 800 ? 'red' :
                    data > 400 ? '#F4B14A':
                    'green' :
                    item.crowd > 800 ? 'red' :
                    item.crowd > 400 ? '#F4B14A':
                    'green'
                    }
            >
                <Button
                    borderRadius='50%'
                    aspectRatio={1}
                    color='white'
                    fontSize='15px'
                    minW='50px'
                    minH='50x'
                    bgColor='blue'
                    _hover={{
                        backgroundColor: '#8AABF1',
                    }}
                    onClick={() => {
                        onOpen()
                        onContextOpen()
                    }}
                >
                    Exit {item.key}
                </Button>  
            </Tooltip>   
            <Modal isOpen={isOpen} onClose={() => {
                onClose()
                onContextClose()
            }}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Alert E-Paper Exit {item.key}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex direction='column'>
                            <Text>Redirect crowd to exit:</Text>
                            <Flex direction='column'>
                                {exitArrays.filter((exit) => exit != item.key).map(
                                    (exitItem) => (
                                        <Button colorScheme='blue' maxW='100px' mb='5px'>
                                            Exit {exitItem}
                                        </Button>
                                    )
                                )}
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>  
        </Flex> 
        : ''}
    </GridItem>
  )
}

export default MapItem
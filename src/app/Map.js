'use client'
import { Button, Flex, Grid, GridItem, Tooltip, Text, InputGroup} from '@chakra-ui/react'
import React, { useState } from 'react'

function Map() {
    const [items, setItems] = useState(
    [
        {key: 1,crowd: 30, index: 0},0,0,0,0,
        0,0,0,0,0,
        0,{key: 2,crowd: 21, index: 11},0,{key: 3,crowd: 23, index:13},0,
        {key: 4,crowd: 54, index: 15},0,0,0,0,
        0,{key: 5,crowd: 100, index: 21},0,{key: 6,crowd: 76, index: 23},0
    ])
  return (
    <>
        <Flex
            // justify='center'
            mt='10px'
            mx='20px'
        >
            <Grid
                backgroundImage="url('cityu-floor.jpeg')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                bgSize='contain'
                minH='600px'
                minW='800px'
                border='1px solid black'
                templateColumns='repeat(5, 1fr)'
                templateRows='repeat(5, 1fr)'
            >
                {items.map((item) => (
                   <GridItem border='1px solid grey'>
                    {item ? 
                    <Flex justify='center' align='center' h='100%'>
                        <Tooltip label={`Crowd Level: ${item.crowd}%`} placement='top' isOpen
                            bg={item.crowd > 70 ? 'red' :
                                item.crowd > 40 ? '#F4B14A':
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
                            >
                                Exit {item.key}
                            </Button>
                        </Tooltip>
                        
                    </Flex> :
                    ''}
                   </GridItem>
                ))}
                

            </Grid>
            <Flex
                ml='20px'
                direction='column'
            >
                {items.map((item) => (
                    item ? <Flex
                        direction='column'
                        mb='30px'
                        borderBottom='1px solid black'
                        minW='300px'
                    >
                        <Text mr='20px' fontSize='25px'>Exit {item.key}</Text>
                        <Text>Crowd Level: {item.crowd}%</Text>
                    </Flex> : ''
                ))}
            </Flex>
        </Flex>
    </>
  )
}

export default Map
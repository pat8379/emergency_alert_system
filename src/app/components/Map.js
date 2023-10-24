'use client'
import { Button, Flex, Grid, GridItem, Tooltip, Text} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import useED from '../queries/useED';
import usePressure from '../queries/usePressure';
import MapItem from './MapItem';

function Map() {
    const { data, isLoading, isError } = usePressure(
        // {refetchInterval: 5000}
        );
    // const {data: ED} = useED()
    const [items, setItems] = useState(
    [
        {key: 1,crowd: 300, index: 0},0,0,0,0,
        0,0,0,0,0,
        0,{key: 2,crowd: 210, index: 11},0,{key: 3,crowd: 230, index:13},0,
        {key: 4,crowd: 540, index: 15},0,0,0,0,
        0,{key: 5,crowd: 1000, index: 21},0,{key: 6,crowd: 760, index: 23},0
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
                    MapItem(item, data)
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
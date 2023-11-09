"use client";
import {
  Button,
  Flex,
  Grid,
  Text,
  Input,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/useAppContext";
import useED from "../queries/useED";
import usePressure from "../queries/usePressure";
import MapItem from "./MapItem";

function Map() {
  const { data } = usePressure({ refetchInterval: 5000 });
  const [direction, setDirection] = useState(100);
  const { getExits, setExits, scenario } = useAppContext();

  const {data: ED, refetch} = useED(direction, {enabled: false})
  const [items, setItems] = useState([
    1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 
    0, 2, 0, 3, 0, 
    4, 0, 0, 0, 0, 
    0, 5, 0, 6, 0,
  ]);

  const handleClick = (dir) => {
    setDirection(dir);
  };

  // useEffect(() => {
  //   setExits(data,1)
  // }, [data])

  useEffect(() => {
    refetch()

  }, [direction])

  return (
    <>
      <Flex mt="10px" mx="20px">
        <Grid
          backgroundImage="url('cityu-floor.jpeg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          bgSize="contain"
          minH="600px"
          minW="800px"
          border="1px solid black"
          templateColumns="repeat(5, 1fr)"
          templateRows="repeat(5, 1fr)"
        >
          {items.map((item, index) => MapItem(item, data, index))}
        </Grid>
        <Flex ml="20px" direction="column">
          <Flex
            direction="column"
            mb="30px"
            borderBottom="1px solid black"
            minW="300px"
          >
            <Text mr="20px" fontSize="25px">
              Exit {scenario}
            </Text>
            <Flex mb={2} gap={2}>
              <Button onClick={() => handleClick(100)}>100</Button>
              <Button onClick={() => handleClick(200)}>200</Button>
              <Button onClick={() => handleClick(300)}>300</Button>
              <Button onClick={() => handleClick(400)}>400</Button>
            </Flex>
          </Flex>
          {items
            .filter((item) => item !== scenario)
            .map((item) =>
              item ? (
                <Flex
                  direction="column"
                  mb="30px"
                  borderBottom="1px solid black"
                  minW="300px"
                >
                  <Text mr="20px" fontSize="25px">
                    Exit {item}
                  </Text>
                  <Input
                    placeholder="Edit value"
                    value={getExits(item)}
                    onChange={(v) => setExits(v.target.value, item)}
                    type="number"
                  ></Input>
                </Flex>
              ) : (
                ""
              )
            )}
        </Flex>
      </Flex>
    </>
  );
}

export default Map;

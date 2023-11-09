"use client";
import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useAppContext } from "../context/useAppContext";

function Navigation() {
  const { scenario, setscenario } = useAppContext();
  return (
    <Box background="#F3DDD8" p="20px">
      <Flex dir="column">
        <Link
          href="/"
          style={{
            marginRight: 40,
          }}
        >
          <Text fontWeight={600}>Dashboard</Text>
        </Link>
        <Button onClick={() => setscenario(scenario === 1 ? 2 : 1)}>Set Exit {scenario === 1 ? 2 : 1} for pressure sensor</Button>
      </Flex>
    </Box>
  );
}

export default Navigation;

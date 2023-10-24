import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

function Navigation() {
  return (
    <Box
        background="#F3DDD8"
        p='20px'
    >
        <Flex
            dir='column'
        >
            <Link 
                href='/'
                style={{
                    marginRight: 40
                }}
            >
                <Text
                    fontWeight={600}
                >
                    Dashboard
                </Text>
            </Link>
            <Link 
                href='/epaper'
            >
                <Text
                    fontWeight={600}
                >
                    Statistics
                </Text>
            </Link>
        </Flex>
    </Box>
  )
}

export default Navigation
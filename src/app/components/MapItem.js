import React from "react";
import {
  GridItem,
  Flex,
  Tooltip,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { useAppContext } from "../context/useAppContext";

function MapItem(item, data, index) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isContextOpen,
    onContextOpen,
    onContextClose,
    getExits,
    returnColor,
    decideBorderColor,
    alertTo,
    setAlertTo
  } = useAppContext();
  let exitArrays = [1, 2, 3, 4, 5, 6];
  const crowd = getExits(item);
  return (
    <GridItem
     border="1px solid grey"
     borderLeft={decideBorderColor(index, 'left')}
     borderRight={decideBorderColor(index, 'right')}
     borderBottom={decideBorderColor(index, 'bottom')}
     borderTop={decideBorderColor(index, 'top')}
     >
      {item ? (
        <Flex
          justify="center"
          align="center"
          h="100%"
          bg={item == 1 ? "rgba(0,255,0,0.4)" : alertTo == item ? "rgba(0,0,255,0.4)" : "transparent"}
        >
          <Tooltip
            label={item == 1 ? `Crowd Level: ${data}` : `Crowd Level: ${crowd}`}
            placement="top"
            isOpen={!isContextOpen}
            bg={item == 1 ? returnColor(data) : returnColor(crowd)}
          >
            <Button
              borderRadius="50%"
              aspectRatio={1}
              color="white"
              fontSize="15px"
              minW="50px"
              minH="50x"
              bgColor="blue"
              _hover={{
                backgroundColor: "#8AABF1",
              }}
              onClick={() => {
                onOpen();
                onContextOpen();
              }}
            >
              Exit {item}
            </Button>
          </Tooltip>
          <Modal
            isOpen={isOpen}
            onClose={() => {
              onClose();
              onContextClose();
            }}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Alert E-Paper Exit {item}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex direction="column">
                  <Text mb="10px">Redirect crowd to exit:</Text>
                  <Flex direction="column">
                    {exitArrays
                      .filter((exit) => exit != item)
                      .map((exitItem) => (
                        <Flex alignItems="center">
                          <Button
                            colorScheme="blue"
                            maxW="100px"
                            mb="5px"
                            mr="10px"
                            onClick={() => setAlertTo(exitItem)}
                          >
                            Exit {exitItem}
                          </Button>
                          <Text
                            bg={returnColor(getExits(exitItem))}
                            color="white"
                            p="3px"
                            borderRadius="2px"
                          >
                            Crowd level: {getExits(exitItem)}
                          </Text>
                        </Flex>
                      ))}
                  </Flex>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      ) : (
        ""
      )}
    </GridItem>
  );
}

export default MapItem;

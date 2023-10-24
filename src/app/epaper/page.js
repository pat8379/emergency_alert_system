import { Box, Button } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

export default function FirstPost() {
    return (
    <Box>
      <Navigation/>
      <Button>
        Hi
      </Button>
      <Button>
        Next
      </Button>
    </Box>);
  }
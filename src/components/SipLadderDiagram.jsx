import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import SipLadderMessage from "./SipLadderMessage";

const SipLadderDiagram = ({ messages }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} width="100%">
      <Text fontWeight="bold" mb={2}>
        SIP Ladder Diagram
      </Text>
      <VStack spacing={2}>
        {messages.map((message, index) => (
          <SipLadderMessage key={index} message={message} />
        ))}
      </VStack>
    </Box>
  );
};

export default SipLadderDiagram;

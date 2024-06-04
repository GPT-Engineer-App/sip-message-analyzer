import React from "react";
import { Box, Text } from "@chakra-ui/react";

const SipLadderDiagram = ({ messages }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} width="100%">
      <Text fontWeight="bold" mb={2}>
        SIP Ladder Diagram
      </Text>
      {messages.map((message, index) => (
        <Text key={index} whiteSpace="pre-wrap">
          {message}
        </Text>
      ))}
    </Box>
  );
};

export default SipLadderDiagram;

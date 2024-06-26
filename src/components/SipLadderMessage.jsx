import React from "react";
import { Box, Text } from "@chakra-ui/react";

const SipLadderMessage = ({ message }) => {
  const { sender, receiver, content } = message;
  return (
    <Box textAlign={sender === "A" ? "left" : "right"}>
      <Text fontWeight="bold">
        {sender} → {receiver}
      </Text>
      <Text whiteSpace="pre-wrap">{content}</Text>
    </Box>
  );
};

export default SipLadderMessage;

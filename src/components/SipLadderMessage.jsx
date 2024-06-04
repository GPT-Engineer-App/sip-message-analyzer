import React from "react";
import { Text } from "@chakra-ui/react";

const SipLadderMessage = ({ message }) => {
  return <Text whiteSpace="pre-wrap">{message}</Text>;
};

export default SipLadderMessage;

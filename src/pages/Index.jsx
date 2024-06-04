import React, { useState } from "react";
import { Container, Text, VStack, Textarea, Button, Box, Heading, Code } from "@chakra-ui/react";
import SipLadderDiagram from "../components/SipLadderDiagram";
import { FaRocket } from "react-icons/fa";

const parseSIPMessage = (message) => {
  const lines = message.split("\n");
  const parsedMessage = {
    requestLine: lines[0],
    headers: {},
    body: "",
  };

  let isBody = false;
  lines.slice(1).forEach((line) => {
    if (isBody) {
      parsedMessage.body += line + "\n";
    } else if (line.trim() === "") {
      isBody = true;
    } else {
      const [key, value] = line.split(": ");
      parsedMessage.headers[key] = value;
    }
  });

  return parsedMessage;
};

const Index = () => {
  const [sipMessage, setSipMessage] = useState("");
  const [parsedMessage, setParsedMessage] = useState(null);

  const [sipMessages, setSipMessages] = useState([]);

  const handleAnalyze = () => {
    const parsed = parseSIPMessage(sipMessage);
    setParsedMessage(parsed);

    const messages = sipMessage.split("\n").filter((line) => line.trim() !== "");
    setSipMessages(messages);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          SIP Message Analyzer
        </Heading>
        <Textarea placeholder="Paste your SIP message here..." value={sipMessage} onChange={(e) => setSipMessage(e.target.value)} size="md" height="200px" />
        <Button leftIcon={<FaRocket />} colorScheme="teal" onClick={handleAnalyze}>
          Analyze
        </Button>
        {parsedMessage && (
          <>
            <Box width="100%" p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h2" size="md">
                Parsed SIP Message
              </Heading>
              <Text fontWeight="bold">Request Line:</Text>
              <Code p={2} display="block" whiteSpace="pre-wrap">
                {parsedMessage.requestLine}
              </Code>
              <Text fontWeight="bold" mt={2}>
                Headers:
              </Text>
              <Box p={2} borderWidth="1px" borderRadius="lg" overflow="auto" maxHeight="200px">
                {Object.entries(parsedMessage.headers).map(([key, value]) => (
                  <Text key={key}>
                    <strong>{key}:</strong> {value}
                  </Text>
                ))}
              </Box>
              <Text fontWeight="bold" mt={2}>
                Body:
              </Text>
              <Code p={2} display="block" whiteSpace="pre-wrap">
                {parsedMessage.body}
              </Code>
            </Box>
            <SipLadderDiagram messages={sipMessages} />
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;

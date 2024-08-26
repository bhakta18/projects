import { Box, Image, Text } from "@chakra-ui/react";

function Card({ title, imageSrc, description }) {
  return (
    <Box
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg="white"
      p={5}
      _hover={{ boxShadow: "xl" }}
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        {title}
      </Text>
      <Image src={imageSrc} alt={title} mb={4} borderRadius="md" />
      <Text fontSize="md" color="gray.600">
        {description}
      </Text>
    </Box>
  );
}

export default Card;

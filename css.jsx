<Box
  maxW={{ base: "full", md: "sm" }}
  borderRadius="lg"
  overflow="hidden"
  boxShadow="lg"
  bg={{ base: "blue.500", md: "white" }}
  p={{ base: 3, md: 5 }}
  color={{ base: "white", md: "black" }}
  _hover={{ boxShadow: "xl", bg: { base: "blue.600", md: "gray.100" } }}
>
  <Text
    fontSize={{ base: "lg", md: "xl" }}
    fontWeight="bold"
    mb={{ base: 2, md: 4 }}
  >
    {title}
  </Text>
  <Image
    src={imageSrc}
    alt={title}
    mb={{ base: 2, md: 4 }}
    borderRadius="md"
  />
  <Text fontSize={{ base: "sm", md: "md" }} color={{ base: "blue.100", md: "gray.600" }}>
    {description}
  </Text>
</Box>

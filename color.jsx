<Box
  maxW="sm"
  borderRadius="lg"
  overflow="hidden"
  boxShadow="lg"
  bg="teal.500"
  p={5}
  color="white"
  _hover={{ boxShadow: "xl", bg: "teal.600" }}
>
  <Text fontSize="2xl" fontWeight="extrabold" mb={4}>
    {title}
  </Text>
  <Image src={imageSrc} alt={title} mb={4} borderRadius="full" />
  <Text fontSize="lg" color="teal.100">
    {description}
  </Text>
</Box>

import PropTypes from "prop-types";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react';

export function Produto(props) {
  return (
    <div>
      <Heading as="h1" textAlign="center" mb={5}>{props.nomePagina}</Heading>
      <Stack spacing={8} direction={{ base: 'column', md: 'row' }} justify="center">
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </Stack>
    </div>
  );
}

Produto.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};

export function CardProduto() {
  return (
    <Card maxW={{ base: "320px", md: "300px", lg: "320px" }} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Image
        h={{ base: "160px", md: "200px", lg: "160px" }}
        w="100%"
        objectFit="cover"
        src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/02/03/311043595-os-7-chakras-principais.jpg"
        alt="Imagem do produto"
      />
      <CardBody>
        <Heading as="h3" size="md" mb={2}>ChakraUi</Heading>
        <Text fontSize="sm" color="gray.500">Descrição breve do produto aqui</Text>
      </CardBody>
      <CardFooter>
        <Button size="sm" colorScheme="blue" variant="solid" w="100%">Ver Produto</Button>
      </CardFooter>
    </Card>
  );
}

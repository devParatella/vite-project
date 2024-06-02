import PropTypes from "prop-types";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  FormLabel,
  Link,
  Button,
  Input,
  Select,
  FormControl,
  Switch,
} from "@chakra-ui/react";

export function Home(props) {
  const nomePagina = props.nomePagina;

  return (
    <Box p={5}>
      <Heading as="h1" mb={5} textAlign="center">
        {nomePagina}
      </Heading>

      <Text fontSize="lg" mb={5} textAlign="center">
        Bem-vindo à nossa jornada de aprendizado do Chakra UI. Aqui você
        encontrará uma variedade de recursos e informações para aprimorar suas
        habilidades no desenvolvimento de interfaces com o Chakra UI.
      </Text>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        <Card bg="lightBlue.200" color="black">
          <CardHeader bg="brand.500" color="white" borderRadius="lg">
            <Heading as="h3" size="md">
              Customização e Temas
            </Heading>
          </CardHeader>
          <CardBody>
            <Text mb={3}>Criação de Temas Personalizados:</Text>
            <Text>
              Personalize seu tema facilmente com o Chakra UI. Experimente
              alterar as cores e fontes do tema neste exemplo interativo:
            </Text>
            <Button colorScheme="teal" mb={3}>
              Experimente Agora
            </Button>
            <Text mt={3}>Uso de Tokens de Estilo:</Text>
            <Text>
              Use tokens de estilo para manter uma consistência visual em toda a
              sua aplicação. Veja como os tokens são aplicados neste exemplo de
              espaçamento:
            </Text>
            <Box p={3} borderWidth="1px" borderRadius="lg" bg="white" mt={3}>
              <Text>Tokens de Estilo em Ação</Text>
            </Box>
          </CardBody>
        </Card>

        <Card bg="lightBlue.200" color="black">
          <CardHeader bg="brand.500" color="white" borderRadius="lg">
            <Heading as="h3" size="md">
              Componentes Avançados
            </Heading>
          </CardHeader>
          <CardBody>
            <Text mb={3}>Explorando Componentes:</Text>
            <Text>
              Aprofunde-se nos componentes avançados do Chakra UI. Veja este
              exemplo de formulário interativo com Input, Select e Switch:
            </Text>
            <FormControl id="example-input" mb={3}>
              <FormLabel>Nome</FormLabel>
              <Input placeholder="Digite seu nome" />
            </FormControl>
            <FormControl id="example-select" mb={3}>
              <FormLabel>País</FormLabel>
              <Select placeholder="Selecione seu país">
                <option>Brasil</option>
                <option>Estados Unidos</option>
                <option>Canadá</option>
              </Select>
            </FormControl>
            <FormControl display="flex" alignItems="center" mb={3}>
              <FormLabel htmlFor="example-switch" mb="0">
                Notificações
              </FormLabel>
              <Switch id="example-switch" />
            </FormControl>
          </CardBody>
        </Card>

        <Card bg="lightBlue.200" color="black">
          <CardHeader bg="brand.500" color="white" borderRadius="lg">
            <Heading as="h3" size="md">
              Recursos Adicionais
            </Heading>
          </CardHeader>
          <CardBody>
            <Text mb={3}>Mais Recursos:</Text>
            <Text>
              Explore mais recursos e documentação do Chakra UI para aprimorar
              suas habilidades. Acesse os tutoriais online e a documentação
              oficial:
            </Text>
            <Button
              as={Link}
              href="https://chakra-ui.com/docs/getting-started"
              isExternal
              colorScheme="blue"
              mb={3}
            >
              Tutoriais Online
            </Button>
            <Button
              as={Link}
              href="https://chakra-ui.com/docs"
              isExternal
              colorScheme="blue"
            >
              Documentação Oficial
            </Button>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

Home.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};

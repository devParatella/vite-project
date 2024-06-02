import PropTypes from "prop-types";
import { Box, Heading, Text, SimpleGrid, Card, CardHeader, CardBody } from "@chakra-ui/react";

export function Missao(props) {
  return (
    <Box p={5}>
      <Heading as="h1" mb={5} textAlign="center">
        {props.nomePagina}
      </Heading>
      
      <Text fontSize="lg" mb={5} textAlign="center">
        Bem-vindo à nossa missão de aprendizado em Chakra UI. Aqui você encontrará diversos recursos e informações para melhorar suas habilidades.
      </Text>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        <Card>
          <CardHeader>
            <Heading as="h3" size="md">Introdução ao Chakra UI</Heading>
          </CardHeader>
          <CardBody>
            <Text>Aprenda os conceitos básicos e como começar com Chakra UI.</Text>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader>
            <Heading as="h3" size="md">Componentes Avançados</Heading>
          </CardHeader>
          <CardBody>
            <Text>Explore componentes avançados e como usá-los em seus projetos.</Text>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader>
            <Heading as="h3" size="md">Customização e Temas</Heading>
          </CardHeader>
          <CardBody>
            <Text>Descubra como personalizar e criar temas com Chakra UI.</Text>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader>
            <Heading as="h3" size="md">Melhores Práticas</Heading>
          </CardHeader>
          <CardBody>
            <Text>Conheça as melhores práticas para usar Chakra UI de forma eficiente.</Text>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader>
            <Heading as="h3" size="md">Recursos Adicionais</Heading>
          </CardHeader>
          <CardBody>
            <Text>Acesse recursos adicionais como tutoriais, documentações e exemplos práticos.</Text>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader>
            <Heading as="h3" size="md">Comunidade</Heading>
          </CardHeader>
          <CardBody>
            <Text>Junte-se à comunidade de desenvolvedores que utilizam Chakra UI e compartilhe conhecimento.</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

Missao.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};

import PropTypes from "prop-types";
import { useState } from "react";
import { 
  Box, 
  Heading, 
  Text, 
  SimpleGrid, 
  Card, 
  CardHeader, 
  CardBody, 
  List, 
  ListItem, 
  Button, 
  Input, 
  Select, 
  FormControl, 
  FormLabel,
  Link,
  Checkbox,
  Textarea,
  Switch
} from "@chakra-ui/react";

export function Missao(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => setIsDarkMode(!isDarkMode);

  return (
    <Box p={5}>
      <Heading as="h1" mb={5} textAlign="center">
        {props.nomePagina}
      </Heading>
      
      <Text fontSize="lg" mb={5} textAlign="center">
        Bem-vindo à nossa missão de aprendizado em Chakra UI. Aqui você encontrará diversos recursos e informações para melhorar suas habilidades.
      </Text>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        <Card bg={isDarkMode ? "gray.700" : "white"} color={isDarkMode ? "white" : "black"}>
          <CardHeader>
            <Heading as="h3" size="md">Customização e Temas</Heading>
          </CardHeader>
          <CardBody>
            <FormControl display="flex" alignItems="center" mb={5}>
              <FormLabel htmlFor="theme-switch" mb="0">
                Modo Escuro
              </FormLabel>
              <Switch id="theme-switch" isChecked={isDarkMode} onChange={handleToggle} />
            </FormControl>
            <Text mb={3}>Criação de Temas Personalizados:</Text>
            <Text bg="brand.50" p={2} borderRadius="md">
              Você pode criar temas personalizados usando o <code>extendTheme</code> do Chakra UI para definir cores, fontes e outros estilos.
            </Text>
            <Text mt={3}>Uso de Tokens de Estilo:</Text>
            <Text bg="brand.100" p={2} borderRadius="md">
              Os tokens de estilo permitem que você utilize valores de design de maneira consistente em toda a aplicação, como cores, espaçamentos e tipografias.
            </Text>
            <List spacing={3} mt={3}>
              <ListItem bg="brand.200" p={2} borderRadius="md">Definição de cores customizadas.</ListItem>
              <ListItem bg="brand.300" p={2} borderRadius="md">Uso de espaçamentos consistentes.</ListItem>
            </List>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader bg="brand.500" color="white" borderRadius="lg">
            <Heading as="h3" size="md">Componentes Avançados</Heading>
          </CardHeader>
          <CardBody>
            <FormControl id="example-input" mb={3}>
              <FormLabel>Componente Input</FormLabel>
              <Input placeholder="Digite algo aqui" />
            </FormControl>
            <FormControl id="example-select" mb={3}>
              <FormLabel>Componente Select</FormLabel>
              <Select placeholder="Selecione uma opção">
                <option>Opção 1</option>
                <option>Opção 2</option>
              </Select>
            </FormControl>
            <FormControl id="example-textarea" mb={3}>
              <FormLabel>Componente Textarea</FormLabel>
              <Textarea placeholder="Digite uma mensagem aqui" />
            </FormControl>
            <FormControl display="flex" alignItems="center" mb={3}>
              <FormLabel htmlFor="example-switch" mb="0">
                Componente Switch
              </FormLabel>
              <Switch id="example-switch" />
            </FormControl>
            <FormControl id="example-checkbox" mb={3}>
              <FormLabel>Componente Checkbox</FormLabel>
              <Checkbox>Opção 1</Checkbox>
              <Checkbox>Opção 2</Checkbox>
            </FormControl>
            <List spacing={3}>
              <ListItem>Input: Para entrada de dados do usuário.</ListItem>
              <ListItem>Select: Para seleção de opções.</ListItem>
              <ListItem>Textarea: Para textos longos.</ListItem>
              <ListItem>Switch: Para ativar/desativar opções.</ListItem>
              <ListItem>Checkbox: Para selecionar múltiplas opções.</ListItem>
            </List>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader>
            <Heading as="h3" size="md">Melhores Práticas</Heading>
          </CardHeader>
          <CardBody>
            <Text mb={3}>Organização de Código:</Text>
            <Text mb={3}>
              Mantenha seu código organizado e modularizando componentes para reutilização.
            </Text>
            <Text mb={3}>Reutilização de Componentes:</Text>
            <Box mb={3} p={3} borderWidth="1px" borderRadius="lg">
              <Text>Este é um componente Box reutilizado</Text>
            </Box>
            <Text mb={3}>Este é um componente Text reutilizado</Text>
            <Button colorScheme="teal" mb={3}>Este é um componente Button reutilizado</Button>
            <List spacing={3}>
              <ListItem>Manter componentes pequenos e focados.</ListItem>
              <ListItem>Reutilizar componentes para evitar repetição de código.</ListItem>
            </List>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader>
            <Heading as="h3" size="md">Recursos Adicionais</Heading>
          </CardHeader>
          <CardBody>
            <Button as={Link} href="https://chakra-ui.com/docs/getting-started" isExternal colorScheme="blue" mb={3}>
              Tutoriais Online
            </Button>
            <Button as={Link} href="https://chakra-ui.com/docs" isExternal colorScheme="blue">
              Documentação Oficial
            </Button>
            <List spacing={3} mt={3}>
              <ListItem>Tutoriais Online: Aprenda com exemplos práticos.</ListItem>
              <ListItem>Documentação Oficial: Referência completa.</ListItem>
            </List>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader>
            <Heading as="h3" size="md">Comunidade</Heading>
          </CardHeader>
          <CardBody>
            <Button 
              as={Link} 
              href="https://www.example.com/forum" 
              isExternal 
              backgroundImage="url('https://media.istockphoto.com/id/1372283494/pt/vetorial/search-bar-on-yellow-background-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=qGXXGFYyhBy3XBLapcFopWYFg8ppZhcE5Qpcuy_oreA=')" 
              backgroundSize="cover" 
              color="gray" 
              mb={3}
              height="100px"
            >
              Fóruns e Grupos de Discussão
            </Button>
            <Button 
              as={Link} 
              href="https://www.example.com/workshops" 
              isExternal 
              backgroundImage="url('https://media.istockphoto.com/id/1299755884/pt/vetorial/click-here-button-with-hand-cursor-action-button-click-here-hand-pointer-clicking-vector.jpg?s=1024x1024&w=is&k=20&c=eREm891NVc6p-c3NKo5bmeI0m_0W6hJAw7pIZrNATC0=')" 
              backgroundSize="cover" 
              color="gray"
              height="100px"
            >
              Eventos e Workshops
            </Button>
            <List spacing={3} mt={3}>
              <ListItem>Participe de fóruns e discussões.</ListItem>
              <ListItem>Inscreva-se em eventos e workshops.</ListItem>
            </List>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

Missao.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};

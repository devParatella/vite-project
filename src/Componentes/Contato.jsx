import { Flex, Box, Center, FormControl, Input, FormLabel, HStack, RadioGroup, Radio, Button } from "@chakra-ui/react";

export function Contato() {
  return (
    <Box>
      <Flex justify="center">
        <Center
          w="100%"
          bg="white"
          borderRadius={5}
          p={4}
          boxShadow="0 1px 2px #ccc"
          flexDirection="column"
          textAlign="center"
        >
          <FormControl>
            <Box mb={4}>
              <Center><strong>Formulário de Cadastro</strong></Center>
            </Box>
            <HStack mb={4}>
              <Box w="50%">
                <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                <Input id="nome" placeholder="Nome Completo" />
              </Box>
              <Box w="50%">
                <FormLabel htmlFor="cpf">CPF</FormLabel>
                <Input id="cpf" type="number" placeholder="CPF" />  
              </Box>
            </HStack>
            <HStack mb={4}>
              <Box w="50%">
                <FormLabel htmlFor="nasc">Data Nascimento</FormLabel>
                <Input id="nasc" type="number" placeholder="Data de Nascimento" />
              </Box>
              <Box w="50%">
                <FormLabel htmlFor="mae">Nome da Mãe</FormLabel>
                <Input id="mae" placeholder="Nome da Mãe" />
              </Box>
            </HStack>
            <HStack mb={4}>
              <Box w="50%">
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input id="email" placeholder="E-mail" />
              </Box>
              <Box w="50%">
                <FormLabel htmlFor="tel">Telefone|Celular</FormLabel>
                <Input id="tel" type="number" placeholder="Telefone" />
              </Box>
            </HStack>
            <HStack mb={4}>
              <Box w="50%">
                <FormLabel htmlFor="endereco">Logradouro|Bairro|Cidade</FormLabel>
                <Input id="endereco" placeholder="Logradouro|Bairro" />
              </Box>
              <Box w="50%">
                <FormLabel htmlFor="cep">CEP|Estado|País</FormLabel>
                <Input id="cep" placeholder="CEP|Estado|País" />
              </Box>
            </HStack>
            <HStack mb={4}>
              <Box>
                <FormLabel htmlFor="sexo">Sexo</FormLabel>
                <RadioGroup id="sexo">
                  <HStack>
                    <Radio value="Masculino">Masculino</Radio>
                    <Radio value="Feminino">Feminino</Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>
            <Button colorScheme="blue">Enviar</Button>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}

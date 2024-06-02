import PropTypes from "prop-types"; // Importa PropTypes para validação de tipos
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'; // Importa componentes do Chakra UI

export function Produto(props) {
  return (
    <h1>{props.nomePagina}</h1>
  );
}

Produto.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};

export function CardProduto() {
  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxplanet.org%2Fultimate-guide-for-designing-ui-cards-59488a91b44f&psig=AOvVaw0x4v-jh7ZICSkHbocF3KrW&ust=1717368868268000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMD7-Oq_u4YDFQAAAAAdAAAAABAE'
        alt='Cards Ui'
      />
      <Stack>
        <CardBody>
          <Heading size='md'>Cards no Chakra Ui</Heading>
          <Text py='2'>Os Cards são componentes flexíveis usados para agrupar e exibir conteúdos em um formato claro e conciso.</Text>
        </CardBody>
        <CardFooter>
          <Button variant='solid' colorScheme='blue'>
            Saiba Mais!
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

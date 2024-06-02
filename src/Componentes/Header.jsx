import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" bg="gray.200" p={2} align="center" justify="space-between">
      <Box>
        <Text fontSize="x1" fontWeight="bold">
          Vite React javascript ChakraUi e css
        </Text>
      </Box>
      <Flex as="ul" listStyleType="none" p={0} m={0}>
        <MenuItem to="./">HOME</MenuItem>
        <MenuItem to="./Missao">MISSÃO</MenuItem>
        <MenuItem to="./Produto">PRODUTOS</MenuItem>
        <MenuItem to="./Contato">CONTATO</MenuItem>
      </Flex>
    </Flex>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

function MenuItem({ to, children }) {
  return (
    <Box as="li" mx={2}>
      <Link to={to} fontWeight="bold" _hover={{ textDecoration: "underline" }}>
        {children}
      </Link>
    </Box>
  );
}

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

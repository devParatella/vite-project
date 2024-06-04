import PropTypes from "prop-types";
import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer(props) {
  return (
    <Flex as="footer" bg="gray.700" color="white" p={2} textAlign="center" direction="column" alignItems="center" position="fixed" bottom={0} width="100%">
      <Text>{props.nomeFooter}</Text>
      <Flex mt={2} justifyContent="center" width="100%">
<<<<<<< HEAD
        <SocialLink name="Marcos Paratella" github="https://github.com/marcosparatella" linkedin="https://linkedin.com/in/marcosparatella" />
        <SocialLink name="Viviane Santos" github="https://github.com/jsvivis" linkedin="https://www.linkedin.com/in/viviane-santos-a6a69127b"/>
=======
        <SocialLink name="Marcos Paratella" github="https://github.com/devParatella" linkedin="https://www.linkedin.com/in/marcos-paratella-74b291239/" />
        <SocialLink name="Viviane Santos" github="https://github.com/vivianeds" linkedin="https://linkedin.com/in/vivianeds" />
>>>>>>> 728e2140a6cbc60e78bee2487567aa332f047058
        <SocialLink name="Mayra Pacheco" github="https://github.com/mayrapacheco" linkedin="https://linkedin.com/in/mayrapacheco" />
      </Flex>
    </Flex>
  );
}

Footer.propTypes = {
  nomeFooter: PropTypes.string.isRequired,
};

function SocialLink({ name, github, linkedin }) {
  return (
    <Box mt={2} mx={4} textAlign="center">
      <Text>{name}</Text>
      <Flex mt={3}>
        <Link href={github} isExternal mx={2}>
          <Icon as={FaGithub} boxSize={6} />
        </Link>
        <Link href={linkedin} isExternal mx={2}>
          <Icon as={FaLinkedin} boxSize={6} />
        </Link>
      </Flex>
    </Box>
  );
}

SocialLink.propTypes = {
  name: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

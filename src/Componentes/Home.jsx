import PropTypes from "prop-types";

export function Home(props) {
  return (
    <h1>{props.nomePagina}</h1>
  )
}

Home.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};

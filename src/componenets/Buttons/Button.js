import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => (props.secondary ? '#462be1' : 'white')};
  color: ${(props) => (props.secondary ? 'white' : '#59576d')};
  font-size: 1em;
  margin: 1em 0em;
  padding: 0.25em 1em;
  border: 2px solid #462be1;
  border-radius: 12px;
  font-weight: 400;
`;

// const Button = (props) => (
//   <Router>
//     <Link>
//       <ButtonTemplate Link={props.link}>{props.text}</ButtonTemplate>
//     </Link>
//   </Router>
// );

// export default Button;

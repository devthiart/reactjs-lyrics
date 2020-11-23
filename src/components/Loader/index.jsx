import styled from 'styled-components';

const Loader = styled.div`
  animation: spin 2s linear infinite;
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #34db5e; 
  margin-left: auto;
  margin-right: auto; 
  height: 25px;
  width: 25px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default Loader;
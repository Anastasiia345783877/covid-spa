
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import BodyComponent from './Body/BodyComponent';
import NavBarComponent from './NavBarComponent';
function App() {

  
  return (
  <Container>
<NavBarComponent />
<BodyComponent/>
  </Container>
  );
}

export default App;

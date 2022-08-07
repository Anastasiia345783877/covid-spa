//importirujem stili bootstrap, chtoby react bootstrap mog pravel'no otobrazhat' elementy
import 'bootstrap/dist/css/bootstrap.min.css';
//react bootstrap eto gotovyje componenty dlia reacta
import Container from 'react-bootstrap/Container';
import BodyComponent from './Body/BodyComponent';
import NavBarComponent from './NavBarComponent';

//funkcional'nyj komponent 
function App() {
  //Kotoryj vozvrashchaet JSX element/React elementom
  //Vse prilozhenije my oborachivaem v react bootstrap conteiner dlia luchshego otobrazhenija v brauzere
  //V konteyner my pomestili nashy glavnyje componenty

  
  return (
  <Container>
<NavBarComponent />
<BodyComponent/>
  </Container>
  );
}

//Kazhdyj komponent dolzhen exportirovatsa dl'a daln'ejshego ispol'zovanija
//export exportiruet
//default naznachaet kakim obrazom budet importirovatsa
//kogda jesr default na komponent ili funkcju to import budet bez{}
//jesli defoulta net to budet v figurnych scobcach
//delajetsa dlia udobnogo ispolzovania+
export default App;

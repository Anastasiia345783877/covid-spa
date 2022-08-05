import { useState } from "react";

const FComponent = (props) => {
     //useState eto tak nazyvaemuy hook kotoryj dajot nam vozmoznost upravliat sostajaniem komponenta
     //useState funcja prinemaet 1 argument kotoryj naznachaetsa kak znachenije po umalchaniju.
     //useState vozvraschajet massiv index 0 = znachenije po umolchaniju, index 1 = funcja kotoraja vozdejsvujet na peremennuju
     //funcja useState = setCount zastavljajet komponent perezapustitsa.
     const [count, setCount] = useState(0);

     return (
          <div>
               {count ? (<>Vsem privet {props.firstName} {props.lastName}</>) : ''}
               <button onClick={() => setCount(count + 1)}> Add{count}</button>
          </div>
     );
} 

FComponent.defoultProps = {
     firstName:"Default Name",
     lastName: "Default Last Name"
}; 

     export default FComponent;
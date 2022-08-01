import { useState } from "react";

const FComponent = (props) =>{
//useState eto tak nazyvaemuy hook  koto
const [count, setCount] = useState(0);

return(<div>
     Vsem privet {props.firstName} {props.lastName}
<button onClick={() => setCount(count+1) }> Add{count}</button>
</div>);
}

export default FComponent;
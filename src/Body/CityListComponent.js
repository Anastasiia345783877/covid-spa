import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function CityListComponent(props) {

    const [inputValue, setInputValue] = useState('');
    const cities = [
        'Tallinn',
        'Parnu',
        'Tartu',
        'Valga',
    ];

    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>Select City</InputGroup.Text>
            <Form.Control aria-label="First name" onChange={(e)=>setInputValue(e.target.value)} />
            <Form.Select onChange={(e) => props.setSelectedCity (e.target.value)}aria-label="Default select example">
                <option value=" ">Open this select menu</option>
                {cities.filter(city => city.includes(inputValue)).map(city => (<option key={city} value={city}>{city}</option>))}
            </Form.Select>
        </InputGroup>
    );
}

export default CityListComponent;
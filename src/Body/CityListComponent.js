import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function CityListComponent(props) {
//Komponents prinimaet properties s bodieKomponent i naznachajet ih v odin object kotoryj my nazvali props
//Properties nel'zia izmienit
    const [inputValue, setInputValue] = useState('');
    const cities = [
        'Tallinn',
        'Parnu',
        'Tartu',
        'Valga',
    ];
//onChange,onSelect, onClick...eto sobutija kotoruje prihodiat ot brauzera i v svoju ochered ot pol'zavatelia
//Kak tol'ko pol'zavatel' sdelal chto libo na brauzere, brauzer otpravliayet eto k nam na obrabotchiki.
//takzhe brauzer otpravliajet object s vsemi vozmoxhnymi danymi o sobytji
//Obrabotchikki eto funkcji naznachenyje v trigery
//target =cel' derzhyt v sebe tot element v kotorom proizashol event

//Funkcia filter rabotaet tol'ko dlia masivov 
//on zapuskaet cykl i prohodit po kazhdomu znacheniju massiva
//eta funkcja ozhydaet chto vernyt true or foulse
//i na osnove etogo on budet naznachat' novuj masiv
//true ili false budut reshat' dobavliat znachenije v novuy massiv ili net

//V nashem primere my vozvrashchaem jest li vbityj pol'zovatelem text v odnom iz gorodov

//kogda my ispol'zuyem cykly dlia generacji elementov jsx ili react to mu dolzhny peredat' generiruemy elementu key={}-unikalnoe znachenije
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
import { useState } from "react";
import { Container } from "react-bootstrap";
import ChartsComponent from "./ChartsComponent";
import CityListComponent from "./CityListComponent";

function BodyComponent() {

    const [selectedCity, setSelectedCity] = useState('Tallinn');

    //Kazhdyj komponent mozhet prinimat' properties, kak liubaja funkcja v java script prinimaet argumenty
    //Properties mogut liubogo tipa (string, int, function, null, undefined)
    return (
        <Container className="mt-4 ">
            <CityListComponent setSelectedCity={setSelectedCity} />
            <ChartsComponent />
        </Container>
    )
}

export default BodyComponent;
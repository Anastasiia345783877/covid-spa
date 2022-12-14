import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ChartsComponent() {

    const [selectedTab, setSelectedTab] = useState('');

    return (
        <Tabs
            defaultActiveKey="reported-cases"
            id="fill-tab-example"
            className="mb-3"
            fill
            onSelect={(eventKey) => setSelectedTab(eventKey)}
        >
            <Tab eventKey="reported-cases" title="Reported cases">
                <div>{selectedTab}</div>
                <Row>
                    <Col sm={4}>sm=4</Col>
                    <Col sm={8}>sm=8</Col>
                </Row>
            </Tab>
            <Tab eventKey="ranked-charts" title="Ranked charts">
                <div>{selectedTab}</div>
                <Row>
                    <Col sm={4}>sm=4</Col>
                    <Col sm={8}>sm=8</Col>
                </Row>
            </Tab>
        </Tabs>
    );
}

export default ChartsComponent;
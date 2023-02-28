import { observer } from 'mobx-react-lite';
import {Context} from "../index";
import React, {useContext} from 'react';
import { Card, Row } from 'react-bootstrap';


const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className='d-flex flex-nowrap'>
            {device.brands.map(brand => 
                <Card 
                    style={{cursor: 'pointer'}}
                    key={brand.id} className='p-3 d-flex'
                    onClick={() => device.setSelectedBrand(brand)}
                    border = {brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;
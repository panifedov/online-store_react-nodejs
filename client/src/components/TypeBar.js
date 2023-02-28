import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';



const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ul class="list-group">
            {device.types.map(type => 
                <li key={type.id} class="list-group-item ">{type.name}</li>    
            )}
        </ul>
    );
});

export default TypeBar;
import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Flipmove from 'react-flip-move';

function ListItem(props) {

    const items = props.items;
    const item = items.map(item => {
        return (
            <div className='list' key={item.key}>
                <input
                    type='text'
                    value={item.text}
                    onChange={(e) => {
                        props.setUpdate(e.target.value, item.key)
                    }}

                />
                <FontAwesomeIcon icon={faTrash} onClick={() => props.deleteItem(item.key)} className='icon' />
            </div>
        )
    })


    return (
        <div className='list-items'>
            <Flipmove duration={500} easing="ease-in-out">
                {item}
            </Flipmove>
        </div>
    )
}

export default ListItem;
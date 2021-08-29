import React from 'react';
import Details from './Details'
const path = "../../assets/images/"


function Item(props) {
    let fullPath = path+props.item.src;
    console.log(fullPath)
    return (
        <div>
            <Details data={props.item}/>
            <img width="100%" src={require('../../assets/images/MovieImage1.png').default}/>
        </div>
    );
}

export default Item;
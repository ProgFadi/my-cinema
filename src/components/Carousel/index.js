import React from 'react';
import {makeStyles} from '@material-ui/styles'

import Carousel from 'react-material-ui-carousel'
import Item from './Item'

let useStyles = makeStyles(()=>({
    root:{
        margin:'5px'
    }
})
)

let list = [
    {
        title:'John Wick:',
        chapter:'Chapter 3',
        duration:'Ação | Suspense - 2h 12min',
        seeTrailer:'Watch the trailer',
        src:'MovieImage1.png'
    }
    ,
    {
        title:'GOT',
        chapter:'Chapter 7',
        duration:'Ação | Suspense - 2h 12min',
        seeTrailer:'Watch the trailer',
        src:'MovieImage1.png'
    }
    ,
    {
        title:'Tom & Jerry',
        chapter:'Chapter 1',
        duration:'Ação | Suspense - 2h 12min',
        seeTrailer:'Watch the trailer',
        src:'MovieImage1.png'
    }
]
function CarouselComp(props) {
    const classes = useStyles()
    return (
        <Carousel
        className={classes.root}
        >
            {
                list.map((item,i)=>{
                    return <Item item={item}/>
                })
            }
        </Carousel>
    );
}

export default CarouselComp;
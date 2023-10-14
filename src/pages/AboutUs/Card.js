
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { secondInfo2 } from "./contents";


export default function Card( { items, index } )
{
    let [ isCardVisible, setCardVisible ] = useState( false );
    let classes = useStyles();
    return (
        <div
            className={ classes.infoContainer }
            // onMouseOver={ () => setCardVisible( true ) }
            // onMouseOut={ () => setCardVisible( false ) }
        >
            <div>
                {/* <img src={ items.image } className={ classes.firstImage }></img> */}
                <Typography variant="h6" className={ classes.firstTitle }>
                    { items.title }
                </Typography>
                <Typography className={ classes.firstDescription }>
                    { items.description }
                </Typography>
            </div>
            <div
                className={ classes.hiddenCard }
                style={ { top: isCardVisible ? 0 : "100%" } }
            >
                { secondInfo2[ index ] }
            </div>
        </div>

    );
}

import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { thematicDetails } from "./contents";

export default function ThematicCard( { items, index } )
{
    // let [ isCardVisible, setCardVisible ] = useState( false );
    let classes = useStyles();
    return (
        <div
            className={ classes.infoContainerTHEME }
        >
            <div>
                {/* <img src={ items.image } className={ classes.firstImage }></img> */}
                <Typography variant="h6" className={ classes.firstTitleThematic }>
                {/* <Typography variant="h6"> */}
                    { items.title }
                </Typography>
            </div>
            {/* <div
                className={ classes.hiddenCard }
                style={ { top: isCardVisible ? 0 : "100%" } }
            >
                { secondInfo2[ index ] }
            </div> */}
        </div>

    );
}
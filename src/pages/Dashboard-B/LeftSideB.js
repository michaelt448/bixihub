import React from 'react';

import {
    makeStyles,
    Typography,
    Box
} from "@material-ui/core";
import ThemeColor from '../../style/color';

import Data from './Json/LeftJsonB';
import ActivityFilter from './ActivityFilter';

const useStyles = makeStyles((theme) => ({
    typoXLSmall:{
        color: ThemeColor.Black,
        fontWeight: 'normal',
        lineHeight: '1',
        fontSize: '13px',
    },
    mb8:{
        marginBottom: '8px'
    },
    boxContainer:{
        border: `1px solid ${ThemeColor.GrayDark}`,
        padding: '30px',
        height: '100%',
        '@media (max-width: 640px)':{
            padding: '15px'
        }
    },
    boxContainerScroll:{
        height: '600px',
        overflow: 'auto'
    },
    p10:{
        padding: '10px'
    }
}));

const LeftSideA = (props) => {
    const classes = useStyles();

    const handle = (e) =>{
        props.getId(e)
    }


    return (
        <Box className={`${classes.boxContainer} ${classes.p10} ${classes.boxContainerScroll}`}>
                {Data.map((Activity) => {
                    return(
                        <>
                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.mb8}`}>
                                Posted {Activity.dueDate}
                            </Typography>
                            
                            {Activity.ActivityList.map((Item) => {
                                return(
                                    <>
                                        <ActivityFilter item={Item} getId={(e) => handle(e)} />
                                    </>
                                )
                            })}
                        </>
                    )
                })}

                

                
            </Box>
    );
};

export default LeftSideA;
import React from 'react';

import {
    makeStyles,
    Typography,
    Box
} from "@material-ui/core";

import ThemeColor from '../../style/color';

const useStyles = makeStyles((theme) => ({
    lineHeight:{
        lineHeight: '1.2'
    },
    filter:{
        '& h6':{
            fontSize: '14px'
        }
    },
    btns:{
        cursor: 'pointer'
    }
}));

const Filter = (props) => {
    const classes = useStyles();



    return (
        <Box className={classes.filter} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
            <Typography variant="h6" className={classes.lineHeight} style={{marginBottom: '3px'}}>
                Filter By:
            </Typography>

            <Typography onClick={() => props.filter('ACTIVITY_REQUESTED')} className={`${classes.lineHeight} ${classes.btns}`} style={{fontSize: '10px', marginLeft: '4px', marginBottom: '3px', border:'1px solid #005025', backgroundColor: '#FFF8AA', padding:'5px 4px', borderRadius: '5px'}}>
                Requested Gigs
            </Typography>
            <Typography onClick={() => props.filter('active')} className={`${classes.lineHeight} ${classes.btns}`} style={{fontSize: '10px', marginLeft: '4px', marginBottom: '3px', border:'1px solid #000', backgroundColor: ThemeColor.Green, padding:'5px 4px', borderRadius: '5px'}}>
                Active Gigs
            </Typography>
        </Box>
    );
};

export default Filter;
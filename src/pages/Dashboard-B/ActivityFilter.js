import React from 'react';

import {
    makeStyles,
    Grid,
    Button,
    Typography,
    Box
} from "@material-ui/core";

import ThemeColor from '../../style/color';

import ActivityFilterItem from './ActivityFilterItems';

const useStyles = makeStyles((theme) => ({
    typoBold: {
        color: ThemeColor.Black,
        fontWeight: 'bold',
        lineHeight: '1',

        '@media (max-width: 959px)':{
            fontSize: '1.4rem'
        }
    },
    lineHeight:{
        lineHeight: '1.2'
    },
    center:{
        textAlign: 'center'
    },
    mb8:{
        marginBottom: '8px'
    },
    boxGray:{
        backgroundColor: ThemeColor.GrayLightD6,
        border: '1px solid #005025',
        cursor: 'pointer',
        borderRadius: '4px',
        marginBottom: '15px',
        position: 'relative',

        '& h6':{
            fontSize: '14px',
            marginBottom: '8px'
        }
    },
    Thumbnail:{
        maxWidth: '100%',
        display: 'block'
    },
    btnSm:{
        width: '100%',
        fontSize: "9px",
        boxShadow: "none",
        borderRadius: "50px",
        padding: '4px 3px',
        lineHeight: "normal",
        fontWeight: "bold",
        textTransform: "none",
        color: ThemeColor.Black,
        fontFamily: "Helvetica Neue",
        backgroundColor: ThemeColor.YellowLight,
        border: `1px solid ${ThemeColor.GrayDark}`,
    },
    btnBlue:{
        backgroundColor: ThemeColor.Blue,
        borderColor: ThemeColor.Blue,
        color: ThemeColor.White,
        padding: '8px 3px',
    },
    aStartTop:{
        alignSelf: 'flex-start'
    },
    btns:{
        cursor: 'pointer'
    },
    redCircle: {
        position: 'absolute',
        backgroundColor: ThemeColor.Red,
        width: '15px',
        height: '15px',
        lineHeight: '15px',
        borderRadius: '20px',
        top: '-4px',
        right: '-6px',
        fontSize: '10px',
        textAlign: 'center',
        color: ThemeColor.White
    }
}));

const ActivityFilter = (props) => {
    const classes = useStyles();

    const [filter, setFilter] = React.useState(false);
    const [filterBtn, setFilterBtn] = React.useState(false);

    const filterToggle = () =>{
        setFilter(!filter);
        // props.getId('')
    }

    const filterToggleBtn = () =>{
        setFilterBtn(!filterBtn);
        // props.getId('')
    }

    const handle = (e) =>{
        props.getId(e);
    }

    const item = props.item;

    // console.log(item.ActivityListFilter)
    let sum = item.ActivityListFilter.reduce((accumulator, current) => accumulator + current.viewed, 0);
    //   console.log(sum)

    return (
        <>
            <Box p={1} className={`${classes.boxGray} ${classes.bgGray}`} onClick={() => filterToggle()}>
                {sum > 0 && <div className={classes.redCircle}>{sum}</div>}
                <Grid container alignItems="center" spacing={1}>
                    <Grid item xs={3}>
                        <img src={item.image} className={`${classes.Thumbnail}`} alt="dummy" />
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="h6" className={classes.typoBold}>
                            {item.name}
                        </Typography>
                        <Typography variant="h6" className={classes.lineHeight}>
                            Completed: {item.completed} <br />Active: {item.active} <br />Unclaimed: {item.unclaimed} <br />New Requests: {item.requests}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.aStartTop}>
                        <Typography variant="h6" className={`${classes.typoBold} ${classes.center} ${classes.mb30}`}>
                            Reward: ${item.reward}
                        </Typography>
                        {/* <Button variant="contained" className={`${classes.btnSm} ${classes.btnBlue}`} color="primary">Added text</Button> */}
                        <Button variant="contained" className={classes.btnSm} color="primary">View/Edit text</Button>
                    </Grid>
                </Grid>
            </Box>

            
            {filter && <Button onClick={() => filterToggleBtn()} variant="contained" className={`${classes.btnSm} ${classes.mb8}`} color="primary">Remove Filter</Button>}

            {/* {filter && <ActivityFilterItem getId={(e) => handle(e)} filter={item} />} */}
            {filter && <ActivityFilterItem  getId={(e) => handle(e)} filter={item} refresh={filterBtn} />}
        </>
    );
};

export default ActivityFilter;
import React from 'react';

import {
    makeStyles,
    Grid,
    Button,
    Typography,
    Box
} from "@material-ui/core";
import ThemeColor from '../../style/color';

import Data from './Json/LeftJsonA';

const useStyles = makeStyles((theme) => ({
    typo:{
        color: ThemeColor.Black,
        fontWeight: '500',
        lineHeight: '1.1',
        filesize: '14px',

        '@media (max-width: 959px)':{
            fontSize: '1.2rem'
        }
    },
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
    rating:{
        display: 'flex',
        fontSize: '18px',
        alignItems: 'center',
        justifyContent: 'center',
        
        '& strong':{
            fontWeight: 'bold',
            color: ThemeColor.YellowLight,
            margin: '0 5px'
        },
        '& span':{
            color: ThemeColor.GrayLight
        },
        '& img':{
            width: '20px',
            height: '20px',
            marginRight: '5px'
        }
    },
    p10:{
        padding: '10px'
    },
    btnSm:{
        width: '100%',
        fontSize: "11px",
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
    aStartTop:{
        alignSelf: 'flex-start'
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

const LeftSideA = (props) => {
    const classes = useStyles();

    const [filter, setFilter] = React.useState('');

    // const filterToggle = () =>{
    //     setFilter(!filter);
    // }

    const handle = (e) =>{
        props.getId(e)
    }

    React.useEffect(() => {
        setFilter(props.filter);
      }, [props.filter]);

    return (
        <Box className={`${classes.boxContainer} ${classes.p10} ${classes.boxContainerScroll}`}>
                {Data.map((Activity) => {
                    return(
                        <>
                            {filter ? (
                                Activity.ActivityList.filter(id => id.filter === filter).map((Item) => {
                                    return(
                                        <Box p={1} key={Item.id} className={classes.boxGray} onClick={() => handle(Item.id)}>
                                            {Item.viewed > 0 && <div className={classes.redCircle}></div>}
                                            <Grid container alignItems="center" spacing={1}>
                                                <Grid item xs={3}>
                                                    <img src={Item.image} className={`${classes.Thumbnail}`} alt="dummy" />
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="h6" className={classes.typoBold} style={{marginBottom: '28px'}}>
                                                        {Item.name}
                                                    </Typography>
    
                                                    <Typography variant="h6" className={classes.typoBold}>
                                                        Reward: $10
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} className={classes.aStartTop}>
                                                    <Typography variant="h6" className={`${classes.typo} ${classes.center} ${classes.mb20}`}>
                                                        <strong>Due Date</strong> <br />{Item.dueDate}
                                                    </Typography>
                                                    <Button variant="contained" className={classes.btnSm} color="primary">View Post</Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    )
                                })
                            ) : 
                                Activity.ActivityList.map((Item) => {
                                    return(
                                        <Box p={1} key={Item.id} className={classes.boxGray} onClick={() => handle(Item.id)}>
                                            {Item.viewed > 0 && <div className={classes.redCircle}></div>}
                                            <Grid container alignItems="center" spacing={1}>
                                                <Grid item xs={3}>
                                                    <img src={Item.image} className={`${classes.Thumbnail}`} alt="dummy" />
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="h6" className={classes.typoBold} style={{marginBottom: '28px'}}>
                                                        {Item.name}
                                                    </Typography>

                                                    <Typography variant="h6" className={classes.typoBold}>
                                                        Reward: $10
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} className={classes.aStartTop}>
                                                    <Typography variant="h6" className={`${classes.typo} ${classes.center} ${classes.mb20}`}>
                                                        <strong>Due Date</strong> <br />{Item.dueDate}
                                                    </Typography>
                                                    <Button variant="contained" className={classes.btnSm} color="primary">View Post</Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    )
                                })
                            }
                        </>
                    )
                })}
            </Box>
    );
};

export default LeftSideA;
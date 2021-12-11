import React from 'react';

import {
    makeStyles,
    Grid,
    Button,
    Typography,
    Box
} from "@material-ui/core";
import ThemeColor from '../../style/color';
import Dummy from '../../assets/images/dummy.png';
import Star from '../../assets/images/gold-star.jpg';

import Data from './Json/LeftJsonA';

const useStyles = makeStyles((theme) => ({
    typo:{
        color: ThemeColor.Black,
        fontWeight: 'normal',
        lineHeight: '1',

        '@media (max-width: 959px)':{
            fontSize: '1.2rem'
        }
    },
    typoSmall:{
        color: ThemeColor.GrayDark,
        fontWeight: 'bold',
        lineHeight: '1',
        fontSize: '15px',
        '& a':{
            color: ThemeColor.GrayDark,
            fontWeight: 'bold',

            '&:hover':{
                color: ThemeColor.LinkColor,
            }
        }
    },
    typoXLSmall:{
        color: ThemeColor.Black,
        fontWeight: 'normal',
        lineHeight: '1',
        fontSize: '13px',
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
        height: '570px',
        overflow: 'auto'
    },
    boxContainerInner:{
        maxWidth: '750px',
        width: '100%',
        margin: 'auto'
    },
    boxGray:{
        backgroundColor: ThemeColor.GrayLightD6,
        border: '1px solid #005025',
        cursor: 'pointer',
        borderRadius: '4px',
        marginBottom: '15px',

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
        color: ThemeColor.White,
        padding: '8px 3px',
    },
    aStartTop:{
        alignSelf: 'flex-start'
    },
    textGreen:{
        color: ThemeColor.GreenText,
        textShadow: '0px 1px 0 #5A5959'
    },
    textOrange:{
        color: ThemeColor.Orange,
        textShadow: '0px 1px 0 #5A5959'
    },
    bgOrange: {
        backgroundColor: ThemeColor.OrangeLight
    },
    filter:{
        marginBottom: '10px',
        '& h6':{
            fontSize: '14px'
        }
    },
    filterBox:{
        border: '1px solid #005025',
        borderRadius: '4px',
        padding: '3px 6px',
        marginBottom: '5px',

        '& p':{
            color: '#707070',
            fontSize: '10px'
        }
    },
    filterThumbnail:{
        border: '1px solid #707070',
        borderRadius: '25px'
    },
    filterRating:{
        fontSize: '15px',
        '& strong':{
            marginLeft: '0px' 
        }
    }
}));

const LeftSideA = (props) => {
    const classes = useStyles();

    const [filter, setFilter] = React.useState(false);

    const filterToggle = () =>{
        setFilter(!filter);
    }

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
                                    <Box p={1} key={Item.id} className={classes.boxGray} onClick={() => handle(Item.id)}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item xs={3}>
                                                <img src={Item.image} className={`${classes.Thumbnail}`} alt="dummy" />
                                            </Grid>
                                            <Grid item xs={5}>
                                                <Typography variant="h6" className={classes.typoBold}>
                                                    {Item.name}
                                                </Typography>
                                                <Typography variant="h6" className={`${classes.lineHeight} ${Item.status === 'COMPLETE' ? classes.textGreen : classes.textOrange}`}>
                                                    Status: {Item.status}
                                                </Typography>
                                                <Typography variant="h6" className={classes.lineHeight}>
                                                    Due Date: <br />{Item.dueDate}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4} className={classes.aStartTop}>
                                                <Typography variant="h6" className={`${classes.typoBold} ${classes.center} ${classes.mb30}`}>
                                                    Added Text
                                                </Typography>
                                                <Button variant="contained" className={classes.btnSm} color="primary">View/Edit text</Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                )
                            })}
                        </>
                    )
                })}

                <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.mb8}`}>
                    Posted Jan 22
                </Typography>

                <Box p={1} className={`${classes.boxGray} ${classes.bgOrange}`}>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs={3}>
                            <img src={Dummy} className={`${classes.Thumbnail}`} alt="dummy" />
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant="h6" className={classes.typoBold}>
                                Elephant Scale
                            </Typography>
                            <Typography variant="h6" className={classes.lineHeight}>
                                123456789: 2 <br />123456: 2 <br />123456789: 3 <br />123 12345678: 1
                            </Typography>
                        </Grid>
                        <Grid item xs={4} className={classes.aStartTop}>
                            <Typography variant="h6" className={`${classes.typoBold} ${classes.center} ${classes.mb30}`}>
                                Added Text
                            </Typography>
                            <Button onClick={() => filterToggle()} variant="contained" className={`${classes.btnSm} ${classes.btnBlue}`} color="primary">Added text</Button>
                            <Button variant="contained" className={classes.btnSm} color="primary">View/Edit text</Button>
                        </Grid>
                    </Grid>
                </Box>

                {filter ? (
                    <>
                        <Box className={classes.filter} style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                            <Typography variant="h6" className={classes.lineHeight} style={{marginBottom: '3px'}}>
                                Filter By:
                            </Typography>

                            <Typography className={classes.lineHeight} style={{fontSize: '10px', marginLeft: '4px', marginBottom: '3px', border:'1px solid #005025', backgroundColor: '#ECFFE3', padding:'5px 4px', borderRadius: '5px'}}>
                                123456789: 2
                            </Typography>
                            <Typography className={classes.lineHeight} style={{fontSize: '10px', marginLeft: '4px', marginBottom: '3px', border:'1px solid #005025', backgroundColor: '#FFF8AA', padding:'5px 4px', borderRadius: '5px'}}>
                                Textt: 2
                            </Typography>
                            <Typography className={classes.lineHeight} style={{fontSize: '10px', marginLeft: '4px', marginBottom: '3px', border:'1px solid #005025', backgroundColor: '#FD9999', padding:'5px 4px', borderRadius: '5px'}}>
                                Text text: 3
                            </Typography>
                            <Typography className={classes.lineHeight} style={{fontSize: '10px', marginLeft: '4px', marginBottom: '3px', border:'1px solid #005025', backgroundColor: '#E5ACFF', padding:'5px 4px', borderRadius: '5px'}}>
                                Text text text: 1
                            </Typography>
                        </Box>    
                        <Box p={1} className={`${classes.filterBox}`} style={{backgroundColor: '#F3FFED89'}}>
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item xs={2}>
                                    <img src={Dummy} className={`${classes.Thumbnail} ${classes.filterThumbnail}`} alt="dummy" />
                                </Grid>
                                <Grid item xs={5}>
                                    <Box className={`${classes.rating} ${classes.filterRating} ${classes.mb10}`}>
                                        <img src={Star} alt="star" />
                                        <strong>4.9</strong>
                                        <span>(1k+)</span>
                                    </Box>
                                    <Typography>
                                        Average 1234567891 Text: 3 text
                                    </Typography>
                                </Grid>
                                <Grid item xs={5} className={classes.aStartTop}>
                                    <Typography>
                                        <strong>12345678912:</strong> 3.4k <br /><strong>Text 1234567 12345:</strong> 253k <br /><strong>12345678:</strong> 1234567891
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box p={1} className={`${classes.filterBox}`} style={{backgroundColor: '#FFFDE3'}}>
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item xs={2}>
                                    <img src={Dummy} className={`${classes.Thumbnail} ${classes.filterThumbnail}`} alt="dummy" />
                                </Grid>
                                <Grid item xs={5}>
                                    <Box className={`${classes.rating} ${classes.filterRating} ${classes.mb10}`}>
                                        <img src={Star} alt="star" />
                                        <strong>4.9</strong>
                                        <span>(1k+)</span>
                                    </Box>
                                    <Typography>
                                        Average 1234567891 Text: 3 text
                                    </Typography>
                                </Grid>
                                <Grid item xs={5} className={classes.aStartTop}>
                                    <Typography>
                                        <strong>12345678912:</strong> 3.4k <br /><strong>Text 1234567 12345:</strong> 253k <br /><strong>12345678:</strong> 1234567891
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box p={1} className={`${classes.filterBox}`} style={{backgroundColor: '#F3FFED89'}}>
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item xs={2}>
                                    <img src={Dummy} className={`${classes.Thumbnail} ${classes.filterThumbnail}`} alt="dummy" />
                                </Grid>
                                <Grid item xs={5}>
                                    <Box className={`${classes.rating} ${classes.filterRating} ${classes.mb10}`}>
                                        <img src={Star} alt="star" />
                                        <strong>4.9</strong>
                                        <span>(1k+)</span>
                                    </Box>
                                    <Typography>
                                        Average 1234567891 Text: 3 text
                                    </Typography>
                                </Grid>
                                <Grid item xs={5} className={classes.aStartTop}>
                                    <Typography>
                                        <strong>12345678912:</strong> 3.4k <br /><strong>Text 1234567 12345:</strong> 253k <br /><strong>12345678:</strong> 1234567891
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                ) : null}
            </Box>
    );
};

export default LeftSideA;
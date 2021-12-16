import React from 'react';

import {
    makeStyles,
    Grid,
    Button,
    Typography,
    Box
} from "@material-ui/core";
import Star from '../../assets/images/gold-star.jpg';
import Youtube from '../../assets/images/youtube.png';

import ThemeColor from '../../style/color';

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
        marginBottom: '8px',
        justifyContent: 'flex-start',

        '& strong':{
            marginLeft: '0px' 
        }
    },
    btns:{
        cursor: 'pointer'
    },
    youtube:{
        width: '28px',
        marginRight: '6px'
    }
}));

const ActivityFilter = (props) => {
    const classes = useStyles();

    const [filter, setFilter] = React.useState(false);
    const [cat, setCat] = React.useState('');

    const filterToggle = () =>{
        setFilter(!filter);
    }

    const handle = (e) =>{
        props.getId(e)
    }

    const item = props.item;

    return (
        <>
            <Box p={1} className={`${classes.boxGray} ${classes.bgOrange}`}>
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

                        <Typography onClick={() => setCat('completed')} className={`${classes.lineHeight} ${classes.btns}`} style={{fontSize: '10px', marginLeft: '4px', marginBottom: '3px', border:'1px solid #005025', backgroundColor: '#ECFFE3', padding:'5px 4px', borderRadius: '5px'}}>
                            Completed: {item.completed}
                        </Typography>
                        <Typography onClick={() => setCat('active')} className={`${classes.lineHeight} ${classes.btns}`} style={{fontSize: '10px', marginLeft: '4px', marginBottom: '3px', border:'1px solid #005025', backgroundColor: '#FFF8AA', padding:'5px 4px', borderRadius: '5px'}}>
                            Active: {item.active}
                        </Typography>
                        <Typography onClick={() => setCat('unclaimed')} className={`${classes.lineHeight} ${classes.btns}`} style={{fontSize: '10px', marginLeft: '4px', marginBottom: '3px', border:'1px solid #005025', backgroundColor: '#FD9999', padding:'5px 4px', borderRadius: '5px'}}>
                            Unclaimed: {item.unclaimed}
                        </Typography>
                        <Typography onClick={() => setCat('requests')} className={`${classes.lineHeight} ${classes.btns}`} style={{fontSize: '10px', marginLeft: '4px', marginBottom: '3px', border:'1px solid #005025', backgroundColor: '#E5ACFF', padding:'5px 4px', borderRadius: '5px'}}>
                            New Requests: {item.requests}
                        </Typography>
                    </Box> 

                    {!cat ? (
                        item.ActivityListFilter.map((activity, index) => {
                            return(
                                <Box p={1}  onClick={() => handle(activity.id)} className={`${classes.filterBox}`} style={{backgroundColor: index % 2 ? '#F3FFED89' : '#FFFDE3'}}>
                                    <Grid container alignItems="center" spacing={1}>
                                        <Grid item xs={2}>
                                            <img src={activity.image} className={`${classes.Thumbnail} ${classes.filterThumbnail}`} alt="dummy" />
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Box className={`${classes.rating} ${classes.filterRating} ${classes.mb10}`}>
                                                <img src={Star} alt="star" />
                                                <strong>{activity.rating}</strong>
                                                <span>({activity.reviews > 999 ? ((activity.reviews / 1000).toFixed()) + 'k+' : activity.reviews})</span>
                                            </Box>
                                            <Typography className={classes.typoBold}>
                                                {activity.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Box display={'flex'} alignItems={'center'}>
                                                <img src={Youtube} className={classes.youtube} alt="youtube" />
                                                <Typography>
                                                   : {activity.views}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )
                        })
                    ) : (
                        item.ActivityListFilter.filter(item => item.filterBy === cat).map((activity, index) => {
                            return(
                                <Box p={1}  onClick={() => handle(activity.id)} className={`${classes.filterBox}`} style={{backgroundColor: index % 2 ? '#F3FFED89' : '#FFFDE3'}}>
                                    <Grid container alignItems="center" spacing={1}>
                                        <Grid item xs={2}>
                                            <img src={activity.image} className={`${classes.Thumbnail} ${classes.filterThumbnail}`} alt="dummy" />
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Box className={`${classes.rating} ${classes.filterRating} ${classes.mb10}`}>
                                                <img src={Star} alt="star" />
                                                <strong>{activity.rating}</strong>
                                                <span>({activity.reviews > 999 ? ((activity.reviews / 1000).toFixed()) + 'k+' : activity.reviews})</span>
                                            </Box>
                                            <Typography className={classes.typoBold}>
                                                {activity.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Box display={'flex'} alignItems={'center'}>
                                                <img src={Youtube} className={classes.youtube} alt="youtube" />
                                                <Typography>
                                                   : {activity.views}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )
                        })
                    )}
                </>
            ) : null}
        </>
    );
};

export default ActivityFilter;
import React from 'react';

import {
    makeStyles,
    Grid,
    Typography,
    Box
} from "@material-ui/core";
import Star from '../../assets/images/gold-star.jpg';
import Youtube from '../../assets/images/youtube.png';

import ThemeColor from '../../style/color';

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
        position: 'relative',

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
    },
    redCircle: {
        position: 'absolute',
        backgroundColor: ThemeColor.Red,
        width: '15px',
        height: '15px',
        borderRadius: '20px',
        top: '-4px',
        right: '-6px'
    }
}));

const ActivityFilterItem = (props) => {
    const classes = useStyles();
    const [cat, setCat] = React.useState('');

    const handle = (e) =>{
        props.getId(e)
    }

    const item = props.filter;

    React.useEffect(() => {
        setCat('');
      }, [props.refresh]);

    return (
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
                            {activity.viewed > 0 && <div className={classes.redCircle}></div>}
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
                            {activity.viewed > 0 && <div className={classes.redCircle}></div>}
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
    );
};

export default ActivityFilterItem;
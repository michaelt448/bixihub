import React from 'react';
import {
makeStyles,
Grid,
Typography,
Box,
Avatar
} from "@material-ui/core";
import ThemeColor from '../../style/color';

// assets
import Star from '../../assets/images/gold-star.jpg';
import Completed from './status/Completed';
import Accepted from './status/Accepted';
import Requested from './status/Requested';
import Declined from './status/Declined';
import ComplementAccepted from './status/ComplementAccepted';

    const useStyles = makeStyles((theme) => ({
        typo:{
            color: ThemeColor.Black,
            fontWeight: 'normal',
            lineHeight: '1.2',

            '@media (max-width: 959px)':{
                fontSize: '1.2rem'
            }
        },
        typoXLSmall:{
            color: ThemeColor.GrayLight,
            fontWeight: 'normal',
            lineHeight: '1',
            fontSize: '10px',
            textAlign: 'center'
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
            textAlign: 'center',
            '& button':{
                float: 'none !important',
                padding: '18px 15px',
                minWidth: '150px'
            }
        },
        mb8:{
            marginBottom: '8px'
        },
        mb20:{
            marginBottom: '20px',
            '@media (max-width: 640px)':{
                marginBottom: '10px'
            }
        },
        mb30:{
            marginBottom: '30px',
            '@media (max-width: 640px)':{
                marginBottom: '15px'
            }
        },
        boxContainer:{
            border: `1px solid ${ThemeColor.GrayDark}`,
            padding: '30px',
            height: '100%',
            '@media (max-width: 640px)':{
                padding: '15px'
            }
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
        p20:{
            padding: '20px'
        },
        avtar:{
            cursor: 'pointer',
            overflow: 'visible',
            position: 'relative',
            color: ThemeColor.Black,
            width: theme.spacing(7),
            height: theme.spacing(7),
            backgroundColor: ThemeColor.YellowDark,
            border: `1px solid ${ThemeColor.GrayDark}`
        },
        avtarCenter:{
            margin: '0 auto 15px'
        }
    }));


    const PageFormFlow3 = (props) =>{
        const classes = useStyles();

        
        const info = props.info;
        return( 
            <Grid item xs={12} sm={12} md={3} className={classes.mb20}>
                <Box className={`${classes.boxContainer} ${classes.p20}`} display={'flex'} flexDirection="column">
                    <Box className={classes.center} p={0}>
                        <Avatar aria-haspopup="true" className={`${classes.avtar} ${classes.avtarCenter}`}>S</Avatar>
                        <Typography variant="h5" className={`${classes.typoBold} ${classes.mb8}`}>
                            {info.name}
                        </Typography>
                        <Box className={`${classes.rating} ${classes.mb8}`}>
                            <img src={Star} alt="star" />
                            <strong>{info.rating}</strong>
                            <span>({info.views})</span>
                        </Box>
                    </Box>

                    <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.mb30}`}>
                        Average Completion Time: {info.time}
                    </Typography>

                    <Typography variant="h6" style={{fontWeight: 'bold', color: ThemeColor.YellowDark}} className={`${classes.center} ${classes.mb8}`}>
                        Profile Stats
                    </Typography>
                    
                    <Typography variant="h6" className={`${classes.typo} ${classes.mb30}`}>
                        <strong>People:</strong> {info.people} <br />
                        <strong>Category:</strong> {info.category} <br />
                        <strong>Total Profile Views:</strong> {info.profileViews} <br />
                    </Typography>


                    {info.status === 'ACTIVITY_COMPLETED' && <Completed />}

                    {info.status === 'ACTIVITY_ACCEPTED' && <Accepted />}

                    {info.status === 'ACTIVITY_REQUESTED' && <Requested />}
                </Box>


                {info.status === 'COMPLEMENT_DECLINED' && <Declined />}


                {info.status === 'COMPLEMENT_ACCEPTED' && <ComplementAccepted />}
            </Grid>
        )
    }

    export default PageFormFlow3;
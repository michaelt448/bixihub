import React from 'react';
import {
makeStyles,
Grid,
Box,
Typography
} from "@material-ui/core";

// assets
import FullActivity from './Json/RightJson';
import Chat from './Chat';
import Information from './RightInfo';
import ThemeColor from '../../style/color';

    const useStyles = makeStyles(() => ({
        mb20:{
            marginBottom: '20px',
            '@media (max-width: 640px)':{
                marginBottom: '10px'
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
        boxContainerScroll:{
            height: '600px',
            overflow: 'auto'
        },      
        p0:{
            padding: '0px'
        },
        blank:{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            fontSize: '15px',
            opacity: '.6'
        },
        typoBold: {
            color: ThemeColor.Black,
            fontWeight: 'bold',
            lineHeight: '1',

            '@media (max-width: 959px)':{
                fontSize: '1.4rem'
            }
        },
    }));


    const PageFormFlow3 = (props) =>{
        const classes = useStyles();
        return( 
            <>           
                <Grid item xs={12} sm={12} md={6} className={classes.mb20}>
                    <Box className={`${classes.boxContainer} ${classes.boxContainerScroll} ${classes.p0}`}>
                        {FullActivity.filter(item => parseInt(item.id) === parseInt(props.dataID)).map((item) => (
                            <Chat key={item.id} Message={item.message} />
                        ))}
                        {!props.dataID ? (
                            <div className={classes.blank}>Select gig to view details</div>
                        ) : null}
                    </Box>
                </Grid>

                {FullActivity.filter(item => parseInt(item.id) === parseInt(props.dataID)).map((item) => (
                    <Information key={item.id} info={item} />
                ))}

                {!props.dataID ? (
                    <Grid item xs={12} sm={12} md={3} className={classes.mb20}>
                        <Box className={`${classes.boxContainer} ${classes.p20}`} display={'flex'} flexDirection="column">
                            <Typography variant="h5" className={`${classes.typoBold} ${classes.mb8}`}>
                                Welcome, <br />User Name
                            </Typography>
                            <div className={classes.blank}>Select gig to view details</div>
                        </Box>
                    </Grid>
                ) : null}
                </>
        )
    }

    export default PageFormFlow3;
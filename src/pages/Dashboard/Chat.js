import React from 'react';
import {
makeStyles,
Typography,
Box,
} from "@material-ui/core";
import ThemeColor from '../../style/color';

    const useStyles = makeStyles(() => ({
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
        mb12:{
            marginBottom: '15px'
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
        p0:{
            padding: '0px'
        },
        textNoWrap:{
            display: 'flex',
            justifyContent: 'space-between'
        },
        divider:{
            fontWeight: 'bold',
            color: ThemeColor.YellowDark,
            borderBottom: `1px solid ${ThemeColor.YellowDark}`
        }
    }));


    const PageFormFlow3 = (props) =>{
        const classes = useStyles();
        
        return( 
            <Box className={`${classes.boxContainer} ${classes.boxContainerScroll} ${classes.p0}`}>
                <Box p={3}>
                    <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                        June 14, 2021
                    </Typography>
                </Box>
                {props.Message.map((message) => {
                    return(
                        <Box key={message.id} className={classes.textNoWrap} p={1.2}>
                            <Typography variant="h6" className={classes.typoSmall}>
                                <div dangerouslySetInnerHTML={{__html: message.content}} />
                            </Typography>
                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                {message.createdAt}
                            </Typography>
                        </Box>
                    )
                })}

                {/* <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                    June 15, 2021
                </Typography>
                <Typography variant="h6" className={`${classes.divider} ${classes.center}`}>
                    New
                </Typography>

                <Box className={classes.textNoWrap} p={1.2}>
                    <Typography variant="h6" className={classes.typoSmall}>
                        1234567 has updated 12345678 information
                    </Typography>
                    <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                        3:45pm
                    </Typography>
                </Box>
                <Box p={2.5}>
                    <Typography variant="h6" className={`${classes.typoBold}`} style={{color: ThemeColor.GrayDark}}>
                        12345678 123456: 904923403924
                    </Typography>
                </Box>
                <Box className={classes.textNoWrap} p={1.2}>
                    <Typography variant="h6" className={classes.typoSmall}>
                        Text
                    </Typography>
                    <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                        Text
                    </Typography>
                </Box>
                <Box className={classes.textNoWrap} p={1.2}>
                    <Typography variant="h6" className={classes.typoSmall}>
                        Text
                    </Typography>
                    <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                        Text
                    </Typography>
                </Box>
                <Box className={classes.textNoWrap} p={1.2}>
                    <Typography variant="h6" className={classes.typoSmall}>
                        Text
                    </Typography>
                    <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                        Text
                    </Typography>
                </Box>
                <Box className={classes.textNoWrap} p={1.2}>
                    <Typography variant="h6" className={classes.typoSmall}>
                        Text
                    </Typography>
                    <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                        Text
                    </Typography>
                </Box>
                <Box className={classes.textNoWrap} p={1.2}>
                    <Typography variant="h6" className={classes.typoSmall}>
                        Text
                    </Typography>
                    <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                        Text
                    </Typography>
                </Box>
                <Box className={classes.textNoWrap} p={1.2}>
                    <Typography variant="h6" className={classes.typoSmall}>
                        Text
                    </Typography>
                    <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                        Text
                    </Typography>
                </Box> */}
                
            </Box>
        )
    }

    export default PageFormFlow3;
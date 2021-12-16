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
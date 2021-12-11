import React from 'react';
import {
makeStyles,
Typography,
Box,
} from "@material-ui/core";
import ThemeColor from '../../style/color';

import Message from './Message';

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


    const Chat = (props) =>{
        const classes = useStyles();
        
        return( 
            <Box className={`${classes.boxContainer} ${classes.boxContainerScroll} ${classes.p0}`}>
                {props.Message.map((message) => {
                    return(
                        <>
                            <Box p={3} key={message.id}>
                                <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                    {message.dueDate}
                                </Typography>
                            </Box>

                            <Message message={message.chat} />
                        </>
                    )
                })}
            </Box>
        )
    }

    export default Chat;
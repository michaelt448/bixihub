import React from 'react';
import {
makeStyles,
Typography,
Box,
} from "@material-ui/core";
import ThemeColor from '../../style/color';

import Message from './Message';

    const useStyles = makeStyles(() => ({
        typoXLSmall:{
            color: ThemeColor.Black,
            fontWeight: 'normal',
            lineHeight: '1',
            fontSize: '13px',
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
            height: '570px',
            overflow: 'auto'
        },      
        p0:{
            padding: '0px'
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
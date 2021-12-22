import React from 'react';
import {
makeStyles,
Typography,
Box,
} from "@material-ui/core";
import ThemeColor from '../../style/color';

import Message from './Message';

    const useStyles = makeStyles(() => ({
        center:{
            textAlign: 'center'
        },
        typoXLSmall:{
            color: ThemeColor.Black,
            fontWeight: 'normal',
            lineHeight: '1',
            fontSize: '13px',
        }
    }));


    const Chat = (props) =>{
        const classes = useStyles();
        
        return( 
                props.Message.map((message) => {
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
                })
        )
    }

    export default Chat;
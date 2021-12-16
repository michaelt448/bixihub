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
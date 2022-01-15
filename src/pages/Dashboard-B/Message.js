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
        center:{
            textAlign: 'center'
        },   
        textNoWrap:{
            display: 'flex',
            justifyContent: 'space-between'
        }
    }));


    const Chat = (props) =>{
        const classes = useStyles();
        
        return( 
            props.message.map((chat) => {
                return(
                    <Box key={chat.id} className={`${classes.textNoWrap}`} p={1.2}>
                        <Typography variant="h6" className={classes.typoSmall}>
                            <div dangerouslySetInnerHTML={{__html: chat.content}} />
                        </Typography>
                        <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                            {chat.createdAt}
                        </Typography>
                    </Box>
                )
            })
        )
    }

    export default Chat;
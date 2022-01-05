import React from 'react';
import {
    makeStyles,
    Typography,
    Input, Button
} from "@material-ui/core";

import ThemeColor from '../../../style/color';

    const useStyles = makeStyles(() => ({
        mb30:{
            marginBottom: '30px',
            '@media (max-width: 640px)':{
                marginBottom: '15px'
            }
        },
        typo:{
            color: ThemeColor.Black,
            fontWeight: 'normal',
            lineHeight: '1.2',

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
                color: ThemeColor.LinkColor,
                fontWeight: 'bold',
                textDecoration: 'underline',

                '&:hover':{
                    color: ThemeColor.LinkColor,
                }
            }
        },
        mb8:{
            marginBottom: '8px'
        },
        center:{
            textAlign: 'center',
            '& button':{
                float: 'none !important',
                padding: '18px 15px',
                minWidth: '150px'
            }
        },
        formSend:{
            display: 'flex',
            marginBottom: '6px',
            '& button':{
                marginLeft: '12px',
                fontWeight: 'bold'
            },
            '& input, & button':{
                border: `1px solid ${ThemeColor.GrayDark}`,
                borderRadius: '22px',
                boxShadow: 'none',
                padding: '5px 12px',
                textTransform: 'none',
                // width: '100%'
            },
            '& div:before, & div:after':{
                display: 'none'
            },
            '& div':{
                display: 'flex'
            }
        },
        btnSm:{
            fontSize: "13px",
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
        }
    }));

const Accepted = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.mb30}>
                <Typography variant="h6" className={`${classes.typo} ${classes.mb30}`}>
                    <strong>Shipping Adress:</strong> <br />Random Adress <br />12345 Random Road USA 
                </Typography>
            </div>
            
            <Typography className={`${classes.typoSmall} ${classes.mb8} ${classes.center}`}>
                Submit Tracking Number
            </Typography>
            <form action="/" className={`${classes.formSend}`}>
                <Input placeholder="Tracking Number" />
                <Button variant="contained" className={classes.btnSm} color="primary">Send</Button>
            </form>
        </>
    );
};

export default Accepted;
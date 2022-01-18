import React from 'react';
import {
    makeStyles, 
    Button,
    Box, Modal, Typography
} from "@material-ui/core";

import ThemeColor from '../../../style/color';
import Star from '../../../assets/images/gold-star.jpg';
import Rating from '../../../components/RatingStar';

    const useStyles = makeStyles(() => ({
        formButton:{
            width: '100%',
            fontSize: "18px",
            boxShadow: "none",
            borderRadius: "50px",
            padding: '4px 10px',
            lineHeight: "normal",
            fontWeight: "bold",
            textTransform: "none",
            color: ThemeColor.Black,
            fontFamily: "Helvetica Neue",
            backgroundColor: ThemeColor.YellowLight,
            border: `1px solid ${ThemeColor.GrayDark}`,

            '& + button':{
                marginTop: '5px'
            }
        },
        formButtonXL:{
            fontSize: '20px',
            padding: '5px 10px',
        },
        btnGreen:{
            backgroundColor: ThemeColor.Green,
            '&:hover':{
                backgroundColor: '#448810'
            }
        },
        btnRed:{
            backgroundColor: ThemeColor.Red,
            '&:hover':{
                backgroundColor: '#a70b1e'
            }
        },
        modal:{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '680px',
            width: '90%',
            padding: '25px',
            backgroundColor: ThemeColor.White,
            border: '1px solid #000',
            boxShadow: 24,
            borderRadius: '10px'
        },
        modalCloase:{
            position: 'absolute',
            backgroundColor: 'transparent !important',
            top: '10px',
            right: '0px',

            '& svg':{
                width: '22px',
                height: '22px'
            }
        },
        typoBold: {
            color: ThemeColor.Black,
            fontWeight: 'bold',
            lineHeight: '1',

            '@media (max-width: 959px)':{
                fontSize: '1.4rem'
            }
        },
        mb30:{
            marginBottom: '30px',
            '@media (max-width: 640px)':{
                marginBottom: '15px'
            }
        },
        textArea:{
            border: `1px solid ${ThemeColor.GrayDark}`,
            borderRadius: '5px',
            boxShadow: 'none',
            padding: '5px 12px',
            textTransform: 'none',
            width: '100%',
            fontFamily: "Helvetica Neue",
            fontSize: '15px'
        },
        mb20:{
            marginBottom: '20px',
            '@media (max-width: 640px)':{
                marginBottom: '10px'
            }
        },
        center:{
            textAlign: 'center',
            '& button':{
                float: 'none !important',
                padding: '18px 15px',
                minWidth: '150px'
            }
        }
    }));

const ComplementAccepted = () => {
    const classes = useStyles();

    const [complAccOpen, setcomplAccOpen] = React.useState(true);        
    const complAccClose = () => setcomplAccOpen(false);

    return (
        <Modal
            open={complAccOpen}
            onClose={complAccClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={classes.modal}>
                <Button onClick={complAccClose} className={classes.modalCloase}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Button>
                <br />
                <br />
                <div className={classes.mb30}>
                    <Typography variant="h5" className={`${classes.typo} ${classes.mb30}`}>
                        Thank you for accepting the complement. Action Box will now receive their complement!
                    </Typography>
                    <Typography variant="h5" className={`${classes.typo} ${classes.mb20}`}>
                        Please rate your experience with Action BOX!
                    </Typography>

                    <div className={classes.center}>
                        <Rating />
                    </div>
                    
                </div>
                <div className={classes.center}>
                    <Button onClick={complAccClose} variant="primary" className={`${classes.formButton} ${classes.formButtonXXL}`}>Submit</Button>
                </div>
            </Box>
        </Modal>
    );
};

export default ComplementAccepted;
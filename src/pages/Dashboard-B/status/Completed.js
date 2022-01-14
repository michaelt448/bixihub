import React from 'react';
import {
    makeStyles,
    Typography,
    Button,
    // TextareaAutosize,
    Box, Grid, 
    // Modal
} from "@material-ui/core";

import ThemeColor from '../../../style/color';
import Declined from './Declined';
import ComplementAccepted from './ComplementAccepted';

    const useStyles = makeStyles(() => ({
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
        lineHeight:{
            lineHeight: '1.2'
        },
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
    }));

const Completed = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [openDec, setOpenDec] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpenDec = () => setOpenDec(true);
    // const handleClose = () => setOpen(false);

    return (
        <>
            <Typography align='center' className={`${classes.typoSmall} ${classes.lineHeight}`}>
                Finished Post <br /><a href='/'>www.Finishedit.com</a>
            </Typography>

            <Box p={0} marginTop="auto">
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Button onClick={handleOpen} variant="contained" className={`${classes.formButton} ${classes.formButtonXL} ${classes.btnGreen}`}>Accept Post</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleOpenDec} variant="contained" className={`${classes.formButton} ${classes.formButtonXL} ${classes.btnRed}`}>Decline Post</Button>
                    </Grid>
                </Grid>
            </Box>

            {openDec && <Declined />}

            {open && <ComplementAccepted />}

            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Button onClick={handleClose} className={classes.modalCloase}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </Button>
                    <Typography variant="h6" className={`${classes.typoBold} ${classes.mb30}`} style={{paddingRight: '15px'}}>
                        1234 x 123456 xx xxx xxxx xxxxxx (xxxxxxxxxx)
                    </Typography>
                    <TextareaAutosize
                        placeholder="Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text "
                        minRows={8}
                        className={`${classes.textArea} ${classes.mb20}`}
                    />
                    <Button onClick={handleClose} variant="primary" className={`${classes.formButton} ${classes.formButtonXXL}`}>XXXX xxxxxx</Button>
                </Box>
            </Modal> */}
        </>
    );
};

export default Completed;
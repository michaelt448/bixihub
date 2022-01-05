import React from 'react';
import {
    makeStyles, 
    Button,
    Box, Modal, Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel
} from "@material-ui/core";

import ThemeColor from '../../../style/color';

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
    }));

const Declined = () => {
    const classes = useStyles();

    const [complOpen, setcomplOpen] = React.useState(true);
    const handlecomplClose = () => setcomplOpen(false);

    return (
        <Modal
            open={complOpen}
            onClose={handlecomplClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={classes.modal}>
                <Button onClick={handlecomplClose} className={classes.modalCloase}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </Button>
                <Typography variant="h6" className={`${classes.typoBold} ${classes.mb30}`} style={{paddingRight: '15px'}}>
                    Which of the requirements have not been met?
                </Typography>
                
                <div className={classes.mb30}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Requirements:</FormLabel>
                        <RadioGroup
                            name="radio-requirements"
                        >
                            <FormControlLabel value="requirements-1" control={<Radio />} label="Must Produce YouTube video" />
                            <FormControlLabel value="requirements-2" control={<Radio />} label="Can be integrated in the video (not a separate review video)" />
                            <FormControlLabel value="requirements-3" control={<Radio />} label="Must post our website in description" />
                            <FormControlLabel value="requirements-4" control={<Radio />} label="Must post our discount code in description" />
                            <FormControlLabel value="requirements-5" control={<Radio />} label="Must show the product functioning" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className={classes.mb30}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Custom Requirements:</FormLabel>
                        <RadioGroup
                            name="radio-custom-requirements"
                        >
                            <FormControlLabel value="custom-requirements-1" control={<Radio />} label="Must show unboxing the product" />
                            <FormControlLabel value="custom-requirements-2" control={<Radio />} label="Must be completed by: June 30, 2022" />
                        </RadioGroup>
                    </FormControl>
                </div>


                <Button onClick={handlecomplClose} variant="primary" className={`${classes.formButton} ${classes.formButtonXXL}`}>Submit</Button>
            </Box>
        </Modal>
    );
};

export default Declined;
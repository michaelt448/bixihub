import React from 'react';
import {
makeStyles,
Grid,
Button,
Typography,
Input,
TextareaAutosize,
Box,
Avatar,
Modal,
Radio,
RadioGroup,
FormControlLabel,
FormControl,
FormLabel
} from "@material-ui/core";
import ThemeColor from '../../style/color';

// assets
import Star from '../../assets/images/gold-star.jpg';

    const useStyles = makeStyles((theme) => ({
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
        typoXLSmall:{
            color: ThemeColor.GrayLight,
            fontWeight: 'normal',
            lineHeight: '1',
            fontSize: '10px',
            textAlign: 'center'
        },
        typoBold: {
            color: ThemeColor.Black,
            fontWeight: 'bold',
            lineHeight: '1',

            '@media (max-width: 959px)':{
                fontSize: '1.4rem'
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
        },
        lineHeight:{
            lineHeight: '1.2'
        },
        center:{
            textAlign: 'center',
            '& button':{
                float: 'none !important',
                padding: '18px 15px',
                minWidth: '150px'
            }
        },
        mb8:{
            marginBottom: '8px'
        },
        mb20:{
            marginBottom: '20px',
            '@media (max-width: 640px)':{
                marginBottom: '10px'
            }
        },
        mb30:{
            marginBottom: '30px',
            '@media (max-width: 640px)':{
                marginBottom: '15px'
            }
        },
        boxContainer:{
            border: `1px solid ${ThemeColor.GrayDark}`,
            padding: '30px',
            height: '100%',
            '@media (max-width: 640px)':{
                padding: '15px'
            }
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
        formButtonXXL:{
            fontSize: '18px',
            padding: '15px 25px',
            width: 'auto',
            float: 'right'
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
        p20:{
            padding: '20px'
        },
        avtar:{
            cursor: 'pointer',
            overflow: 'visible',
            position: 'relative',
            color: ThemeColor.Black,
            width: theme.spacing(7),
            height: theme.spacing(7),
            backgroundColor: ThemeColor.YellowDark,
            border: `1px solid ${ThemeColor.GrayDark}`
        },
        avtarCenter:{
            margin: '0 auto 15px'
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
        dropdown:{
            marginBottom: '30px',
            position: 'relative',

            '& button':{
                width: '185px',
                margin: 'auto',
                display: 'flex',

                '& svg':{
                    marginLeft: '5px'
                }
            }
        },
        dropdownMenu:{
            position: 'absolute',
            top: '100%',
            right: '0',
            zIndex: '5',
            padding: '15px',
            width: '620px',
            marginTop: '5px',
            height: '180px',
            overflow: 'auto',
            backgroundColor: ThemeColor.White,
            border: '1px solid #707070',

            '@media (max-width: 959px)':{
                width: '100%',
                padding: '10px',

                '& p':{
                    fontSize: '14px',
                    lineHeight: '1.3'
                }
            }
        }
    }));


    const PageFormFlow3 = (props) =>{
        const classes = useStyles();

        const [open, setOpen] = React.useState(false);
        const [complOpen, setcomplOpen] = React.useState(true);
        const [complAccOpen, setcomplAccOpen] = React.useState(true);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        const handlecomplClose = () => setcomplOpen(false);
        const complAccClose = () => setcomplAccOpen(false);
        
        const info = props.info;
        return( 
            <Grid item xs={12} sm={12} md={3} className={classes.mb20}>
                <Box className={`${classes.boxContainer} ${classes.p20}`} display={'flex'} flexDirection="column">
                    <Box className={classes.center} p={0}>
                        <Avatar aria-haspopup="true" className={`${classes.avtar} ${classes.avtarCenter}`}>S</Avatar>
                        <Typography variant="h5" className={`${classes.typoBold} ${classes.mb8}`}>
                            {info.name}
                        </Typography>
                        <Box className={`${classes.rating} ${classes.mb8}`}>
                            <img src={Star} alt="star" />
                            <strong>{info.rating}</strong>
                            <span>({info.views})</span>
                        </Box>
                    </Box>

                    <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.mb30}`}>
                        Average Completion Time: {info.time}
                    </Typography>

                    <Typography variant="h6" style={{fontWeight: 'bold', color: ThemeColor.YellowDark}} className={`${classes.center} ${classes.mb8}`}>
                        Profile Stats
                    </Typography>
                    
                    <Typography variant="h6" className={`${classes.typo} ${classes.mb30}`}>
                        <strong>People:</strong> {info.people} <br />
                        <strong>Category:</strong> {info.category} <br />
                        <strong>Total Profile Views:</strong> {info.profileViews} <br />
                    </Typography>


                    {info.status === 'ACTIVITY_COMPLETED' && (
                        <Typography align='center' className={`${classes.typoSmall} ${classes.lineHeight}`}>
                            Finished Post <br /><a href='/'>www.Finishedit.com</a>
                        </Typography>
                    )}

                    {info.status === 'ACTIVITY_ACCEPTED' && (
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
                    )}


                    {/* <Typography variant="h6" style={{color: ThemeColor.Black}} className={`${classes.typoSmall} ${classes.mb20} ${classes.center}`}>
                        Due: {info.dueDate}
                    </Typography> */}

                    {info.status === 'ACTIVITY_REQUESTED' && (
                        <Box p={0} marginTop="auto">
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Button onClick={handleOpen} variant="contained" className={`${classes.formButton} ${classes.formButtonXL} ${classes.btnGreen}`}>Accept Request</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button onClick={handleOpen} variant="contained" className={`${classes.formButton} ${classes.formButtonXL} ${classes.btnRed}`}>Decline Request</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    )}

                    {info.status === 'ACTIVITY_COMPLETED' && (
                        <Box p={0} marginTop="auto">
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Button onClick={handleOpen} variant="contained" className={`${classes.formButton} ${classes.formButtonXL} ${classes.btnGreen}`}>Accept Post</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button onClick={handleOpen} variant="contained" className={`${classes.formButton} ${classes.formButtonXL} ${classes.btnRed}`}>Decline Post</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    )}
                </Box>


                {info.status === 'COMPLEMENT_DECLINED' && (
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
                )}


                {info.status === 'COMPLEMENT_ACCEPTED' && (
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
                                    <img width="25" src={Star} style={{margin: '0px 2px'}} alt="star" />
                                    <img width="25" src={Star} style={{margin: '0px 2px'}} alt="star" />
                                    <img width="25" src={Star} style={{margin: '0px 2px'}} alt="star" />
                                    <img width="25" src={Star} style={{margin: '0px 2px'}} alt="star" />
                                    <img width="25" src={Star} style={{margin: '0px 2px'}} alt="star" />
                                </div>
                                
                            </div>
                            <div className={classes.center}>
                                <Button onClick={complAccClose} variant="primary" className={`${classes.formButton} ${classes.formButtonXXL}`}>Submit</Button>
                            </div>
                        </Box>
                    </Modal>
                )}

                <Modal
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
                </Modal>
            </Grid>
        )
    }

    export default PageFormFlow3;
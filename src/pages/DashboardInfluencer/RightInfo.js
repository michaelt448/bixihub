import React from 'react';
import {
makeStyles,
Grid,
Button,
Typography,
Input,
Box,
Avatar,
} from "@material-ui/core";
import ThemeColor from '../../style/color';

// assets
import Star from '../../assets/images/gold-star.jpg';

import ReviewPopup from './Status/ReviewPopup';

    const useStyles = makeStyles((theme) => ({
        typo:{
            color: ThemeColor.Black,
            fontWeight: 'normal',
            lineHeight: '1.1',
            fontSize: '15px',

            '@media (max-width: 959px)':{
                fontSize: '1.2rem'
            }
        },
        typoSmall:{
            color: ThemeColor.GrayDark,
            fontWeight: 'bold',
            lineHeight: '1',
            fontSize: '17px',
            '& a':{
                color: ThemeColor.GrayDark,
                fontWeight: 'bold',

                '&:hover':{
                    color: ThemeColor.LinkColor,
                }
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
        lineHeight:{
            lineHeight: '1.2'
        },
        center:{
            textAlign: 'center'
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
        mt20:{
            marginTop: '20px',
            '@media (max-width: 640px)':{
                marginTop: '10px'
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
                width: '100%'
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
        const [success, setSuccess] = React.useState(false);

        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        
        const [Reopen, setReOpen] = React.useState(false);
        const handleReOpen = () => setReOpen(!Reopen);
        
        
        const [dOpen, setdOpen] = React.useState(false);
        const dropdownOpen = () => setdOpen(!dOpen);
        
        const [waiting, setWaiting] = React.useState(false);
        const handleWaiting = (e) => {setWaiting(e); setReOpen(!Reopen);};

        
        const info = props.info;
        return( 
            <Grid item xs={12} sm={12} md={3} className={classes.mb20}>
                <Box className={`${classes.boxContainer} ${classes.p20}`} display={'flex'} flexDirection="column">
                    <Box className={classes.center} p={0}>
                        <Avatar aria-haspopup="true" className={`${classes.avtar} ${classes.avtarCenter}`}>S</Avatar>
                        <Typography variant="h5" className={`${classes.typoBold} ${classes.mb8}`}>
                            {info.name}
                        </Typography>
                        <Box className={`${classes.rating} ${classes.mb20}`}>
                            <img src={Star} alt="star" />
                            <strong>{info.rating}</strong>
                            <span>({info.views})</span>
                        </Box>
                    </Box>

                    <Typography variant="h6" className={`${classes.typo} ${classes.center} ${classes.mb30}`}>
                        {info.addressShipped}
                    </Typography>

                    {open !== true && (
                        <Box className={classes.dropdown}>
                            <Button onClick={dropdownOpen} variant="contained" className={`${classes.formButton}`}>Requirements 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </Button>
                            {/* dOpen */}
                            {dOpen ? (
                                <Box className={classes.dropdownMenu}>
                                    <Typography className={`${classes.typo}`}>
                                        <div dangerouslySetInnerHTML={{__html: info.requirements}} />
                                    </Typography>
                                </Box>
                            ): null}
                        </Box>
                    )}

                    {info.status === 'Activity_Requested' && 
                        <Typography variant="h6" style={{marginTop: '40px'}} className={`${classes.center} ${classes.typoSmall}`}>
                            Waiting for Request Approval
                        </Typography>
                    }

                    {info.status === 'Activity_Accepted' && 
                        (
                            <>
                                <Typography variant="h6" style={{marginTop: '40px'}} className={`${classes.center} ${classes.typoSmall}`}>
                                    Waiting for Shipping information
                                </Typography>
                                <Box p={0} marginTop="auto">
                                    <Typography style={{color: ThemeColor.gray}} className={`${classes.typo} ${classes.center}`}>
                                        Due: {info.dueDate}
                                    </Typography>
                                </Box>
                            </>
                        )
                    }

                    {info.status === 'Activity_Declined' && 
                        <Typography variant="h5" style={{marginTop: '40px', color: ThemeColor.Red}} className={`${classes.center} ${classes.typoBold}`}>
                            Request Declined
                        </Typography>
                    }

                    {(info.status === 'Product_Delivered' && open !== true) && (
                        <>
                            {info.trackingNumber && (
                                <>
                                    <Typography variant="h6" style={{fontWeight: 'bold'}} className={`${classes.center}`}>
                                        Tracking Number
                                    </Typography>
                                    <Typography variant="h6" className={`${classes.typo} ${classes.center}`}>
                                        {info.trackingNumber}
                                    </Typography>
                                </>
                            )}
                            {info.carrier && (
                                <>
                                    <Typography variant="h6" style={{fontWeight: 'bold'}} className={`${classes.center}`}>
                                        Carrier
                                    </Typography>
                                    <Typography variant="h6" className={`${classes.typo} ${classes.mb30} ${classes.center}`}>
                                        {info.carrier}
                                    </Typography>
                                </>
                            )}

                            <Typography variant="h6" className={`${classes.typo} ${classes.center} ${classes.mb30}`}>
                                Submit your video or post URL below when you finish the gig.
                            </Typography>

                            <form action="/" className={`${classes.formSend}`}>
                                <Input placeholder="Paste Text here" />
                            </form>

                            <Typography variant="h6" className={`${classes.typo} ${classes.mb20} ${classes.center}`}>
                                Due: {info.dueDate}
                            </Typography>

                            <Box p={0} marginTop="auto">
                                <Button onClick={handleOpen} variant="contained" className={`${classes.formButton} ${classes.formButtonXL} ${classes.btnGreen}`}>Submit</Button>
                            </Box>
                        </>
                    )}

                    {open && (
                        <>
                            <Button variant="contained" className={`${classes.formButton}`}>View Gig</Button>

                            <Box p={0} marginTop="auto">
                                <Typography variant="h5" className={`${classes.center}`}>
                                    Job Complete!
                                </Typography>
                                {waiting && 
                                    <Typography variant="h6" className={`${classes.center} ${classes.typoSmall}`}>
                                        Waiting for Review
                                    </Typography>
                                }

                                {success && 
                                    <Typography variant="h6" style={{color: ThemeColor.Green}} className={`${classes.center} ${classes.typoSmall}`}>
                                        Post Accepted
                                    </Typography>
                                }

                                {info.status === 'Complement_complete' && 
                                    <Typography variant="h6" style={{color: ThemeColor.Green}} className={`${classes.center} ${classes.typoSmall}`}>
                                        Post Accepted
                                    </Typography>
                                }

                                {info.status === 'Complement_declined' && 
                                    <Typography variant="h6" style={{color: ThemeColor.Red}} className={`${classes.center} ${classes.typoSmall}`}>
                                        Post Declined
                                    </Typography>
                                }

                                <Button variant="contained" onClick={handleReOpen} className={`${classes.formButton} ${classes.mt20} ${classes.formButtonXL} ${classes.btnGreen}`}>Submitted</Button>
                            </Box>
                        </>
                    )}
                </Box>

                {open && <ReviewPopup waiting={(e) => handleWaiting(e)} />}
                {Reopen && <ReviewPopup waiting={(e) => handleWaiting(e)} submit={(e) => setSuccess(e)} />}
            </Grid>
        )
    }

    export default PageFormFlow3;
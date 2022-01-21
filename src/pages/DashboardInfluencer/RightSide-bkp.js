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
Modal
} from "@material-ui/core";
import ThemeColor from '../../style/color';

// assets
import Star from '../../assets/images/gold-star.jpg';
import RightInfo from './Json/RightJson';

    const useStyles = makeStyles((theme) => ({
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
        mb8:{
            marginBottom: '8px'
        },
        mb12:{
            marginBottom: '15px'
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
        boxContainerScroll:{
            height: '570px',
            overflow: 'auto'
        },
        boxContainerInner:{
            maxWidth: '750px',
            width: '100%',
            margin: 'auto'
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
        p0:{
            padding: '0px'
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
        textNoWrap:{
            display: 'flex',
            justifyContent: 'space-between'
        },
        divider:{
            fontWeight: 'bold',
            color: ThemeColor.YellowDark,
            borderBottom: `1px solid ${ThemeColor.YellowDark}`
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


    const PageFormFlow3 = () =>{
        const classes = useStyles();

        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        
        
        const [dOpen, setdOpen] = React.useState(false);
        const dropdownOpen = () => setdOpen(!dOpen);
        
        return( 
            <>           
                <Grid item xs={12} sm={12} md={6} className={classes.mb20}>
                    <Box className={`${classes.boxContainer} ${classes.boxContainerScroll} ${classes.p0}`}>
                            <Box p={3}>
                                <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                    June 14, 2021
                                </Typography>
                            </Box>
                            <Box className={classes.textNoWrap} p={1.2}>
                                <Typography variant="h6" className={classes.typoSmall}>
                                    1234567 accepted by Textted
                                </Typography>
                                <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                    3:45pm
                                </Typography>
                            </Box>
                            <Box className={classes.textNoWrap} p={1.2}>
                                <Typography variant="h6" className={classes.typoSmall}>
                                    12345678 1234567 shared with 1234567
                                </Typography>
                                <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                    3:45pm
                                </Typography>
                            </Box>
                            <Box p={2.5}>
                                <Typography variant="h6" className={classes.typoBold}>
                                    12345678 1234567:
                                </Typography>
                                <Typography variant="h6" className={`${classes.typo}`}>
                                    123456 123 <br />12411 123456 123456 1234 <br />123456
                                </Typography>
                            </Box>
                            <Box className={`${classes.textNoWrap} ${classes.mb12}`} p={1.2}>
                                <Typography variant="h6" className={classes.typoSmall}>
                                    Waiting for 1234567 to 1234.
                                </Typography>
                                <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                    3:45pm
                                </Typography>
                            </Box>

                            <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                June 15, 2021
                            </Typography>
                            <Typography variant="h6" className={`${classes.divider} ${classes.center}`}>
                                New
                            </Typography>

                            <Box className={classes.textNoWrap} p={1.2}>
                                <Typography variant="h6" className={classes.typoSmall}>
                                    1234567 has updated 12345678 information
                                </Typography>
                                <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                    3:45pm
                                </Typography>
                            </Box>
                            <Box p={2.5}>
                                <Typography variant="h6" className={`${classes.typoBold}`} style={{color: ThemeColor.GrayDark}}>
                                    12345678 123456: 904923403924
                                </Typography>
                            </Box>
                            <Box className={classes.textNoWrap} p={1.2}>
                                <Typography variant="h6" className={classes.typoSmall}>
                                    Text
                                </Typography>
                                <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                    Text
                                </Typography>
                            </Box>
                            <Box className={classes.textNoWrap} p={1.2}>
                                <Typography variant="h6" className={classes.typoSmall}>
                                    Text
                                </Typography>
                                <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                    Text
                                </Typography>
                            </Box>
                            <Box className={classes.textNoWrap} p={1.2}>
                                <Typography variant="h6" className={classes.typoSmall}>
                                    Text
                                </Typography>
                                <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                    Text
                                </Typography>
                            </Box>
                            <Box className={classes.textNoWrap} p={1.2}>
                                <Typography variant="h6" className={classes.typoSmall}>
                                    Text
                                </Typography>
                                <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                    Text
                                </Typography>
                            </Box>
                            <Box className={classes.textNoWrap} p={1.2}>
                                <Typography variant="h6" className={classes.typoSmall}>
                                    Text
                                </Typography>
                                <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                    Text
                                </Typography>
                            </Box>
                            <Box className={classes.textNoWrap} p={1.2}>
                                <Typography variant="h6" className={classes.typoSmall}>
                                    Text
                                </Typography>
                                <Typography variant="h6" className={`${classes.typoXLSmall} ${classes.center}`}>
                                    Text
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} className={classes.mb20}>
                        <Box className={`${classes.boxContainer} ${classes.p20}`} display={'flex'} flexDirection="column">
                            <Box className={classes.center} p={0}>
                                <Avatar aria-haspopup="true" className={`${classes.avtar} ${classes.avtarCenter}`}>S</Avatar>
                                <Typography variant="h5" className={`${classes.typoBold} ${classes.mb8}`}>
                                    Scale 1234567
                                </Typography>
                                <Box className={`${classes.rating} ${classes.mb20}`}>
                                    <img src={Star} alt="star" />
                                    <strong>4.9</strong>
                                    <span>(1k+)</span>
                                </Box>
                            </Box>

                            <Typography variant="h6" className={`${classes.typoSmall} ${classes.mb30}`}>
                                Text Text Text Text Text Text Text Text Text Text Text
                            </Typography>

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
                                            Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
                                        </Typography>
                                    </Box>
                                ): null}
                            </Box>

                            <Typography variant="h6" style={{fontWeight: 'bold'}} className={`${classes.center}`}>
                                12345678 123456
                            </Typography>
                            <Typography variant="h6" style={{color: ThemeColor.Black}} className={`${classes.typoSmall} ${classes.mb30} ${classes.center}`}>
                                904923403924
                            </Typography>

                            <Typography variant="h6" className={`${classes.typo} ${classes.mb30}`}>
                                Text Text Text Text Text Text Text Text Text
                            </Typography>

                            <form action="/" className={`${classes.formSend}`}>
                                <Input placeholder="Paste Text here" />
                            </form>

                            <Typography variant="h6" style={{color: ThemeColor.Black}} className={`${classes.typoSmall} ${classes.mb20} ${classes.center}`}>
                                Due: Jan 25, 2021
                            </Typography>

                            <Box p={0} marginTop="auto">
                                <Button onClick={handleOpen} variant="contained" className={`${classes.formButton} ${classes.formButtonXL} ${classes.btnGreen}`}>Submit</Button>
                            </Box>
                        </Box>
                    </Grid>

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
                </>
        )
    }

    export default PageFormFlow3;
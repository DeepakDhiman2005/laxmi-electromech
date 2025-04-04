import React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Container,
    Box,
    useTheme,
    useMediaQuery,
    TextField,
    Grid,
    Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqsData from "../../constants/faqs";
import Heading from "../heading/Heading";
import HTMLLoad from "../loadData/HTMLLoad";

const FAQs = () => {
    const theme = useTheme();
    const isMdOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Container
            maxWidth="xl"
            sx={{
                py: 4,
                px: { xs: 2, md: 4, lg: 6 },
                backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4)), url('/images/categoryBg.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed", // 👈 Add this line
                borderRadius: 2,
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                {/* FAQs Section */}
                <div className="flex flex-col justify-start items-start">
                    <Heading startText="FAQs -" endText="Frequently Asked Questions" pb={2} />
                    <Box display="flex" flexDirection="column" gap={2} className="w-full">
                        {faqsData.slice(0, 5).map((faq, index) => (
                            <Accordion
                                key={index}
                                disableGutters
                                disableRipple
                                square
                                sx={{
                                    border: "none",
                                    boxShadow: "none",
                                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                                    backdropFilter: "blur(10px)",
                                    "&:before": { display: "none" },
                                    borderRadius: "8px",
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ transition: '0.3s' }} />}
                                    sx={{
                                        background: 'white',
                                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease-in-out',

                                        '&:hover': {
                                            background: '#2457AA',
                                            color: 'white',

                                            '.MuiSvgIcon-root': {
                                                color: 'white', // 👈 change arrow color on hover
                                            },
                                        },

                                        '&.Mui-expanded': {
                                            background: '#2457AA',
                                            color: 'white',

                                            '.MuiSvgIcon-root': {
                                                color: 'white', // 👈 change arrow color when expanded
                                            },
                                        },
                                    }}
                                >
                                    <Typography variant="body1">
                                        {index + 1}. {faq.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography component="div" sx={{ whiteSpace: "pre-line" }}>
                                        <HTMLLoad htmlData={faq.answer} />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </div>

                {/* Form Section */}
                <div className="rounded-lg overflow-hidden shadow-[0px_0px_2px_2px_#e0e0e0]">
                    <Box
                        sx={{
                            backgroundColor: "rgba(255,255,255,0.9)",
                            px: 3,
                            py: 1,
                            backdropFilter: "blur(6px)",
                            boxShadow: 1,
                            width: "100%",
                        }}
                    >
                        <Typography variant="h5" sx={{ textTransform: 'capitalize' }} gutterBottom>
                            Didn't find answer of your question?
                        </Typography>

                        <Box display="flex" flexDirection="column" gap={2} mt={1}>
                            <TextField
                                fullWidth
                                label="Name"
                                variant="filled"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: {
                                        minHeight: "40px",
                                        // backgroundColor: "#fff",
                                        px: 1.5,
                                        py: 0.5,
                                        fontSize: "14px",
                                        "& input": {
                                            padding: "14px 0 4px", // 👈 Top padding for space below label
                                            fontSize: "14px",
                                        },
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        fontSize: "14px",
                                        transform: "translate(12px, 14px) scale(1)", // default label position
                                        "&.MuiInputLabel-shrink": {
                                            transform: "translate(12px, 3px) scale(0.85)", // floated label position
                                        },
                                    },
                                }}
                            />

                            <TextField
                                fullWidth
                                label="Email"
                                variant="filled"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: {
                                        minHeight: "40px",
                                        // backgroundColor: "#fff",
                                        px: 1.5,
                                        py: 0.5,
                                        fontSize: "14px",
                                        "& input": {
                                            padding: "14px 0 4px", // 👈 Top padding for space below label
                                            fontSize: "14px",
                                        },
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        fontSize: "14px",
                                        transform: "translate(12px, 14px) scale(1)", // default label position
                                        "&.MuiInputLabel-shrink": {
                                            transform: "translate(12px, 3px) scale(0.85)", // floated label position
                                        },
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Phone"
                                variant="filled"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: {
                                        minHeight: "40px",
                                        // backgroundColor: "#fff",
                                        px: 1.5,
                                        py: 0.5,
                                        fontSize: "14px",
                                        "& input": {
                                            padding: "14px 0 4px", // 👈 Top padding for space below label
                                            fontSize: "14px",
                                        },
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        fontSize: "14px",
                                        transform: "translate(12px, 14px) scale(1)", // default label position
                                        "&.MuiInputLabel-shrink": {
                                            transform: "translate(12px, 3px) scale(0.85)", // floated label position
                                        },
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Your Question"
                                variant="filled"
                                multiline
                                rows={4}
                                InputProps={{
                                    disableUnderline: true,
                                    sx: {
                                        px: 1.5,
                                        py: 0.5,
                                        fontSize: "14px",
                                        // backgroundColor: "#fff",
                                        "& textarea": {
                                            fontSize: "14px",
                                            padding: "24px 0px 6px", // Top padding for floating label space
                                        },
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        fontSize: "14px",
                                        transform: "translate(12px, 24px) scale(1)", // Default label position
                                        "&.MuiInputLabel-shrink": {
                                            transform: "translate(12px, 6px) scale(0.85)", // Floating label on focus/filled
                                        },
                                    },
                                }}
                            />
                        </Box>
                        <div className="flex justify-center items-center w-full ">
                            <Button
                                sx={{
                                    mt: 1.5,
                                    backgroundColor: '#333',     // light black
                                    color: 'white',
                                    borderRadius: '5px',         // explicitly set to 5px
                                    '&:hover': {
                                        backgroundColor: '#444',   // slightly lighter on hover
                                    }
                                }}
                            >
                                Raise your query
                            </Button>
                        </div>
                    </Box>
                </div>
            </div>
        </Container>
    );
};

export default FAQs;

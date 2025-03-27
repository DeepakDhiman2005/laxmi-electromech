import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Box, Divider, useTheme, useMediaQuery } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqsData from "../../constants/faqs";
import Heading from "../heading/Heading";
import HTMLLoad from "../loadData/HTMLLoad";

const FAQs = () => {
    const theme = useTheme();
    const isMdOrSmaller = useMediaQuery(theme.breakpoints.down("md")); // Check if screen size is below md

    return (
        <Container maxWidth="xl" sx={{ my: 2, width: "100%", px: { md: 2, lg: 6, xl: 6, xs: 2 } }}>
            {/* <Box sx={{ pb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                    FAQs - <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">Frequently Asked Questions</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                </Typography>
            </Box> */}
            <Heading
                startText="FAQs -"
                endText="Frequently Asked Questions"
                pb={1}
            />

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: isMdOrSmaller ? "1fr" : "1fr 1fr 1fr", // 1 column on small, 3 columns on large
                    gap: 2,
                }}
            >
                {isMdOrSmaller ? (
                    // Single column layout
                    faqsData.map((faq, index) => (
                        <Accordion key={index} disableGutters disableRipple square
                            sx={{
                                border: "none",
                                boxShadow: "none",
                                backgroundColor: "transparent",
                                "&:before": { display: "none" },
                            }}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ width: '100%', background: '#f1f2f9', borderRadius: '8px' }}>
                                <Typography variant="body1">{index + 1}. {faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography component="div" sx={{ whiteSpace: "pre-line" }}>
                                    <HTMLLoad htmlData={faq.answer} />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))
                ) : (
                    // Three-column layout
                    <>
                        <Box>
                            {faqsData.filter((_, index) => index % 3 === 0).map((faq, index) => (
                                <Accordion key={index} disableGutters disableRipple square
                                    sx={{
                                        border: "none",
                                        boxShadow: "none",
                                        backgroundColor: "transparent",
                                        "&:before": { display: "none" },
                                    }}
                                >
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ width: '100%', background: '#f1f2f9', borderRadius: '8px', my: 0.5 }}>
                                        <Typography variant="body1">{index * 3 + 1}. {faq.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography component="div" sx={{ whiteSpace: "pre-line" }}>
                                            <HTMLLoad htmlData={faq.answer} />
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>

                        <Box>
                            {faqsData.filter((_, index) => index % 3 === 1).map((faq, index) => (
                                <Accordion key={index} disableGutters disableRipple square
                                    sx={{
                                        border: "none",
                                        boxShadow: "none",
                                        backgroundColor: "transparent",
                                        "&:before": { display: "none" },
                                    }}
                                >
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ width: '100%', background: '#f1f2f9', borderRadius: '8px', my: 0.5 }}>
                                        <Typography variant="body1">{index * 3 + 2}. {faq.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography component="div" sx={{ whiteSpace: "pre-line" }}>
                                            <HTMLLoad htmlData={faq.answer} />
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>

                        <Box>
                            {faqsData.filter((_, index) => index % 3 === 2).map((faq, index) => (
                                <Accordion key={index} disableGutters disableRipple square
                                    sx={{
                                        border: "none",
                                        boxShadow: "none",
                                        backgroundColor: "transparent",
                                        "&:before": { display: "none" },
                                    }}
                                >
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ width: '100%', background: '#f1f2f9', borderRadius: '8px', my: 0.5 }}>
                                        <Typography variant="body1">{index * 3 + 3}. {faq.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography component="div" sx={{ whiteSpace: "pre-line" }}>
                                            <HTMLLoad htmlData={faq.answer} />
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
                    </>
                )}
            </Box>
        </Container>
    );
};

export default FAQs;

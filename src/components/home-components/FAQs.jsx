import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Box, Divider, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqsData from "../../constants/faqs";

const FAQs = () => {
    const theme = useTheme();
    return (
        <Container maxWidth="xl" sx={{ marginTop: 4, width: "100%", }}>
            <Box sx={{ pb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                    FAQs - <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">Frequently Asked Questions</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    my: 1,
                    px: { xl: 3, lg: 3, md: 2, sm: 2 },
                }}
            >
                {faqsData.map((faq, index) => (
                    <Accordion
                        key={index}
                        disableGutters
                        disableRipple
                        square
                        sx={{
                            width: "100%",
                            border: "none",
                            boxShadow: "none",
                            backgroundColor: "transparent",
                            "&:before": { display: "none" }, // Remove default top border
                            "&.MuiAccordion-root:focus, &.MuiAccordionSummary-root:focus": {
                                outline: "none !important",
                                border: "none !important",
                                boxShadow: "none !important",
                            },
                            "& .MuiAccordionSummary-root": {
                                outline: "none !important",
                                border: "none !important",
                                boxShadow: "none !important",
                            },
                            "& .MuiAccordionSummary-root:focus-visible": {
                                outline: "none !important",
                                border: "none !important",
                                boxShadow: "none !important",
                            },
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ width: '100%', background: '#f1f2f9', borderRadius: '8px', my: 0.5, }}>
                            <Typography variant="body1">{index + 1}. {faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography component="div" sx={{ whiteSpace: "pre-line" }}>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Container>
    );
};

export default FAQs;

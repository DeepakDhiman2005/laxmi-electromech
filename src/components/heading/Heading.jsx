import { Box, Divider, Typography, useTheme } from "@mui/material";

const Heading = ({
    startText = "",
    endText = "",
    justify = 'center',
    variant = 'h4',
    pb = 2,
}) => {
    const theme = useTheme();

    return <>
        <Box sx={{ pb: pb, display: 'flex', alignItems: 'center', justifyContent: justify }}>
            <Typography variant={variant} fontWeight="bold" textTransform={'uppercase'}>
                {startText} <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant={variant}>{endText}</Typography>
                <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
            </Typography>
        </Box>
    </>
}

export default Heading;
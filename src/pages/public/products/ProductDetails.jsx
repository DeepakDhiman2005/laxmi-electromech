import { Box, Button, Typography } from "@mui/material";

const ProductDetails = () => {
    return <>
        <Box
            sx={{
                width: '100%',
                px: 4,
                py: 2,
                gap: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start'
            }}
        >
            <Box
                sx={{
                    width: '35%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'sticky',
                    top: 0,
                    left: 0
                }}
            >
                <img
                    src="https://download.schneider-electric.com/files?p_Doc_Ref=XA2E_CP20054_1&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png"
                    alt="image"
                    style={{
                        width: '80%'
                    }}
                />
            </Box>
            <Box
                sx={{
                    width: '65%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    gap: 1,
                }}
            >
                <Typography variant="h5">round pilot light Ø 22 - red - integral LED - 110 V AC - screw clamp terminals</Typography>
                <Typography variant="body1" sx={{ color: '#505050' }}>XA2EVF4LC</Typography>
                <Typography variant="body1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit tempore aspernatur dicta eligendi reiciendis vel provident labore, mollitia repellendus, blanditiis dolor libero aliquam sequi, architecto commodi optio. Possimus repellat, asperiores, numquam blanditiis et reiciendis facere, ipsam rem magni laudantium sunt officiis. Dicta delectus enim architecto quia neque deleniti labore quidem.</Typography>
                {/* <Button
                    sx={{
                        border: '1px solid #707070',
                        px: { lg: 10, xl: 10 },
                        borderRadius: '4px',
                        color: '#000'
                    }}
                >Buy Now</Button> */}
            </Box>
        </Box>
    </>
}

export default ProductDetails;
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductSubCategoryCard = () => {
    return <>
        <Link
            to="/product-category/harmony-XB5N-XB7N"
        >
            <Box
                sx={{
                    width: '100%',
                    cursor: 'pointer'
                }}
            >
                <img src="https://download.schneider-electric.com/files?p_Doc_Ref=XB5N_XB7N_image_of_range&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png" alt="image" style={{ width: '150px', height: '150px' }} />
                <Typography variant="h6" sx={{ color: '#1C85C6' }}>Harmony XB5N/XB7N</Typography>
                <Typography variant="body2" sx={{ color: '#000' }}>The modular range of Ø 22 mm plastic control and signaling units combines simplicity of installation, modern...</Typography>
            </Box>
        </Link>
    </>
}

export default ProductSubCategoryCard;
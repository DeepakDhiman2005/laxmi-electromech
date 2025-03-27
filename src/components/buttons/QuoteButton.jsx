import React from "react";
import { Button } from "@mui/material";
import { MessageCircleMore } from "lucide-react"; // Importing the MessageCircleMore icon from Lucide
import { Link } from "react-router-dom";

const QuoteButton = () => {
  return (
    <Link to={"/contact-us"}>
      <Button
        className="animate-rotateLR hover:animate-none"
        sx={{
          padding: "4px 10px",
          fontSize: "14px",
          fontWeight: "bold",
          textTransform: "inherit",
          position: "relative", // For pseudo-elements
          borderRadius: "4px", // Slight rounding
          overflow: "hidden", // Prevent pseudo-element overflow
          display: "flex",
          alignItems: "center",
          borderEndStartRadius: "12px",
          borderTopRightRadius: "12px",
          gap: "6px", // Space between icon and text
          background: "linear-gradient(45deg, #1976d2, #42a5f5)", // Linear gradient from dark blue to light blue
          color: "white", // Text/icon color
          "&:hover": {
            background: "linear-gradient(45deg, #1565c0, #2196f3)", // Slightly darker gradient on hover
          },
        }}
      >
        <MessageCircleMore size={16} /> {/* Lucide MessageCircleMore icon */}
        Get a Quote
      </Button>
    </Link>
  );
};

export default QuoteButton;
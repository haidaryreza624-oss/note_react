import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    MenuItem,
    Typography
} from "@mui/material";

function Forminput() {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        subcategory: "",
        description: ""
    });

    const categories = ["Work", "Personal", "Ideas", "Other"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // You can handle form submission logic here
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "400px",
                margin: "20px auto",
                padding: 2,
                border: "1px solid #ccc",
                borderRadius: 2
            }}
        >
            <Typography variant="h6">My Form</Typography>

            {/* Text Field */}
            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
            />

            {/* Dropdown + small text field in a row */}
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <TextField
                    select
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    sx={{ flex: 1 }}
                    required
                >
                    {categories.map((cat) => (
                        <MenuItem key={cat} value={cat}>
                            {cat}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="Subcategory"
                    name="subcategory"
                    value={formData.subcategory}
                    onChange={handleChange}
                    sx={{ width: "120px" }}
                />
            </Box>

            {/* Textarea */}
            <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
            />

            {/* Submit Button */}
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    );
}

export default Forminput;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Box,
    Button,
    TextField,
    MenuItem,
    Typography
} from "@mui/material";
import { Description } from "@mui/icons-material";

function Forminput({ isedit, id }) {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: ""
    });
    if (isedit) {
        useEffect(() => {
            fetch(`http://localhost:8080/notes/${id}`)
                .then(item => item.json())
                .then(data => {
                    console.log(data)
                    setFormData({ title: data.title, category: data.category, description: data.description })
                }
                )
        }, [])

    }
    const navigate = useNavigate()

    const [validname, setValid] = useState(true)
    const [validcatagory, setdcatagory] = useState(true)
    const [validescription, setdescription] = useState(true)


    const categories = ["Work", "Personal", "Ideas", "Other"];
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

    };


    const check_validaty = () => {

        const nameValid = formData.title.trim() !== "";
        const descValid = formData.description.trim() !== "";
        const catValid = formData.category.trim() !== "";

        setValid(nameValid);
        setdescription(descValid);
        setdcatagory(catValid);
        return nameValid && descValid && catValid




    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (check_validaty()) {
            console.log("Form submitted:", formData);
        }
        // You can handle form submission logic here
        if (isedit == false) {
            fetch("http://localhost:8080/notes", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(
                    navigate('/')
                )
        }
        if (isedit) {
            fetch(`http://localhost:8080/notes/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    category: formData.category

                })
            }).then(item => {
                navigate('/')
                console.log('Edit Done')
            }
            ).catch(e => console.log(e))
        }

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
                error={!validname}
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth


            />

            {/* Dropdown + small text field in a row */}
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <TextField
                    error={!validcatagory}
                    select
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    sx={{ flex: 1 }}

                >
                    {categories.map((cat) => (
                        <MenuItem key={cat} value={cat}>
                            {cat}
                        </MenuItem>
                    ))}
                </TextField>


            </Box>

            {/* Textarea */}
            <TextField
                error={!validescription}
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

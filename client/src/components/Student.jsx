import React from 'react';
import Card from 'react-bootstrap/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'
import Box from "@mui/material/Box";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Student = ({ post, toUpdate, toDelete, }) => {

    const onUpdate = (toUpdatePost) => {
        toUpdate(toUpdatePost)
    }

    const onDelete = (toDeletePost) => {
        toDelete(toDeletePost)
    }

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{post.title} {post.body}</Card.Title>
                <CardMedia
                    component="img"
                    height="194"
                    image={post.img}
                    style={{marginBottom: '.5em'}}
                    />
                    {/*<img src={student.url} alt={student.firstname}/>*/}
                    {/*<img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="BigCo Inc. logo"/>*/}
                <Button variant="outline-danger" onClick={() => { onDelete(post) }} style={{ padding: '0.6em', marginRight: '0.9em' }}><ioicons.IoTrash /></Button>
                <Button variant="outline-info" onClick={() => { onUpdate(post) }} style={{ padding: '0.6em', marginRight: '0.9em' }}> <ioicons.IoSync /></Button>
                <Button variant="outline-info" onClick={handleOpen} style={{ padding: '0.6em' }}> <ioicons.IoEye /></Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {post.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            </Card.Body>
        </Card>
    )

}

export default Student;
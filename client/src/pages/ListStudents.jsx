import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from '../components/Form';
import Student from '../components/Student';

const ListStudents = () => {

    // this is my original state with an array of students 
    const [posts, setPosts] = useState([]);

    //this is the state needed for the UpdateRequest
    const [editingPost, setEditingPost] = useState(null)

    const loadPosts = () => {
        // A function to fetch the list of students that will be load anytime that list change
        fetch("http://localhost:8080/api/posts")
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts);
            });
    }

    useEffect(() => {
        loadPosts();
    }, [posts]);

    const onSavePost = (newPost) => {
        //console.log(newStudent, "From the parent - List of Students");
        setPosts((posts) => [...posts, newPost]);
    }


    //A function to control the update in the parent (student component)
    const updatePost = (savedPost) => {
        // console.log("Line 29 savedStudent", savedStudent);
        // This function should update the whole list of students - 
        loadPosts();
    }

    //A function to handle the Delete funtionality
    const onDelete = (post) => {
        //console.log(student, "delete method")
        return fetch(`http://localhost:8080/api/posts/${post.id}`, {
            method: "DELETE"
        }).then((response) => {
            //console.log(response);
            if (response.ok) {
                loadPosts();
            }
        })
    }

    //A function to handle the Update functionality
    const onUpdate = (toUpdatePost) => {
        //console.log(toUpdateStudent);
        setEditingPost(toUpdatePost);

    }



    return (
        <div className="mybody">
        <div className="list-students">
            <h4 style={{ padding: '0.5em'}}>Be proud of your place in the cosmos. It is small and yet it is. </h4>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}> <Student post={post} toDelete={onDelete} toUpdate={onUpdate} /></li>
                })}
            </ul>
        </div>
        <MyForm key={editingPost ? editingPost.id : null} onSavePost={onSavePost} editingPost={editingPost} onUpdatePost={updatePost} />
        </div>
    );
}


export default ListStudents
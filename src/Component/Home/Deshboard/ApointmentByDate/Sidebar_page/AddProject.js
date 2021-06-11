import axios from 'axios';
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddProject = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    // const onSubmit = data => {
    //     const projectData = {
    //         name: data.product,
    //         descrition: data.descrition,
    //         topicsOne: data.one,
    //         topicTwo: data.two,
    //         topicThree: data.three
    //         // projectImg: projectImg
    //     };
    //     const url = `http://localhost:5000/addProject`;
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(projectData)
    //     })
    //     .then (res => alert('server side okay responsed', res))
    // };

    const onSubmit = data => {
        const productData = {
            name: data.product,
            descrition: data.descrition,
            price: data.price,
            facilities1: data.one,
            facilitiesTwo: data.two,
            facilities2: data.facilities2,
            facilities3: data.three,
            imageURL: projectImg
        };
        const url = `http://localhost:5000/addProject`;

        console.log(productData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then (res => console.log('server side responsed', res))
    };


    // const [imageURLS , setImageURL] = useState(null);
    // const handleImageUpload = product => {

    //     const imageData = new FormData();
    //     imageData.set('key', '994392279289c0649211748cc7b4c09d');
    //     imageData.append('image', product.target.files[0]);

    //     axios.post('https://api.imgbb.com/1/upload', imageData)
    //       .then(function (response) {
    //         setImageURL(response.data.data.display_url);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }

    const [projectImg, setProjectImg] = useState(null);
    const handleImageUpload = project => {
        const imageData = new FormData();
        imageData.set('key', '994392279289c0649211748cc7b4c09d');
        imageData.append('image', project.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload' , imageData)
        .then(function(res) {
            setProjectImg(res.data.data.display_url);
            alert('img added', res.data.data.display_url);
        })
        .catch(function(err) {
            alert(err);
        });
    }

    return (
       
        <Col className="rightSide" md={9} lg={9} sm={9} xl={9} xs={9}>
            <form onSubmit={handleSubmit(onSubmit)}>

            <label >Services Name : </label>
            <input name="product" placeholder="Services Name" />
            <hr/>
            <label >Services descrition : </label>
            <input name="descrition" placeholder="Services descrition"  />
            <hr/>

            <hr/>

                <input type="submit" />

            </form>
        </Col>
    );
};

export default AddProject;
import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import styles from "../../styles/ReviewCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function ReviewEditForm() {
  const [errors, setErrors] = useState({});

  const [reviewData, setReviewData] = useState({
    book_title: "",
    book_author: "",
    caption: "",
    book_category: "",
    rating: "",
    review_body: "",
    image: "",
  });
  const { book_title, book_author, caption, book_category, rating, review_body, image } = reviewData;

  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/reviews/${id}/`);
        const { book_title, book_author, caption, book_category, rating, review_body, image, is_owner } = data;

        is_owner ? setReviewData({ book_title, book_author, caption, book_category, rating, review_body, image }) : history.push("/");
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setReviewData({
        ...reviewData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("book_title", book_title);
    formData.append("book_author", book_author);
    formData.append("caption", caption);
    formData.append("book_category", book_category);
    formData.append("rating", rating);
    formData.append("review_body", review_body);

    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`/reviews/${id}/`, formData);
      history.push(`/reviews/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const otherFields = (
    <div className="text-center">
      < Form.Group>
        <Form.Label>Book Title</Form.Label>
        <Form.Control
          type="text"
          name="book_title"
          value={book_title}
          onChange={handleChange}
        />
      </Form.Group>
        {errors?.book_title?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
      ))}

      <Form.Group>
        <Form.Label>Book Author</Form.Label>
        <Form.Control
          type="text"
          name="book_author"
          value={book_author}
          onChange={handleChange}
        />
      </Form.Group>
        {errors?.book_author?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
      ))}

      <Form.Group>
        <Form.Label>Caption</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          name="caption"
          value={caption}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.caption?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Book Category</Form.Label>
        <Form.Control
          as="select"
          name="book_category"
          value={book_category}
          onChange={handleChange}>

          <option value="nonfiction">Non-Fiction</option>
          <option value="fiction">Fiction</option>
          <option value="historicalfiction">Historical Fiction</option>
          <option value="romancenovel">Romance Novel</option>
          <option value="horror">Horror</option>
          <option value="sciencefiction">Science Fiction</option>
          <option value="biography">Biography</option>
          <option value="memoir">Memoir</option>
          <option value="fantasy">Fantasy</option>
          <option value="thriller">Thriller</option>
          <option value="childrensliterature">Children's Literature</option>
          <option value="humor">Humor</option>
          <option value="selfhelp">Self-help</option>
          <option value="yougadultfiction">Young Adult Fiction</option>
          <option value="picturebook">Picture Book</option>
          <option value="other">Other</option>
          
        </Form.Control>
        </Form.Group>
        {errors?.book_category?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
          ))}

        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control 
            as="select"
            name="rating"
            value={rating}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
        </Form.Group>
          {errors?.rating?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
  
        <Form.Group>
          <Form.Label>review_body</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            name="review_body"
            value={review_body}
            onChange={handleChange}
          />
          </Form.Group>
                {errors?.review_body?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Bright}`} type="submit">
        save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <figure>
                <Image className={appStyles.Image} src={image} rounded />
              </figure>
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Bright} btn`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{otherFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{otherFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default ReviewEditForm;
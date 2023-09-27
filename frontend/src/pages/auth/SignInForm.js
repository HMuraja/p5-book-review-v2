import React, { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignUpInForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

const SignInForm = () => {
  const setCurrentUser = useSetCurrentUser();

  const [SignInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const { username, password} = SignInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
      setSignInData({
      ...SignInData,
      [event.target.name]: event.target.value,
      });
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const {data} = await axios.post("/dj-rest-auth/login/", SignInData);
        setCurrentUser(data.user);
        history.push("/");
      } catch (err) {
        setErrors(err.response?.data);
      }
  };

  return (
    <Row className={`${styles.Row} ${styles.Background}`}>
      <Col></Col>
      <Col className={`my-auto py-2 p-md-2`} sm={12} md={6} lg={4}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Sign In</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Button
              variant="dark"
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Sign In
            </Button >

            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
              
            ))}
          </Form>
        </Container>

        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            Don't have an account yet? <span>Sign Up</span>
          </Link>
        </Container>
      </Col>
      <Col>
      </Col>
    </Row>
  );
};

export default SignInForm;
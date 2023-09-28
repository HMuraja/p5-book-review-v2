import React from "react";
import styles from "../../styles/Review.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Col, Media, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Link} from "react-router-dom";
import Avatar from "../../components/Avatar";
// import { MoreDropdown } from "../../components/MoreDropdown";

const Review = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    book_title,
    book_author,
    caption,
    book_category,
    rating,
    review_body,
    image,
    updated_at,
    reviewPage,
    // setReviews,
  } = props;
  const like_id = 1
  const likes_count = 2
  const comments_count = 3
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Review}>
      <Row className="mx-0">
        <Col className={styles.HideOnSmallScreen}>
            <Link to={`/reviews/${id}`}>
                <Card.Img src={image} alt={book_title} />
            </Link>
        </Col>

        <Col>
            <Row>
                <Card.Body>
                    <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55} />
                        {owner}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        {is_owner && reviewPage && (
                            <i className="fas fa-ellipsis-v"/>
                        //   <MoreDropdown
                        //     handleEdit={''}
                        //     handleDelete={''}
                        //   />
                        )}
                    </div>
                    </Media>
                </Card.Body>
            </Row>

            <Row>
                <Col >
                    <Link to={`/reviews/${id}`} className= {styles.HideOnLargeScreen}>
                        <Card.Img src={image} alt={book_title} />
                    </Link>
                    <Card.Body className= {`my-4 ${styles.ReviewSummary}`}>
                        {book_title && 
                            <Card.Title className="text-center my-4"> {book_title}</Card.Title>}
                        {book_author && 
                            <Card.Subtitle className="mb-2 text-muted mb-3">{book_author}</Card.Subtitle>}
                        {book_category!=="other" && 
                            <Card.Subtitle className="mb-2 text-muted mb-3">{book_category}</Card.Subtitle>}
                        {caption && 
                            <Card.Text className="text-muted text-start mb-4">- {caption}</Card.Text>}
                        {rating && 
                            <Card.Text className="text-muted text-start mb-4">
                            {rating}/5
                            <i className= {`fa-solid fa-star ${styles.Star}`} />
                            </Card.Text>}
                    </Card.Body>
                    <div className= {`mt-4 text-center ${styles.ReviewBar}`}>
                            {is_owner ? (
                                <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>You can't like your own review!</Tooltip>}
                                >
                                <i className="far fa-heart" />
                                </OverlayTrigger>
                            ) : like_id ? (
                                <span onClick={''}>
                                    <i className={`fas fa-heart ${styles.Heart}`} />
                                </span>
                            ) : currentUser ? (
                                <span onClick={''}>
                                    <i className={`far fa-heart ${styles.HeartOutline}`} />
                                </span>
                            ) : (
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Log in to like reviews!</Tooltip>}
                                >
                                    <i className="far fa-heart" />
                                </OverlayTrigger>
                            )}
                            {likes_count}
                            <Link to={`/reviews/${id}`}>
                                <i className="far fa-comments" />
                            </Link>
                            {comments_count}
                        </div>
                </Col>
            </Row>
        </Col>

      </Row>
      <Row>
        <Card.Body className={styles.ReviewTitle}>
            <Card.Title >Review:</Card.Title>
            
            {review_body && <Card.Text>{review_body}</Card.Text>}
        </Card.Body>
      </Row>
    </Card>
  );
};

export default Review;
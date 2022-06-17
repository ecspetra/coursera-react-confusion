import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

function RenderDish(dish) {
    if (dish !== null) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else
        return(
            <div></div>
        );

}

function RenderComments(comments) {

    if (comments != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map((item, index) => (
                    <div key={index}>
                        <p>{item.comment}</p>
                        <p>-- {item.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}</p>
                    </div>
                ))}
            </div>
        )
    }
    else {
        return(
            <div></div>
        );
    }

}

const  DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {props.selectedDish !== null && RenderDish(props.dish)}
                </div>
                {props.selectedDish !== null && RenderComments(props.dish.comments)}
            </div>
        </div>
    );
}

export default DishDetail;
import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: props.dishes
        }
    }

    renderDish(dish) {
        if (dish != null) {
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

    renderComments(comments) {

        if (comments != null) {
            console.log(comments);
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map((item, index) => (
                        <div key={index}>
                            <p>{item.comment}</p>
                            <p>-- {item.author} {item.date}</p>
                        </div>
                    ))}
                </div>
            )
        }
        else {
            console.log("oops");
            return(
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                {this.props.selectedDish && this.renderComments(this.props.selectedDish.comments)}
            </div>
        );
    }
}

export default DishDetail;
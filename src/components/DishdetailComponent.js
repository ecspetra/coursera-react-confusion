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
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name}/>
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
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

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    {this.props.selectedDish && this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;
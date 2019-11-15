import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export default function CharacterCard(props) {
  return (
    <Card>
      <CardImg className='main-img' top width="100%" src={props.img} alt="Rick and Mortycharacter image" />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>{props.gender}</CardSubtitle>
        <CardSubtitle>{props.species}</CardSubtitle>
        <CardSubtitle>{props.status}</CardSubtitle>
      </CardBody>
    </Card>
  )
}

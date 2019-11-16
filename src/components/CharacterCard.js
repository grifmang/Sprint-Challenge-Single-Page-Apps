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
    <Card className="grid-view">
      <CardImg className='main-img' width="100%" src={props.img} alt="Rick and Mortycharacter image" />
      <CardBody>
        <CardTitle>Name: {props.name}</CardTitle>
        <CardSubtitle>Gender: {props.gender}</CardSubtitle>
        <CardSubtitle>Species: {props.species}</CardSubtitle>
        <CardSubtitle>Status: {props.status}</CardSubtitle>
      </CardBody>
    </Card>
  )
}

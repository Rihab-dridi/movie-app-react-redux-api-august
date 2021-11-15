import React, { useState } from "react";
import Rate from "./Rate";
import { InputGroup, FormControl } from "react-bootstrap";
export default function Filter() {

  return (
    <>
      <div className="filterContainer">
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <i class="fas fa-search"></i>
          </InputGroup.Text>
          <FormControl
            placeholder="search by title"
            aria-label="Username"
            aria-describedby="basic-addon1"
           
          />
        </InputGroup>
        <Rate/>
      </div>
    </>
  );
}

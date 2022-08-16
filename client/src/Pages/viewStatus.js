import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminView.css";
import {useNavigate } from "react-router-dom";
import React, { useState, useEffect, Component } from "react";

export default function Admin() {
  const companyName = JSON.parse(sessionStorage.getItem("company")) || undefined;

    const history = useNavigate();
    const viewStatus = () =>{
  {history("/AdminView");}}

    return (
        <>
              <Button onClick={viewStatus}>Back</Button>       
              <h1>  {companyName}
</h1>
                      
      </>
  );
}

import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, Component } from "react";
import axios from "axios";

export default function Admin() {



  useEffect(() => {
    const fetchCompanies = () => {
      axios
        .post("http://localhost:5000/api/admin/admin-cards")

        .then((res) => {
          setCompanies(res.data);
        });
    };
    fetchCompanies();
  }, []);

  return (
    <>

    </>
  );
}

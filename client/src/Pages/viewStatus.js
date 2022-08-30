import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminView.css";
import { useNavigate } from "react-router-dom";
import React, {
  useState,
  useEffect,
  Component,
  createContext,
  useReducer,
} from "react";
import axios from "axios";
import { UserContext } from "../App";
import { useContext } from "react";
import "./viewStatus.css";

export default function Admin(props) {
  const user = useContext(UserContext);
  const history = useNavigate();
  const [Companies, setCompanies] = useState();
  const [Services, setServices] = useState();
  sessionStorage.setItem(
    "companyName",
    JSON.stringify(props.props.Company_Name)
  );
  sessionStorage.setItem("companyID", JSON.stringify(props.props.Company_ID));
  const companyName =
    JSON.parse(sessionStorage.getItem("companyName")) || undefined;
  const companyID =
    JSON.parse(sessionStorage.getItem("companyID")) || undefined;
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  const addService = (props) => {
    const ProductName = props.Product_Name;
    const ProductID = props.Product_ID;
    const data = { companyName, companyID, ProductName, ProductID };
    axios
      .post("http://localhost:5000/api/service/addService", data)
      .then((res) => {
        if (res.status === 200) {
        }
      });
    forceUpdate();
  };
  const removeService = (props) => {
    const serviceID = props.Service_ID;
    const data = { serviceID };

    axios
      .post("http://localhost:5000/api/service/removeService", data)
      .then((res) => {
        if (res.status === 200) {
        }
      });
    forceUpdate();
  };

  useEffect(() => {
    const data = { companyID };
    const fetchCompanies = () => {
      axios
        .post("http://localhost:5000/api/admin/admin-services", data)
        .then((res) => {
          setCompanies(res.data);
        });
    };
    fetchCompanies();
  }, [reducerValue]);

  useEffect(() => {
    const data = { companyID, companyName };
    const fetchServices = () => {
      sessionStorage.setItem("companyID", JSON.stringify(companyID));
      sessionStorage.setItem("companyName", JSON.stringify(companyName));
      axios
        .post("http://localhost:5000/api/admin/available-services", data)
        .then((res) => {
          setServices(res.data);
        });
    };
    fetchServices();
  }, [reducerValue]);

  if (!popup)
    return (
      <>
        <button onClick={togglePopup} className="btn-modal">
          Edit services
        </button>
      </>
    );
  if (popup)
    return (
      <>
        <div className="whole">
          <div className="design">
            <div className="overlay">
              <div
                className="modal-content"
                style={{
                  background: "white",
                  height: "auto",
                  width: "auto",
                }}
              >
                <div className="viewTable">
                  <table>
                    <div className="container">
                      <div className="leftdiv">
                        <h1>Active services</h1>
                        <br />
                        {Companies &&
                          Companies.map((element) => {
                            return (
                              <div
                                className="checked"
                                onClick={() => {
                                  removeService(element);
                                  forceUpdate();
                                }}
                              >
                                <label className="card-title">
                                  {element.Product_Name}
                                </label>
                              </div>
                            );
                          })}
                      </div>
                      <div className="rightdiv">
                        <div className="right">
                          <h1>Available services</h1>
                          <br />
                        </div>

                        {Services &&
                          Services.map((element) => {
                            return (
                              <div className="notchecked">
                                <label
                                  className="card-title"
                                  onClick={() => {
                                    addService(element);
                                    forceUpdate();
                                  }}
                                >
                                  {element.Product_Name}
                                </label>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </table>
                </div>
                <button className="btn-modal" onClick={togglePopup}>
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

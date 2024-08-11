import React, { useEffect, useState } from "react";
import searchbar from "../assets/search_FILL0_wght300_GRAD0_opsz24@2x.png";
import data from "../patientData.json";
import iconbirth from "../assets/BirthIcon.png";
import iconfemale from "../assets/FemaleIcon.png";
import iconphone from "../assets/PhoneIcon.png";
import iconinsurance from "../assets/InsuranceIcon.png";
import DiagnosisChart from "../DiagnosisChart";
import dotsbar from "../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";
import arrowup from "../assets/ArrowUp.svg";
import arrowdown from "../assets/ArrowDown.svg";
import arrowdown2 from "../assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg";
import respiratorimg from "../assets/respiratory rate.svg";
import tempimg from "../assets/temperature.svg";
import downbtn from "../assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg";

interface Patient {
  name: string;
  profile_picture: string;
  age: number;
  gender: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: {
    month: string;
    year: number;
    blood_pressure: {
      systolic: {
        value: number;
        levels: string;
      };
      diastolic: {
        value: number;
        levels: string;
      };
    };
    heart_rate: {
      value: number;
      levels: string;
    };
    respiratory_rate: {
      value: number;
      levels: string;
    };
    temperature: {
      value: number;
      levels: string;
    };
  }[];
  diagnostic_list: {
    name: string;
    description: string;
    status: string;
  }[];
  lab_results: {
    name: string;
    description: string;
  }[];
}

export const PatientSection: React.FC = () => {
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    setPatient(data[0]); // Use the imported JSON data
  }, []);

  if (!patient) {
    return <div>Loading...</div>;
  }

  const latestDiagnosis = patient.diagnosis_history[0] || {};
  const diagnosticList = patient.diagnostic_list || [];
  const labResults = patient.lab_results || [];

  return (
    <div className="section mt-5 px-3 styled-bg container-fluid">
      <div className="row">
        {/* First Column */}
        <div className="col-lg-3 mx-3 styled-bg-patients">
          <div className="d-flex align-items-center justify-content-between my-3">
            <h1 className="patient-styled-text">Patients</h1>
            <img
              src={searchbar}
              alt="Searchbar"
              className="searchbar"
              style={{ width: "18px", height: "18px" }}
            />
          </div>
          <div className="d-flex align-items-start text-start mb-3 active-patient">
            <img
              src={patient.profile_picture}
              alt="Patient PP"
              style={{ width: "48px", height: "48px" }}
              className="me-3"
            />
            <div className="mt-1">
              <h5 className="mb-0 styled-patient-name">{patient.name}</h5>
              <div className="d-flex">
                <p className="mb-0 styled-gender me-1">{patient.gender},</p>
                <p className="mb-0 styled-age">{patient.age}</p>
              </div>
            </div>
            <img
              src={dotsbar}
              alt="Dotsbar"
              className="ms-auto mt-4 dotsbar"
              style={{ paddingRight: "0.5rem" }}
            />
          </div>
        </div>

        {/* Second Column - Diagnosis Chart */}
        <div className="col-lg-5 styled-bg-column2 ">
          <div className="d-flex justify-content-between my-3">
            <h1 className="patient-container2">Diagnosis History</h1>
          </div>
          <div className="chart-styled-color mx-2">
            <div className="row styled-row ">
              <div className="col-md-12 col-lg-8 d-flex align-items-center">
                <h1 className="blood-pressure-text mx-3 mt-1">
                  Blood Pressure
                </h1>
                <p className="text-months d-flex mx-5 px-3 mt-2">
                  Last 6 months
                  <img
                    src={arrowdown2}
                    alt="arrowdown2"
                    className="mx-3 mt-1 mb-0 arrowdown2"
                  />
                </p>
              </div>
              <div className="col-md-12 col-lg-8">
                {latestDiagnosis && <DiagnosisChart data={latestDiagnosis} />}
              </div>
              <div className="col-md-12 col-lg-4 systolic-diastolic ">
                <h3 className="systolic-text d-flex mb-0 mx-2">
                  <span className="dot1 mx-2 mb-0 mt-1"></span>Systolic
                </h3>
                <h4 className="systolic-value mx-3">
                  {latestDiagnosis.blood_pressure?.systolic?.value || "N/A"}
                </h4>
                <p className="systolic-level d-flex mx-2">
                  <img src={arrowup} alt="" className="mt-1 mx-1" />
                  {latestDiagnosis.blood_pressure?.systolic?.levels || "N/A"}
                </p>
                <span className="border-between text-center"></span>
                <h3 className="diastolic-text d-flex mt-3 mx-2 mb-0">
                  <div className="dot2 mx-2 mb-0 mt-1"></div>Diastolic
                </h3>
                <h4 className="diastolic-value mx-3">
                  {latestDiagnosis.blood_pressure?.diastolic?.value || "N/A"}
                </h4>
                <p className="diastolic-level d-flex mx-2 ">
                  <img src={arrowdown} alt="" className="mt-1 mx-1 mb-0" />
                  {latestDiagnosis.blood_pressure?.diastolic?.levels || "N/A"}
                </p>
              </div>
            </div>
          </div>
          {/* CARDS */}
          <div className="row align-items-center">
            <div className="col-3 styled-card-img1 mt-2 mx-3 py-2 px-3 mx-4">
              <img src={respiratorimg} alt="" className="text-start" />
              <h4 className="mt-2">Respiratory rate</h4>
              <div className="patient-rate mt-3">
                {latestDiagnosis.respiratory_rate?.value || "N/A"} bpm
              </div>
              <div className="patient-levels mt-3">
                {latestDiagnosis.respiratory_rate?.levels || "N/A"}
              </div>
            </div>
            <div className="col-3 styled-card-img2 mt-2 mx-1 py-2 px-3 mx-4">
              <img src={tempimg} alt="" className="text-start" />
              <h4 className="mt-2">Temperature</h4>
              <div className="patient-rate mt-3">
                {latestDiagnosis.temperature?.value || "N/A"} °F
              </div>
              <div className="patient-levels mt-2">
                {latestDiagnosis.temperature?.levels || "N/A"}
              </div>
            </div>
            <div className="col-3 styled-card-img3 mt-2 mx-1 py-2 px-3 mx-4">
              <img src={tempimg} alt="" className="text-start" />
              <h4 className="mt-2">Temperature</h4>
              <div className="patient-rate mt-3">
                {latestDiagnosis.temperature?.value || "N/A"} °F
              </div>
              <div className="patient-levels mt-2">
                {latestDiagnosis.temperature?.levels || "N/A"}
              </div>
            </div>
          </div>
        </div>
        {/* Third Column */}
        <div className="col-lg-3 styled-patient-info mx-3">
          <div className="text-center my-3 mx-5">
            <img
              src={patient.profile_picture}
              alt="Patient Profile Picture"
              style={{ width: "200px", height: "200px" }}
            />
            <h1 className="patient-container3 mt-2">{patient.name}</h1>
            <div className="d-flex flex-column align-items-center justify-content-center mt-2">
              <div className="d-flex align-items-center mb-2 w-100 my-2">
                <img
                  src={iconbirth}
                  alt="Birth Icon"
                  style={{ width: "42px", height: "42px" }}
                  className="me-2"
                />
                <div className="text-start flex-grow-1">
                  <h5 className="mb-1 info-section">Date Of Birth</h5>
                  <p className="mb-0 patient-info mt-2">
                    {patient.date_of_birth}
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2 w-100">
                <img
                  src={iconfemale}
                  alt="Gender Icon"
                  style={{ width: "42px", height: "42px" }}
                  className="me-2"
                />
                <div className="text-start flex-grow-1">
                  <h5 className="mb-1 info-section">Gender</h5>
                  <p className="mb-0 patient-info mt-2">{patient.gender}</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2 w-100">
                <img
                  src={iconphone}
                  alt="Phone Icon"
                  style={{ width: "42px", height: "42px" }}
                  className="me-2"
                />
                <div className="text-start flex-grow-1">
                  <h5 className="mb-1 info-section">Contact Info.</h5>
                  <p className="mb-0 patient-info mt-2">
                    {patient.phone_number}
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2 w-100">
                <img
                  src={iconphone}
                  alt="Emergency Contact Icon"
                  style={{ width: "42px", height: "42px" }}
                  className="me-2"
                />
                <div className="text-start flex-grow-1">
                  <h5 className="mb-1 info-section">Emergency Contacts</h5>
                  <p className="mb-0 patient-info mt-2">
                    {patient.emergency_contact}
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2 w-100">
                <img
                  src={iconinsurance}
                  alt="Insurance Icon"
                  style={{ width: "42px", height: "42px" }}
                  className="me-2"
                />
                <div className="text-start flex-grow-1">
                  <h5 className="mb-1 info-section">Insurance Provider</h5>
                  <p className="mb-0 patient-info mt-2">
                    {patient.insurance_type}
                  </p>
                </div>
              </div>
              <button className="styled-button mt-4 text-center mb-5">
                Show All Information
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* DIAGNOSTIC LIST */}
      <div className="row mt-4 styled-diagnostic-container text-center align-items-center justify-content-center">
        <div className="col-lg-10 diagnostic-list px-3 py-3">
          <h2 className="diagnostic-list-title text-start my-3">
            Diagnostic List
          </h2>
          <div className="info-border py-3 px-2 mt-4">
            <h4>Problem/Diagnosis</h4>
            <h4>Description</h4>
            <h4>Status</h4>
          </div>
          <div className="diagnostic-items px-2 mt-4">
            {diagnosticList.map((item, index) => (
              <div className="diagnostic-item py-2" key={index}>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.status}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-2 styled-lab-res">
          <h2 className="lab-result-title mt-3 px-2">Lab Result</h2>
          <div className="lab-res-items py-2 text-start px-2">
            {labResults.map((item, index) => (
              <div key={index} className="lab-res-item">
                <div className="lab-item-content my-3 py-2 px-2">
                  <h3 className="lab-item-name">{item.name}</h3>
                  <img src={downbtn} alt="" />
                </div>
                <div className="lab-desc py-2 px-2">
                  <h3 className="lab-item-description">{item.description}</h3>
                  <img src={downbtn} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

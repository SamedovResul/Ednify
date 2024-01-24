import React, { useState, useCallback } from "react";
import { sendEmail } from "./email";
import { useFormik } from "formik";
import { ValidationSchema } from "./ValidationSchema";

const RequestDemo = ({ setdata, data }) => {
  let [Class, setClass] = useState([]);
  let [Time, setTime] = useState([]);

  // formik
  const formik = useFormik({
    initialValues: {
      companyName: "",
      studentCount: "",
      name: "",
      surName: "",
      email: "",
      phone: "",
      contactTime: "",
    },
    validationSchema: ValidationSchema,
  });
  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  const addFunction = (name) => {
    setClass([...Class, name]);
    let boolean = data.features.filter((key) => key === name);
    if (!boolean.includes(name)) {
      setdata({
        ...data,
        features: [...data.features, name],
      });
    } else {
      data.features.splice(data.features.indexOf(name), 1);
      setdata({
        ...data,
        features: [...data.features],
      });
    }
  };
  const addFunctionForNumber = (name) => {
    setTime([...Time, name]);
    let boolean = data.contactTime.filter((key) => key === name);
    if (!boolean.includes(name)) {
      // console.log(data.contactTime);

      setdata({
        ...data,
        contactTime: [...data.contactTime, name],
      });
      setInputValue("contactTime", "var");
    } else {
      setInputValue("contactTime", data.contactTime.length > 1 ? "var" : "");
      data.contactTime.splice(data.contactTime.indexOf(name), 1);
      setdata({
        ...data,
        contactTime: [...data.contactTime],
      });
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    sendEmail(data,setdata);
  };

  console.log(data.contactTime.length);

  return (
    <main>
      <section className="demo-form-section ">
        <div className="demo-form-con">
          <div className="form-title">
            <h2> Welcome </h2>
          </div>

          <div className="form-description">
            <p>
            With Edinify, you can easily manage your center's monthly reports, customer/employee registration, payroll, attendance, tracking and more on a centralized platform.
            </p>
          </div>

          <div className="horizontal-divider"></div>

          <form action="">
            <div className="form-section">
              <h4 htmlFor="">
                1. What features do you want to enable for your learning center?
              </h4>

              <div className="choices-con">
                <div
                  className={`choice-btn ${
                    data.features
                      .filter((key) => {
                        return key === "Payment notices" ? true : false;
                      })
                      .includes("Payment notices")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addFunction("Payment notices")}
                >
                  Payment notices
                </div>
                <div
                  className={`choice-btn ${
                    data.features
                      .filter((key) => {
                        return key === "Dashboard / Analytics" ? true : false;
                      })
                      .includes("Dashboard / Analytics")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addFunction("Dashboard / Analytics")}
                >
                  Dashboard / analytics
                </div>
                <div
                  className={`choice-btn ${
                    data.features
                      .filter((key) => {
                        return key === "Employee / Customer schedules"
                          ? true
                          : false;
                      })
                      .includes("Employee / Customer schedules")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addFunction("Employee / Customer schedules")}
                >
                  Employee / Customer schedules
                </div>
                <div
                  className={`choice-btn ${
                    data.features
                      .filter((key) => {
                        return key === "Attendance control" ? true : false;
                      })
                      .includes("Attendance control")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addFunction("Attendance control")}
                >
                  Attendance control
                </div>
                <div
                  className={`choice-btn ${
                    data.features
                      .filter((key) => {
                        return key === "Birthday notifications" ? true : false;
                      })
                      .includes("Birthday notifications")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addFunction("Birthday notifications")}
                >
                  Birthday notifications
                </div>
                <div
                  className={`choice-btn ${
                    data.features
                      .filter((key) => {
                        return key === "Student interface" ? true : false;
                      })
                      .includes("Marketplace interface")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addFunction("Marketplace interface")}
                >
                  Marketplace interface
                </div>
              </div>
            </div>

            <div className="horizontal-divider"></div>

            <div className="form-section">
              <h4>2. About the company</h4>

              <div className="input-boxes-con">
                <div className="input-box">
                  <label htmlFor="">Company name</label>
                  <input
                    value={data.companyName}
                    type="text"
                    onChange={(e) => {
                      setdata({ ...data, companyName: e.target.value });
                      setInputValue("companyName", e.target.value);
                    }}
                    onBlur={() => formik.setFieldTouched("companyName", true)}
                  />
                </div>
                {formik.errors.companyName && formik.touched.companyName && (
                  <small className="err-message">
                    {formik.errors.companyName}
                  </small>
                )}

                <div className="input-box">
                  <label htmlFor=""> Number of customer </label>
                  <select
                  value={data.studentCount}
                    onChange={(e) => {
                      setdata({ ...data, studentCount: e.target.value });
                      setInputValue("studentCount", e.target.value);
                    }}
                    onBlur={() => formik.setFieldTouched("studentCount", true)}
                  >
                    <option></option>
                    <option>20 or less</option>
                    <option> between 21 and 50 </option>
                    <option> between 51 and 100</option>
                    <option>between 101 and 500</option>
                    <option>500 and more</option>
                  </select>
                </div>
                {formik.errors.studentCount && formik.touched.studentCount && (
                  <small className="err-message">
                    {formik.errors.studentCount}
                  </small>
                )}
              </div>
            </div>

            <div className="form-section">
              <h4 htmlFor="">3.Contact information</h4>

              <div className="input-boxes-con">
                <div className="input-box">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => {
                      setdata({ ...data, name: e.target.value });
                      setInputValue("name", e.target.value);
                    }}
                    onBlur={() => formik.setFieldTouched("name", true)}
                  />
                </div>
                {formik.errors.name && formik.touched.name && (
                  <small className="err-message">{formik.errors.name}</small>
                )}

                <div className="input-box">
                  <label htmlFor="">Surname</label>
                  <input
                    type="text"
                    value={data.surName}
                    onChange={(e) => {
                      setdata({ ...data, surName: e.target.value });
                      setInputValue("surName", e.target.value);
                    }}
                    onBlur={() => formik.setFieldTouched("surName", true)}
                  />
                </div>
                {formik.errors.surName && formik.touched.surName && (
                  <small className="err-message">{formik.errors.surName}</small>
                )}

                <div className="input-box">
                  <label htmlFor="">Email</label>
                  <div className="input-with-checkbox">
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => {
                        setdata({ ...data, email: e.target.value });
                        setInputValue("email", e.target.value);
                      }}
                      onBlur={() => formik.setFieldTouched("email", true)}
                    />
                  </div>
                </div>
                {formik.errors.email && formik.touched.email && (
                  <small className="err-message">{formik.errors.email}</small>
                )}

                <div className="input-box">
                  <label htmlFor="">Phone</label>
                  <div className="input-with-checkbox">
                    <input
                      type="number"
                      value={data.phone}
                      onChange={(e) => {
                        setdata({ ...data, phone: e.target.value });
                        setInputValue("phone", e.target.value);
                      }}
                      onBlur={() => formik.setFieldTouched("phone", true)}
                    />
                  </div>
                </div>
                {formik.errors.phone && formik.touched.phone && (
                  <small className="err-message">{formik.errors.phone}</small>
                )}
              </div>
            </div>

            <div className="horizontal-divider"></div>

            <div className="form-section">
              <h4 htmlFor="">
                5. When can we contact you?
                <span>Lots of choices</span>
              </h4>

              <div className="choices-con">
                <div
                  className={`choice-btn ${
                    data.contactTime
                      .filter((key) => {
                        return key === "09:00-11:00" ? true : false;
                      })
                      .includes("09:00-11:00")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addFunctionForNumber("09:00-11:00")}
                >
                  09:00-11:00
                </div>

                <div
                  className={`choice-btn ${
                    data.contactTime
                      .filter((key) => {
                        return key === "12:00-14:00" ? true : false;
                      })
                      .includes("12:00-14:00")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addFunctionForNumber("12:00-14:00")}
                >
                  12:00-14:00
                </div>

                <div
                  className={`choice-btn ${
                    data.contactTime
                      .filter((key) => {
                        return key === "15:00-17:00" ? true : false;
                      })
                      .includes("15:00-17:00")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addFunctionForNumber("15:00-17:00")}
                >
                  15:00-17:00
                </div>
              </div>
              {formik.errors.contactTime && (
                <small className="err-message">
                  {formik.errors.contactTime}
                </small>
              )}

              <p>*We will contact you on business days (Monday-Friday).</p>
            </div>

            <button
              disabled={!(formik.isValid && data.name)}
              className="submit-btn"
              type="submit"
              onClick={(e) => {
                sendData(e);
              }}
            >
              Send Request{" "}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default RequestDemo;

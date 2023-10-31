import React, { useState, useCallback } from "react";
import { senEmail } from "./email";
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
    senEmail(data);
  };

  console.log(data.contactTime.length);

  return (
    <main>
      <section className="demo-form-section ">
        <div className="demo-form-con">
          <div className="form-title">
            <h2> Xoş gəldiniz </h2>
          </div>

          <div className="form-description">
            <p>
              Edinify ilə Siz mərkəzinizin aylıq hesabatlarını tələbə/müəllim
              qeydiyyatını, müəllimlərin əmək haqlarını, davamiyyətə nəzarəti və
              bunun kimi bir çox işləri mərkəzləşdirilmiş platformada asanlıqla
              idarə edə bilərsiz.
            </p>
          </div>

          <div className="horizontal-divider"></div>

          <form action="">
            <div className="form-section">
              <h4 htmlFor="">
                1. Təhsil mərkəziniz üçün hansı xüsusiyyətləri aktiv etmək
                istəyirsiniz?
              </h4>

              <div className="choices-con">
                <div
                  className={`choice-btn ${
                    data.features
                      .filter((key) => {
                        return key === "Ödəniş bildirişləri" ? true : false;
                      })
                      .includes("Ödəniş bildirişləri")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addFunction("Ödəniş bildirişləri")}
                >
                  Ödəniş bildirişləri
                </div>
                <div
                  className={`choice-btn ${
                    data.features
                      .filter((key) => {
                        return key === "Dashboard / analitika" ? true : false;
                      })
                      .includes("Dashboard / analitika")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addFunction("Dashboard / analitika")}
                >
                  Dashboard / analitika
                </div>
                <div
                  className={`choice-btn ${
                    data.features
                      .filter((key) => {
                        return key === "Müəllim / Tələbə cədvəlləri"
                          ? true
                          : false;
                      })
                      .includes("Müəllim / Tələbə cədvəlləri")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addFunction("Müəllim / Tələbə cədvəlləri")}
                >
                  Müəllim / Tələbə cədvəlləri
                </div>
                <div
                  className={`choice-btn ${
                    data.features
                      .filter((key) => {
                        return key === "Davamiyyətə nəzarət" ? true : false;
                      })
                      .includes("Davamiyyətə nəzarət")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addFunction("Davamiyyətə nəzarət")}
                >
                  Davamiyyətə nəzarət
                </div>
                <div
                  className={`choice-btn ${
                    data.features
                      .filter((key) => {
                        return key === "Ad günü bildirişləri" ? true : false;
                      })
                      .includes("Ad günü bildirişləri")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addFunction("Ad günü bildirişləri")}
                >
                  Ad günü bildirişləri
                </div>
                <div
                  className={`choice-btn ${
                    data.features
                      .filter((key) => {
                        return key === "Tələbə interfeysi" ? true : false;
                      })
                      .includes("Tələbə interfeysi")
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addFunction("Tələbə interfeysi")}
                >
                  Tələbə interfeysi
                </div>
              </div>
            </div>

            <div className="horizontal-divider"></div>

            <div className="form-section">
              <h4>2. Şirkət haqqında</h4>

              <div className="input-boxes-con">
                <div className="input-box">
                  <label htmlFor="">Şirkət adı</label>
                  <input
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
                  <label htmlFor="">Tələbə sayı</label>
                  <select
                    onChange={(e) => {
                      setdata({ ...data, studentCount: e.target.value });
                      setInputValue("studentCount", e.target.value);
                    }}
                    onBlur={() => formik.setFieldTouched("studentCount", true)}
                  >
                    <option></option>
                    <option>20-dən azdır</option>
                    <option>21 ilə 50 arasında</option>
                    <option>51-dən 100-ə qədər</option>
                    <option>101-dən 500-ə qədər</option>
                    <option>500-dən çox</option>
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
              <h4 htmlFor="">3.Əlaqə məlumatı</h4>

              <div className="input-boxes-con">
                <div className="input-box">
                  <label htmlFor="">Ad</label>
                  <input
                    type="text"
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
                  <label htmlFor="">Soyad</label>
                  <input
                    type="text"
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
                  <label htmlFor="">Telefon</label>
                  <div className="input-with-checkbox">
                    <input
                      type="number"
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
                5. Sizinlə nə vaxt əlaqə saxlaya bilərik?
                <span>Çoxlu seçim</span>
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

              <p>*İş günləri (bazar ertəsi-cümə) sizinlə əlaqə saxlayacağıq.</p>
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

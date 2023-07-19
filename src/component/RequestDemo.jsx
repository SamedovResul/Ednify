import React from 'react'

const RequestDemo = () => {
  return (
    <main>
        <section className="demo-form-section">
            <div className="demo-form-con">
                <div className="form-title">
                    <h2>Welcome to Ednify!</h2>
                </div>

                <div className="form-description">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. 
                        Voluptatum, nobis?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod, 
                        cupiditate laborum labore corporis fugit?
                    </p>
                </div>

                <div className="horizontal-divider"></div>

                <form action="">
                    <div className="form-section">
                        <h4 htmlFor=''>
                            1. Which Course features do you want to enable?
                            <span>Multiple choice</span>
                        </h4>

                        <div className="choices-con">
                            <div className="choice-btn">Attendance</div>
                            <div className="choice-btn">Communications</div>
                            <div className="choice-btn">Attendance</div>
                            <div className="choice-btn">Schedules & Shifts</div>
                            <div className="choice-btn">Attendance</div>
                            <div className="choice-btn">Schedules & Shifts</div>
                        </div>
                    </div>
                
                    <div className="form-section">
                        <h4 for="">
                            2. How did you know about Clockster?
                            <span>Multiple choice</span>
                        </h4>

                        <div className="choices-con">
                            <div className="choice-btn">Attendance</div>
                            <div className="choice-btn">Communications</div>
                            <div className="choice-btn">Attendance</div>
                            <div className="choice-btn">Schedules & Shifts</div>
                            <div className="choice-btn">Attendance</div>
                            <div className="choice-btn">Schedules & Shifts</div>
                        </div>
                    </div>

                    <div className="horizontal-divider"></div>

                    <div className="form-section">
                        <h4 for="">
                            3. About the company
                        </h4>

                        <div className="input-boxes-con">
                        <div className="input-box">
                            <label for="">Company Name</label>
                            <input type="text"/>
                        </div>

                        <div className="input-box">
                            <label for="">Business area</label>
                            <select name="" id="">
                                <option></option>
                                <option>1. Hotels</option>
                                <option>2. Medical centers and clinics</option>
                                <option>3. Hotels</option>
                                <option>4. Medical centers and clinics</option>
                            </select>
                        </div>

                        <div className="input-box">
                            <label for="">Number of employees</label>
                            <select>
                                <option></option>
                                <option>less than 20</option>
                                <option>21 to 50</option>
                                <option>51 to 100</option>
                                <option>101 to 500</option>
                                <option>more than 500</option>
                            </select>
                        </div>

                        <div className="input-box">
                            <label for="">Number of outlets</label>
                            <select>
                                <option></option>
                                <option>1</option>
                                <option>2-3</option>
                                <option>4 or more</option>
                            </select>
                        </div>
                        </div>
                    </div>
                
                    <div className="form-section">
                        <h4 for="">
                            4. Contact information
                        </h4>

                        <div className="input-boxes-con">
                        <div className="input-box">
                            <label for="">First name</label>
                            <input type="text" />
                        </div>

                        <div className="input-box">
                            <label for="">Last name</label>
                            <input type="text" />
                        </div>

                        <div className="input-box">
                            <label for="">Email</label>
                            <div className="input-with-checkbox">
                                <input type="email" />
                                <div className="checkbox-con">
                                    <input type="checkbox" id="emailCheckbox" name="email" />
                                    <label for="emailCheckbox">Please send me an offer by email</label>
                                </div>
                            </div>
                        </div>

                        <div className="input-box">
                            <label for="">Phone</label>
                            <div className="input-with-checkbox">
                                <input type="tel" />
                                <div className="checkbox-con">
                                    <input type="checkbox" id="telCheckbox" name="tel"/>
                                    <label for="telCheckbox">Just text, no call</label>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="horizontal-divider"></div>

                    <div className="form-section">
                        <h4 htmlFor="">
                            5. What time may we contact you?
                            <span>Multiple choice</span>
                        </h4>

                        <div className="choices-con">
                            <div className="choice-btn">09:00-11:00</div>
                            <div className="choice-btn">2:00-14:00</div>
                            <div className="choice-btn">15:00-17:00</div>
                        </div>

                        <p>*We shall contact you on business days (Monday-Friday)</p>
                    </div>

                    <button className="submit-btn" type="submit">Send Request </button>
                </form>
            </div>
        </section>

    </main>
  )
}

export default RequestDemo
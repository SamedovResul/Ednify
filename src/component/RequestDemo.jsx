import React from 'react'

const RequestDemo = () => {
  return (
    <main>
        <section className="demo-form-section">
            <div className="demo-form-con">
                <div className="form-title">
                    <h2> Xoş gəldiniz </h2>
                </div>

                <div className="form-description">
                    <p>
                      Edinify ilə siz tələbə qeydiyyatı, müəllimlərin qeydiyyatı,
                       kursun idarə edilməsi, qiymətləndirmə və statistik məlumatları asanlıqla 
                       idarə edə bilərsiniz.
                    </p>
                </div>

                <div className="horizontal-divider"></div>

                <form action="">
                    <div className="form-section">
                        <h4 htmlFor=''>
                            1.  Təhsil mərkəziniz üçün hansı xüsusiyyətləri+ aktiv etmək istəyirsiniz?
                        </h4>

                        <div className="choices-con">
                            <div className="choice-btn">Tələbə qeydiyyatı</div>
                            <div className="choice-btn">Ödəniş bildirişləri</div>
                            <div className="choice-btn">Müəllim qeydiyyatı</div>
                            <div className="choice-btn">Müəllim / Tələbə cədvəlləri</div>
                            <div className="choice-btn">Davamiyyətə nəzarət</div>
                            <div className="choice-btn">Ad günü bildirişləri</div>
                        </div>
                    </div>
                

                    <div className="horizontal-divider"></div>

                    <div className="form-section">
                        <h4 for="">
                            2. Şirkət haqqında
                        </h4>

                        <div className="input-boxes-con">
                        <div className="input-box">
                            <label for="">Şirkət Adı</label>
                            <input type="text"/>
                        </div>


                        <div className="input-box">
                            <label for="">Tələbə sayı</label>
                            <select>
                                <option></option>
                                <option>20-dən azdır</option>
                                <option>21 ilə 50 arasında</option>
                                <option>51-dən 100-ə qədər</option>
                                <option>101-dən 500-ə qədər</option>
                                <option>500-dən çox</option>
                            </select>
                        </div>

                        </div>
                    </div>
                
                    <div className="form-section">
                        <h4 for="">
                            3.Əlaqə məlumatı
                        </h4>

                        <div className="input-boxes-con">
                        <div className="input-box">
                            <label for="">Ad</label>
                            <input type="text" />
                        </div>

                        <div className="input-box">
                            <label for="">Soyad</label>
                            <input type="text" />
                        </div>

                        <div className="input-box">
                            <label for="">Email</label>
                            <div className="input-with-checkbox">
                                <input type="email" />
                            </div>
                        </div>

                        <div className="input-box">
                            <label for="">Telefon</label>
                            <div className="input-with-checkbox">
                                <input type="tel" />
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="horizontal-divider"></div>

                    <div className="form-section">
                        <h4 htmlFor="">
                            5. Sizinlə nə vaxt əlaqə saxlaya bilərik?
                            <span>Çoxlu seçim</span>
                        </h4>

                        <div className="choices-con">
                            <div className="choice-btn">09:00-11:00</div>
                            <div className="choice-btn">2:00-14:00</div>
                            <div className="choice-btn">15:00-17:00</div>
                        </div>

                        <p>*İş günləri (bazar ertəsi-cümə) sizinlə əlaqə saxlayacağıq.</p>
                    </div>

                    <button className="submit-btn" type="submit">Send Request </button>
                </form>
            </div>
        </section>

    </main>
  )
}

export default RequestDemo
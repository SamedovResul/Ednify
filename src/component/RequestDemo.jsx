import React,{useState} from 'react'
import { senEmail } from '../email/email'


const RequestDemo = ({setdata,data}) => {
	let [Class, setClass] = useState([])
	let [Time, setTime] = useState([])

	
	const addFunction = (name) =>{
		setClass([...Class, name])
		let boolean =  data.features.filter((key) => key === name)
		if(!boolean.includes(name)){
			// console.log(data.features);
			setdata({
				...data,
				features:[ ...data.features,name]
			})
		}else{
			data.features.splice(data.features.indexOf(name), 1) 
			setdata({
				...data,
				features:[ ...data.features]
			})
		}
	}

	const addFunctionForNumber = (name) =>{
		setTime([...Time, name])
		let boolean =  data.contactTime.filter((key) => key === name)
		if(!boolean.includes(name)){
			// console.log(data.contactTime);
			setdata({
				...data,
				contactTime:[ ...data.contactTime,name]
			})
		}else{
			data.contactTime.splice(data.contactTime.indexOf(name), 1) 
			setdata({
				...data,
				contactTime:[ ...data.contactTime]
			})
		}
	}
	const sendData = (e) =>{
		e.preventDefault()
		console.log(true)
		senEmail(data)
	}
	
	console.log(data);
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
											1.  Təhsil mərkəziniz üçün hansı xüsusiyyətləri aktiv etmək istəyirsiniz?
									</h4>

									<div className="choices-con">
											<div className={ 
												`choice-btn ${data.features.filter((key) => {
													return key === "Ödəniş bildirişləri" ? true : false
												}).includes("Ödəniş bildirişləri") ? 'active': '' }`
											}
												onClick={() =>addFunction("Ödəniş bildirişləri")}>Ödəniş bildirişləri</div>
											<div className={ 
												`choice-btn ${data.features.filter((key) => {
													return key === "Müəllim qeydiyyatı" ? true : false
												}).includes("Müəllim qeydiyyatı") ? 'active': '' }`
											}
												onClick={() =>addFunction("Müəllim qeydiyyatı")}>Müəllim qeydiyyatı</div>
											<div className={ 
												`choice-btn ${data.features.filter((key) => {
													return key === "Müəllim / Tələbə cədvəlləri" ? true : false
												}).includes("Müəllim / Tələbə cədvəlləri") ? 'active': '' }`
											}
												onClick={() =>addFunction("Müəllim / Tələbə cədvəlləri")}>Müəllim / Tələbə cədvəlləri</div>
											<div className={ 
												`choice-btn ${data.features.filter((key) => {
													return key === "Davamiyyətə nəzarət" ? true : false
												}).includes("Davamiyyətə nəzarət") ? 'active': '' }`
											} 
												onClick={() =>addFunction("Davamiyyətə nəzarət")}>Davamiyyətə nəzarət</div>
											<div className={ 
												`choice-btn ${data.features.filter((key) => {
													return key === "Ad günü bildirişləri" ? true : false
												}).includes("Ad günü bildirişləri") ? 'active': '' }`
											} 
												onClick={() =>addFunction("Ad günü bildirişləri")}>Ad günü bildirişləri</div>
									</div>
							</div>

							<div className="horizontal-divider"></div>

							<div className="form-section">
									<h4 >
											2. Şirkət haqqında
									</h4>

									<div className="input-boxes-con">
									<div className="input-box">
											<label htmlFor="">Şirkət Adı</label>
											<input type="text" onChange={(e) => setdata({
												...data,
												companyName:e.target.value
											})}/>
									</div>
									<div className="input-box">
											<label htmlFor="">Tələbə sayı</label>
											<select onChange={(e) => setdata({
												...data,
												studentCount:e.target.value
											})}>
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
									<h4 htmlFor="">
											3.Əlaqə məlumatı
									</h4>

									<div className="input-boxes-con">
									<div className="input-box">
											<label htmlFor="">Ad</label>
											<input type="text" onChange={(e) => setdata({
												...data,
												name:e.target.value
											})} />
									</div>

									<div className="input-box">
											<label htmlFor="">Soyad</label>
											<input type="text" onChange={(e) => setdata({
												...data,
												surName:e.target.value
											})} />
									</div>

									<div className="input-box">
											<label htmlFor="">Email</label>
											<div className="input-with-checkbox">
													<input type="email" onChange={(e) => setdata({
														...data,
														email:e.target.value
													})} />
											</div>
									</div>
									<div className="input-box">
											<label htmlFor="">Telefon</label>
											<div className="input-with-checkbox">
													<input type="number" onChange={(e) => setdata({
														...data,
														phone:e.target.value
													})} />
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
											<div className={ 
											`choice-btn ${data.contactTime.filter((key) => {
												return key === "09:00-11:00" ? true : false
											}).includes("09:00-11:00") ? 'active': '' }`
											}
											onClick={() =>addFunctionForNumber("09:00-11:00")}>09:00-11:00</div>
										<div className={ 
											`choice-btn ${data.contactTime.filter((key) => {
												return key === "2:00-14:00" ? true : false
											}).includes("2:00-14:00") ? 'active': '' }`
											}
											onClick={() =>addFunctionForNumber("2:00-14:00")}>2:00-14:00</div>
										<div className={ 
											`choice-btn ${data.contactTime.filter((key) => {
												return key === "15:00-17:00" ? true : false
											}).includes("15:00-17:00") ? 'active': '' }`
											}
											onClick={() =>addFunctionForNumber("15:00-17:00")}>15:00-17:00</div>
									</div>

									<p>*İş günləri (bazar ertəsi-cümə) sizinlə əlaqə saxlayacağıq.</p>
							</div>

							<button	
								className="submit-btn" 
								type="submit"
								onClick={(e) => {
									sendData(e)
								}}
							>Send Request </button>
						</form>
				</div>
			</section>
				
    </main>
  )
}

export default RequestDemo
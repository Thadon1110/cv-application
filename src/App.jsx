import { useState } from 'react';
import './App.css';

function App() {
	const [name, setName] = useState('Jan Kowalski');
	const [email, setEmail] = useState('jan.kowalski@gmail.com');
	const [phone, setPhone] = useState('123456789');

	const [school, setSchool] = useState('Technikum Mechatroniczne nr 1 Warszawa');
	const [title, setTitle] = useState('Technik Informatyk');
	const [sdate, setSDate] = useState('2015-09-01');
	const [edate, setEDate] = useState('2019-05-04');

	const [company, setCompany] = useState('Nazwa Firmy');
	const [position, setPosition] = useState('Programista');
	const [responsibilities, setResponsibilities] = useState('Pisanie oraz testowanie kodu w JavaScript');
	const [sworkdate, setSWorkdate] = useState('2020-07-01');
	const [eworkdate, setEWorkdate] = useState('2022-05-22');
	const [stillWorking, setStillWorking] = useState(0);

	const handleWorking = () => {
		if (stillWorking == 1) {
			setEWorkdate('');
			document.querySelector('.test').disabled = false;
		} else {
			setEWorkdate('Nadal pracuję');
			document.querySelector('.test').disabled = true;
		}
	};

	return (
		<>
			<h1>CV</h1>

			<div className='cv'>
				<div className='cv__inputs cv__block'>
					<form>
						<h2>Dane Personalne</h2>

						<div className='cv__input'>
							<label htmlFor='edate'>Imię i nazwisko</label>
							<input
								type='text'
								name='name'
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</div>

						<div className='cv__input'>
							<label htmlFor='edate'>Email</label>
							<input
								type='text'
								name='email'
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div>

						<div className='cv__input'>
							<label htmlFor='edate'>Numer telefonu</label>
							<input
								type='text'
								name='phone'
								onChange={(e) => {
									setPhone(e.target.value);
								}}
							/>
						</div>
					</form>

					<form>
						<h2>Edukacja</h2>

						<div className='cv__input'>
							<label htmlFor='edate'>Nazwa szkoły</label>
							<input
								type='text'
								name='school'
								onChange={(e) => {
									setSchool(e.target.value);
								}}
							/>
						</div>

						<div className='cv__input'>
							<label htmlFor='edate'>Tytuł</label>
							<input
								type='text'
								name='title'
								onChange={(e) => {
									setTitle(e.target.value);
								}}
							/>
						</div>

						<div className='cv__input'>
							<label htmlFor='edate'>Data rozpoczęcia nauki</label>
							<input
								type='date'
								name='sdate'
								onChange={(e) => {
									setSDate(e.target.value);
								}}
							/>
						</div>

						<div className='cv__input'>
							<label htmlFor='edate'>Data zakończenia nauki</label>
							<input
								type='date'
								name='edate'
								onChange={(e) => {
									setEDate(e.target.value);
								}}
							/>
						</div>
					</form>

					<form>
						<h2>Doświadczenie</h2>

						<div className='cv__input'>
							<label htmlFor='company'>Nazwa Firmy</label>
							<input
								type='text'
								name='company'
								onChange={(e) => {
									setCompany(e.target.value);
								}}
							/>
						</div>

						<div className='cv__input'>
							<label htmlFor='edate'>Stanowisko</label>
							<input
								type='text'
								name='position'
								onChange={(e) => {
									setPosition(e.target.value);
								}}
							/>
						</div>

						<div className='cv__input'>
							<label htmlFor='edate'>Obowiązki</label>
							<input
								type='text'
								name='responsibilities'
								onChange={(e) => {
									setResponsibilities(e.target.value);
								}}
							/>
						</div>

						<div className='cv__input'>
							<label htmlFor='edate'>Data rozpoczęcia pracy</label>
							<input
								type='date'
								name='sworkdate'
								onChange={(e) => {
									setSWorkdate(e.target.value);
								}}
							/>
						</div>

						<div className='cv__input'>
							<label htmlFor='edate'>Data zakończenia pracy</label>
							<input
								type='date'
								name='eworkdate'
								className='test'
								onChange={(e) => {
									setEWorkdate(e.target.value);
								}}
							/>
						</div>

						<div className='cv__input'>
							<label htmlFor='edate'>Nadal pracujesz?</label>
							<input
								type='checkbox'
								name='stillWorking'
								onChange={(e) => {
									console.log(e);
									if (e.currentTarget.checked) {
										handleWorking();
										setStillWorking(stillWorking + 1);
									} else {
										handleWorking();
										setStillWorking(stillWorking - 1);
									}
								}}
							/>
						</div>
					</form>
				</div>

				<div className='cv__outputs cv__block'>
					<div className='cv__output-personal'>
						<p className='cv__output-name'>{name}</p>
						<div>
							<p className='cv__output-email'>{email}</p>
							<p className='cv__output-phone'>+48 {phone}</p>
						</div>
					</div>

					<div className='cv__output-school cv__output-block'>
						<h3 className='cv__output-headers'>Wykształcenie</h3>
						<p className='cv__output-header cv__output-elements'>{school}</p>
						<p className='cv__output-elements'>{title}</p>
						<p className='cv__output-elements'>{sdate}</p>
						<p className='cv__output-elements'>{edate}</p>
					</div>

					<div className='cv__output-school cv__output-block'>
						<h3 className='cv__output-headers'>Doświadczenie</h3>
						<p className='cv__output-header cv__output-elements'>{company}</p>
						<p className='cv__output-elements'>{position}</p>
						<p className='cv__output-elements'>{responsibilities}</p>
						<p className='cv__output-elements'>{sworkdate}</p>
						<p className='cv__output-elements'>{eworkdate}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

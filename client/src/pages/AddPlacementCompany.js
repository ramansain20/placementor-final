import Footer from "../components/HomeComponents/Footer";
import Form from "../components/AdminComponent/Form"
import react, { useState } from 'react';
import {useNavigate} from "react-router-dom";

export default function AdminRegister() {

	const navigate = useNavigate();
// States for registration

const [name, setName] = useState('');
const [selected_students, setSelected_students] = useState('');
const [description, setDescription] = useState('');
const [year, setYear] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);



// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the selected_student change
const handleSelected_students = (e) => {
	setSelected_students(e.target.value);
	setSubmitted(false);
};
// Handling the selected_student change
const handleDescription = (e) => {
	setDescription(e.target.value);
	setSubmitted(false);
};
// Handling the selected_student change
const handleYear = (e) => {
	setYear(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
 const handleSubmit =async function(e){
	e.preventDefault();
	if (name === '' || selected_students === '' || description=== '' || year==='') {
	setError(true);
	} else {
        const item ={name,selected_students,description,year};
        
        const result=await fetch("http://localhost:3000/placement/add_company",{
            method:'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        console.log(result);

	setSubmitted(true); 
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1> successfully added !!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

  





    return(

  <div>
        <p>Add placement Company  </p>
        <form>
		{/* Labels and inputs for form data */}


		<label >Name</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />

		<label >Selected Student</label>
		<input onChange={handleSelected_students} className="input"
		value={selected_students} type="number" />
		<label >Description </label>
        
		<input onChange={handleDescription} className="input"
		value={description} type="text" />
		<label > Year </label>
		<input onChange={handleYear} className="input"
		value={year} type="number" />

		<button onClick={handleSubmit} type="submit">
		Submit
		</button>
	</form>
    </div>
    )
}
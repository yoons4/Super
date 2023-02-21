import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
export default function App() {
	function countInitial(){
		return 200
	}
	const [number, button] = useState(() => countInitial())
	const [inputNumber, countNumber] = useState("Zero")

	function downNumber(){
		button(newNumber => newNumber - 1)
		countNumber("Down the number")
	}

	function upNumber(){
		button(newNumber => newNumber + 1)
		countNumber("Up the number")
	}

	useEffect(() => {
		console.log("Sangha Yoon");
	}, [number])

	return (
		<>
			<button onClick = {downNumber}>-</button>
			<span>{number}</span>
			<span>{inputNumber}</span>
			<button onClick = {upNumber}>+</button>
		</>
  	);
}


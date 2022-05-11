import React, { useState } from 'react'
import styled from 'styled-components'
import Data from './data'
function App() {
	const [data] = useState(Data)
	const [text, setText] = useState([])
	const [number, setNumber] = useState(0)

	function handleSubmit(e) {
		e.preventDefault()
		setText(data.slice(0, number))
	}

	function handleChange(e) {
		setNumber(e.target.value)
	}

	return (
		<Main>
			<div className="title">
				<h1>Tired of boring lorem ipsum?</h1>
			</div>
			<form className="menu" onSubmit={handleSubmit}>
				<label htmlFor="number">Paragraphs:</label>
				<input
					id="number"
					type="number"
					max={data.length}
					min="0"
					value={number}
					onChange={handleChange}
				/>
				<button>generate</button>
			</form>
			{text.map((paragraph, index) => (
				<p key={index} className="paragraph">
					{paragraph}
				</p>
			))}
		</Main>
	)
}

const Main = styled.main`
	max-width: 90vw;
	margin: 3rem auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: var(--clr-primary-1);

	.title > h1 {
		font-size: 1.4rem;
		text-transform: uppercase;
		font-weight: bold;
		margin-bottom: 2rem;
	}

	.menu {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		margin-bottom: 30px;
	}

	.menu > label {
		font-size: 1.25rem;
		letter-spacing: 2px;
	}

	.menu > input {
		font-size: 1.25rem;
		backgroud-color: white;
		color: inherit;
		border: none;
		border-radius: 3px;
		width: 4rem;
		padding: 0.25rem 0.5rem;
	}

	.menu > button {
		font-size: 1rem;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: black;
		text-align: center;
		border: 2px solid var(--clr-primary-5);
		border-radius: 4px;
		background-color: var(--clr-primary-5);
		color: inherit;
		padding: 8px 15px;
		cursor: pointer;
		transition: all linear 300ms;
	}

	.menu > button:hover {
		background-color: var(--clr-primary-8);
		border-color: var(--clr-primary-8);
		color: var(--clr-primary-5);
	}

	.paragraph {
		margin-bottom: 20px;
		line-height: 1.7;
	}

	@media screen and (min-width: 800px) {
		max-width: 700px;

		.title > h1 {
			font-size: 2rem;
		}

		.menu > label {
			font-size: 1.5rem;
		}

		.menu > input {
			font-size: 1.25rem;
			transform: translateY(10%);
		}

		.menu > button {
			transform: translateY(5%);
		}
	}
`

export default App

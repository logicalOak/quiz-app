import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { decode } from 'html-entities';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { changeScore } from '../redux/actions';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const Questions = () => {
	const {
		question_category,
		question_difficulty,
		question_type,
		amount_of_question,
		score,
	} = useSelector((state) => state);

	let apiUrl = `/api.php?amount=${amount_of_question}`;
	if (question_category) {
		apiUrl = apiUrl.concat(`&category=${question_category}`);
	}

	if (question_difficulty) {
		apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
	}

	if (question_type) {
		apiUrl = apiUrl.concat(`&type=${question_type}`);
	}
	const { response, loading } = useAxios({ url: apiUrl });

	const [questionIndex, setQuestionIndex] = useState(0);
	const [options, setOptions] = useState([]);
	const dispatch = useDispatch();
	console.log(response);

	useEffect(() => {
		if (response?.results.length) {
			const question = response.results[questionIndex];
			let answers = [...question.incorrect_answers];
			answers.splice(
				getRandomInt(question.incorrect_answers.length),
				0,
				question.correct_answer
			);
			setOptions(answers);
		}
	}, [response, questionIndex]);

	if (loading) {
		return (
			<Box mt={20}>
				<CircularProgress />
			</Box>
		);
	}

	const handleClickAnswer = (e) => {
		const question = response.results[questionIndex];
		if (e.target.textContent === question.correct_answer) {
			dispatch(changeScore(score + 1));
			console.log(score);
		}
		if (questionIndex + 1 < response.results.length) {
			e.preventDefault();
			setQuestionIndex(questionIndex + 1);
		}
	};

	return (
		<>
			<Box>
				<Typography variant='h4'>
					Question {questionIndex + 1}
				</Typography>
				<Typography mt={5}>
					{decode(response.results[questionIndex].question)}
				</Typography>
				{options.map((data, id) => (
					<Box mt={2} key={id}>
						<Link to='/score'>
							<Button
								onClick={handleClickAnswer}
								variant='contained'
							>
								{decode(data)}
							</Button>
						</Link>
					</Box>
				))}
				<Box mt={5}>
					Score: {score} / {response.results.length}
				</Box>
			</Box>
		</>
	);
};

export default Questions;

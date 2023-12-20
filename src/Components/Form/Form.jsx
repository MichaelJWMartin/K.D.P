import React from 'react'
import { useForm } from 'react-hook-form';
import * as emailjs from 'emailjs-com';
import styled from 'styled-components';

const StyledForm = styled.div`
	width: 50vw;
	min-width: 250px;

	label {
		color: ${({theme}) => theme.lightYellow};
		display: block;
		font-size: 14px;
		height: 16px;
		margin-top: 20px;
		margin-bottom: 5px;
	}

	input {
		background: transparent;
		border: 0;
		color: ${({theme}) => theme.lightYellow};
		font-size: 20px;
		height: 30px;
		line-height: 30px;
		border-bottom: 1px solid ${({theme}) => theme.lightYellow};
		outline: none;
		width: 100%;

		::placeholder {
			color: ${({theme}) => theme.lightYellow};
		}
	}

	input::-moz-focus-inner { 
		border: 0; 
	}
	
	textarea {
		background: transparent;
		border: 0;
		color: ${({theme}) => theme.lightYellow};
		font-size: 20px;
		line-height: 30px;
		border-bottom: 1px solid ${({theme}) => theme.lightYellow};
		outline: none;
		width: 100%;
		overflow:hidden;
		resize:none;

		::placeholder {
			color: ${({theme}) => theme.lightYellow};
		}
	}
`

const StyledDiv = styled.div`
	margin: 1rem 0;

	@media (min-width: 400px) {
		margin: 2rem;
	}
`

const Centre = styled.div`
	display: grid;
	place-items: center;
`

const SubmitButton = styled.button`
appearance: none;
background-color: transparent;
border: 2px solid ${({theme}) => theme.lightYellow};
border-radius: 15px;
box-sizing: border-box;
color: ${({theme}) => theme.lightYellow};
cursor: pointer;
display: inline-block;
font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
font-size: 16px;
font-weight: 600;
line-height: normal;
margin: 0;
min-height: 60px;
min-width: 0;
outline: none;
padding: 16px 24px;
text-align: center;
text-decoration: none;
transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
will-change: transform;

:disabled {
pointer-events: none;
}

:hover {
color: ${({theme}) => theme.navbar};
background-color: ${({theme}) => theme.lightYellow};
box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
transform: translateY(-2px);
}

:active {
box-shadow: none;
transform: translateY(0);
}
`

export const Form = () => {
	const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const onSubmit = async (data) => {
		const { name, email, subject, message } = data;
		try {
			const templateParams = {
				name,
				email,
				subject,
				message
			};

			await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

			reset();
		} catch (e) {
			console.log(e);
		}
	};

  return (
    <StyledForm>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<StyledDiv>
					<input
						id='name'
						type='text'
						name='name'
						{...register('name', {
							required: { value: true, message: 'Please enter your name' },
							maxLength: {
								value: 30,
								message: 'Please use 30 characters or less'
							}
						})}
						placeholder='Name'
					/>
					{errors.name && <span>{errors.name.message}</span>}
				</StyledDiv>
				<StyledDiv>
					<input
						id='email'
						type='email'
						name='email'
						{...register('email', {
							required: true,
							pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
						})}
						placeholder='Email address'
					/>
					{errors.email && (
						<span>Please enter a valid email address</span>
					)}
				</StyledDiv>
				<StyledDiv>
					<input
						id='subject'
						type='text'
						name='subject'
						{...register('subject', {
							required: { value: true, message: 'Please enter a subject' },
							maxLength: {
								value: 75,
								message: 'Subject cannot exceed 75 characters'
							}
						})}
						placeholder='Subject'
					/>
					{errors.subject && (
						<span>{errors.subject.message}</span>
					)}
				</StyledDiv>
				<StyledDiv>
					<textarea
						id='message'
						rows={3}
						name='message'
						{...register('message', {
							required: true
						})}
						placeholder='Message'
					/>
					{errors.message && <span>Please enter a message</span>}
				</StyledDiv>
				<Centre>
					<SubmitButton type='submit'>
						Submit
					</SubmitButton>
				</Centre>
			</form>
	</StyledForm>
  )
}

import React from 'react';

interface ButtonProps {
	label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => (
	<button className='bg-stone-400 p-2 rounded-md'>{label}</button>
);

export default Button;
export type { ButtonProps };

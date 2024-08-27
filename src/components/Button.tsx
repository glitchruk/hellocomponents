import React from 'react';

interface ButtonProps {
	size?: 'xs' | 'sm' | 'md' | 'lg';
	type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
	label: string;
}

const Button: React.FC<ButtonProps> = ({ size = 'md', type = 'primary', label }) => {
	// define base classes
	let classes: string[] = [
		'rounded-lg',
	];

	// add type classes
	switch (type) {
		case 'primary':
			classes.push('bg-blue-500', 'text-white');
			classes.push('hover:bg-blue-600', 'hover:text-white');
			break;
		case 'secondary':
			classes.push('bg-amber-300', 'text-gray-800');
			classes.push('hover:bg-amber-400', 'hover:text-gray-900');
			break;
		case 'success':
			classes.push('bg-green-500', 'text-white');
			classes.push('hover:bg-green-600', 'hover:text-white');
			break;
		case 'danger':
			classes.push('bg-red-500', 'text-white');
			classes.push('hover:bg-red-600', 'hover:text-white');
			break;
		case 'warning':
			classes.push('bg-yellow-500', 'text-white');
			classes.push('hover:bg-yellow-600', 'hover:text-white');
			break;
	}

	// add size classes
	switch (size) {
		case 'xs':
			classes.push('text-xs', 'h-6', 'px-2');
			break;
		case 'sm':
			classes.push('text-sm', 'h-8', 'px-3');
			break;
		case 'md':
			classes.push('text-base', 'h-10', 'px-4');
			break;
		case 'lg':
			classes.push('text-lg', 'h-12', 'px-5');
			break;
	}

	// create button
	return <button className={classes.join(' ')}>{label}</button>;
};

export default Button;
export type { ButtonProps };

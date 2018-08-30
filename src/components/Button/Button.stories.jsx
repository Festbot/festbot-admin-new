import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import Button from './Button.jsx';

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.add('Button', function() {
		return <Button>Hello</Button>;
	});

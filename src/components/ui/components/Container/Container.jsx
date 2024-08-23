import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';
import { containerPropDefs } from './container.props.js';
import { extractProps, getSubtree } from '../Helpers/ExtractProps.js';
import { heightPropDefs, layoutPropDefs, marginPropDefs, widthPropDefs } from '../props/index.js';

const Container = React.forwardRef(({ width, minWidth, maxWidth, height, minHeight, maxHeight, ...props }, forwardedRef) => {
	const { asChild, children, className, ...containerProps } = extractProps(props, containerPropDefs, layoutPropDefs, marginPropDefs);

	const { className: innerClassName, style: innerStyle } = extractProps(
		{ width, minWidth, maxWidth, height, minHeight, maxHeight },
		widthPropDefs,
		heightPropDefs,
	);

	const Comp = asChild ? Slot : 'div';

	return (
		<Comp {...containerProps} ref={forwardedRef} className={classNames('rt-Container', className)}>
			{getSubtree({ asChild, children }, (children) => (
				<div className={classNames('rt-ContainerInner', innerClassName)} style={innerStyle}>
					{children}
				</div>
			))}
		</Comp>
	);
});
Container.displayName = 'Container';

export { Container };

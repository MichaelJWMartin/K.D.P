import React from 'react';
import { X as Close } from 'react-feather';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

import { VisuallyHidden } from '../../Utils';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-content: center;
  padding: 16px;

.backdrop {
  position: absolute;
  inset: 0;
  background: hsl(0deg 0% 0% / 0.75);
}
.dialog {
  position: relative;
  background-color: ${({theme}) => theme.navbar};
	color: ${({theme}) => theme.lightYellow};
  border-radius: 8px;
  padding: 32px;
}
.closeBtn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
	color: ${({theme}) => theme.lightYellow};
  transform: translateY(-100%);
  cursor: pointer;
  background: transparent;
  border: none;
}
`

export const Modal = ({ title, handleDismiss, children }) => {
	const closeBtnRef = React.useRef();

	React.useEffect(() => {
		const currentlyFocusedElem = document.activeElement;

		closeBtnRef.current.focus();

		return () => {
			currentlyFocusedElem?.focus();
		};
	}, []);

	React.useEffect(() => {
		function handleKeyDown(event) {
			if (event.code === 'Escape') {
				handleDismiss();
			}
		}

	window.addEventListener('keydown', handleKeyDown);

	return () => {
			window.removeEventListener('keydown', handleKeyDown);
	};
}, [handleDismiss]);

return (
	<FocusLock>
		<RemoveScroll>
			<StyledModal>
					<div
					className='backdrop'
					onClick={handleDismiss}
					/>
					<div
					className='dialog'
					role="dialog"
					aria-modal="true"
					aria-label={title}
					>
					<button
							ref={closeBtnRef}
							className='closeBtn'
							onClick={handleDismiss}
					>
							<Close />
							<VisuallyHidden>
								Dismiss modal
							</VisuallyHidden>
					</button>
					{children}
					</div>
			</StyledModal>
		</RemoveScroll>
	</FocusLock>
);
}

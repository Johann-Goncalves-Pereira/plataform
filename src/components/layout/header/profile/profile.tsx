import {
	$,
	component$,
	QRLEventHandlerMulti,
	useSignal,
	useStylesScoped$,
} from '@builder.io/qwik'

import Image from '/public/profile/profile.jpg?jsx'
import styles from './profile.scss?inline'

export default component$(() => {
	useStylesScoped$(styles)

	const showDialog = useSignal(false)

	const handleDialog$ = $(() => {
		const dialog = document.getElementById(
			'header__dialog--profile',
		) as HTMLDialogElement

		if (dialog) {
			dialog.open ? dialog.close() : dialog.showModal()
			showDialog.value = dialog.open
		}
	})

	const handleOutDialog$ = $((ev: MouseEvent, el: HTMLDialogElement) => {
		const dimensions = el?.getBoundingClientRect()
		if (
			ev.clientX < dimensions.left ||
			ev.clientX > dimensions.right ||
			ev.clientY < dimensions.top ||
			ev.clientY > dimensions.bottom
		) {
			showDialog.value = el.open
			el.close()
		}
	})

	return (
		<nav
			class='relative'
			role='navigation'
			aria-labelledby='header__button--profile'
		>
			<button
				class='border-1 grid place-items-center overflow-hidden rounded-full border border-surface-100/50 bg-surface-400/50 outline-2 -outline-offset-2 outline-primary-500 focus-visible:outline '
				id='header__button--profile'
				aria-expanded={showDialog.value}
				aria-label='Button show profile menu'
				aria-controls='header__dialog--profile'
				aria-haspopup='true'
				onClick$={handleDialog$}
			>
				<Image
					class='object-cover object-center transition-all'
					alt='Profile Image / Company Icon'
				/>
			</button>
			<dialog
				class='dialog'
				id='header__dialog--profile'
				aria-labelledby='header__button--profile'
				onClick$={handleOutDialog$}
			>
				<ul class=''>
					<li>
						<button>Talk with us</button>
					</li>
					<li>
						<button>Check in</button>
					</li>
					<li>
						<button>Lorem ipsum dolor</button>
					</li>
					<li>
						<button>Log Out</button>
					</li>
				</ul>
			</dialog>
		</nav>
	)
})

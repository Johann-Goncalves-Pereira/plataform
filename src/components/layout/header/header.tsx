import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik'
import { HiCog6ToothOutline } from '@qwikest/icons/heroicons'

import ColorScheme from './color-scheme/color-scheme'
import Search from './search/search'
import Arrows from './arrows/arrows'
import Home from './home/home'

import styles from './header.scss?inline'

import Image from '/public/profile/profile.jpg?jsx'

export default component$(() => {
	useStyles$(styles)
	return (
		<header class='body__header grid grid-cols-[auto_1fr_auto] place-items-center gap-1'>
			<Arrows />
			<div class='flex items-center gap-1'>
				<Home />
				<Search />
				<ColorScheme />
			</div>

			<div class='flex items-center gap-1'>
				<a
					href='/settings'
					class='hover:bg-surface-100/50 outline-surface-300/50 focus-within:bg-surface-100/50 grid place-items-center rounded-full outline-1 outline-offset-0 focus-visible:outline'
					aria-label='Go to Settings page'
				>
					<HiCog6ToothOutline
						aria-hidden='true'
						focusable='false'
						class='stroke-surface-300/50 pointer-events-none h-2/3 w-2/3'
					/>
				</a>

				<Profile />
			</div>
		</header>
	)
})

export const Profile = component$(() => {
	const showDialog = useSignal(false)

	const handleDialog$ = $(() => {
		const dialog = document.getElementById(
			'header__profile--dialog',
		) as HTMLDialogElement

		if (dialog) {
			dialog.open ? dialog.close() : dialog.show()
			showDialog.value = dialog.open
		}
	})

	return (
		<nav
			class='relative'
			role='navigation'
			aria-labelledby='header__profile--hamburger'
		>
			<button
				class='border-surface-100/50 border-1 bg-surface-400/50 grid place-items-center overflow-hidden rounded-full border outline-2 -outline-offset-2 outline-primary-100 focus-visible:outline '
				id='header__profile--hamburger'
				aria-expanded={showDialog.value}
				aria-label='Button show profile menu'
				aria-controls='header__profile--dialog'
				aria-haspopup='true'
				onClick$={handleDialog$}
			>
				<Image
					class='object-cover object-center'
					alt='Profile Image / Company Icon'
				/>
			</button>
			<dialog
				class='absolute right-0 top-full z-30'
				id='header__profile--dialog'
				aria-labelledby='header__profile--hamburger'
				onClick$={(ev, el) => {
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
				}}
			>
				<ul>
					<li>
						<button>test</button>
					</li>
				</ul>
			</dialog>
		</nav>
	)
})

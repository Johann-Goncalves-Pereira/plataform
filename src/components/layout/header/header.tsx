import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik'
import { HiCog6ToothOutline } from '@qwikest/icons/heroicons'

import ColorScheme from './color-scheme/color-scheme'
import Search from './search/search'
import Arrows from './arrows/arrows'
import Home from './home/home'

import styles from './header.scss?inline'
import Profile from './profile/profile'

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

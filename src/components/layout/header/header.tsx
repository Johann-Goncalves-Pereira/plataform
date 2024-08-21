import { component$, useStyles$, useStylesScoped$ } from '@builder.io/qwik'
import {
	HiHomeOutline,
	HiChevronLeftOutline,
	HiChevronRightOutline,
} from '@qwikest/icons/heroicons'

import ColorScheme from './color-scheme/color-scheme'
import Search from './search/search'

import styles from './header.scss?inline'

export default component$(() => {
	useStyles$(styles)
	return (
		<header class='body__header grid grid-cols-[auto_1fr_auto] place-items-center gap-1'>
			<div class='flex items-center justify-between gap-1'>
				<button class='hover:bg-surface-100/50 outline-surface-300/50 focus-within:bg-surface-100/50 grid place-items-center rounded-full outline-1 focus-visible:outline'>
					<HiChevronLeftOutline class='stroke-surface-300/50 mr-0.5 h-2/3 w-2/3' />
				</button>
				<button class='hover:bg-surface-100/50 outline-surface-300/50 focus-within:bg-surface-100/50 grid place-items-center rounded-full outline-1 focus-visible:outline'>
					<HiChevronRightOutline class='stroke-surface-300/50 ml-0.5 h-2/3 w-2/3' />
				</button>
			</div>
			<div class='flex items-center justify-between gap-1'>
				<Home />
				<Search />
				<ColorScheme />
			</div>
			<button></button>
		</header>
	)
})

export const Home = component$(() => {
	useStyles$(styles)
	return (
		<button class='body__header__home bg-surface-100/50 outline-surface-300/50 grid place-items-center rounded-full outline-1 focus-visible:outline'>
			<HiHomeOutline class='stroke-surface-300/50 h-2/3 w-2/3' />
		</button>
	)
})

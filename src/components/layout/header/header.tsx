import { $, component$, useSignal } from '@builder.io/qwik'
import {
	HiHomeOutline,
	HiMagnifyingGlassOutline,
	HiBars3BottomRightOutline,
	HiSunOutline,
	HiMoonOutline,
} from '@qwikest/icons/heroicons'

export default component$(() => {
	return (
		<header class='flex justify-center gap-1'>
			<Home />
			<Search />
			<ColorScheme />
		</header>
	)
})

export const Home = component$(() => (
	<button class='bg-surface-100/50 rounded-full border-2 border-surface-200 p-1'>
		<HiHomeOutline class='stroke-surface-300/50 h-5 w-5' />
	</button>
))

export const Search = component$(() => {
	const search = useSignal('')

	const handleSearch$ = $((e: Event) => {
		const target = e.target as HTMLInputElement
		search.value = target.value
	})

	return (
		<div class='bg-surface-100/50 grid h-fit grid-cols-[auto_1fr_auto_auto] items-center rounded-full [&>div>span]:focus-within:inline-block'>
			<HiMagnifyingGlassOutline class='stroke-surface-300/50 col-start-1 col-end-1 row-start-1 row-end-1 mx-2 h-5 w-5' />
			<input
				class='col-start-1 col-end-3 row-start-1 row-end-1 h-full appearance-none opacity-0'
				type='search'
				placeholder='Search'
				value={search.value}
				onInput$={handleSearch$}
			/>

			<div class='col-start-2 col-end-2 row-start-1 row-end-1'>
				<span>{search.value}</span>
				<span class='ml-0.5 mt-1.5 hidden h-[2ex] w-px bg-surface-400' />
			</div>

			<div class='bg-surface-300/50 col-start-3 col-end-3 row-start-1 row-end-1 h-2/3 w-px' />

			<button class='col-start-4 col-end-4 row-start-1 row-end-1 px-2 py-1'>
				<HiBars3BottomRightOutline class='stroke-surface-300/50 h-5 w-5' />
			</button>
		</div>
	)
})

export const ColorScheme = component$(() => {
	const colorScheme = useSignal('')

	const handleColorScheme$ = $(() => {
		const dark =
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches

		colorScheme.value =
			colorScheme.value === ''
				? dark
					? 'light'
					: 'dark'
				: colorScheme.value === 'dark'
					? 'light'
					: 'dark'

		// Add CSS transition
		const style = document.createElement('style')
		style.textContent =
			'*,*::before,*::after{transition: all 250ms  cubic-bezier(0.165, 0.84, 0.44, 1);}'
		document.head.append(style)

		// Set color-scheme
		document
			.querySelector('meta[name="color-scheme"]')
			?.setAttribute('content', colorScheme.value)

		// Remove CSS transition
		setTimeout(() => {
			style.remove()
		}, 200)
	})

	return (
		<button
			class='bg-surface-100/50 rounded-full border-2 border-surface-200 p-1'
			onClick$={handleColorScheme$}
		>
			{colorScheme.value === 'dark' ? (
				<HiSunOutline class='stroke-surface-300/50 h-5 w-5' />
			) : (
				<HiMoonOutline class='stroke-surface-300/50 h-5 w-5' />
			)}
		</button>
	)
})

import {
	$,
	component$,
	useOnDocument,
	useSignal,
	useStylesScoped$,
} from '@builder.io/qwik'
import { HiMoonOutline, HiSunOutline } from '@qwikest/icons/heroicons'

import styles from './color-scheme.scss?inline'

export const LOCAL_STORAGE_KEY = 'theme'
export const SYSTEM = 'dark light'
export const DARK = 'dark'
export const LIGHT = 'light'

export type ThemeOption = typeof SYSTEM | typeof LIGHT | typeof DARK

export default component$(() => {
	useStylesScoped$(styles)

	const colorScheme = useSignal<ThemeOption>(SYSTEM)

	const setMeta$ = $(() =>
		document
			.querySelector('meta[name="color-scheme"]')
			?.setAttribute('content', colorScheme.value),
	)

	const handleColorScheme$ = $(() => {
		const SystemMedia = (scheme: ThemeOption) =>
			window.matchMedia &&
			window.matchMedia(`(prefers-color-scheme: ${scheme})`).matches

		if (colorScheme.value === SYSTEM)
			colorScheme.value = SystemMedia(DARK) ? DARK : LIGHT
		else colorScheme.value = colorScheme.value === DARK ? LIGHT : SYSTEM

		// Add CSS transition
		const style = document.createElement('style')
		style.textContent =
			'*,*::before,*::after{transition: all 250ms  cubic-bezier(0.165, 0.84, 0.44, 1);}'
		document.head.append(style)

		// Set color-scheme
		localStorage.setItem(LOCAL_STORAGE_KEY, colorScheme.value)
		setMeta$()

		// Remove CSS transition
		setTimeout(() => {
			style.remove()
		}, 200)
	})

	useOnDocument(
		'DOMContentLoaded',
		$(() => {
			const theme = localStorage.getItem(LOCAL_STORAGE_KEY)
			if (theme) colorScheme.value = theme as ThemeOption
			setMeta$()
			document.body.style.visibility = 'visible'
		}),
	)

	return (
		<button
			class='body__header__scheme bg-surface-100/50 outline-surface-300/50 flex place-items-center gap-1 rounded-full outline-1 focus-visible:outline'
			onClick$={handleColorScheme$}
		>
			{colorScheme.value === DARK ? (
				<HiSunOutline class='stroke-surface-300/50' />
			) : colorScheme.value === LIGHT ? (
				<HiMoonOutline class='stroke-surface-300/50' />
			) : (
				<>
					<HiSunOutline class='stroke-surface-300/50' />
					<HiMoonOutline class='stroke-surface-300/50' />
				</>
			)}
		</button>
	)
})

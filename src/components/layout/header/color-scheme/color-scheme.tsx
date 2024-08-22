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
			'*,*::before,*::after{transition: all 250ms var(--cubic-bezier);}'
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
			class='body__header__scheme flex items-center justify-center gap-1 rounded-full bg-surface-100/50 outline-1 outline-surface-300/50 focus-visible:outline'
			onClick$={handleColorScheme$}
		>
			{colorScheme.value === DARK ? (
				<>
					<HiSunOutline
						aria-hidden='true'
						focusable='false'
						class='pointer-events-none stroke-surface-300/50'
					/>
					<span class='sr-only'>Go to light mode</span>
				</>
			) : colorScheme.value === LIGHT ? (
				<>
					<HiMoonOutline
						aria-hidden='true'
						focusable='false'
						class='pointer-events-none stroke-surface-300/50'
					/>
					<span class='sr-only'>Go to dark mode</span>
				</>
			) : (
				<>
					<HiMoonOutline
						aria-hidden='true'
						focusable='false'
						class='pointer-events-none stroke-surface-300/50'
					/>
					<HiSunOutline
						aria-hidden='true'
						focusable='false'
						class='pointer-events-none stroke-surface-300/50'
					/>
					<span class='sr-only'>Go to inverse of system mode</span>
				</>
			)}
		</button>
	)
})

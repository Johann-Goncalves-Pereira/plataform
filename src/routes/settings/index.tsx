import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
	return <></>
})

export const head: DocumentHead = {
	title: 'Plataform - Settings',
	meta: [
		{
			name: 'description',
			content:
				'This is the platform settings, it contains everything related to the platform, from theme to security, and profile.',
		},
	],
}

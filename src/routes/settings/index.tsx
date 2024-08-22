import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Profile from '~/components/settings/profile/profile'

export default component$(() => {
	return (
		<section class='grid grid-cols-[auto_1fr] p-12'>
			<Profile />
			<header></header>
			<article></article>
		</section>
	)
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

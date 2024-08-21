import { component$, Slot } from '@builder.io/qwik'
import type { RequestHandler } from '@builder.io/qwik-city'

import Background from '/public/background/bg-16|9.webp?jsx'
import Header from '~/components/layout/header/header'

export const onGet: RequestHandler = async ({ cacheControl }) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.dev/docs/caching/
	cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5,
	})
}

export default component$(() => {
	return (
		<>
			<Header />
			<aside></aside>
			<main class='bg-surface-100/50 m-[var(--body--border--width)] rounded-lg border-2 border-surface-200 shadow backdrop-blur-lg'>
				<Slot />
			</main>
			<aside></aside>
			<footer></footer>
			<Background
				class='fixed inset-0 -z-50 h-[100dvh] w-[100dvw] object-cover blur-3xl'
				alt='Image with blur on the background, no one should see this'
				aria-hidden='true'
			/>
		</>
	)
})

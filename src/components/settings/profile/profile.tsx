import { component$, useStylesScoped$ } from '@builder.io/qwik'

import Image from '/public/profile/profile.jpg?jsx'

import styles from './profile.scss?inline'

export default component$(() => {
	useStylesScoped$(styles)
	return (
		<article class='profile flex flex-col items-center gap-4 rounded-lg border-2 border-surface-200 bg-surface-100/25 shadow'>
			<header class='flex flex-col items-center gap-4 px-4 pt-4'>
				<Image
					class='pointer-events-none h-48 w-48 rounded-full selection:hidden'
					alt='Profile Image / Company Icon'
				/>
				<h1 class='my-4 text-4xl font-bold'>Hephaestus</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
					ducimus amet fugiat vero eum necessitatibus maiores. Nemo eveniet
					rerum omnis minima beatae. Hic sint quod vitae cumque praesentium
					laborum quia.
				</p>
			</header>

			<div class='h-2 w-2 rounded-full bg-surface-300' />

			<table class='info'>
				<tbody>
					<tr>
						<td>Join date:</td>
						<td class='hr'></td>
						<td>
							<time dateTime='2022-01-01'>2022-01-01</time>
						</td>
					</tr>
					<tr>
						<td>Email:</td>
						<td class='hr'></td>
						<td>
							<address property='email'>
								<a href='mailto:exemple@email.com'>exemple@email.com</a>
							</address>
						</td>
					</tr>
					<tr>
						<td>Role:</td>
						<td class='hr'></td>
						<td>Admin</td>
					</tr>
					<tr>
						<td>Status:</td>
						<td class='hr'></td>
						<td>Active</td>
					</tr>
					<tr>
						<td>Theme:</td>
						<td class='hr'></td>
						<td>Light</td>
					</tr>
					<tr>
						<td>Language:</td>
						<td class='hr'></td>
						<td>English</td>
					</tr>
					<tr>
						<td>Tags:</td>
						<td class='hr'></td>
						<td>
							<div>
								<p title="It's a good person">Good</p>
								<p title="It's a bad person">Bad</p>
								<p title="It's an ok person">Ok</p>
								<p title="It's an ugly person">Ugly</p>
							</div>
						</td>
					</tr>
				</tbody>
			</table>

			<div class='h-2 w-2 rounded-full bg-surface-300' />

			<footer>
				<button>Edit</button>
				<button>Log out</button>
			</footer>
		</article>
	)
})

import { component$ } from '@builder.io/qwik'
import { HiHomeOutline } from '@qwikest/icons/heroicons'

export default component$(() => {
	return (
		<button
			class='body__header__home bg-surface-100/50 outline-surface-300/50 grid place-items-center rounded-full outline-1 focus-visible:outline'
			aria-label='Go to home page (/)'
		>
			<HiHomeOutline
				aria-hidden='true'
				focusable='false'
				class='stroke-surface-300/50 pointer-events-none h-2/3 w-2/3'
			/>
		</button>
	)
})

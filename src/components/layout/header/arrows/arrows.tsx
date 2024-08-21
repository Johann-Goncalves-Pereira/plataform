import { component$ } from '@builder.io/qwik'
import {
	HiChevronLeftOutline,
	HiChevronRightOutline,
} from '@qwikest/icons/heroicons'

export default component$(() => (
	<div class='body__header__arrows flex items-center justify-between gap-1'>
		<button
			class='hover:bg-surface-100/50 outline-surface-300/50 focus-within:bg-surface-100/50 grid place-items-center rounded-full outline-1 focus-visible:outline'
			aria-label='Go back to previous useful part'
		>
			<HiChevronLeftOutline
				aria-hidden='true'
				focusable='false'
				class='stroke-surface-300/50 pointer-events-none mr-0.5 h-2/3 w-2/3'
			/>
		</button>
		<button
			class='hover:bg-surface-100/50 outline-surface-300/50 focus-within:bg-surface-100/50 grid place-items-center rounded-full outline-1 focus-visible:outline'
			aria-label='Go forward to previous useful part'
		>
			<HiChevronRightOutline
				aria-hidden='true'
				focusable='false'
				class='stroke-surface-300/50 pointer-events-none ml-0.5 h-2/3 w-2/3'
			/>
		</button>
	</div>
))

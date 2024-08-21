import { $, component$, useSignal } from '@builder.io/qwik'
import {
	HiBars3BottomRightOutline,
	HiMagnifyingGlassOutline,
} from '@qwikest/icons/heroicons'

export default component$(() => {
	const search = useSignal('')

	const handleSearch$ = $((e: Event) => {
		const target = e.target as HTMLInputElement
		search.value = target.value
	})

	return (
		<div
			class='bg-surface-100/50 outline-surface-300/50 grid grid-cols-[auto_1fr_auto_auto] items-center rounded-full outline-1 focus-within:outline'
			aria-label='Search in plataform'
		>
			<HiMagnifyingGlassOutline class='stroke-surface-300/50 col-start-1 col-end-1 row-start-1 row-end-1 mx-2 aspect-square' />

			<input
				class='bg-transparent placeholder:text-surface-400/50 relative col-start-1 col-end-3 row-start-1 row-end-1 h-full appearance-none text-surface-400 outline-none'
				type='search'
				id='header__input--search'
				name='header__input--search'
				placeholder='Search'
				value={search.value}
				onInput$={handleSearch$}
			/>

			<label class='sr-only' for='header__input--search'>
				Search in plataform
			</label>

			<div class='bg-surface-300/50 col-start-3 col-end-3 row-start-1 row-end-1 h-1/2 w-px' />

			<button class='col-start-3 col-end-4 row-start-1 row-end-1 grid h-full place-items-center rounded-br-full rounded-tr-full px-2 outline-none -outline-offset-2 focus-visible:outline focus-visible:outline-primary-100'>
				<HiBars3BottomRightOutline class='stroke-surface-300/50 aspect-square h-2/3' />
			</button>
		</div>
	)
})

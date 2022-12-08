import { A } from 'solid-start'
import { CustomerCombobox } from '~/components/customers'

export const submitButtonClasses =
	'w-full rounded bg-green-500 py-2 px-4 text-white hover:bg-green-600 focus:bg-green-400'

export default function Home() {
	return (
		<main class="mx-auto p-4 text-center text-gray-700">
			<h1 class="max-6-xs my-16 text-6xl font-thin uppercase text-sky-700">
				New invoice
			</h1>
			<form method="post" class="flex flex-col gap-4">
				{/* <CustomerCombobox error={actionData?.errors.customerId} /> */}
				<CustomerCombobox />
				<div>
					<button
						type="submit"
						name="intent"
						value="create"
						class={submitButtonClasses}
					>
						Create Invoice
					</button>
				</div>
			</form>
		</main>
	)
}

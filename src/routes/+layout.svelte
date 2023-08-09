<script>
	import '@/app.css'
	// import { worker } from '../msw/browser'

	// if (import.meta.env.NODE_ENV === 'development') {
	// 	worker.start()
	// }
</script>

<slot />

<div
	class="input-group fixed bottom-0 left-0 box-border w-full bg-base-100 p-4"
>
	<input type="text" class="input input-bordered w-full" />
	<button class="btn btn-primary text-white">
		<Icon icon="heroicons:paper-airplane-solid" class="h-6 w-6" />
	</button>
</div>

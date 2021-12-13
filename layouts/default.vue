<template>
  <div>
    <div class="absolute w-full">
      <div class="relative z-10 flex justify-between pt-20 items-center">
        <div class="ml-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fill-rule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </div>
        <div
          class="hidden md:block absolute border-b opacity-40 border-gray-100 w-1/3 left-72"
        ></div>
        <div
          class="hidden md:block bg-white text-center xl:px-32 uppercase bg-opacity-5 text-white backdrop-filter backdrop-blur-xl"
        >
          <div
            class="flex text-center pr-20 space-x-10 lg:space-x-20 pl-7 tracking-wide"
          >
            <NuxtLink class="py-8" to="/">
              <div class="space-x-1">
                <span class="font-bold">00</span>
                <span> home</span>
              </div>
            </NuxtLink>
            <NuxtLink class="py-8" to="/destination">
              <div class="space-x-1">
                <span class="font-bold">01</span>
                <span> destination</span>
              </div>
            </NuxtLink>
            <NuxtLink class="py-8" to="/crew">
              <div class="space-x-1">
                <span class="font-bold">02</span>
                <span> crew</span>
              </div>
            </NuxtLink>
            <NuxtLink class="py-8" to="/technology">
              <div class="space-x-1">
                <span class="font-bold">03</span>
                <span> technology</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {}
</script>

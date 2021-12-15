<template>
  <div>
    <div class="absolute w-full font-BarlowCondensed">
      <div class="relative z-10 flex justify-between xl:items-center  xl:pt-10">
        <div class="p-4  xl:ml-10">
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
          class="hidden md:block absolute border-b opacity-40 border-gray-100 w-1/2 left-52"
        ></div>
        <div class="md:hidden">
          <div :class="navOpen ? '' : 'mt-7 mr-4'">
            <div
              :class="navOpen ? 'hidden' : 'block'"
              @click="navOpen = !navOpen"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                <g fill="#D0D6F9" fill-rule="evenodd">
                  <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                </g>
              </svg>
            </div>

            <div
              :class="
                !navOpen
                  ? 'hidden'
                  : 'bg-white text-center xl:px-32 min-h-screen uppercase bg-opacity-5 text-white backdrop-filter backdrop-blur-xl'
              "
              @click="navOpen = !navOpen"
            >
              <div class="absolute min-h-screen top-7 right-4">
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                  >
                    <g fill="#D0D6F9" fill-rule="evenodd">
                      <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                      <path
                        d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"
                      />
                    </g>
                  </svg>
                </div>
              </div>

              <div
                class="flex flex-col items-start p-20 xl:space-x-10 xl:space-x-20 pl-7 tracking-wide"
              >
                <NuxtLink class="py-4 xl:py-8" to="/">
                  <div class="space-x-1 text-xl">
                    <span class="font-bold">00</span>
                    <span> home</span>
                  </div>
                </NuxtLink>
                <NuxtLink class="py-4 xl:py-8" to="/destination">
                  <div class="space-x-1 text-xl">
                    <span class="font-bold">01</span>
                    <span> destination</span>
                  </div>
                </NuxtLink>
                <NuxtLink class="py-4 xl:py-8" to="/crew">
                  <div class="space-x-1 text-xl">
                    <span class="font-bold">02</span>
                    <span> crew</span>
                  </div>
                </NuxtLink>
                <NuxtLink class="py-4 xl:py-8" to="/technology">
                  <div class="space-x-1 text-xl">
                    <span class="font-bold">03</span>
                    <span> technology</span>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div
          class="hidden md:block bg-white text-center xl:px-32 uppercase bg-opacity-5 text-white backdrop-filter backdrop-blur-xl"
        >
          <div
            class="flex text-center pr-20 space-x-10 lg:space-x-20 pl-7 tracking-wide"
          >
            <NuxtLink class="py-8" to="/">
              <div class="space-x-1 text-xl">
                <span class="font-bold">00</span>
                <span> home</span>
              </div>
            </NuxtLink>
            <NuxtLink class="py-8" to="/destination">
              <div class="space-x-1 text-xl">
                <span class="font-bold">01</span>
                <span> destination</span>
              </div>
            </NuxtLink>
            <NuxtLink class="py-8" to="/crew">
              <div class="space-x-1 text-xl">
                <span class="font-bold">02</span>
                <span> crew</span>
              </div>
            </NuxtLink>
            <NuxtLink class="py-8" to="/technology">
              <div class="space-x-1 text-xl">
                <span class="font-bold">03</span>
                <span> technology</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
    }
  },
}
</script>

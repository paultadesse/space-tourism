<template lang="">
  <div>
    <div
      class="h-screen w-full bg-bottom bg-cover bg-no-repeat"
      :style="{
        backgroundImage: `url(images/destination/background-destination-desktop.jpg)`,
      }"
    >
      <div class="relative flex justify-between pt-20 items-center">
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
            <div class="py-8">
              <a href="#">
                 <NuxtLink class="space-x-1" to="/">
                  <span class="font-bold">00</span>
                  <span> home</span>
                </NuxtLink>
              </a>
            </div>
            <div class="border-b-4 border-white py-8">
              <a href="#">
                <NuxtLink class="space-x-1" to="/destination">
                  <span class="font-bold">01</span>
                  <span> destination</span>
                </NuxtLink>
              </a>
            </div>
            <div class="py-8">
              <a href="#">
                <div class="space-x-1">
                  <span class="font-bold">02</span>
                  <span> crew</span>
                </div>
              </a>
            </div>
            <div class="py-8">
              <a href="#">
                <div class="space-x-1">
                  <span class="font-bold">03</span>
                  <span> technology</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- destination page content -->

      <div class="pt-10 md:pt-14 xl:pt-24">
        <div
          class="flex flex-col lg:flex-row text-center lg:text-justify text-white justify-center"
        >
          <div class="space-y-2 lg:space-y-4 lg:space-y-7 px-20">
            <div class="uppercase text-2xl space-x-4 tracking-widest">
              <span class="text-gray-400">01</span
              ><span class="uppercase">pick your destination</span>
            </div>
            <div class="pt-16">
              <img src="images/destination/image-mars.png" alt="" srcset="" />
            </div>
          </div>
          <div class="mt-6 px-32">
            <div class="">
              <div class="flex flex-col pt-14 space-y-7">
                <div class="text-center uppercase text-white">
                  <div class="flex text-center text-gray-400 space-x-8 tracking-widest">
                    <div class="py-2">
                      <a href="#">
                        <div class="space-x-1">
                          <span> moon</span>
                        </div>
                      </a>
                    </div>
                    <div class="border-b-4 border-white py-2">
                      <a href="#">
                        <div class="space-x-1">
                          <span> mars</span>
                        </div>
                      </a>
                    </div>
                    <div class="py-2">
                      <a href="#">
                        <div class="space-x-1">
                          <span> europa</span>
                        </div>
                      </a>
                    </div>
                    <div class="py-2">
                      <a href="#">
                        <div class="space-x-1">
                          <span> Titan</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col space-y-7">
                  <div class="uppercase text-8xl">mars</div>
                  <div class="flex flex-col divide-y space-y-14">
                    <div class="max-w-md text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugit commodi provident vitae nemo labore dolore, atque
                      eius error soluta numquam sequi voluptatibus laborum
                      repudiandae? Praesentium cupiditate quae velit quia
                      itaque?
                    </div>
                    <div class="flex space-x-16 uppercase py-4">
                      <div class="flex flex-col">
                        <div class="space-x-1 text-gray-400 text-sm">
                          <span>avg.</span>
                          <span>distance</span>
                        </div>
                        <div class="space-x-1 text-2xl">
                          <span>225</span>
                          <span>mil.</span>
                          <span>km</span>
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <div class="space-x-1 text-gray-400 text-sm">
                          <span>est.</span>
                          <span>travel</span>
                          <span>time</span>
                        </div>
                        <div class="space-x-1 text-2xl">
                            <span>9</span>
                            <span>months</span>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- ==== -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>

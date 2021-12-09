<template lang="">
  <div>
    <div
      class="h-screen w-full bg-bottom bg-cover bg-no-repeat"
      :style="{
        backgroundImage: `url(images/technology/background-technology-desktop.jpg)`,
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
            <div class="py-8">
              <a href="#">
                <NuxtLink class="space-x-1" to="/destination">
                  <span class="font-bold">01</span>
                  <span> destination</span>
                </NuxtLink>
              </a>
            </div>
            <div class="py-8">
              <a href="#">
                <NuxtLink class="space-x-1" to="/crew">
                  <span class="font-bold">02</span>
                  <span> crew</span>
                </NuxtLink>
              </a>
            </div>
            <div class="border-b-4 border-white py-8">
              <a href="#">
                <NuxtLink class="space-x-1" to="/technology">
                  <span class="font-bold">03</span>
                  <span> technology</span>
                </NuxtLink>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- technology page content -->

      <div class="pt-10 md:pt-14 xl:pt-20">
        <div
          class="flex flex-col lg:flex-row text-center lg:text-justify text-white justify-end"
        >
          <div class="mt-6 px-72 ">
            <div class="uppercase text-2xl space-x-4 tracking-widest">
              <span class="text-gray-400">03</span
              ><span class="uppercase">space launch 101</span>
            </div>
            <div class="mt-20 flex pt-14 space-x-20">
              <div class="flex flex-col space-y-7">
                <div class="relative h-20 w-20 bg-white rounded-full">
                  <div class="absolute flex top-5 right-7 text-4xl text-black">
                    1
                  </div>
                </div>
                <div
                  class="relative h-20 w-20 border border-white rounded-full"
                >
                  <div class="absolute flex top-5 right-7 text-4xl text-white">
                    2
                  </div>
                </div>
                <div
                  class="relative h-20 w-20 border border-white rounded-full"
                >
                  <div class="absolute flex top-5 right-7 text-4xl text-white">
                    3
                  </div>
                </div>
              </div>
              <div class="flex flex-col space-y-7">
                <div class="flex flex-col space-y-1">
                  <div class="uppercase text-sm text-gray-400 tracking-widest">
                    the terminology ...
                  </div>
                  <div class="flex space-x-2 uppercase text-6xl tracking-wider">
                    <span>launch</span>
                    <span>vehicles</span>
                  </div>
                  <div class="flex flex-col py-9">
                    <div class="max-w-md text-gray-400 leading-loose">
                      A launch vehicle or carrier rocket is a rocket-propelled
                      vehicle used to carry a payload from Earth's surface to
                      space, usually to Earth orbit or beyond. Our WEB-X carrier
                      rocket is the most powerful in operation. Standing 150
                      metres tall it's quite an awe-inspiring sight on the
                      launch pad!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" lg:space-y-4 lg:space-y-7 flex-shrink-0">
            <div class="pt-16">
              <img
                src="images/technology/image-launch-vehicle-portrait.jpg"
                alt=""
                srcset=""
              />
            </div>
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

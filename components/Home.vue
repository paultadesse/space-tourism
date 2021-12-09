<template lang="">
  <div>
    <div
      class="h-screen w-full bg-bottom bg-cover bg-no-repeat"
      :style="{
        backgroundImage: `url(images/home/background-home-desktop.jpg)`,
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
          class="hidden md:block bg-white text-center  xl:px-32 uppercase bg-opacity-5 text-white backdrop-filter backdrop-blur-xl"
        >
          <div class="flex text-center pr-20 space-x-10 lg:space-x-20 pl-7 tracking-wide">
            <div class="border-b-4 border-white py-8">
              <a href="#">
                <div class="space-x-1">
                  <span class="font-bold">00</span>
                  <span> home</span>
                </div>
              </a>
            </div>
            <div class="py-8">
              <a href="#">
                <div class="space-x-1">
                  <span class="font-bold">01</span>
                  <span> destination</span>
                </div>
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
      <!-- home page content -->

      <div class="pt-10 md:pt-32 xl:pt-72">
        <div class="flex flex-col lg:flex-row text-center lg:text-justify text-white justify-around items-center">
          <div class=" space-y-2 lg:space-y-4 lg:space-y-7">
            <div class="uppercase text-2xl">so, you want to travel to</div>
            <div class="uppercase text-9xl">space</div>
            <div class="max-w-md">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </div>
          </div>
          <div class="mt-20">
            <div
              class="uppercase lg:text-3xl text-black bg-white px-7 py-12   lg:px-12  lg:py-24 rounded-full"
            >
              Explore
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

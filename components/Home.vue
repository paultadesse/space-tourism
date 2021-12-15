<template lang="">
  <div>
    <div>
      <img
        class="absolute min-h-screen w-full bg-bottom bg-cover bg-no-repeat"
        src="images/home/background-home-desktop.jpg"
        alt=""
        srcset=""
      />
      <!-- displayed on mobile devices -->
      <img
        class="xl:hidden absolute min-h-screen w-full bg-bottom bg-cover bg-no-repeat"
        src="images/home/background-home-mobile.jpg"
        alt=""
        srcset=""
      />

      <div class="relative top-10 xl:top-40 pt-24 md:pt-32 xl:pt-72">
        <div
          class="flex flex-col lg:flex-row text-center lg:text-justify text-white justify-around items-center"
        >
          <div class="space-y-7">
            <div
              class="uppercase text-xl xl:text-2xl tracking-widest font-BarlowCondensed text-lightBlue"
            >
              so, you want to travel to
            </div>
            <div class="uppercase text-7xl xl:text-9xl font-bellefair">
              space
            </div>
            <div
              class="max-w-md p-8 xl:p-0 font-BarlowCondensed xl:text-xl text-lightBlue"
            >
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </div>
          </div>

          <div class="mt-20">
            <div class="xl:p-16 bg-lightGray bg-opacity-0 hover:bg-opacity-70 hover:cursor-pointer rounded-full">
              <div
                class="uppercase text-2xl xl:text-3xl font-bellefair text-black bg-white px-8 py-16 lg:px-12 lg:py-24 rounded-full"
              >
                Explore
              </div>
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

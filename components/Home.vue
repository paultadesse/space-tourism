<template>
  <!-- style="background-image: url('images/home/background-home-desktop.jpg');" -->
  <div class="min-h-screen h-0 overflow-hidden bg-black">
    <img
      class="hidden md:block absolute w-full h-full object-bottom object-cover"
      src="images/home/background-home-desktop.jpg"
      alt=""
      srcset=""
    />

    <!-- displayed on mobile devices -->
    <img
      class="md:hidden absolute w-full h-full object-bottom object-cover"
      src="images/home/background-home-mobile.jpg"
      alt=""
      srcset=""
    />

    <div
      class="relative pt-24 md:pt-32 xl:pt-72 h-full flex items-center pb-24"
    >
      <div
        class="w-full lg:flex text-center lg:text-justify text-white justify-around items-center"
      >
        <div class="space-y-7">
          <div
            class="uppercase text-xl xl:text-2xl tracking-widest font-BarlowCondensed text-lightBlue"
          >
            so, you want to travel to
          </div>
          <div class="xl:-ml-2 uppercase text-7xl xl:text-9xl font-bellefair">
            space
          </div>
          <div
            class="text-center lg:text-left max-w-md mx-auto px-8 sm:px-0 font-BarlowCondensed xl:text-xl text-lightBlue"
          >
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </div>
        </div>

        <div class="mt-24 lg:mt-0">
          <NuxtLink to="/destination">
            <button
              type="button"
              class="relative h-40 w-40 md:h-72 md:w-72 uppercase text-2xl xl:text-3xl font-bellefair text-black bg-white rounded-full after:absolute after:inset-0 after:bg-white after:bg-opacity-0 hover:after:bg-opacity-25 after:transform after:scale-100 hover:after:scale-150 after:transition after:rounded-full"
            >
              Explore
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>

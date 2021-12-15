<template lang="">
  <div class="min-h-screen h-0 overflow-hidden">
    <img
      class="hidden md:block absolute w-full h-full object-bottom object-cover"
      src="images/crew/background-crew-desktop.jpg"
      alt=""
      srcset=""
    />

    <!-- displayed on mobile devices -->
    <img
      class="md:hidden absolute w-full h-full object-bottom object-cover"
      src="images/crew/background-crew-mobile.jpg"
      alt=""
      srcset=""
    />

    <!-- destination page content -->

    <div
      class="relative pt-24 md:pt-32 xl:pt-72 h-full flex items-center pb-24"
    >
      <div
        class="w-full lg:flex text-center lg:text-justify text-white justify-center items-center"
      >
        <div class="mt-6 xl:px-32">
          <div
            class="uppercase text-2xl space-x-4 tracking-widest font-BarlowCondensed"
          >
            <span class="text-lightGray font-extrabold">02</span
            ><span class="uppercase">meet your crew</span>
          </div>
          <div class="xl:mt-40">
            <div
              class="flex xl:flex-col flex-col-reverse items-center xl:items-start pt-8 xl:pt-14 xl:space-y-7"
            >
              <div class="flex flex-col xl:space-y-6 space-y-2">
                <div
                  class="uppercase xl:text-4xl text-xl text-gray-400 font-bellefair"
                >
                  {{ activeDotData.job }}
                </div>
                <div class="uppercase xl:text-6xl text-3xl font-bellefair">
                  {{ activeDotData.name }}
                </div>
                <div
                  class="flex flex-col space-y-14 pl-7 pr-7 xl:pl-0 xl:pr-0 font-BarlowCondensed"
                >
                  <div class="max-w-md text-lightBlue xl:text-xl">
                    {{ activeDotData.content }}
                  </div>
                </div>
              </div>
              <div class="py-10 xl:py-4">
                <div class="flex space-x-7">
                  <div
                    v-for="(dot, index) in dotData"
                    :key="index"
                    :class="
                      activeDot == index
                        ? 'h-3 w-3 rounded-full bg-white '
                        : 'h-3 w-3 rounded-full bg-gray-500 hover:bg-gray-700 cursor-pointer'
                    "
                    @click="
                      activeDot = index
                      activeDotData = dotData[index]
                    "
                  ></div>
                </div>
              </div>
              <div class="xl:hidden xl:space-y-7 flex-shrink-0">
                <div class="">
                  <!-- only visible on mobile device -->
                  <img
                    class="h-60"
                    :src="activeDotData.imagePath"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden xl:block space-y-2 lg:space-y-4 lg:space-y-7 px-20">
          <div class="pt-8">
            <transition
              enter-class="transform translate-x-8 opacity-0"
              enter-to-class="transform translate-x-0 opacity-100"
              leave-class="transform translate-x-0 opacity-100"
              leave-to-class="transform -translate-x-8 opacity-0"
              enter-active-class="transition"
              leave-active-class="transition"
              mode="out-in"
            >
              <img
                :key="activeDotData.imagePath"
                :src="activeDotData.imagePath"
                alt=""
                srcset=""
              />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeDot: 0,
      activeDotData: [],
      dots: [],
      dotData: [],
    }
  },

  created() {
    this.dotData.push(
      {
        job: 'Commander ',
        name: 'Douglas Hurley',
        content:
          'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        imagePath: 'images/crew/image-douglas-hurley.png',
      },
      {
        job: 'Mission Specialist ',
        name: 'MARK SHUTTLEWORTH',
        content:
          'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        imagePath: 'images/crew/image-mark-shuttleworth.png',
      },
      {
        job: 'PILOT',
        name: 'Victor Glover',
        content:
          'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
        imagePath: 'images/crew/image-victor-glover.png',
      },
      {
        job: 'Flight Engineer',
        name: 'Anousheh Ansari',
        content:
          'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
        imagePath: 'images/crew/image-anousheh-ansari.png',
      }
    )

    this.activeDotData = this.dotData[this.activeDot]
  },
}
</script>
<style lang=""></style>

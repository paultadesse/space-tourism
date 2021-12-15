<template lang="">
  <div class="min-h-screen h-0 overflow-hidden bg-black">
    <img
      class="hidden md:block absolute w-full h-full object-bottom object-cover"
      src="images/destination/background-destination-desktop.jpg"
      alt=""
      srcset=""
    />

    <!-- displayed on mobile devices -->
    <img
      class="md:hidden absolute w-full h-full object-bottom object-cover"
      src="images/destination/background-destination-mobile.jpg"
      alt=""
      srcset=""
    />

    <!-- destination page content -->

    <div
      class="relative pt-24 md:pt-32 xl:pt-72 h-full flex items-center pb-24"
    >
      <div
        class="w-full lg:flex text-center lg:text-justify text-white justify-evenly items-center"
      >
        <div class="space-y-2 xl:space-y-7">
          <div
            class="max-w-lg mx-auto uppercase text-lg xl:text-2xl font-BarlowCondensed space-x-2 xl:space-x-4 tracking-widest"
          >
            <span class="text-lightGray font-extrabold">01</span
            ><span class="uppercase">pick your destination</span>
          </div>
          <div class="flex justify-center pt-4 xl:pt-16 px-28 xl:px-20 ">
            <transition
              duration="500"
              enter-class="transform -translate-x-96 opacity-0 scale-0"
              enter-to-class="transform translate-x-0 opacity-90 scale-100"
              leave-class="transform translate-x-0 opacity-100"
              leave-to-class="transform translate-x-96 opacity-0"
              enter-active-class="transition"
              leave-active-class="transition"
              mode="out-in"
            >
              <img
                :key="activeTabData.imagePath"
                :src="activeTabData.imagePath"
                alt=""
              />
            </transition>
          </div>
        </div>
        <div class="mt-6 xl:px-32">
          <div class="">
            <div class="flex flex-col xl:pt-14 space-y-7">
              <div
                class="text-center uppercase text-white font-BarlowCondensed"
              >
                <div
                  class="flex text-center justify-center xl:justify-start text-lightBlue space-x-8 tracking-widest"
                >
                  <button
                    v-for="(tab, index) in tabs"
                    :key="index"
                    type="button"
                    :class="
                      activeTab == index
                        ? 'border-b-4 border-white py-2 text-white'
                        : 'py-2 hover:border-gray-600 border-transparent border-b-4 hover:border-current'
                    "
                    @click="
                      activeTab = index
                      activeTabData = tabData[index]
                    "
                  >
                    <span class="xl:text-xl uppercase"> {{ tab }}</span>
                  </button>
                </div>
              </div>
              <div
                class="flex flex-col items-center xl:items-start xl:space-y-7"
              >
                <div class="uppercase text-5xl xl:text-8xl font-bellefair">
                  {{ activeTabData.name }}
                </div>
                <div
                  class="flex flex-col divide-y divide-lightGray divide-opacity-50 xl:space-y-14"
                >
                  <div
                    class="max-w-md pl-4 pr-4 pb-4 text-lightBlue font-BarlowCondensed xl:text-xl"
                  >
                    {{ activeTabData.content }}
                  </div>
                  <div
                    class="flex flex-col xl:flex-row items-center space-y-3 xl:space-y-0 xl:space-x-16 uppercase py-4"
                  >
                    <div class="flex flex-col">
                      <div
                        class="space-x-1 text-lightBlue xl:text-lg font-BarlowCondensed"
                      >
                        <span>avg.</span>
                        <span>distance</span>
                      </div>
                      <div class="space-x-1 text-2xl font-bellefair">
                        <span>{{ activeTabData.avgDistance }}</span>
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <div
                        class="space-x-1 text-lightBlue xl:text-lg font-BarlowCondensed"
                      >
                        <span>est.</span>
                        <span>travel</span>
                        <span>time</span>
                      </div>
                      <div class="space-x-1 text-2xl font-bellefair">
                        <span>{{ activeTabData.estTraveltime }}</span>
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
</template>
<script>
export default {
  data() {
    return {
      activeTab: 1,
      activeTabData: [],
      tabs: ['moon', 'mars', 'europa', 'titan'],
      tabData: [],
    }
  },
  created() {
    this.tabData.push(
      {
        name: 'moon',
        content:
          'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        avgDistance: '384,400 KM',
        estTraveltime: '3 days',
        imagePath: 'images/destination/image-moon.png',
      },
      {
        name: 'mars',
        content:
          "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetaryplanetary mountain in our solar system, It's two and a halt times the size of Everest!",
        avgDistance: '225 MIL. KM',
        estTraveltime: '9 MONTHS',
        imagePath: 'images/destination/image-europa.png',
      },
      {
        name: 'europa',
        content:
          'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        avgDistance: '628 MIL. KM',
        estTraveltime: '3 years',
        imagePath: 'images/destination/image-titan.png',
      },
      {
        name: 'titan',
        content:
          'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        avgDistance: '1.6 BIL. KM',
        estTraveltime: '7 years',
        imagePath: 'images/destination/image-mars.png',
      }
    )

    this.activeTabData = this.tabData[this.activeTab]
  },

  methods: {
    setActiveTab(index) {
      // this.activetab
    },
  },
}
</script>
<style lang=""></style>

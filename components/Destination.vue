<template lang="">
  <div>
    <div>
      <img
        class="absolute h-screen w-full bg-bottom bg-cover bg-no-repeat"
        src="images/destination/background-destination-desktop.jpg"
        alt=""
        srcset=""
      />
      <!-- destination page content -->

      <div class="relative xl:top-40 md:pt-14 xl:pt-28">
        <div
          class="flex flex-col lg:flex-row text-center lg:text-justify text-white justify-center"
        >
          <div class="space-y-2 lg:space-y-4 lg:space-y-7 px-20">
            <div class="uppercase text-2xl space-x-4 tracking-widest">
              <span class="text-gray-400">01</span
              ><span class="uppercase">pick your destination</span>
            </div>
            <div class="pt-16">
              <img :src="activeTabData.imagePath" alt="" srcset="" />
            </div>
          </div>
          <div class="mt-6 px-32">
            <div class="">
              <div class="flex flex-col pt-14 space-y-7">
                <div class="text-center uppercase text-white">
                  <div
                    class="flex text-center text-gray-400 space-x-8 tracking-widest"
                  >
                    <div
                      v-for="(tab, index) in tabs"
                      :key="index"
                      :class="
                        activeTab == index
                          ? 'border-b-4 border-white py-2'
                          : 'py-2 hover:border-gray-600 border-transparent border-b-4 hover:border-current'
                      "
                      @click="
                        activeTab = index
                        activeTabData = tabData[index]
                      "
                    >
                      <a href="#">
                        <div class="space-x-1">
                          <span> {{ tab }}</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col space-y-7">
                  <div class="uppercase text-8xl">{{ activeTabData.name }}</div>
                  <div class="flex flex-col divide-y space-y-14">
                    <div class="max-w-md text-gray-400">
                      {{ activeTabData.content }}
                    </div>
                    <div class="flex space-x-16 uppercase py-4">
                      <div class="flex flex-col">
                        <div class="space-x-1 text-gray-400 text-sm">
                          <span>avg.</span>
                          <span>distance</span>
                        </div>
                        <div class="space-x-1 text-2xl">
                          <span>{{ activeTabData.avgDistance }}</span>
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <div class="space-x-1 text-gray-400 text-sm">
                          <span>est.</span>
                          <span>travel</span>
                          <span>time</span>
                        </div>
                        <div class="space-x-1 text-2xl">
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

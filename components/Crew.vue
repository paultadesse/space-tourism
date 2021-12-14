<template lang="">
  <div>
    <div>
      <img
        class="absolute h-screen w-full bg-bottom bg-cover bg-no-repeat"
        src="images/crew/background-crew-desktop.jpg"
        alt=""
        srcset=""
      />
      <!-- destination page content -->

      <div class="relative top-40 pt-10 md:pt-14 xl:pt-20">
        <div
          class="flex flex-col lg:flex-row text-center lg:text-justify text-white justify-center"
        >
          <div class=" mt-6 px-32">
            <div class="uppercase text-2xl space-x-4 tracking-widest">
              <span class="text-gray-400">02</span
              ><span class="uppercase">meet your crew</span>
            </div>
            <div class="mt-40">
              <div class="flex flex-col pt-14 space-y-7">
                <div class="flex flex-col space-y-6">
                  <div class="uppercase text-4xl text-gray-400">
                    {{ activeDotData.job }}
                  </div>
                  <div class="uppercase text-6xl">{{ activeDotData.name }}</div>
                  <div class="flex flex-col space-y-14">
                    <div class="max-w-md text-gray-400">
                      {{ activeDotData.content }}
                    </div>
                    <div class="py-4">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-2 lg:space-y-4 lg:space-y-7 px-20">
            <div class="pt-8 ">
              <img
                :src="activeDotData.imagePath"
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

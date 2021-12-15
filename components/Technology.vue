<template lang="">
  <div>
    <div>
      <!-- displayed on large devices -->
      <img
        class="hidden md:block absolute min-h-screen w-full bg-bottom bg-cover bg-no-repeat"
        src="images/technology/background-technology-desktop.jpg"
        alt=""
        srcset=""
      />

      <!-- displayed on mobile devices -->
      <img
        class="xl:hidden absolute min-h-screen w-full bg-bottom bg-cover bg-no-repeat"
        src="images/technology/background-technology-mobile.jpg"
        alt=""
        srcset=""
      />

      <!-- technology page content -->

      <div class="relative top-10 xl:top-40 pt-10 md:pt-14 xl:pt-20">
        <div
          class="flex flex-col lg:flex-row text-center lg:text-justify text-white justify-end"
        >
          <div class="mt-6 xl:px-72">
            <div class="uppercase text-2xl space-x-4 tracking-widest font-BarlowCondensed">
              <span class="text-lightGray font-extrabold">03</span
              ><span class="uppercase">space launch 101</span>
            </div>
            <div class="xl:hidden xl:space-y-7 flex-shrink-0">
              <div class="pt-7">
                <!-- only visible on mobile device -->
                <img
                  :src="activeTechData.imagePathLandscape"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div class="xl:mt-20 flex flex-col xl:flex-row pt-7 xl:space-x-20">
              <div
                class="flex xl:flex-col xl:space-y-7 justify-center space-x-4 xl:space-x-0 font-bellefair"
              >
                <div
                  v-for="(tech, index) in techData"
                  :key="index"
                  :class="
                    activeTech == index
                      ? 'relative h-14 w-14 xl:h-20 xl:w-20 bg-white rounded-full text-black'
                      : 'relative h-14 w-14 xl:h-20 xl:w-20 hover:border-white border-transparent border border-gray-700 hover:border-current rounded-full cursor-pointer'
                  "
                  @click="
                    activeTech = index
                    activeTechData = techData[index]
                  "
                >
                  <div
                    class="absolute flex xl:top-5 top-3 xl:right-8 right-5 text-2xl xl:text-4xl"
                  >
                    {{ index + 1 }}
                  </div>
                </div>
              </div>
              <div class="flex flex-col mt-7 xl:space-y-7">
                <div
                  class="flex flex-col space-y-2 justify-center items-center xl:items-start xl:space-y-1"
                >
                  <div class="uppercase  text-lightBlue text-xl font-BarlowCondensed tracking-widest">
                    the terminology ...
                  </div>
                  <div
                    class="flex xl:space-x-2 font-bellefair uppercase xl:text-6xl text-3xl tracking-wider"
                  >
                    <span>{{ activeTechData.name }}</span>
                  </div>
                  <div class="flex xl:py-9 font-BarlowCondensed text-lightBlue">
                    <div
                      class="max-w-md pl-4 pr-4 xl:pl-0 xl:pr-0 xl:p-0 text-xl leading-loose"
                    >
                      {{ activeTechData.content }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden xl:block lg:space-y-4 lg:space-y-7 flex-shrink-0">
            <div class="pt-16">
              <img :src="activeTechData.imagePathPortrait" alt="" srcset="" />
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
      activeTech: 0,
      activeTechData: [],
      techs: [],
      techData: [],
    }
  },

  created() {
    this.techData.push(
      {
        name: 'LAUNCH VEHICLE',
        content:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        imagePathPortrait:
          'images/technology/image-launch-vehicle-portrait.jpg',
        imagePathLandscape:
          'images/technology/image-launch-vehicle-landscape.jpg',
      },
      {
        name: 'SPACEPORT',
        content:
          'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
        imagePathPortrait: 'images/technology/image-spaceport-portrait.jpg',
        imagePathLandscape: 'images/technology/image-spaceport-landscape.jpg',
      },
      {
        name: 'SPACE CAPSULE',
        content:
          "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        imagePathPortrait: 'images/technology/image-space-capsule-portrait.jpg',
        imagePathLandscape:
          'images/technology/image-space-capsule-landscape.jpg',
      }
    )

    this.activeTechData = this.techData[this.activeTech]
  },
}
</script>
<style lang=""></style>

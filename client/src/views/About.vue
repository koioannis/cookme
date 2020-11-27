<template>
  <div id="about">
    <Navbar style="top: 2%"/>
    <SignTemplate />
    <Instruction />

    <div class="header-wrapper">
      <HeaderInfo />
    </div>

    <b-row style="background-color: #F7F7F7;height: 20em">
      <b-col sm="4" class="text-center">
        asd
      </b-col>
      <b-col sm="8" class="question-section text-left">
        asd
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Navbar from '@/components/landing/Navbar.vue';
import HeaderInfo from '@/components/about/HeaderInfo.vue';
import SignTemplate from '@/components/auth/SignTemplate.vue';
import Instruction from '@/components/landing/Instruction.vue';

export default {
  name: 'About',
  components: {
    Navbar,
    HeaderInfo,
    SignTemplate,
    Instruction,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
  #about {
    margin: auto;
  }

  .header-wrapper {
    position: relative;
    height: 32em;
  }
</style>

<template>
  <div id="about">
    <Navbar style="top: 2%"/>
    <SignTemplate />
    <Instruction />

    <div class="header-wrapper">
      <HeaderInfo />
    </div>

    <div style="background-color: #F7F7F7;">
      <b-row class="about-section">
        <b-col cols="4" sm="4" class="text-md-left navigation-left d-none d-md-block">
          <h4 class="font-weight-bold mb-2">
            Τι ψάχνεις ;</h4>
          <div class="mt-4 text-muted">Πως Λειτουργεί</div>
          <div class="mt-4 text-muted">Όροι χρήσης</div>
          <div class="mt-4 text-muted">Ποιοι είμαστε</div>
          <div class="mt-4 text-muted">Όροι χρήσης</div>
          <div class="mt-4 text-muted">Πως Λειτουργεί</div>
          <div class="mt-4 text-muted">Ποιοι είμαστε</div>
          <div class="mt-4 text-muted">Επικοινωνία μαζί μας</div>
        </b-col>
        <b-col sm="8" class="text-md-left text-center pl-5 about-corpus">
          <h2 id="title" class="font-weight-bold">Ποιοι είμαστε ;</h2>
          <p id="corpus" class="mt-4 lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur ad
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque.
            Lorem ipsum dolor sit amet consectetur adipisici
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, itaque.
          </p>
        </b-col>
      </b-row>
    </div>

    <div style="background-color: #F7F7F7">
      <FooterAbout />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/landing/Navbar.vue';
import HeaderInfo from '@/components/about/HeaderInfo.vue';
import SignTemplate from '@/components/auth/SignTemplate.vue';
import Instruction from '@/components/landing/Instruction.vue';
import FooterAbout from '@/components/landing/FooterAbout.vue';

export default {
  name: 'About',
  components: {
    Navbar,
    HeaderInfo,
    SignTemplate,
    Instruction,
    FooterAbout,
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

  .about-section {
    width: 70%;
    margin: auto;
    padding-top: 8em;
    padding-bottom: 10em;
  }

  .navigation-left {
    margin-top: 5em;
  }

  .about-corpus {
    border-left: 2px solid rgba(201, 201, 201, 0.466);
  }

  @media only screen and (max-width: 700px) {
    .about-section {
      width: 90%;
    }

    .about-corpus {
      border-left: none;
    }
  }
</style>

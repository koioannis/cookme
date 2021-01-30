<template>
  <div id="post-body" class="mb-lg-5 mt-5 ml-4">
    <div class="d-flex justify-content-between">
      <h3 class="pb-3 recipe-title"><b>{{title}}</b></h3>
    </div>

    <img src="@/assets/carousel/image_1.jpg" class="shadow-lg mt-4 rounded img-fluid">
    <div class="d-flex mt-4 mb-4 justify-content-between">
      <div>
        <h6>Βαθμολογίστε το!</h6>
        <img v-for="key in 5" :key="key"
          :src="[key<=star ? require('@/assets/svg/yellow_star.svg'):
          require('@/assets/svg/empty_star.svg')]" :class="{'ml-2': key !== 1}" id="stars"
          @mouseover="star = key" @mouseleave="star = 0">
      </div>
    </div>

    <div class="description mt-5 mb-md-5 mb-4">
      <h5 class="mt-4 recipe-description-title pb-2"><b>Περιγραφή</b></h5>
      <div class="mt-4">
        {{description}}
      </div>
    </div>

    <div class="recipe-steps">
      <h5 class="recipe-steps-title pb-2"><b>Βήματα</b></h5>
      <div class="mt-4" v-for="(step, index) in steps" :key="index">
        <div class="d-flex align-items-end">
          <div class="step-number font-weight-bold mr-3">{{index}}</div>
          <div class="mb-1">
            {{step}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostBody',
  props: [
    'title',
    'description',
    'steps',
  ],
  data() {
    return {
      star: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
   #post-body {
     width: 90%;

    .recipe-title {
      white-space: nowrap;
      border-bottom: 2px solid #EF6D9A;
      width: 28%;
    }

    #stars {
      cursor: pointer;
      width: 15%
    }

    .recipe-description-title {
      border-bottom: 1px solid black;
      width: fit-content;
      white-space: nowrap;
    }

    .recipe-steps {
      width: 90%;

      .recipe-steps-title {
        border-bottom: 1px solid black;
        width: fit-content;
        white-space: nowrap;
      }

      .step-number {
        color: #EF6D9A;
        font-size: 2.5em;
      }
    }
  }
</style>

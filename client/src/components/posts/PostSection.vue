<template>
  <div class="mt-5 ml-5">
    <b-row>
      <b-col lg="8">
        <PostBody />
      </b-col>

      <b-col class="mt-5 pt-4 d-lg-block d-none">
        <IngredientsSection />

        <!-- TODO -->
        <b-row class="mt-4 text-center" style="width: 65%">
          <b-col>
            <b><u>Όνομα</u></b>
            <div class="d-flex mt-3 ml-2 align-items-center">
              <input type='checkbox' name='thing' value='valuable' style="transform: scale(1.4)"
              class="mr-3"/>
              <div class="ml-2">Κακάο</div>
            </div>
            <div class="d-flex mt-3 ml-2">
              <input type='checkbox' name='thing' value='valuable' style="transform: scale(1.4)"
              class="mr-3 mt-1"/>
              <div class="ml-2">Ζάχαρι</div>
            </div>
            <div class="d-flex mt-3 ml-2">
              <input type='checkbox' name='thing' value='valuable' style="transform: scale(1.4)"
              class="mr-3 mt-1"/>
              <div class="ml-2">Κακάο</div>
            </div>
          </b-col>
          <b-col>
            <b><u>Ποσότητα</u></b>
            <div class="mt-3">1gr</div>
            <div class="mt-3">200gr</div>
            <div class="mt-3">100gr</div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import IngredientsSection from '@/components/posts/PostSectionExtra/IngredientsSection.vue';
import PostBody from '@/components/posts/PostSectionExtra/PostBody.vue';

export default {
  name: 'PostSection',
  components: {
    IngredientsSection,
    PostBody,
  },
};
</script>

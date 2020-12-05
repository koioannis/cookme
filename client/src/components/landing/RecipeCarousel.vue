<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000" fade indicators>
      <b-carousel-slide
        caption="Σαλάτε 10 εποχών"
        :img-src="require('@/assets/carousel/image_1.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Μοσχάρι Καρέ"
        :img-src="require('@/assets/carousel/image_2.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Μπέργκερ αλά μπουρνέ"
        :img-src="require('@/assets/carousel/image_3.jpg')"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'RecipeCarousel',
};
</script>

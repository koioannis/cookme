<template>
  <form id="editor" @submit.prevent="createPost">
    <h3 class="text-center pt-5"><b><u>Συνταγή</u></b></h3>
    <div class="text-center text-danger mb-3 lead underline" style="font-size:1em">
      <u>{{errorMessage}}</u></div>

    <div class="info-wrapper mt-5">
      <h5>Στοιχεία</h5>
      <div class="form-group mt-3">
        <input type="text" class="small-input input-box p-3 mt-2"
          placeholder="Τίτλος" v-model="title" required>
      </div>
      <div class="form-group mt-3">
        <textarea class="big-input input-box p-3 mt-2"
          placeholder="Περιγραφή" v-model="description" required></textarea>
      </div>
    </div>

    <div class="info-wrapper mt-5">
      <h5>Υλικά</h5>
      <div class="form-group mt-3">
        <input type="text" class="small-input input-box p-3 mt-2"
          placeholder="Τιμή Υλικών" v-model="estimatedCost" required>
      </div>
      <b-row v-for="index in ingredientsNumber" :key="index" cols="2">
        <b-col class="form-group mt-1">
          <input type="text" class="small-input input-box p-3 mt-2"
            placeholder="Τίτλος" v-model="ingredients[index-1].name" required>
        </b-col>

        <b-col class="form-group mt-1">
          <input type="text" class="small-input input-box p-3 mt-2"
            placeholder="Τίτλος" v-model="ingredients[index-1].quantity" required>
        </b-col>
      </b-row>
      <b-button size="md" class="mt-2 custom-button" @click="addIngredient">
        Προσθήκη</b-button>
      <b-button size="md" class="mt-2 ml-2" @click="removeIngredient">
        Διαγραφή</b-button>
    </div>

    <div class="info-wrapper mt-5">
      <h5>Βήματα</h5>
      <div v-for="index in stepsNumber" :key="index" class="mt-2">
          <textarea class="big-input input-box p-3 mt-2"
            placeholder="Περιγραφή" v-model="steps[index-1]" required></textarea>
      </div>
      <b-button size="md" class="mt-2 mb-2 custom-button" @click="addStep">
        Προσθήκη</b-button>
      <b-button size="md" class="mt-2 ml-2 mb-2" @click="removeStep">
        Διαγραφή</b-button>
    </div>

    <div class="info-wraooer text-center">
    <b-button type="submit" size="md" class="mt-5 mb-3 custom-button send-button">
        Αποστολή</b-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'PostEditor',
  data() {
    return {
      errorRespone: null,
      title: null,
      description: null,
      estimatedCost: null,
      ingredientsNumber: 2,
      stepsNumber: 2,
      // eslint-disable-next-line no-array-constructor
      ingredients: new Array({ name: '', quantity: '' }, { name: '', quantity: '' }),
      // eslint-disable-next-line no-array-constructor
      steps: new Array('', ''),
    };
  },
  methods: {
    addIngredient() {
      if (this.ingredientsNumber < 20) {
        this.ingredients.push({ name: '', quantity: '' });
        this.ingredientsNumber += 1;
      }
    },
    removeIngredient() {
      if (this.ingredientsNumber > 2) {
        this.ingredients.pop();
        this.ingredientsNumber -= 1;
      }
    },
    addStep() {
      if (this.stepsNumber < 15) {
        this.steps.push('');
        this.stepsNumber += 1;
      }
    },
    removeStep() {
      if (this.stepsNumber > 2) {
        this.steps.pop();
        this.stepsNumber -= 1;
      }
    },
    createPost() {
      this.$store.dispatch('posts/createPost', {
        title: this.title,
        description: this.description,
        ingredients: this.ingredients,
        steps: this.steps,
      })
        .then((postId) => {
          this.$router.push({ path: `/post/view-post/${postId}` });
        })
        .catch(() => {
          this.errorRespone = 'Κάτι πήγε στραβά ξαναπροσπαθήστε. Αν δεν μπορείτε να συνδεθείτε στείλτε μας ένα email.';
        });
    },
  },
  created() {
    this.$emit('updateIngredients', this.ingredients);
  },
  watch: {
    title() {
      this.$emit('updateTitle', this.title);
    },
    description() {
      this.$emit('updateDescription', this.description);
    },
    steps() {
      this.$emit('updateSteps', this.steps);
    },
    estimatedCost() {
      this.$emit('updateEstimatedCost', this.estimatedCost);
    },
  },
};
</script>

<style lang="scss" scoped>
  #editor {
    .info-wrapper {
      width: 80%;
      margin: auto;
    }

    .input-box {
      border: none;
      box-shadow: 2px 3px 10px #b9b9b9ad !important;
      outline: none;
      color: rgba(0, 0, 0, 0.788);
      width: 100%;
    }

    .big-input {
      height: 10em;
    }

    .send-button {
      width: 80%;
    }
  }
</style>

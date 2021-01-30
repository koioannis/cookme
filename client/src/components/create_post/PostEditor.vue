<template>
  <div id="editor">
    <h3 class="text-center pt-5"><b><u>Συνταγή</u></b></h3>

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
            placeholder="Τίτλος" v-model="ingredients[0][index-1].name" required>
        </b-col>

        <b-col class="form-group mt-1">
          <input type="text" class="small-input input-box p-3 mt-2"
            placeholder="Τίτλος" v-model="ingredients[0][index-1].quantity" required>
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
            placeholder="Περιγραφή" v-model="steps[0][index-1]" required></textarea>
      </div>
      <b-button size="md" class="mt-2 mb-2 custom-button" @click="addStep">
        Προσθήκη</b-button>
      <b-button size="md" class="mt-2 ml-2 mb-2" @click="removeStep">
        Διαγραφή</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostEditor',
  data() {
    return {
      title: null,
      description: null,
      estimatedCost: null,
      ingredientsNumber: 2,
      stepsNumber: 2,
      ingredients: new Array([{ name: null, quantity: null }, { name: null, quantity: null }]),
      steps: new Array(['', '']),
    };
  },
  methods: {
    addIngredient() {
      if (this.ingredientsNumber < 20) {
        this.ingredients[0].push({ name: null, quantity: null });
        this.ingredientsNumber += 1;
      }
    },
    removeIngredient() {
      if (this.ingredientsNumber > 2) {
        this.ingredients[0].pop();
        this.ingredientsNumber -= 1;
      }
    },
    addStep() {
      if (this.stepsNumber < 15) {
        this.ingredients[0].push('');
        this.stepsNumber += 1;
      }
    },
    removeStep() {
      if (this.stepsNumber > 2) {
        this.ingredients[0].pop();
        this.stepsNumber -= 1;
      }
    },
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
  }
</style>

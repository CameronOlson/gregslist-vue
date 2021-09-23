<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="bedrooms" class="">Beds:</label>
      <input
        v-model="editable.bedrooms"
        type="number"
        id="bedrooms"
        name="bedrooms"
        class="form-control"
      >
    </div>

    <div class="form-group">
      <label for="bathrooms" class="">Baths:</label>
      <input
        v-model="editable.bathrooms"
        type="number"
        class="form-control"
        name="bathrooms"
        id="bathrooms"
        required
      >
    </div>

    <div class="form-group">
      <label for="year" class="">Year:</label>
      <input
        v-model="editable.year"
        type="number"
        class="form-control"
        name="year"
        id="year"
        required
      >
    </div>

    <div class="form-group">
      <label for="levels" class="">Floors:</label>
      <input
        v-model="editable.levels"
        type="number"
        class="form-control"
        name="levels"
        id="levels"
      >
    </div>

    <div class="form-group">
      <label for="price" class="">Price:</label>
      <input
        v-model="editable.price"
        type="number"
        class="form-control"
        name="price"
        id="price"
      >
    </div>

    <div class="form-group">
      <label for="description" class="">Description</label>
      <input
        v-model="editable.description"
        type="text"
        class="form-control"
        name="description"
        id="description"
      >
    </div>

    <button type="submit" class="btn text-primary text-uppercase selectable">
      <b>
        submit
      </b>
    </button>
  </form>
</template>

<script>
import { ref, watchEffect } from '@vue/runtime-core'
import { House } from '../models/House'
import { housesService } from '../services/HousesService'
import { logger } from '../utils/Logger'

export default {
  props: {
    house: { type: House, default: () => new House() }
  },
  setup(props) {
    const editable = ref({})

    watchEffect(() => {
      editable.value = { ...props.house }
    })

    return {
      editable,
      async handleSubmit() {
        try {
          if (editable.value.id) {
            await housesService.editHouse(editable.value)
          } else {
            await housesService.createHouse(editable.value)
            logger.log('this should come up when you hit submit')
          }
          editable.value = {}
        } catch (error) {

        }
      }
    }
  }
}
</script>

<style>

</style>

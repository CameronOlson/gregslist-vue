<template>
  <div class="container-fluid">
    <div class="row py-2 bg-dark mb-4 top-bar">
      <div class="col-12">
        <button class="btn text-success lighten-20 selectable" data-bs-toggle="modal" data-bs-target="#house-form">
          Add a House
        </button>
      </div>
    </div>
    <div class="row">
      <House v-for="house in houses" :key="house.id" :house="house" class="col-lg-3" />
    </div>

    <Modal id="house-form">
      <template #modal-title>
        Add your House
      </template>
      <template #modal-body>
        <HouseForm />
      </template>
    </Modal>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { housesService } from '../services/HousesService.js'
import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js'
export default {
  setup() {
    onMounted(() => {
      logger.log('is the houses page getting to the logger')
      housesService.getHouses()
    })

    return {
      houses: computed(() => AppState.houses)
    }
  }
}
</script>

<style>

</style>

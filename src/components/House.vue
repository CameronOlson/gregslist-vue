<template>
  <div class="mb-4">
    <router-link :to="{name: 'House', params: { houseId: house.id }}">
      <div class="card selectable">
        <img :src="house.url"
             alt="house image"
             class="rounded"
        >
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span>${{ house.price }}</span>
          </h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { House } from '../models/House'
export default {
  props: {
    house: { type: House, required: true }
  },
  setup(props) {
    return {
      deleteHouse() {

      }
    }
  }
}
</script>

<style>

</style>

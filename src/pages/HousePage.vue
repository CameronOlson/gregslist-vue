<template>
  <div v-if="house" class="py-4">
    <div class="d-flex flex-wrap w-100">
      <House :house="house" class="house-details" />
      <div class="ms-4">
        <p>
          <b>Contact Seller</b>
        </p>
        <div class="d-flex">
        </div>
        <div v-if="house.creatorId === account.id">
          <p class="my-3">
            <b>ListingControls</b>
          </p>
          <div>
            <button class="btn text-dark lighten-20" @click="remove(house)">
              <b>
                Remove Listing
              </b>
            </button>
            <button class="btn btn-danger text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
            >
              <b>Edit</b>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Modal id="edit-modal">
      <template #modal-title>
        {{ house.price }}
      </template>
      <template #modal-body>
        <HouseForm :house="house" />
      </template>
    </Modal>
  </div>
  <div v-else>
    loading!!
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { housesService } from '../services/HousesService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { router } from '../router'
import Pop from '../utils/Pop'

export default {
  setup() {
    const route = useRoute()

    onMounted(() => {
      housesService.getHouseById(route.params.houseId)
    })

    return {
      account: computed(() => AppState.account),
      house: computed(() => AppState.house),
      async remove(house) {
        try {
          const yes = await Pop.confirm('are you sure')
          if (!yes) { return }
          await housesService.removeHouse(house.id)
          router.push({ name: 'Houses' })
        } catch (e) {
          Pop.toast(e.message)
        }
      }
    }
  }
}
</script>

<style>

</style>

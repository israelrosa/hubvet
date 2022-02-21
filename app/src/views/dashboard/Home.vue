<template>
  <v-container
    id="container"
    :style="{backgroundColor: $vuetify.theme.themes.light.background}"
    fluid
    class="pa-6"
  >
    <v-data-table
      class="d-flex flex-column background"
      style="height: 100%"
      show-select
      :items="items"
      :headers="headers"
    >
      <template v-slot:top>
        <div class="d-flex mb-8 align-center">
          <v-autocomplete
            class="elevation-9 mr-6"
            chips
            clearable
            hide-details
            hide-selected
            item-text="name"
            item-value="symbol"
            label="Buscar por..."
            solo
          />
          <custom-button value="Novo agrupamento" />
        </div>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import CustomButton from '../../components/CustomButton.vue';

export default {
  name: 'Home',
  components: {
    CustomButton
  },
  data() {
    return {
       headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
      items: [
        {
          id: "89950b7d-ae27-41b5-a179-e1629e77750f",
          user_id: "04a7aafb-3030-4867-aba6-7f1b76e07bd7",
          specie_id: "3ce9b76e-d5a8-4991-bcf4-e3dc0ac3dc15",
          breed_id: "4beb5b21-bd97-4ca3-86a5-fec4fbc9f7e4",
          coat_size_id: "d25d8d05-3148-4024-ba1e-78ad0b88aa83",
          coat_type_id: "326398fb-fc88-4bb7-aa23-21c5df9e8433",
          created_at: "2022-02-21T20:37:33.574Z",
          updated_at: "2022-02-21T20:37:33.574Z",
          specie: {
            id: "3ce9b76e-d5a8-4991-bcf4-e3dc0ac3dc15",
            name: "Felina"
          },
          breed: {
            id: "4beb5b21-bd97-4ca3-86a5-fec4fbc9f7e4",
            name: "Bombay",
            specie_id: "3ce9b76e-d5a8-4991-bcf4-e3dc0ac3dc15"
          },
          coat_type: {
            id: "326398fb-fc88-4bb7-aa23-21c5df9e8433",
            name: "Lisa"
          },
          coat_size: {
            id: "d25d8d05-3148-4024-ba1e-78ad0b88aa83",
            name: "Curta"
          },
          pets: [
            {
              id: "176c2e4c-9151-42dc-b5e6-70418ec9c8de",
              name: "Juju",
              initial_age: 1,
              final_age: 2,
              pet_group_id: "89950b7d-ae27-41b5-a179-e1629e77750f",
              user_id: "04a7aafb-3030-4867-aba6-7f1b76e07bd7",
              created_at: "2022-02-21T21:02:59.844Z",
              updated_at: "2022-02-21T21:02:59.844Z"
            },
            {
              id: "edd8d704-2df0-44fb-9652-9be09019fa3c",
              name: "Jujuna",
              initial_age: 1,
              final_age: 2,
              pet_group_id: "89950b7d-ae27-41b5-a179-e1629e77750f",
              user_id: "04a7aafb-3030-4867-aba6-7f1b76e07bd7",
              created_at: "2022-02-21T21:02:33.153Z",
              updated_at: "2022-02-21T21:02:33.153Z"
            }
          ]
        },
        {
          id: "5d4edb40-6c3d-48b6-9665-25e18eeeffda",
          user_id: "04a7aafb-3030-4867-aba6-7f1b76e07bd7",
          specie_id: "d8c46c3c-f911-43af-b69d-d2cfdbca8c20",
          breed_id: "f1d356f6-396d-4eb3-bce9-963a6725bfbd",
          coat_size_id: "d25d8d05-3148-4024-ba1e-78ad0b88aa83",
          coat_type_id: "326398fb-fc88-4bb7-aa23-21c5df9e8433",
          created_at: "2022-02-21T19:35:05.691Z",
          updated_at: "2022-02-21T19:35:05.691Z",
          specie: {
            id: "d8c46c3c-f911-43af-b69d-d2cfdbca8c20",
            name: "Canina"
          },
          breed: {
            id: "f1d356f6-396d-4eb3-bce9-963a6725bfbd",
            name: "Cão afegão",
            specie_id: "d8c46c3c-f911-43af-b69d-d2cfdbca8c20"
          },
          coat_type: {
            id: "326398fb-fc88-4bb7-aa23-21c5df9e8433",
            name: "Lisa"
          },
          coat_size: {
            id: "d25d8d05-3148-4024-ba1e-78ad0b88aa83",
            name: "Curta"
          },
          pets: [
            {
              id: "ca954456-efa9-44d4-a093-c4cec22efffb",
              name: "Juju",
              initial_age: 1,
              final_age: 2,
              pet_group_id: "5d4edb40-6c3d-48b6-9665-25e18eeeffda",
              user_id: "04a7aafb-3030-4867-aba6-7f1b76e07bd7",
              created_at: "2022-02-21T21:03:03.533Z",
              updated_at: "2022-02-21T21:03:03.533Z"
            }
          ]
        }
      ]
    }
  },
}
</script>

<style lang="scss">
  #container {
    overflow-y: auto; 
    height: 100%; 
    width: 100%
  }
</style>

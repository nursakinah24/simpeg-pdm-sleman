<template>
    <div class="pt-8 px-10 lg:px-20 w-auto relative xl:px-20 text-gray-900">
      <div class="pb-6">
        <h1 class="font-poppins font-bold text-3xl">
          Pendidikan dan Pelatihan
        </h1>
      </div>
    <div class="flex flex-col p-8 bg-white shadow rounded-lg mb-4">
        <div class="m-2 ml-auto mr-10">
          <addButton  @click="toggleAddTraining"/>
        </div>
          <div class="px-4 py-4 mx-4 sm:-mx-8 sm:px-8">
              <div class="max-w-screen overflow-x-auto justify-center rounded-lg shadow">
                  <table class="max-w-full leading-normal font-poppins">
                      <thead>
                          <tr>
                              <th class="px-4 py-2 text-sm text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                  Nama Kegiatan
                              </th>
                              <th class="px-4 py-2 text-sm text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                  Penyelenggara
                              </th>
                              <th class="px-4 py-2 text-sm text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                  JPL
                              </th>
                              <th class="px-4 py-2 text-sm text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                  Tahun Kegiatan
                              </th>
                              <th class="px-4 py-2 text-sm text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                  Berkas
                              </th>
                              <th class="px-4 py-2 text-sm text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                  Aksi
                              </th>
                              <th class="px-4 py-2 text-sm text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                  Validasi
                              </th>
                              <th  class="px-4 py-2 text-sm text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                  Komentar
                              </th>
                          </tr>
                      </thead>
                      <tbody class=" bg-sky-50">
                          <tr v-for="(data, index) in datas" :key="index" class="divide-x"> 
                              <td class="px-4 py-2 text-sm text-center border-b border-gray-200">
                                  <p class="text-gray-900">
                                      {{data.namaKeg}}
                                  </p>
                              </td>
                              <td class="px-4 py-2 text-sm text-center border-b border-gray-200">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                      {{data.penyelenggara}}
                                  </p>
                              </td>
                              <td class="px-4 py-2 text-sm text-center border-b border-gray-200">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                      {{data.jpl}}
                                  </p>
                              </td>
                              <td class="px-4 py-2 text-sm text-center border-b border-gray-200">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                      {{data.tahun}}
                                  </p>
                              </td>
                              <td class="px-4 py-2 text-sm text-center border-b border-gray-200">
                                  <downloadButton />
                              </td>
                              <td class="px-4 py-2 text-sm items-center border-b border-gray-200">
                                <div class="flex flex-row gap-0.5 items-center">
                                  <editButton />
                                  <deleteButton />
                                </div>
                              </td>
                              <td class="px-4 py-2 text-sm text-center border-b border-gray-200">
                                <input type="checkbox" v-model="data.validasi" class="fform-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none" disabled />
                                      <span class="relative">{{ data.validasi ? '' : '' }}</span>
                              </td>
                              <td class="px-4 py-2 text-sm text-center border-b border-gray-200">
                                  <p class="text-gray-900">
                                      
                                  </p>
                              </td>
                          </tr>
                       </tbody>
                  </table>
                </div>
              </div>
      </div>
      <addTraining v-if="showModal" @close="showModal = false" :visible="showModal"/>
    </div>
  </template>
  
  <script>
  import addButton from '../components/Buttons/addButton.vue';
  import downloadButton from '../components/Buttons/downloadButton.vue';
  import editButton from '../components/Buttons/editButton.vue';
  import deleteButton from '../components/Buttons/deleteButton.vue';
  import addTraining from '../components/Form/addTraining.vue';

  export default {
    components: {
      addButton,
      downloadButton,
      editButton,
      deleteButton,
      addTraining
    },
    data() {
      return {
        datas: [
          { namaKeg: 'Diklat A', penyelenggara: 'Universitas Muhammadiyah Yogyakarta', jpl:'1', tahun: '2018', berkas: 'file', validasi: true, komentar: ''},
        
        ],
        showModal: false,
      };
    },
    methods: {
    toggleAddTraining() {
      this.showModal = !this.showModal;
    },
  },
  };
  </script>
  
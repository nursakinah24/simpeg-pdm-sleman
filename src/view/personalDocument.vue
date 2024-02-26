<template>
    <div class="pt-8 px-10 lg:px-20 w-auto relative xl:px-20 text-gray-900">
      <div class="pb-6">
        <h1 class="font-poppins font-bold text-3xl">
          Dokumen Pribadi
        </h1>
      </div>
    <div class="flex flex-col p-8 bg-white shadow rounded-lg mb-4">
        <div class="m-2 ml-auto mr-10">
          <addButton  @click="toggleAddDoc"/>
        </div>
          <div class="px-4 py-4 mx-4 sm:-mx-8 sm:px-8">
              <div class="max-w-full justify-center overflow-x-auto rounded-lg shadow">
                  <table class="max-w-full leading-normal font-poppins">
                      <thead>
                          <tr>
                              <th scope="col" class="px-[5rem] py-3 text-sm text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                  Jenis Dokumen
                              </th>
                              <th scope="col" class="px-[5rem] py-3 text-sm text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                  ID / Nomor
                              </th>
                              <th scope="col" class="px-16 py-3 text-sm text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                  Berkas
                              </th>
                              <th scope="col" class="px-16 py-3 text-sm text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                  Aksi
                              </th>
                              <th scope="col" class="px-10 py-3 text-sm text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                  Validasi
                              </th>
                              <th scope="col" class="px-[5rem] py-3 text-sm text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                  Komentar
                              </th>
                          </tr>
                      </thead>
                      <tbody class=" bg-sky-50">
                          <tr v-for="(data, index) in datas" :key="index" class="divide-x"> 
                              <td class="px-4 py-5 text-sm text-center border-b border-gray-200">
                                  <p class="text-gray-900">
                                      {{data.jenisDoc}}
                                  </p>
                              </td>
                              <td class="px-4 py-5 text-sm text-center border-b border-gray-200">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                      {{data.noId}}
                                  </p>
                              </td>
                              <td class="px-4 py-5 text-sm text-center border-b border-gray-200">
                                  <downloadButton />
                              </td>
                              <td class="px-4 py-5 text-sm items-center border-b border-gray-200">
                                <div class="flex flex-row items-center">
                                  <editButton />
                                  <deleteButton />
                                </div>
                              </td>
                              <td class="px-4 py-5 text-sm text-center border-b border-gray-200">
                                <input type="checkbox" v-model="data.validasi" class="fform-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none" disabled />
                                      <span class="relative">{{ data.validasi ? '' : '' }}</span>
                              </td>
                              <td class="px-4 py-5 text-sm text-center border-b border-gray-200">
                                  <p class="text-gray-900">
                                      
                                  </p>
                              </td>
                          </tr>
                       </tbody>
                  </table>
                </div>
              </div>
      </div>
      <addDocument v-if="showModal" @close="showModal = false" :visible="showModal"/>
    </div>
  </template>
  
  <script>
  import addButton from '../components/Buttons/addButton.vue';
  import downloadButton from '../components/Buttons/downloadButton.vue';
  import editButton from '../components/Buttons/editButton.vue';
  import deleteButton from '../components/Buttons/deleteButton.vue';
  import addDocument from '../components/Form/addDocument.vue';

  export default {
    components: {
      addButton,
      downloadButton,
      editButton,
      deleteButton,
      addDocument
    },
    data() {
      return {
        datas: [
          { jenisDoc: 'BPJS Kesehatan', noId: '0012341569483', berkas: 'file', validasi: true, komentar: ''},
          { jenisDoc: 'KTP', noId: '0012341569483', berkas: 'file', validasi: false, komentar: ''},
          { jenisDoc: 'NBM', noId: '0012341569483', berkas: 'file', validasi: true, komentar: ''},
          { jenisDoc: 'Paspor', noId: '0012341569483', berkas: 'file', validasi: false, komentar: ''},
          { jenisDoc: 'Kartu Keluarga', noId: '0012341569483', berkas: 'file', validasi: true, komentar: ''},
        ],
        showModal: false,
      };
    },
    methods: {
    toggleAddDoc() {
      this.showModal = !this.showModal;
    },
  },
  };
  </script>
  
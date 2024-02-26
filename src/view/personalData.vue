<template>
  <div class="pt-8 px-10 lg:px-20 w-auto relative xl:px-20 text-gray-900">
    <div class="pb-6">
      <h1 class="font-poppins font-bold text-3xl">
        Data Diri
      </h1>
    </div>
    <div class="flex flex-col gap-10 md:flex-row p-8 bg-white shadow rounded-lg mb-4">
      <div class="w-1/2 flex-1 flex-cols gap-4 font-poppins">
          <div v-for="(data, index) in datas" :key="index" class="flex items-center mb-4">
            <div class="px-10 md:w-1/2 items-center">
              <span class="font-bold">{{ data.label }}</span>
            </div>
            <div class="text-left">
              <span>{{ data.value }}</span>
            </div>
          </div>
        </div>
        <div class="w-24 md:1/3 flex items-start">
            <editButton  @click="toggleEditModal" />
        </div>
    </div>
    <EditData v-if="showModal" @close="showModal = false" :visible="showModal"/>
  </div>
</template>

<script>
import EditData from '../components/Form/editData.vue';
import editButton from '../components/Buttons/editButton.vue'

export default {
  components:
  {
    EditData,
    editButton,
  },
    data() {
        return {
            datas: [
                { label: 'Nama', value: 'example' },
                { label: 'Gelar Depan', value: 'example' },
                { label: 'Tempat Lahir', value: 'example' },
                { label: 'Tanggal Lahir', value: 'example' },
                { label: 'Jenis Kelamin', value: 'example' },
                { label: 'Agama', value: 'example' },
                { label: 'Status Kepegawaian', value: 'example' },
                { label: 'Golongan Darah', value: 'example' },
                { label: 'No. Telp / HP', value: 'example' },
                { label: 'Email', value: 'example' },
                { label: 'Alamat', value: 'example' },
                { label: 'Kelurahan', value: 'example' },
                { label: 'Kecamatan', value: 'example' },
                { label: 'Kabupaten / Kota', value: 'example' },
                { label: 'Provinsi', value: 'example' },
                // Add more people as needed
            ],
            showModal: false,
        };
    },
    methods: {
    toggleEditModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

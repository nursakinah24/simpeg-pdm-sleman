<template v-if="visible">
    <div class="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50 flex items-center justify-center font-poppins">
            <div class="relative m-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl bg-white px-6 p-5 shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                <h1 class="font-bold ml-6 text-2xl text-center">
                    Isi Data Diri Anda
                </h1>
            <div class="pt-5">
            <form>
                <div class="divide-y divide-white space-y-4">
                    <div class="relative">
                    <input type="text" id="floating_outlined" class="block px-2.5 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Nama Lengkap</label>
                    </div>
    
                    <div class="relative flex space-x-16 ">
                        <div class="relative w-[22rem] flex flex-col">
                            <input type="text" id="floating_outlined" class="block px-4 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1  border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Gelar Depan</label>
                        </div>
                        <div class="relative w-[22rem] flex flex-col ">
                            <input type="text" id="floating_outlined" class="block px-4 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1  border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Gelar Belakang</label>
                        </div>
                    </div>

                    <div class="relative flex space-x-16">
                        <div class="relative w-[22rem] flex flex-col">
                            <input type="text" id="floating_outlined" class="block px-4 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1   border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Tempat Lahir</label>
                        </div>
                        <div class="relative w-[22rem] flex-col">
                        <input
                          type="date"
                          v-model="tanggalLahir"
                          id="tanggalLahir"
                          class="pt-3 pb-2 block w-full px-2 mt-0 bg-transparent border-1 text-sm rounded-lg appearance-none z-1 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-gray-400"
                        />
                        <label
                          for="tanggalLahir"
                          class="absolute text-sm duration-300 top-3 z-10 origin-[0] px-2 bg-white text-gray-500 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                          :class="{ 'floating-label': tanggalLahir !== '' }"
                        >
                          Tanggal Lahir
                        </label>
                      </div>
                    </div>

                    <div class="relative flex space-x-16">
                        <div class="relative w-[22rem] flex-col">
                          <select v-model="jenisKelamin" class="pt-3 pb-2 block w-full px-2 mt-0 bg-transparent border-1  rounded-lg appearance-none z-1 
                          focus:outline-none focus:ring-0 focus:border-blue-600 peer border-gray-400">
                          <option value="" selected disabled hidden></option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                        </select>
                        <label
                          for="select"
                          class="absolute text-sm duration-300 top-3 z-10 origin-[0] px-2 bg-white text-gray-500 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                          :class="{ 'floating-label': jenisKelamin !== '' }"
                        > Pilih Jenis Kelamin
                        </label>
                        </div>
                        <div class="relative w-[22rem] flex-col">
                          <select v-model="golonganDarah" class="pt-3 pb-2 block w-full px-2 mt-0 bg-transparent border-1  rounded-lg appearance-none z-1 
                          focus:outline-none focus:ring-0 focus:border-blue-600 peer border-gray-400">
                          <option value="" selected disabled hidden></option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                        </select>
                        <label
                          for="select"
                          class="absolute text-sm duration-300 top-3 z-10 origin-[0] px-2 bg-white text-gray-500 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                          :class="{ 'floating-label': golonganDarah !== '' }"
                        > Pilih Golongan Darah
                        </label>
                        </div>
                    </div>

                    <div class="relative flex space-x-16">
                        <div class="relative w-[22rem] flex-col">
                          <select v-model="agama" class="pt-3 pb-2 block w-full px-2 mt-0 bg-transparent border-1  rounded-lg appearance-none z-1 
                          focus:outline-none focus:ring-0 focus:border-blue-600 peer border-gray-400">
                          <option value="" selected disabled hidden></option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                        </select>
                        <label
                          for="select"
                          class="absolute text-sm duration-300 top-3 z-10 origin-[0] px-2 bg-white text-gray-500 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                          :class="{ 'floating-label': agama !== '' }"
                        > Pilih Agama
                        </label>
                        </div>
                        <div class="relative w-[22rem] flex-col">
                          <select v-model="statusPegawai" class="pt-3 pb-2 block w-full px-2 mt-0 bg-transparent border-1  rounded-lg appearance-none z-1 
                          focus:outline-none focus:ring-0 focus:border-blue-600 peer border-gray-400">
                          <option value="" selected disabled hidden></option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                        </select>
                        <label
                          for="select"
                          class="absolute text-sm duration-300 top-3 z-10 origin-[0] px-2 bg-white text-gray-500 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                          :class="{ 'floating-label': statusPegawai !== '' }"
                        > Pilih Status Pegawai
                        </label>
                        </div>
                    </div>

                    <div class="relative flex space-x-16">
                        <div class="relative w-[22rem] flex flex-col">
                            <input type="text" id="floating_outlined" class="block px-4 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1  border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">No Telepon/HP</label>
                        </div>
                        <div class="relative w-[22rem] flex flex-col">
                            <input type="text" id="floating_outlined" class="block px-4 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1  border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
                        </div>
                    </div>

                    <div class="relative">
                    <input type="text" id="floating_outlined" class="block px-2.5 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1  border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Alamat</label>
                    </div>

                    <div class="relative flex space-x-16">
                        <div class="relative w-[22rem] flex flex-col">
                            <input type="text" id="floating_outlined" class="block px-4 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1  border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Kelurahan</label>
                        </div>
                        <div class="relative w-[22rem] flex flex-col">
                            <input type="text" id="floating_outlined" class="block px-4 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1  border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Kecamatan</label>
                        </div>
                    </div>

                    <div class="relative flex space-x-16">
                        <div class="relative w-[22rem] flex flex-col">
                            <input type="text" id="floating_outlined" class="block px-4 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1  border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Kota/Kabupaten</label>
                        </div>
                        <div class="relative w-[22rem] flex flex-col">
                            <input type="text" id="floating_outlined" class="block px-4 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1  border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Provinsi</label>
                        </div>
                    </div>

                    <div class="relative flex justify-end pt-4 space-x-6">
                      <saveButton />
                      <cancelButton @click="closeModal"/>
                    </div>
                </div>
            </form>
            </div>
          </div>
        </div>
  </template>
  
  <script>
  import saveButton from '../Buttons/saveButton.vue';
  import cancelButton from '../Buttons/cancelButton.vue';

  export default {
    components: {
      saveButton,
      cancelButton,
    },
    props: {
      visible: Boolean,
    },
    data() {
      return {
        tanggalLahir: '',
        jenisKelamin: '',
        golonganDarah: '',
        agama: '',
        statusPegawai: '',
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>
  
<style scoped>
.floating-label {
  transform: translateY(-120%) scale(0.75);
  top: 1rem;
}
</style>
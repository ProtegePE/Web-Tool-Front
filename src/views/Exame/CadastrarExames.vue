<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-primary">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>Cadastar Exames</small>
                            </div>
                        </template>
                        <template>
                            <form role="form">
                                <dropdown>
                                   <base-button slot="title" type="secondary" class="dropdown-toggle">
                                        Tipo do Exame
                                    </base-button>
                                    <a class="dropdown-item" @click="selected = 'RT-PCR'">RT-PCR</a>
                                    <a class="dropdown-item" @click="selected = 'Sorológico'">Sorológico</a>
                                </dropdown>
                                <br>
                                <br>                                
                                <!-- ------------------------------- if/else-->
                                <base-input
                                    v-if="selected == 'Sorológico'"
                                    class="mb-3"
                                    placeholder= 'IgG'
                                    addon-left-icon="ni ni-badge">
                                </base-input>
                                <base-input
                                    v-if="selected == 'Sorológico'"
                                    class="mb-3"
                                    placeholder= 'IgM'
                                    addon-left-icon="ni ni-badge">
                                </base-input>
                                <base-input
                                    v-if="selected == 'RT-PCR'"
                                    class="mb-3"
                                    placeholder= "RT-PCR"
                                    addon-left-icon="ni ni-badge">
                                </base-input>
                                
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Resultado"
                                            addon-left-icon="ni ni-badge">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Data"
                                            addon-left-icon="ni ni-badge">
                                </base-input>

                                <div class="text-center">
                                    <router-link to="/" class="mt-4">
                                        <base-button type="primary" class="my-4">Cadastrar</base-button>
                                    </router-link>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import Dropdown from "@/components/BaseDropdown.vue";
export default {
    components: {
        Dropdown
    },
    data(){
        return {
         checkboxes: {
            checked: false,
            checkedDisabled: true
          },
          selected: '',
          opcao: 'Sorológico'
        }
    }
};
</script>
<style>
</style>

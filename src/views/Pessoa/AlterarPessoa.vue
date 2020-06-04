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
                                <small>Dados de Pessoa</small>
                            </div>
                            <!-- <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/github.svg">
                                    Github
                                </base-button>

                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div> -->
                        </template>

                        <template>
                            <form role="form">
                                 <base-alert type="danger" v-show="error">
                                    <strong>Dados inválidos</strong>
                                    Verifique os campos: {{respErro}}!
                                </base-alert>
                                <base-input alternative                                            
                                            class="mb-3"
                                            placeholder="Nome"
                                            v-model="pessoa.nome"
                                            addon-left-icon="ni ni-single-02">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="CPF"
                                            v-model="pessoa.cpf"
                                            addon-left-icon="ni ni-badge">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="RG"
                                            v-model="pessoa.rg"
                                            addon-left-icon="ni ni-badge">
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="CNS"
                                            v-model="pessoa.cns"
                                            addon-left-icon="ni ni-badge">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Telefone"
                                            v-model="pessoa.telefone"
                                            addon-left-icon="ni ni-mobile-button">
                                </base-input>
                                <div class="text-muted text-center mb-3">
                                    <small>Dados de Endereço</small>
                                </div>
                                <!-- <p>Logradouro</p> -->
                               <base-input alternative 
                                            class="mb-3"
                                            placeholder="Logradouro"
                                            v-model="pessoa.logradouro"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                                <!-- <p>Complemento</p> -->
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Complemento"
                                            v-model="pessoa.complemento"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Numero"
                                            v-model="pessoa.numero"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Bairro"
                                            v-model="pessoa.bairro"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Cidade"
                                            v-model="pessoa.cidade"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="UF"
                                            v-model="pessoa.uf"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                               <base-input alternative
                                            class="mb-3"
                                            placeholder="Cep"
                                            v-model="pessoa.cep"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                                <div class="text-center">
                                    <base-button type="primary" @click="alterar" class="my-4">Alterar</base-button>
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
import axios from "axios";

export default {
    components: {},
    
    mounted(){        
        let dadosPessoa = JSON.parse(localStorage.getItem("dados-pessoa"))
        if(dadosPessoa){
            this.pessoa = {
                id: dadosPessoa.id,
                nome: dadosPessoa.nome,
                cpf: dadosPessoa.cpf,
                rg: dadosPessoa.rg,
                cns: dadosPessoa.cns,
                telefone: dadosPessoa.telefone,
                logradouro: dadosPessoa.enderecos[0].logradouro,
                complemento: dadosPessoa.enderecos[0].complemento,
                numero: dadosPessoa.enderecos[0].numero,
                bairro: dadosPessoa.enderecos[0].bairro,
                cidade: dadosPessoa.enderecos[0].cidade,
                cep: dadosPessoa.enderecos[0].cep,
                uf: dadosPessoa.enderecos[0].uf
            }  
        }   
    },

    data(){
        return {
            pessoa:{},
            error: false,
            respErro: ''
        }
    },

    methods: {
        async alterar(){
            const request = axios.create();
            const baseUrl = "https://web-tool-api.herokuapp.com";
            await request
                .put(`${baseUrl}/pessoa/id`, this.pessoa, {
                    headers: { pessoa_id: this.pessoa.id },
                })
                .then((res) => {
                    alert("deu certo")
                    // console.log("RES ===>", res);
                    localStorage.removeItem('dados-pessoa');                    
                    this.$router.push('/ListarPessoa')
                })
                .catch((err) => {
                console.log("ERRO => ",err);
                });
        },
    }
};

</script>
<style>
</style>

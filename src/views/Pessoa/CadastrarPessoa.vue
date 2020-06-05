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
                                <small>Cadastar Pessoa</small>
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
                                    <small>Cadastar Endereço</small>
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
                                    <base-button type="primary" @click="cadastrar" class="my-4">Cadastrar</base-button>
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
    
    data(){
        return {
            pessoa:{
                nome: '',
                cpf: '',
                rg: '',
                cns: '',
                telefone: '',
                //endereco
                logradouro: '',
                complemento: '',
                numero: '',
                bairro: '',
                cidade: '',
                uf: '',
                cep: ''
            },
            alterarPessoa:{},
            error: false,
            respErro: ''
        }
    },

    methods: {
         cadastrar(){  
            var flag = false
            if(this.pessoa.nome == ''){
                this.respErro = 'Nome'
                this.error = true
                flag = true
            }
            if(this.pessoa.cpf == ''){
                this.respErro = this.respErro+', CPF'
                this.error = true
                flag = true
            }           
            if(flag) return

            const request = axios.create();
            const baseUrl = "https://web-tool-api.herokuapp.com";
            request
                .post(`${baseUrl}/pessoa`, this.pessoa).then((res) => {
                    console.log("deu certo ==> ", res)
                    alert("Deu Certo")
                })
                .catch((err) => {
                    console.log(err);
                });
                // this.$router.push('/cadastrarEndereco') //rotas
        },
        alterar(){
            const request = axios.create();
            const baseUrl = "https://web-tool-api.herokuapp.com";
            request
                .put(`${baseUrl}/pessoa/id`, {
                    headers: { pessoa_id: this.pessoas[index].id },
                })
                .then((res) => {
                    alert("deu certo")
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

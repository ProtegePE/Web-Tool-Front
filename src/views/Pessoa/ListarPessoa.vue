<template>
  <section class="section section-shaped my-0">
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
      <div class="row">
        <div class="col-lg-6">
          <h2 class="text-white mb-4">Lista de Pessoas</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-9 pr-0">
          <div class="input-group input-group-alternative mb-4 bg-gradient-warning">
            <input
              @input="value => buscar()"
              v-model="busca"
              class="form-control"
              placeholder= 'Buscar por Nome ou CPF'
              type="text"
            />
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="ni ni-zoom-split-in"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-12 my-1">
          <div class="row row-grid">
            <div v-for="(pessoa, index) in pessoas" :key="pessoa + index" class="col-lg-4 mb-5">
              <card class="border-0" shadow body-classes="py-5">
                <!-- <badge
                  v-if="pessoa.base"
                  type="success text-normal"
                  style="position: absolute; top: 18px; right: 20px"
                  rounded
                >Fonte: {{pessoa.base}}</badge> -->

                <h4
                  class="text-default"
                >{{pessoa.nome}}</h4> <!-- AQUI VAI SER NOME DA PESSOA -->
                <h5>CPf: {{pessoa.cpf}}</h5>
                <h5>RG: {{pessoa.rg}}</h5>
                <h5>CNS: {{pessoa.cns}}</h5>

                <div class="btn-wrapper">
                  <base-button
                    class="mt-4"
                    type="primary text-normal"
                    @click="modal(index)"
                  >...</base-button>
                  
                  <base-button
                    class="mt-4"
                    type="primary text-normal"
                    @click="alterar(index)"
                  >Alterar</base-button>
               
                  <base-button
                    class="mt-4"
                    type="primary text-normal"
                    @click="excluir(index)"
                  >Exluir</base-button>
                </div> 

              </card>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal
      v-if="pessoas[index_modal]"
      :show.sync="modal_visivel"
      gradient="primary"
      modal-classes="modal-danger modal-dialog-centered"
    >
      <h4
        slot="header"
        class="modal-title"
        id="modal-title-notification"
      >{{pessoas[index_modal].nome}}</h4> 
      

      <div v-if="pagina_modal == 'pessoa'">
        <div v-if="pessoas[index_modal].cpf">
          <p>CPF</p>
          <h5 class="text-white text-normal">{{pessoas[index_modal].cpf}}</h5>
        </div>

        <div v-if="pessoas[index_modal].rg">
          <p>RG</p>
          <h5 class="text-white text-normal">{{pessoas[index_modal].rg}}</h5>
        </div>

        <div v-if="pessoas[index_modal].cns">
          <p>CNS</p>
          <h5 class="text-white text-normal">{{pessoas[index_modal].cns}}</h5>
        </div>

        <div v-if="pessoas[index_modal].telefone">
          <p>Telefone</p>
          <h5 class="text-white text-normal">{{pessoas[index_modal].telefone}}</h5>
        </div>
      </div>
        
      <div v-if="pagina_modal == 'endereco'">
        <div v-if="pessoas[index_modal].enderecos[0].logradouro && pessoas[index_modal].enderecos[0].numero">
          <p>Logradouro/Número</p>
          <h5 class="text-white text-normal">{{pessoas[index_modal].enderecos[0].logradouro}}, Nº {{pessoas[index_modal].enderecos[0].numero}}</h5>
        </div>

        <div v-if="pessoas[index_modal].enderecos[0].complemento">
          <p>Complemento</p>
          <h5 class="text-white text-normal">{{pessoas[index_modal].enderecos[0].complemento}}</h5>
        </div>

        <div v-if="pessoas[index_modal].enderecos[0].bairro">
          <p>Bairro</p>
          <h5 class="text-white text-normal">{{pessoas[index_modal].enderecos[0].bairro}}</h5>
        </div>

        <div v-if="pessoas[index_modal].enderecos[0].cidade && pessoas[index_modal].enderecos[0].uf">
          <p>Cidade - Estado</p>
          <h5 class="text-white text-normal">{{pessoas[index_modal].enderecos[0].cidade}} - {{pessoas[index_modal].enderecos[0].uf}}</h5>
        </div>

        <!-- <div v-if="pessoas[index_modal].enderecos[0].uf">
          <p class="mt-4">UF</p>
          <h5 class="text-white text-normal">{{pessoas[index_modal].enderecos[0].uf}}</h5>
        </div> -->

        <div v-if="pessoas[index_modal].enderecos[0].cep">
          <p>CEP</p>
          <h5 class="text-white text-normal">{{pessoas[index_modal].enderecos[0].cep}}</h5>
        </div>
      </div>

      <template slot="footer">
        <base-button
          :type="pagina_modal == 'pessoa'? 'white' : 'link'"
          :text-color="pagina_modal == 'pessoa'? 'primary' : 'white'"
          class="text-normal"
          @click="pagina_modal = 'pessoa'"
        >Pessoa</base-button>

        <base-button
          :type="pagina_modal == 'endereco'? 'white' : 'link'"
          :text-color="pagina_modal == 'endereco'? 'primary' : 'white'"
          class="ml-auto text-normal"
          @click="pagina_modal = 'endereco'"
        >Endereço</base-button>
      </template>
    </modal>

    <template v-if="busca_nao_encontrada">
      <div class="container pt-5 pb-lg">
        <div class="row justify-content-between align-items-center">
          <div v-show="busca" class="col-lg-6 mb-5">
            <div class="row ml-1">
              <h1 class="text-white font-weight-light">Nada Aqui</h1>
              <base-button
                class="ml-5 mb-4 mt-2 text-warning text-normal"
                type="white"
                @click="limpar_filtros()"
              >Limpar Filtros</base-button>
            </div>

            <div class="row ml-1" v-show="busca">
              <p class="lead text-white">Busca:</p>
              <p class="lead text-white font-weight-bold ml-2">{{busca}}</p>
            </div>

          </div>
          <div v-show="pessoas == [] || busca" class="col-lg-6">
            <div class="rounded overflow-hidden transform-perspective-right">
              <i class="ni ni-planet" style="font-size: 350px; color: white"></i>
            </div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import Dropdown from "@/components/BaseDropdown.vue";
import Modal from "@/components/Modal.vue";
// import http from "../../services/http";
import axios from "axios";

export default {
  components: {
    Modal,
    Dropdown
  },
  data() {
    return {
      busca: "",      
      modal_visivel: false,
      index_modal: 0,
      pagina_modal: "pessoa",
      pessoas: [],
      busca_nao_encontrada: false,
    };
  },

  async mounted() {
    await this.get_pessoas();
  },

  methods: {
    limpar_filtros() {
      this.busca = "";
      this.buscar();
    },

    async buscar() {
        console.log(this.$route.params.busca)
      if (this.busca) {
          const request = axios.create();
            const baseUrl = "https://web-tool-api.herokuapp.com";
            await request
                .get(`${baseUrl}/pessoas/customSearch`, {
                    headers: { busca: this.busca },
                })
                .then(response => {
                    console.log(response)
                    this.pessoas = response.data;
                    if (response.data[0]) this.busca_nao_encontrada = false;
                    else this.busca_nao_encontrada = true;
                })
                .catch(error => {
                    this.pessoas = [];
                    this.busca_nao_encontrada = true;
                    console.error(error);
                });
        } else {
            this.busca_nao_encontrada = false;
            this.get_pessoas();
        }
    },

    // converter_data(data) {
    //   if (data)
    //     data =
    //       data.substring(8, 10) +
    //       "/" +
    //       data.substring(5, 7) +
    //       "/" +
    //       data.substring(0, 4);
    //   return data;
    // },

    modal(i) {
      this.index_modal = i;
      this.pagina_modal = "pessoa";
      this.modal_visivel = !this.modal_visivel;
    },

    async get_pessoas() {
      const request = axios.create();
      const baseUrl = "https://web-tool-api.herokuapp.com";
      await request
        .get(`${baseUrl}/pessoas`)
        .then((res) => {
            console.log("RES ===> ", res.data);
            this.pessoas = res.data;
        //   console.log(this.pessoas);
        })
        .catch((err) => {
          console.log("ERRO => ",err);
        });
    },
    alterar(index){
        const dadosPessoa =  this.pessoas[index]
        localStorage.setItem("dados-pessoa", JSON.stringify(dadosPessoa))
        this.$router.push('/alterarPessoa') //rotas
    
    },
    excluir(index){
        console.log(this.pessoas[index])
        // this.pessoas[index]
        const request = axios.create();
        const baseUrl = "https://web-tool-api.herokuapp.com";
        request
            .delete(`${baseUrl}/pessoa/id`, {
                headers: { pessoa_id: this.pessoas[index].id },
            })
            .then(() => {
                this.get_pessoas()
            })
            .catch((err) => {
            console.log("ERRO => ",err);
            });
    }
  }
};
</script>
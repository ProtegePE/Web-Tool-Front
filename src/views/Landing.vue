<template>
    <div>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">WebTool
                                    <!-- <span>completed with examples</span> -->
                                </h1>
                                <p class="lead  text-white">colocar algum texto...</p>
                                <div class="btn-wrapper">
                                    <!-- <base-button tag="a"
                                                 href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                                                 class="mb-3 mb-sm-0"
                                                 type="info"
                                                 icon="fa fa-code">
                                        Components
                                    </base-button>
                                    <base-button tag="a"
                                                 href="https://www.creative-tim.com/product/argon-design-system"
                                                 class="mb-3 mb-sm-0"
                                                 type="white"
                                                 icon="ni ni-cloud-download-95">
                                        Download HTML
                                    </base-button> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Cadastrar Pessoa</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap 4
                                        that includes the most important components and features.</p>
                                    <div>
                                        <badge type="primary" rounded>design</badge>
                                        <badge type="primary" rounded>system</badge>
                                        <badge type="primary" rounded>creative</badge>
                                    </div>                                    
                                    <router-link to="/cadastrarPessoa">
                                        <base-button tag="a" href="#" type="primary" class="mt-4">
                                            Cadastrar Pessoa
                                        </base-button>
                                    </router-link>

                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Cadastrar Exames</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                        4 that includes the most important components and features.</p>
                                    <div>
                                        <badge type="success" rounded>business</badge>
                                        <badge type="success" rounded>vision</badge>
                                        <badge type="success" rounded>success</badge>
                                    </div>
                                    <router-link to="/cadastrarExames">
                                        <base-button tag="a" href="#" type="success" class="mt-4">
                                            Cadastrar Exames
                                        </base-button>
                                    </router-link>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Relatório</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                        4 that includes the most important components and features.</p>
                                    <div>
                                        <badge type="warning" rounded>marketing</badge>
                                        <badge type="warning" rounded>product</badge>
                                        <badge type="warning" rounded>launch</badge>
                                    </div>
                                    <router-link to="/">
                                        <base-button tag="a" href="#" type="warning" class="mt-4">
                                            Relatórios
                                        </base-button>
                                    </router-link>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

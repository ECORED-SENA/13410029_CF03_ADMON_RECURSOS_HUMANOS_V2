<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 4
        h1 Garantías y licencias incorporadas por la Ley 2466 de 2025
      .row.align-items-center.mb-4(data-aos="fade-down")
        .col-md-auto.mb-4.mb-md-0
          figure
            img(src="@/assets/curso/temas/t4/img1.svg", alt="", style="width: 130px").m-auto
        .col
          p.mb-0 Además de los cambios en los tipos de contrato, la reforma laboral modificó el numeral 6 del artículo 57 del CST, que obliga al empleador a conceder licencias remuneradas en distintas situaciones (Congreso de la República de Colombia, 2025). El área de talento humano debe conocerlas y aplicarlas desde el momento de la vinculación. Las principales se presentan a continuación:
      .row.align-items-center(data-aos="fade-right")
        .col-lg-9.order-2.order-lg-1
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
            .row(titulo="Citas médicas")
              .col-12
                p.mb-0 Para asistir a citas médicas de urgencia o a citas programadas con especialistas, previa presentación del certificado. Incluye los casos de diagnóstico y tratamiento de la endometriosis.
            .row(titulo="Grave calamidad doméstica")
              .col-12
                p.mb-0 Por calamidad doméstica debidamente comprobada, que afecte a familiares hasta el tercer grado de consanguinidad, segundo de afinidad o primero civil
            .row(titulo="Citaciones escolares")
              .col-12
                p.mb-0 Para atender, como acudiente, las citaciones del centro educativo cuando la asistencia sea obligatoria.
        .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/temas/t4/img1.png", alt="", style="width: 300px").m-auto
      .row.align-items-center.mb-3(data-aos="fade-left")
        .col-lg-3.order-2.order-lg-1
          figure
            img(src="@/assets/curso/temas/t4/img2.png", alt="", style="width: 300px").m-auto
        .col-lg-9.mb-4.mb-lg-0.order-1.order-lg-2
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
            .row(titulo="Citaciones judiciales y administrativas")
              .col-12
                p.mb-0 Para atender citaciones judiciales, administrativas y legales.
            .row(titulo="Uso de la bicicleta")
              .col-12
                p.mb-0 Un día remunerado por cada seis meses de trabajo para quienes se desplacen en bicicleta al trabajo, previo acuerdo con el empleador y certificación del uso.
            .row(titulo="Otras licencias")
              .col-12
                p.mb-0 Para ejercer el derecho al sufragio, desempeñar cargos oficiales transitorios de forzosa aceptación y cumplir comisiones sindicales.
      p.mb-4(data-aos="fade-right") El área de talento humano debe gestionar estas licencias de acuerdo con la normativa aplicable y las disposiciones del reglamento interno de trabajo.
      .tarjeta.color-primario.p-3(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/t4/img2.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.text-white.mb-1 Ley 2466 de 2025
                p.text-white.mb-0 Para profundizar en los cambios de la reforma laboral se recomienda consultar el texto completo de la ley: Para profundizar en los cambios de la reforma laboral se recomienda consultar el texto completo de la ley: Ley 2466 de 2025.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=260676" target="_blank")
                  span.txt-c1 Ir al enlace
                  i.txt-c1.fas.fa-link

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

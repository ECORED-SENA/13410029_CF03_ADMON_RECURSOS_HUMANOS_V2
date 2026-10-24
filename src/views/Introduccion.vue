<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.bg-c1
        .col-12.px-5
          p(data-aos="fade-right") La contratación del talento humano debe ajustarse a la normativa laboral colombiana y a la jurisprudencia aplicable. Las organizaciones deben cumplir las disposiciones que regulan la vinculación de sus trabajadores, según la naturaleza de la relación laboral y el régimen jurídico correspondiente, y el área de talento humano coordina las actividades necesarias para formalizar esa vinculación.
          .row.align-items-center
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c2.shadow-lg.mb-4
                figure.mb-3
                  img(src="@/assets/curso/temas/intro/img1.svg", alt="", style="width: 80px")
                p.mb-0 Una vez finalizada la selección del candidato, se establecen las condiciones de contratación y se formaliza el vínculo laboral. Las actividades previas, como el reclutamiento y la selección, pueden realizarse directamente o con el apoyo de terceros especializados. Este componente estudia la contratación regulada por el Código Sustantivo del Trabajo (CST), los procesos de inducción, capacitación, adiestramiento y evaluación del desempeño, y la terminación y liquidación del contrato.
              p Los contenidos incorporan los cambios de la Ley 2466 de 2025, sancionada el 25 de junio de 2025 y conocida como reforma laboral, que modificó las modalidades de contratación, el contrato de aprendizaje, la terminación del contrato y las licencias remuneradas (Congreso de la República de Colombia, 2025).
            .col-lg-5(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/intro/img2.svg", alt="", style="width: 460px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

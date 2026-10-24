<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Inducción, capacitación, adiestramiento y evaluación del desempeño
      .row.bg-c3(data-aos="fade-right")
        .col-12
          .px-4.pt-4.pt-lg-0
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src="@/assets/curso/temas/t2/img1.svg", alt="", style="width: 80px").m-auto
                  .col
                    p.mb-0 Después de formalizar la contratación, la organización desarrolla procesos de inducción, capacitación y adiestramiento para facilitar la integración del trabajador y fortalecer sus competencias. Posteriormente, la evaluación del desempeño permite valorar su trabajo e identificar oportunidades de mejora.
              .col-lg-5
                figure
                  img(src="@/assets/curso/temas/t2/img2.svg", alt="", style="width: 330px").m-auto
      .row.bg-c4
        .col-12.px-5
          Separador
          .titulo-segundo.color-acento-contenido
            h2 2.1 Inducción
          p.mb-4(data-aos="fade-right") Al formalizar la vinculación, el área de talento humano proporciona al trabajador información sobre la organización y las condiciones de su puesto, con el fin de facilitar su integración y el desarrollo de sus funciones. La inducción puede ser de dos tipos, que se presentan a continuación:
          .row.justify-content-center
            .col-md-7.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/temas/t2/img1.png", alt="", style="width: 500px").m-auto
              .row
                .col-12
                  .p-4.bg-c7
                    p.text-center #[b Inducción general]
                    p.text-center.mb-0 Presenta la misión, la visión, los valores y las características de la organización.
            .col-md-7.col-lg-5(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/t2/img2.png", alt="", style="width: 500px").m-auto
              .row
                .col-12
                  .p-4.bg-c7
                    p.text-center #[b Inducción específica]
                    p.text-center.mb-0 Explica las funciones del cargo, los procedimientos y las condiciones del área de trabajo.
          Separador
          .titulo-segundo.color-acento-contenido
            h2 2.2 Capacitación
      .row.bg-c3(data-aos="fade-right")
        .col-12
          .px-4.pt-4.pt-lg-0
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src="@/assets/curso/temas/t2/img3.svg", alt="", style="width: 80px").m-auto
                  .col
                    p.mb-0 La capacitación fortalece los conocimientos y las competencias de los trabajadores para mejorar su desempeño y contribuir al cumplimiento de los objetivos organizacionales. Puede desarrollarse con recursos propios o con el apoyo de organizaciones y profesionales especializados. Además, favorece el compromiso y el sentido de pertenencia de los trabajadores.
              .col-lg-5
                figure
                  img(src="@/assets/curso/temas/t2/img4.svg", alt="", style="width: 330px").m-auto
      Separador
      #t_2_3
      .titulo-segundo.color-acento-contenido
        h2 2.3 Adiestramiento
      .row.align-items-center.mb-4(data-aos="fade-down")
        .col-md-auto.mb-4.mb-md-0
          figure
            img(src="@/assets/curso/temas/t2/img5.svg", alt="", style="width: 80px").m-auto
        .col
          p.mb-0 El adiestramiento se orienta al desarrollo de habilidades y destrezas prácticas necesarias para ejecutar las tareas del puesto de trabajo. Mediante actividades de enseñanza y aprendizaje, permite mejorar el dominio de técnicas y procedimientos específicos. Las diferencias entre la capacitación y el adiestramiento se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-3
        p.mb-0 #[b Tabla 1.] Diferencias entre capacitación y adiestramiento
      .tabla-a.color-acento-contenido(data-aos="fade-down")
        table
          thead
            tr
              th(style="width: 30%") Aspecto
              th Capacitación
              th  Adiestramiento
          tbody
            tr
              td.text-center #[b Propósito]
              td Fortalecer conocimientos y competencias.
              td Desarrollar habilidades y destrezas prácticas.
            tr
              td.text-center #[b Enfoque]
              td Desempeño general y objetivos de la organización.
              td Tareas específicas del puesto de trabajo.
            tr
              td.text-center #[b Ejemplo]
              td Curso sobre la nueva normativa laboral para el equipo de talento humano.
              td Práctica guiada en el manejo del software de nómina.
      .row.bg-c8
        .col-12.px-5
          Separador
          #t_2_4
          .titulo-segundo.color-acento-contenido
            h2 2.4 Evaluación del desempeño
          p.mb-4(data-aos="fade-right") La evaluación del desempeño permite valorar el cumplimiento de las funciones y los objetivos del trabajador, reconocer sus fortalezas e identificar aspectos que requieren mejora. Sus resultados apoyan las decisiones sobre formación, reconocimiento y desarrollo profesional. El proceso se desarrolla en las etapas que se presentan a continuación:
          .row.align-items-center.mb-5
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/temas/t2/img3.png", alt="", style="width: 410px").m-auto
            .col-lg-7(data-aos="fade-left")
              SlyderF(columnas="col-md-6")
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img6.svg' alt='')
                  p.text-white.text-center #[b Paso 1. Definir y comunicar los criterios]
                  p.text-white.mb-0 Se establecen los aspectos que se evaluarán y se informan al trabajador.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img7.svg' alt='')
                  p.text-white.text-center #[b Paso 2. Evaluar el desempeño]
                  p.text-white.mb-0 Se valora el cumplimiento de funciones y objetivos según los criterios definidos.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img8.svg' alt='')
                  p.text-white.text-center #[b Paso 3. Analizar los resultados]
                  p.text-white.mb-0 Se identifican fortalezas y aspectos por mejorar.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img9.svg' alt='')
                  p.text-white.text-center #[b Paso 4. Retroalimentar]
                  p.text-white.mb-0 Se comunican los resultados al trabajador en un diálogo constructivo.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img10.svg' alt='')
                  p.text-white.text-center #[b Paso 5. Formular planes de mejoramiento]
                  p.text-white.mb-0 Se acuerdan acciones de formación o de mejora con plazos y responsables.

</template>

<script>
export default {
  name: 'Tema2',
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

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .row.mb-4
      .col-12.col-xl-10
        p.mb-4 El Derecho no es un sistema de normas aislado de la sociedad, sino un fenómeno profundamente vinculado con valores, principios y concepciones filosóficas sobre la justicia, la moral y la organización social. La filosofía del Derecho surge como una disciplina fundamental que permite reflexionar sobre la naturaleza, el fundamento y la finalidad del Derecho, aportando herramientas para una comprensión crítica del orden jurídico.
        span Desde la antigüedad se han buscado respuestas a preguntas esenciales:
      .col-2.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-8.col-md-6.col-xl-4.mx-auto.h-100(data-aos="fade-right")
        .d-flex.align-items-start.bg-marron-oscuro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 75px' src='@/assets/curso/unidad/img-2.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0.text-bold ¿Qué es el Derecho?
      .col-8.col-md-6.col-xl-4.mx-auto.h-100(data-aos="fade-up")
        .d-flex.align-items-start.bg-marron-oscuro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 75px' src='@/assets/curso/unidad/img-3.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0.text-bold ¿Cuál es su relación con la justicia?
      .col-8.col-md-6.col-xl-4.mx-auto(data-aos="fade-left")
        .d-flex.align-items-start.bg-marron-oscuro.py-4.px-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 75px' src='@/assets/curso/unidad/img-4.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.mb-0.text-bold ¿Existen normas universales o todo Derecho es relativo a su contexto histórico y social?

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Estas interrogantes siguen vigentes en el análisis contemporáneo del Derecho y son esenciales para la formación de cualquier jurista.
        p.mb-4 Estudiar filosofía del Derecho no solo permitirá conocer las corrientes teóricas que han dado forma al Derecho moderno, sino que ayudará a desarrollar una mirada analítica y crítica sobre la aplicación de las normas jurídicas en diferentes contextos.
        .bg-azul-claro.p-4(data-aos='fade-up')
          p.mb-4 Al finalizar esta unidad se espera que el estudiante interprete el concepto de filosofía del Derecho, sus ejes filosóficos y su naturaleza como saber jurídico.
          span Además, que pueda argumentar acerca de su importancia en el análisis crítico de las normas y principios legales, para así comprender el Derecho no solo como un conjunto de reglas, sino como una disciplina con bases teóricas y fundamentos filosóficos que influyen en su interpretación y aplicación.
    
    .row.bg-verde-oscuro.bg-full-width.p-4.py-xl-0.mb-4
      .col-12.col-xl-8.text-white.d-flex.flex-column
        .my-auto
          p.mb-4.text-bold ¿Por qué es relevante este tema?
          span Los futuros profesionales en Derecho no solo tendrán que aplicar normas jurídicas, sino que también deberán enfrentarse a dilemas éticos, interpretaciones contradictorias y situaciones donde el Derecho positivo no ofrece respuestas claras. La filosofía del Derecho brindará herramientas para fundamentar argumentos con sólidos principios teóricos, permitiendo adoptar posturas críticas y bien sustentadas en el ejercicio de la profesión.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')

    p.mb-4 Además, en un mundo en constante transformación, donde el avance tecnológico, los cambios sociales y los debates sobre derechos fundamentales están en constante evolución, comprender el trasfondo filosófico del Derecho permitirá adaptarse a estos desafíos con un pensamiento flexible y fundamentado.

    h2 Estructura de la unidad

    p.mb-4 Para abordar esta temática de manera organizada, la unidad se dividirá en tres secciones:

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Ejes filosóficos del Derecho
                p.text-small.px-4.text-center.pb-2 Analizará las principales corrientes filosóficas que han influido en el pensamiento jurídico, desde el iusnaturalismo hasta el positivismo jurídico y las teorías críticas del Derecho.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center El concepto de filosofía del Derecho
                p.text-small.px-4.text-center.pb-2 Explorará las definiciones y enfoques de la filosofía del Derecho, así como su relación con otras disciplinas jurídicas y filosóficas.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center La filosofía del Derecho como saber jurídico
                p.text-small.px-4.text-center.pb-2 Reflexionará sobre el papel de la filosofía del Derecho en la interpretación de las normas, la argumentación jurídica y la construcción de un sistema jurídico coherente y justo.

    .row.mb-4
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7
        .bg-verde.p-4(data-aos='fade-up')
          p.mb-4 Esta unidad requiere de su compromiso y participación desarrollando la capacidad crítica y argumentativa de los estudiantes. Se espera participación en las actividades, compromiso con la lectura en aras de fortalecer el análisis de textos filosóficos y jurídicos.
          span Es importante recordar que el Derecho no es una disciplina estática, y el papel del estudiante debe estar orientado a cuestionar, analizar y aportar nuevas perspectivas que enriquezcan el debate jurídico. 
    
      

</template>

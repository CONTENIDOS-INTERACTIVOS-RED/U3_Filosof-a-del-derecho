<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .d-flex.align-items-start.bg-naranja.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-2.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 El derecho, como sistema normativo y estructural de la sociedad, se fundamenta en instituciones jurídicas que garantizan el orden, la justicia y la convivencia. En esta unidad, se explorará la institución jurídica a través de cinco conceptos esenciales: la responsabilidad, el Estado, la propiedad, la justicia y la Ley. Cada uno de estos elementos es clave para comprender cómo se configuran las normas y los derechos, dentro de una sociedad organizada.
        span Al finalizar esta unidad se espera que el estudiante sintetice los principales ejes de la institución jurídica, analizando conceptos como responsabilidad, Estado, propiedad, justicia y Ley, y evaluando su interrelación en la conformación del sistema jurídico.

    .row.mb-4.bg-verde-oscuro.p-4.py-xl-0
      .col-12.col-xl-8.d-flex
        .my-auto.text-white
          p.mb-4 Este tema es relevante porque las instituciones jurídicas son la base del orden social, garantizando la estabilidad, la convivencia y la protección de los derechos de los individuos. Comprender cómo se articulan la responsabilidad, el Estado, la propiedad, la justicia y la Ley permite analizar el funcionamiento del derecho como mecanismo regulador de la sociedad.
          span Además, estos conceptos no solo tienen implicaciones teóricas, sino que afectan la vida cotidiana de las personas. Estudiar estas nociones es fundamental para entender el derecho como un sistema que no solo impone normas, sino que también busca el bienestar colectivo y la protección de los derechos fundamentales.

      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')

    p.mb-4 Para abordar esta temática de manera organizada, la unidad se dividirá en cinco secciones:

    
    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        .row.mb-4
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8
            SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-5.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Sección 1
                p.px-1.text-small.mb-0.text-center La responsabilidad establece la relación entre las acciones y sus consecuencias, asegurando que los individuos respondan por sus actos, dentro del marco jurídico. 
              .custom-image-card.d-flex.flex-column.p-4.py-md-5 
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-6.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Sección 2
                p.px-1.text-small.mb-0.text-center El Estado, como autoridad reguladora, es el garante del cumplimiento de las normas y la protección de los derechos fundamentales. 
              .custom-image-card.d-flex.flex-column.p-4.py-md-5 
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-7.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Sección 3
                p.px-1.text-small.mb-0.text-center La propiedad, por su parte, representa un derecho esencial que delimita el acceso y uso de los bienes en la sociedad, regulado por principios jurídicos que equilibran intereses individuales y colectivos. 
              .custom-image-card.d-flex.flex-column.p-4.py-md-5 
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-8.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Sección 4
                p.px-1.text-small.mb-0.text-center La justicia actúa como el principio rector que orienta la equidad y la aplicación de las normas.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-9.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Sección 5
                p.px-1.text-small.mb-0.text-center La Ley es la herramienta jurídica que formaliza estos principios en normas de obligatorio cumplimiento.

    .row.mb-4
      .col-12.col-xl-7
        .bg-azul-claro.p-4(data-aos='fade-right').h-100
          p.mb-4 Esta unidad requiere del compromiso y participación del estudiante para el desarrollo efectivo de su capacidad crítica y argumentativa. Se espera participación en las actividades, compromiso con la lectura en aras de fortalecer el análisis de textos filosóficos y jurídicos.
          span Es importante recordar que el Derecho no es una disciplina estática, y el papel del estudiante debe estar orientado a cuestionar, analizar y aportar nuevas perspectivas que enriquezcan el debate jurídico. 
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

</template>

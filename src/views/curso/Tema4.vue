<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. La justicia'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .col-2.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')
        .col-12.col-xl-10
          .bg-azul-claro.p-4(data-aos='fade-up')
            span La justicia es uno de los conceptos más fundamentales y debatidos en la historia del pensamiento humano. Se encuentra en el centro de la organización social y política, y constituye el fundamento de los sistemas jurídicos. Desde la filosofía hasta el derecho, la justicia ha sido analizada en sus diferentes dimensiones: como ideal moral, como principio de equidad y como norma jurídica. A lo largo de la historia, diversas teorías han tratado de definir qué significa ser justo y cómo debe aplicarse la justicia en la sociedad.

      #t_4_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.1
          h2 La justicia en la filosofía

      p.mb-4 La justicia ha sido una preocupación constante en la historia del pensamiento filosófico, al ser un principio fundamental en la organización social.

      .row.bg-marron.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto La justicia en la filosofía
            p.mb-5(data-aos="fade-up") En el PDF La justicia en la filosofía , se presentan distintas concepciones desarrolladas desde la Antigüedad hasta la actualidad, abordando ideas de pensadores como Platón, Aristóteles, Kant, Rawls y Nozick. A través de sus enfoques, se analiza cómo la justicia se relaciona con la equidad, el deber moral, la libertad y el bien común, ofreciendo herramientas para reflexionar críticamente sobre su aplicación en la vida contemporánea.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_La justicia en la filosofía.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> La justicia en la filosofía
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-62.png', alt='Texto que describa la imagen')

      #t_4_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.2
          h2 La justicia en el derecho

      p.mb-4 En el ámbito jurídico, la justicia es el principio fundamental que guía la creación, interpretación y aplicación del derecho. Aunque la justicia y el derecho no siempre coinciden, el derecho se considera un instrumento para alcanzar la justicia en la sociedad.

      p.mb-4 El derecho ha desarrollado distintos enfoques para la aplicación de la justicia:

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-63.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Justicia formal")
              p Se refiere al cumplimiento de las normas y procedimientos establecidos en el ordenamiento jurídico. En este sentido, un juicio es justo si se siguen las reglas procesales, independientemente del resultado final.
            .div(titulo="Justicia material")
              p Se enfoca en el contenido de las leyes y en su impacto social, buscando garantizar la equidad y la protección de los derechos fundamentales.
            .div(titulo="Justicia correctiva")
              p Se aplica en el ámbito penal y civil para restaurar el equilibrio cuando se ha cometido una injusticia, ya sea a través de sanciones o compensaciones.
            .div(titulo="Justicia distributiva")
              p Busca garantizar una distribución equitativa de recursos y oportunidades en la sociedad, influyendo en el diseño de políticas públicas y derechos sociales.

      .row.mb-4
        .col-12.col-xl-9
          p.mb-4 El derecho positivo, basado en normas escritas y establecidas por el Estado, busca garantizar la seguridad jurídica y la previsibilidad en la administración de justicia. Sin embargo, a lo largo de la historia han surgido debates sobre la relación entre el derecho y la justicia. Por ejemplo, durante regímenes autoritarios, leyes formalmente válidas han sido injustas desde un punto de vista ético, lo que ha llevado a la reflexión sobre la legitimidad del derecho y la necesidad de principios superiores, como los derechos humanos.
          .d-flex.align-items-start.bg-azul-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 100px' src='@/assets/curso/unidad/img-64.png', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 El derecho internacional también ha desarrollado principios de justicia global, reflejados en tratados y organismos como la Corte Penal Internacional, que busca sancionar crímenes contra la humanidad y garantizar la justicia más allá de las fronteras nacionales.
        .col-3.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-65.png', alt='Texto que describa la imagen')
      
      #t_4_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.3
          h2 Interrelación entre filosofía y Derecho, en la concepción de la justicia

      p.mb-4 La justicia, entendida como un principio fundamental para la convivencia y el orden social, ha sido construida desde la reflexión filosófica y concretada a través del Derecho.

      .row.bg-marron.bg-full-width.py-4.mb-5
        div.px-5.pb-md-3.py-4.d-flex
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-66.png', alt='Texto que describa la imagen')
          .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Interrelación entre filosofía y Derecho, en la concepción de la justicia
            p.mb-5(data-aos="fade-up") En el PDF Interrelación entre filosofía y Derecho , en la concepción de la justicia, se analiza cómo los principios éticos propuestos por la filosofía han influido en la formulación de normas jurídicas orientadas a la equidad, la dignidad humana y los derechos fundamentales. Este enfoque permite comprender los desafíos actuales en torno a la justicia y la necesidad de armonizar teoría y práctica en contextos sociales cambiantes.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Interrelación entre filosofía y Derecho, en la concepción de la justicia.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Interrelación entre filosofía y Derecho, en la concepción de la justicia

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/66279") Velasco, M. (2011). ¿Qué es justicia? Eudeba.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=-zOy99vR9-U") [Vídeo] Universidad Continental (2021). La justicia
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>

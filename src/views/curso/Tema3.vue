<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. La propiedad'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4.mx-0
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.align-items-center.bg-naranja.p-4(data-aos="fade-up")
          p.mb-0 La propiedad es un concepto fundamental en la organización de la sociedad, debido a que determina la relación entre los individuos y los bienes materiales e inmateriales. Desde tiempos antiguos, la propiedad ha sido un eje central en la economía, la política y el Derecho, pues establece quién tiene el derecho de uso, disfrute y disposición de los recursos. A lo largo de la historia, este concepto ha sido interpretado y regulado de distintas maneras, generando debates sobre su legitimidad, sus límites y su función social. 

      p.mb-4 Tanto la filosofía como el Derecho, han abordado el estudio de la propiedad desde diferentes perspectivas, pero siempre reconociendo su importancia en la estructura de las sociedades.

      #t_3_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.1
          h2 La propiedad en la filosofía

      .row.bg-verde-oscuro.bg-full-width.p-4.py-xl-0.mb-4
        div.px-5.pb-md-3
          
          .row
            .col-12.col-xl-6.d-flex.pt-xl-4
              .my-auto
                p.mb-4.text-white A continuación, se aborda cómo el estado emocional de los estudiantes influye directamente en su capacidad para concentrarse y aprender.
                TarjetaAudio.color-secundario.bg-white.mb-3(
                  texto='Texto descriptivo del audio'
                  tiempo
                  :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
                  @audio-hover='mostrarIndicadorTarjetaAudio = false'
                )
            .col-6.d-none.d-xl-block(data-aos="zoom-in")
              img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')

      #t_3_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.2
          h2 La propiedad en el derecho

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
      
          p.mb-4 Desde el punto de vista jurídico, la propiedad es el derecho que permite a una persona poseer, usar y disponer de un bien dentro de los límites establecidos por la Ley. Este derecho es regulado en casi todos los sistemas jurídicos del mundo y se encuentra protegido por normas nacionales e internacionales.

          p.mb-4 El derecho de propiedad se compone de tres facultades principales:

          .row.mb-4
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Usar (<i>ius utendi</i>)
                  p.text-small.px-4.text-center.pb-2 El propietario puede hacer uso del bien, según su voluntad.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Disfrutar (<i>ius fruendi</i>)
                  p.text-small.px-4.text-center.pb-2 Incluye el derecho a obtener beneficios del bien, como los frutos de un terreno o las rentas de un inmueble.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Disponer (<i>ius abutendi</i>)
                  p.text-small.px-4.text-center.pb-2 Permite vender, donar o destruir el bien, según lo decida el propietario.

          p.mb-4 El derecho de propiedad se clasifica en diferentes tipos, según su objeto y su titularidad:

          .row.mb-4
            .col-10.col-xl-6.d-flex.mb-4
              .d-flex.align-items-start.h-100.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-55.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.pe-xl-3.mb-2.text-bold Propiedad privada
                  span Corresponde a individuos o empresas y está protegida por el ordenamiento jurídico.
            .col-10.col-xl-6.d-flex.mb-4
              .d-flex.align-items-start.h-100.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-56.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.pe-xl-3.mb-2.text-bold Propiedad pública
                  span Pertenece al Estado y se destina al uso colectivo, como carreteras, parques y edificios gubernamentales.
            .col-10.col-xl-6.d-flex.mb-4
              .d-flex.align-items-start.h-100.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-57.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.pe-xl-3.mb-2.text-bold Propiedad comunal
                  span Es gestionada por comunidades o grupos específicos, como tierras indígenas o bienes comunales en zonas rurales.
            .col-10.col-xl-6.d-flex.mb-4
              .d-flex.align-items-start.h-100.bg-marron.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-58.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.pe-xl-3.mb-2.text-bold Propiedad intelectual
                  span Incluye derechos sobre creaciones artísticas, científicas y tecnológicas, como patentes y derechos de autor.
      .row.mb-4
        .col-10.col-lg-6.col-xl-4.mx-auto.bg-verde.p-4.d-flex(data-aos='fade-up')
          span El derecho de propiedad no es absoluto, puesto que está sujeto a límites y restricciones en función del interés público. Por ejemplo, el Estado puede expropiar bienes privados por razones de utilidad pública, siempre garantizando una indemnización justa. Asimismo, las leyes ambientales pueden restringir el uso de la propiedad para evitar daños ecológicos.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')
        .col-10.col-lg-6.col-xl-4.mx-auto.bg-azul-claro.p-4.d-flex(data-aos='fade-up')
          span En muchos países, la propiedad también tiene una función social, lo que significa que debe cumplir un propósito que beneficie a la comunidad. Este principio está presente en muchas constituciones y tratados internacionales, estableciendo que el ejercicio del derecho de propiedad no puede ir en contra del bienestar general. 

      #t_3_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.3
          h2 Interrelación entre filosofía y Derecho en la concepción de la propiedad

      p.mb-4 La propiedad ha sido objeto de reflexión tanto en la filosofía como en el Derecho, dado su papel central en la organización social y la distribución de recursos.

      .row.bg-marron.bg-full-width.py-4.mb-5
        div.px-5.pb-md-3.py-4.d-flex
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')
          .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Interrelación entre filosofía y Derecho en la concepción de la propiedad 
            p.mb-5(data-aos="fade-up") En el PDF Interrelación entre filosofía y Derecho en la concepción de la propiedad , se examina cómo las distintas corrientes filosóficas han influido en la construcción de marcos jurídicos que regulan la propiedad, desde su defensa como derecho individual hasta su función social. Esta revisión permite comprender los desafíos actuales en torno al acceso justo a los bienes y la búsqueda de equilibrio entre libertad individual y justicia colectiva.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Interrelación entre filosofía y Derecho en la concepción de la propiedad 

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/34625") Proudhon, P. J. (2009). ¿Qué es la propiedad? El Cid Editor.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


      p




</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
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

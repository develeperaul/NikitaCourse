<template>
  <carousel ref="myCarousel" :settings='settings' >
    <slide v-for="slide in 10" :key="slide">
            <div class="feedbacks__item feedback">
            <div class="feedback__header">
                <div class="feedback__left">
                  

                  
                    <img src="../../img/flk.jpg" alt="" class="feedback__img">
                </div>
                <div class="feedback__right">
                    <h3 class="feedback__title">Рауль Баймухаметов</h3>
                    <p class="feedback__course">Студент курса <a href="#"> Javascript </a></p>
                </div>
            </div>
            <div class="feedback__footer">
                <h4 class="feedback__subtitle">Общее впечатление от курса:</h4>
                <p class="feedback__text">До начала курса я даже не представлял, что vue.js настолько многогранен и гибкий. После курса могу с уверенностью
                сказать, что могу сам начинать писать приложения.</p>
                <h4 class="feedback__subtitle">Что было самым полезным?</h4>
                <p class="feedback__text">На мой взгляд, это всё. От теории до практики, а её у нас на курсе было достаточно. Ну и конечно, фидбек от ментора!</p>
            </div>
        </div>
    </slide>


    <template #addons="{currentSlide}">
      <div class="carousel-arrows">
        
        <div  class="arrow-prev" :class="{'arrow-active':currentSlide>0}" @click="this.$refs.myCarousel.prev()">
            <div></div>
        </div>
        <div class="arrow-next" @click="this.$refs.myCarousel.next()" :class="{'arrow-active':currentSlide<9}">
            <div></div>
        </div>

      </div>
      
      
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
// import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation, next, prev} from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
  },
  data(){
    return {
      settings: {
        itemsToShow: 2
      }
    }
  },
  methods:{
    showItem(){
     
      let items
      this.$nextTick(()=>{
        if(document.documentElement.clientWidth<500){
          console.log('hi')
          this.settings.itemsToShow = 1.2
        }
        // this.settings.itemsToShow = Math.round(document.documentElement.clientWidth/document.querySelector('.feedback').clientWidth)
      

      })
        
      
    
    }
  },
  computed: {
  },
  created(){
    this.showItem()
  }
};
</script>
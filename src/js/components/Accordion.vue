<template>
    <div class="accordion__content">
        <template v-for="(part, index ) in lessons" :key="index">
            <h2 class="accordion__title">{{part.part}}</h2>
            <div class="accordion__lessons">
                <article class="accordion__lesson lesson" v-for="(lesson, indexData ) in part.data" :key="indexData" >
                    <div class="lesson__content" :ref="`content_${lesson.id}`">
                        <div class="lesson__left">
                            <h2 class="lesson__title">{{lesson.lesson}}</h2>
                            <transition name="fade">
                                <ul class="lesson__list" v-if="lesson.id == currentId">
                                    <li class="lesson__item" v-for="(item, idx) in lesson.list" :key="idx">
                                        <span class="lesson__circle"></span>
                                        <p class="lesson__text">
                                            {{item}}
                                        </p>
                                    </li>
                                </ul>
                            </transition>
                        </div>
                        <div class="lesson__right">
                            <div class="circle-plus closed" :class="lesson.id == currentId ? 'opened' : ''" @click="toggle(lesson.id)">
                            <div class="circle">
                                <div class="horizontal"></div>
                                <div class="vertical"></div>
                            </div>
                            </div>

                        </div>

                    </div>
                    <div class="lesson__line">
                    </div>
                </article>
            </div>
        </template>
    </div>


</template>


<script>
import { ref, reactive, onBeforeUpdate } from 'vue'
    export default {
        setup(props) {
            const divs = ref([])
            let lessons = [
                {
                    part: 'Вводная часть. Знакомство с версткой',
                    data: [
                    {
                    lesson: 'Урок 1',
                    id: 1,
                    list: [
                        'Как классифицируются теги',
                        'Какие теги можно вкладывать друг в друга',
                        'Структура документа',
                        'Семантические теги',
                        'Валидация html'
                        ]
                    },
                    {
                    lesson: 'Урок 2',
                    id: 2,
                    list: [
                        'Основные виды селекторов',
                        'Приоритеты селекторов',
                        'Бэм селекторы',
                        'Псевдоэлементы',
                        'Псевдо классы'
                        ]
                    },
                    {
                    lesson: 'Урок 3',
                    id: 3,
                    list: [
                        'Блочная модель',
                        'Строчная модель',
                        'Строчно блочная модель',
                        ]
                    },
                    {
                    lesson: 'Урок 4',
                    id: 4,
                    list: [
                        'Абсолютное позиционирование',
                        'Относительное позиционирование',
                        'Фиксированное позиционирование',
                        'Центровка по горизонтали и вертикале'
                        ]
                    }

                    
                    ]
                },
                {
                    part: 'Основная часть',
                    data: [
                    {
                    lesson: 'Урок 5',
                    id: 5,
                    list: [
                        'Флексы',
                        'Размеры в процентах',
                        'Максимальная ширина',
                        'Сетка на паддингах',
                        'Сетка на марджинах',
                        'Симметричнык марджины'
                        ]
                    },
                    {
                    lesson: 'Урок 6',
                    id: 6,
                    list: [
                        'Строка столбец',
                        'Медиа запросы',
                        'Стратегия от меньшего к большему',
                        'Сложные структурно разные элементы',
                        'Отступ spacing',
                        'CSS gutter'
                        ]
                    },
                    {
                    lesson: 'Урок 7',
                    id: 7,
                    list: [
                        'Верстка макета',
                        'Разделение кода на базовые стили',
                        'Сброс и нормализация стилей',
                        'CSS переменные'
                        ]
                    },
                    {
                    lesson: 'Урок 8',
                    id: 8,
                    list: [
                        'Разбор верстки макета',
                        'Оптимизация css',
                        'Выносим части макета',
                        'Сборка проекта'
                        ]
                    }

                    
                    ]
                }
            ]

            onBeforeUpdate(() => {
                divs.value = []
            })
            
            // let t = (id) => {console.log(id)}

            
            
            let d = 10;
            return {
                d,
                lessons,
                divs,
                
            }
        },
        data(){
            return {
                currentId: null
            }
        },
        methods:{
            toggle (id){
                if(this.currentId == id)this.currentId = null
                else this.currentId = id;
                
            }
        }
        
    }
</script>


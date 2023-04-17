import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useIndexStore = defineStore('index', () => {
    const objects = ref([
        {title: "JAVA", count: 221.304},
        {title: "PHP", count: 15.304},
        {title: "MYSQL", count: 54.304},
        {title: "COVID 19", count: 970.435},
    ])

    function randomObject() {
        console.log(objects.value[Math.floor(Math.random() * objects.value.length)])
        return objects.value[Math.floor(Math.random() * objects.value.length)]
    }

    //funzione che ritorna un oggetto randomico di objects diverso da quello passato come parametro
    function randomObjectDifferentFrom(object: any) {
        let randomObject = objects.value[Math.floor(Math.random() * objects.value.length)]
        while (randomObject.title == object.title) {
            randomObject = objects.value[Math.floor(Math.random() * objects.value.length)]
        }
        return randomObject
    }

    return {objects, randomObject, randomObjectDifferentFrom}
})

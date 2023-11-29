import { defineStore } from 'pinia'
const useInputStore = defineStore('inputInfo', {
    state: () => {
        return {
           inputValue:'111'
        }
    }
})


export default useInputStore
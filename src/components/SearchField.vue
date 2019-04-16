<template>
    <div class="form-group">
        <label>
            <input type="text" class="form-control" v-bind="$attrs" ref="inputRef" @="$listeners" @input="$emit('inputValue', $event.target.value)">
        </label>
        <input type="button" value="Search" @click="search" class="btn btn-success">
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        inheritAttrs: false,
        model:{
            prop: "value",
            event: "inputValue"
        }
    })
    export default class SearchField extends Vue{
        search(){
            if(!(this.$refs.inputRef instanceof HTMLInputElement)){
                throw "Needs HTMLInputElement"
            }
            this.$emit('search', this.$refs.inputRef.value)
        }
    }
</script>

<style scoped>

</style>

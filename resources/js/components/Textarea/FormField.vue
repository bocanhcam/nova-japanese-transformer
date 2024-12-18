<template>
    <DefaultField
        :field="currentField"
        :errors="errors"
        :show-help-text="showHelpText"
        :full-width-content="fullWidthContent"
    >
        <template #field>
      <textarea
          :id="currentField.uniqueKey"
          type="text"
          class="block w-full form-control form-input form-control-bordered py-3 h-auto"
          :class="errorClasses"
          :placeholder="currentField.placeholder"
          :rows="currentField.rows"
          @change="handleChange"
      />
        </template>
    </DefaultField>
</template>

<script>
import {DependentFormField, HandlesValidationErrors} from 'laravel-nova'
import * as wanakana from "wanakana";

export default {
    mixins: [DependentFormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    mounted() {
        this.setInitialValue()

        wanakana.bind(this.getInputElement(), {
            IMEMode: this.currentField.IMEMode || true,
            ...this.currentField.options,
        })
    },

    unmounted() {
        wanakana.unbind(this.getInputElement())
    },

    methods: {
        getInputElement() {
            return document.getElementById(this.currentField.uniqueKey)
        },

        handleChange() {
            this.emitFieldValueChange(this.fieldAttribute, this.getInputElement().value)
            this.$emit('field-changed')
        },
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            const input = this.getInputElement()

            if (input) {
                input.value = this.currentField.value || ''
            }
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.fieldAttribute, this.getInputElement().value || '')
        },
    },
}
</script>

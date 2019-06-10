<template>
  <div
    class="i-cell i-input"
    :class="[iClass, error ? 'i-input-error' : '', mode === 'wrapped' ? 'i-input-wrapped' : '']">
    <div v-if="title" class="i-cell-hd i-input-title">{{ title }}</div>
    <textarea
      v-if="type === 'textarea'"
      :disabled="disabled"
      :focus="autofocus"
      :value="value"
      :placeholder="placeholder"
      :maxlength="maxlength"
      placeholder-class="i-input-placeholder"
      :class="[right ? 'i-input-input-right' : '']"
      class="i-input-input i-cell-bd"
      @input="handleInputChange"
      @focus="handleInputFocus"
      @blur="handleInputBlur"
      auto-height></textarea>
    <input
      :type="type"
      :disabled="disabled"
      :focus="autofocus"
      :value="value"
      :placeholder="placeholder"
      :maxlength="maxlength"
      placeholder-class="i-input-placeholder"
      :class="[right ? 'i-input-input-right' : '']"
      class="i-input-input i-cell-bd"
      @input="handleInputChange"
      @focus="handleInputFocus"
      @blur="handleInputBlur"
      v-else
    />
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'normal'
    },
    right: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 0
    },
    iClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInputChange(evt) {
      console.log(evt, 'inputchange')
    },
    handleInputFocus(evt) {
      this.$emit('focus', evt)
    },
    handleInputBlur(evt) {
      this.$emit('blur', evt);
    }
  }
}
</script>

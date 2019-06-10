<template>
  <div>
    <i-alert>
      An info prompt
    </i-alert>
    <i-alert type="success">
      An success prompt
    </i-alert>
    <i-alert type="warning">
      An warning prompt
    </i-alert>
    <i-alert type="error">
      An error prompt
    </i-alert>
    <i-alert type="info">
      An info prompt
      <div slot="desc">Content of prompt. Content of prompt.</div>
    </i-alert>
    <i-alert type="success">
      An success prompt
      <div slot="desc">Content of prompt. Content of prompt.</div>
    </i-alert>
    <i-alert type="warning">
      An warning prompt
      <div slot="desc">Content of prompt. Content of prompt.</div>
    </i-alert>
    <i-alert type="error">
      An error prompt
      <div slot="desc">Content of prompt. Content of prompt.</div>
    </i-alert>
    <i-alert type="info" show-icon="true">
      An info prompt
    </i-alert>
    <i-alert type="success" show-icon="true">
      An success prompt
    </i-alert>
    <i-alert type="warning" show-icon="true">
      An warning prompt
    </i-alert>
    <i-alert type="error" show-icon="true">
      An error prompt
    </i-alert>
    <i-alert show-icon="true" desc="true">
      An info prompt
      <div slot="desc">Content of prompt. Content of prompt.</div>
    </i-alert>
    <i-alert type="success" show-icon="true" desc="true">
      An success prompt
      <div slot="desc">Content of prompt. Content of prompt.</div>
    </i-alert>
    <i-alert type="warning" show-icon="true" desc="true">
      An warning prompt
      <div slot="desc">Content of prompt. Content of prompt.</div>
    </i-alert>
    <i-alert type="error" show-icon="true" desc="true">
      An error prompt
      <div slot="desc">Content of prompt. Content of prompt.</div>
    </i-alert>
    <i-alert closable="true" @close="handleClick">
      An info prompt
    </i-alert>
    <i-alert type="success" show-icon="true" desc="true" closable="true" @close="handleClick">
      An success prompt
      <div slot="desc">Content of prompt. Content of prompt.</div>
    </i-alert>
  </div>
</template>
<script>
import alert from '../../components/alert/alert'
export default {
  components: {
    'i-alert': alert
  },
  methods: {
    handleClick() {
      console.log('alert-close')
    }
  }
}
</script>

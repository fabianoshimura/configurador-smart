<template>
  <Checkbox :value="copy" :disabled="disabled" @input="input($event)">
    {{ $t('viewFilterTypeBoolean.selected') }}
  </Checkbox>
</template>

<script>
import { trueString } from '@baserow/modules/database/utils/constants'
import viewFilter from '@baserow/modules/database/mixins/viewFilter'

export default {
  name: 'ViewFilterTypeBoolean',
  mixins: [viewFilter],
  computed: {
    copy() {
      const value = this.filter.value.toLowerCase().trim()
      return trueString.includes(value)
    },
  },
  methods: {
    input(value) {
      this.$emit('input', value ? '1' : '0')
    },
  },
}
</script>

<i18n>
{
  "en": {
    "viewFilterTypeBoolean": {
      "selected": "Selected"
    }
  },
  "fr": {
    "viewFilterTypeBoolean": {
      "selected": "Sélectionné"
    }
  }
}
</i18n>

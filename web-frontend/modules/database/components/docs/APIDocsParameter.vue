<template>
  <li class="api-docs__parameter">
    <div class="api-docs__parameter-name">
      <div>
        {{ userFieldNames ? visibleName : name }}
        <span
          v-if="userFieldNames || visibleName !== null"
          class="api-docs__parameter-visible-name"
          >{{ userFieldNames ? name : visibleName }}</span
        >
      </div>
      <div v-if="optional" class="api-docs__parameter-optional">
        {{ $t('apiDocsParameter.optional') }}
      </div>
    </div>
    <div class="api-docs__parameter-description">
      <code class="api-docs__code">{{ type }}</code>
      <div v-if="standard !== ''" class="api-docs__parameter-default">
        {{ $t('apiDocsParameter.defaultValue', { value: standard }) }}
      </div>
      <div class="api-docs__parameter-content">
        <slot></slot>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'APIDocsParameter',
  props: {
    name: {
      type: String,
      required: true,
    },
    visibleName: {
      type: String,
      required: false,
      default: null,
    },
    optional: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: true,
    },
    standard: {
      type: String,
      required: false,
      default: '',
    },
    userFieldNames: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<i18n>
{
  "en": {
    "apiDocsParameter": {
      "optional": "optional",
      "defaultValue": "Default: {value}"
    }
  },
  "fr": {
    "apiDocsParameter": {
      "optional": "optionnel",
      "defaultValue": "Valeur par défaut : {value}"
    }
  }
}
</i18n>

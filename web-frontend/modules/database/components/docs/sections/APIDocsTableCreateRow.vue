<template>
  <div class="api-docs__item">
    <div class="api-docs__left">
      <h3
        :id="'section-table-' + table.id + '-create'"
        class="api-docs__heading-3"
      >
        {{ $t('apiDocs.createRow') }}
      </h3>
      <p class="api-docs__content">
        {{ $t('apiDocsTableCreateRow.description', table) }}
      </p>
      <h4 class="api-docs__heading-4">
        {{ $t('apiDocs.queryParameters') }}
      </h4>
      <ul class="api-docs__parameters">
        <APIDocsParameter name="user_field_names" :optional="true" type="any">
          <MarkdownIt
            class="api-docs__content"
            :content="$t('apiDocs.userFieldNamesDescription')"
          />
        </APIDocsParameter>
        <APIDocsParameter :optional="true" name="before" type="integer">
          {{ $t('apiDocsTableCreateRow.before') }}
        </APIDocsParameter>
      </ul>
      <h4 class="api-docs__heading-4">
        {{ $t('apiDocs.requestBodySchema') }}
      </h4>
      <ul class="api-docs__parameters">
        <APIDocsParameter
          v-for="field in withoutReadOnly[table.id]"
          :key="field.id"
          :name="'field_' + field.id"
          :visible-name="field.name"
          :optional="true"
          :type="field._.type"
          :user-field-names="userFieldNames"
        >
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="field._.description"></div>
        </APIDocsParameter>
      </ul>
    </div>
    <div class="api-docs__right">
      <APIDocsExample
        :value="value"
        type="POST"
        :url="getListUrl(table, true)"
        :request="getRequestExample(table)"
        :response="getResponseItem(table)"
        :mapping="getFieldMapping(table)"
        @input="$emit('input', $event)"
      ></APIDocsExample>
    </div>
  </div>
</template>

<script>
import APIDocsExample from '@baserow/modules/database/components/docs/APIDocsExample'
import APIDocsParameter from '@baserow/modules/database/components/docs/APIDocsParameter'

export default {
  name: 'APIDocsTableCreateRow',
  components: {
    APIDocsParameter,
    APIDocsExample,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
    table: { type: Object, required: true },
    withoutReadOnly: { type: Object, required: true },
    userFieldNames: { type: Boolean, required: true },
    getListUrl: { type: Function, required: true },
    getResponseItem: { type: Function, required: true },
    getFieldMapping: { type: Function, required: true },
    getRequestExample: { type: Function, required: true },
  },
}
</script>

<i18n>
{
  "en": {
    "apiDocsTableCreateRow":{
      "description": "Create a new {name} row.",
      "before": "If provided then the newly created row will be positioned before the row with the provided id."
    }
  },
  "fr": {
    "apiDocsTableCreateRow":{
      "description": "Créé une nouvelle ligne pour la table {name}.",
      "before": "Si ce paramètre est fourni, la nouvelle ligne sera positionnée avant la ligne portant l'identifiant fourni."
    }
  }
}
</i18n>

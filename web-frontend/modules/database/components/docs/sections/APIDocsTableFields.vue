<template>
  <div class="item">
    <div class="api-docs__left">
      <h2 :id="'section-table-' + table.id">
        {{ $t('apiDocsTableFields.tableTitle', table) }}
      </h2>
      <p class="api-docs__content">
        {{ $t('apiDocsTableFields.tableId') }}
        <code class="api-docs__code">{{ table.id }}</code>
      </p>
      <h3
        :id="'section-table-' + table.id + '-fields'"
        class="api-docs__heading-3"
      >
        {{ $t('apiDocs.fields') }}
      </h3>
      <p class="api-docs__content">
        {{ $t('apiDocsTableFields.description', table) }}
      </p>
      <table class="api-docs__table">
        <thead>
          <tr>
            <th>{{ $t('apiDocsTableFields.id') }}</th>
            <th>{{ $t('apiDocsTableFields.name') }}</th>
            <th>{{ $t('apiDocsTableFields.type') }}</th>
            <th>
              {{ $t('apiDocsTableFields.compatibleFilters') }}
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="field in fields[table.id]">
            <tr :key="field.id + '-1'" class="api-docs__table-without-border">
              <td>field_{{ field.id }}</td>
              <td>{{ field.name }}</td>
              <td>
                <code class="api-docs__code margin-bottom-1">
                  {{ field._.type }}
                </code>
              </td>
              <td>
                <code
                  v-for="filter in getCompatibleFilterTypes(field)"
                  :key="filter.type"
                  class="
                    api-docs__code
                    api-docs__code--small
                    api-docs__code--clickable
                    margin-bottom-1 margin-right-1
                  "
                  @click.prevent="navigate('section-filters')"
                  >{{ filter.type }}</code
                >
              </td>
            </tr>
            <tr :key="field.id + '-2'">
              <td colspan="4">
                <!-- eslint-disable vue/no-v-html -->
                <div
                  class="api-docs__table-content"
                  v-html="field._.description"
                ></div>
                <!-- eslint-enable vue/no-v-html -->
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'APIDocsTableFields',
  props: {
    table: { type: Object, required: true },
    fields: { type: Object, required: true },
    navigate: { type: Function, required: true },
  },
  computed: {
    viewFilterTypes() {
      return Object.values(this.$registry.getAll('viewFilter'))
    },
  },
  methods: {
    getCompatibleFilterTypes(field) {
      return this.viewFilterTypes.filter((filter) =>
        filter.fieldIsCompatible(field)
      )
    },
  },
}
</script>

<i18n>
{
  "en": {
    "apiDocsTableFields":{
      "tableTitle": "{name} table",
      "tableId": "The ID of this table is:",
      "description": "Each row in the {name} table contains the following fields.",
      "id": "ID",
      "name": "Name",
      "type": "Type",
      "compatibleFilters": "Compatible filters"
    }
  },
  "fr": {
    "apiDocsTableFields":{
      "tableTitle": "Table {name}",
      "tableId": "L'identifiant de cette table est :",
      "description": "Chaque ligne dans la table « {name} » contient les champs décrits ci-dessous.",
      "id": "ID",
      "name": "Nom",
      "type": "Type",
      "compatibleFilters": "Filtres compatibles"
    }
  }
}
</i18n>

<template>
  <div class="api-docs__item">
    <div class="api-docs__left">
      <h3
        :id="`section-table-${table.id}-field-list`"
        class="api-docs__heading-3"
      >
        {{ $t('apiDocs.listFields') }}
      </h3>
      <MarkdownIt :content="$t('apiDocsTableListFields.description', table)" />
      <h4 class="api-docs__heading-4">
        {{ $t('apiDocsTableListFields.resultFieldProperties') }}
      </h4>
      <ul class="api-docs__parameters">
        <APIDocsParameter name="id" :optional="false" type="integer">
          <MarkdownIt :content="$t('apiDocsTableListFields.id')" />
        </APIDocsParameter>
        <APIDocsParameter name="name" :optional="false" type="string">
          {{ $t('apiDocsTableListFields.name') }}
        </APIDocsParameter>
        <APIDocsParameter name="table_id" :optional="false" type="integer">
          {{ $t('apiDocsTableListFields.tableId') }}
        </APIDocsParameter>
        <APIDocsParameter name="order" :optional="false" type="integer">
          {{ $t('apiDocsTableListFields.order') }}
        </APIDocsParameter>
        <APIDocsParameter name="primary" :optional="false" type="boolean">
          <MarkdownIt :content="$t('apiDocsTableListFields.primary')" />
        </APIDocsParameter>
        <APIDocsParameter name="type" :optional="false" type="string">
          {{ $t('apiDocsTableListFields.type') }}
        </APIDocsParameter>
      </ul>
      <p class="api-docs__content">
        {{ $t('apiDocsTableListFields.extraProps') }}
      </p>
    </div>
    <div class="api-docs__right">
      <APIDocsExample
        :value="value"
        type="GET"
        :url="getFieldsURL(table)"
        :response="getResponseFields(table)"
        :include-user-fields-checkbox="false"
        @input="$emit('input', $event)"
      ></APIDocsExample>
    </div>
  </div>
</template>

<script>
import APIDocsExample from '@baserow/modules/database/components/docs/APIDocsExample'
import APIDocsParameter from '@baserow/modules/database/components/docs/APIDocsParameter'

export default {
  name: 'APIDocsTableListFields',
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
    fields: { type: Object, required: true },
  },
  methods: {
    getFieldsURL(table) {
      return `${this.$env.PUBLIC_BACKEND_URL}/api/database/fields/table/${table.id}/`
    },
    /**
     * Generates a sample field list response based on the available fields of the table.
     */
    getResponseFields(table) {
      return this.fields[table.id]
        .slice(0, 3)
        .map(({ _: { fieldResponseExample } }) => fieldResponseExample)
    },
  },
}
</script>

<i18n>
{
  "en": {
    "apiDocsTableListFields":{
      "description": "To list fields of the {name} table a `GET` request has to be made to the {name} fields endpoint. It's only possible to list the fields if the token has read, create or update permissions.",
      "resultFieldProperties": "Result field properties",
      "id": "Field primary key. Can be used to generate the database column name by adding `field_` prefix.",
      "name": "Field name.",
      "tableId": "Related table id.",
      "order": "Field order in table. 0 for the first field.",
      "primary": "Indicates if the field is a primary field. If `true` the field cannot be deleted and the value should represent the whole row.",
      "type": "Type defined for this field.",
      "extraProps": "Some extra properties are not described here because they are type specific."
    }
  },
  "fr": {
    "apiDocsTableListFields":{
      "description": "Afin de lister les champs de la table {name} une requête de type {get} doit être envoyé auprès du point d'accès des champs de celle-ci. Le jeton d'authentification doit avoir les droits de création, modification et suppression afin de pouvoir lister les champs de la table.",
      "resultFieldProperties": "Propriétés des champs de la réponse",
      "id": "Clé primaire du champ. Permet de générer le nom de la colonne en base de données en ajoutant le prefix `field_`.",
      "name": "Nom du champ.",
      "tableId": "Clé étrangère de la table.",
      "order": "Ordre du champ dans la table. 0 est le premier champ.",
      "primary": "Indique si le champ est une clé primaire. Si la valeur est `true` le champ ne peut être effacé et ses valeurs doivent représenter la ligne entière.",
      "type": "Type défini pour ce champ.",
      "extraProps": "Certaines propriétés ne sont pas décrites ici car elles sont spécifiques au type de champ concerné."
    }
  }
}
</i18n>

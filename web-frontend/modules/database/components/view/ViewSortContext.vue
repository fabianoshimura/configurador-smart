<template>
  <Context ref="context" class="sortings">
    <div>
      <div v-if="view.sortings.length === 0" class="sortings__none">
        <div class="sortings__none-title">
          {{ $t('viewSortContext.noSortTitle') }}
        </div>
        <div class="sortings__none-description">
          {{ $t('viewSortContext.noSortText') }}
        </div>
      </div>
      <div
        v-for="(sort, index) in view.sortings"
        :key="sort.id"
        class="sortings__item"
        :class="{
          'sortings__item--loading': sort._.loading,
        }"
        :set="(field = getField(sort.field))"
      >
        <a
          v-if="!disableSort"
          class="sortings__remove"
          @click.stop="deleteSort(sort)"
        >
          <i class="fas fa-times"></i>
        </a>
        <div class="sortings__description">
          <template v-if="index === 0">{{
            $t('viewSortContext.sortBy')
          }}</template>
          <template v-if="index > 0">{{
            $t('viewSortContext.thenBy')
          }}</template>
        </div>
        <div class="sortings__field">
          <Dropdown
            :value="sort.field"
            :disabled="disableSort"
            class="dropdown--floating dropdown--tiny"
            @input="updateSort(sort, { field: $event })"
          >
            <DropdownItem
              :key="'sort-field-' + sort.id + '-' + primary.id"
              :name="primary.name"
              :value="primary.id"
              :disabled="
                sort.field !== primary.id && !isFieldAvailable(primary)
              "
            ></DropdownItem>
            <DropdownItem
              v-for="field in fields"
              :key="'sort-field-' + sort.id + '-' + field.id"
              :name="field.name"
              :value="field.id"
              :disabled="sort.field !== field.id && !isFieldAvailable(field)"
            ></DropdownItem>
          </Dropdown>
        </div>
        <div
          class="sortings__order"
          :class="{ 'sortings__order--disabled': disableSort }"
        >
          <a
            class="sortings__order-item"
            :class="{ active: sort.order === 'ASC' }"
            @click="updateSort(sort, { order: 'ASC' })"
          >
            <div>
              <template v-if="getSortIndicator(field, 0) === 'text'">{{
                getSortIndicator(field, 1)
              }}</template>
              <i
                v-if="getSortIndicator(field, 0) === 'icon'"
                class="fa"
                :class="'fa-' + getSortIndicator(field, 1)"
              ></i>
            </div>
            <div>
              <i class="fas fa-long-arrow-alt-right"></i>
            </div>
            <div>
              <template v-if="getSortIndicator(field, 0) === 'text'">{{
                getSortIndicator(field, 2)
              }}</template>
              <i
                v-if="getSortIndicator(field, 0) === 'icon'"
                class="fa"
                :class="'fa-' + getSortIndicator(field, 2)"
              ></i>
            </div>
          </a>
          <a
            class="sortings__order-item"
            :class="{ active: sort.order === 'DESC' }"
            @click="updateSort(sort, { order: 'DESC' })"
          >
            <div>
              <template v-if="getSortIndicator(field, 0) === 'text'">{{
                getSortIndicator(field, 2)
              }}</template>
              <i
                v-if="getSortIndicator(field, 0) === 'icon'"
                class="fa"
                :class="'fa-' + getSortIndicator(field, 2)"
              ></i>
            </div>
            <div>
              <i class="fas fa-long-arrow-alt-right"></i>
            </div>
            <div>
              <template v-if="getSortIndicator(field, 0) === 'text'">{{
                getSortIndicator(field, 1)
              }}</template>
              <i
                v-if="getSortIndicator(field, 0) === 'icon'"
                class="fa"
                :class="'fa-' + getSortIndicator(field, 1)"
              ></i>
            </div>
          </a>
        </div>
      </div>
      <template
        v-if="view.sortings.length < availableFieldsLength && !disableSort"
      >
        <a
          ref="addContextToggle"
          class="sortings__add"
          @click="
            $refs.addContext.toggle($refs.addContextToggle, 'bottom', 'left', 4)
          "
        >
          <i class="fas fa-plus"></i>
          {{ $t('viewSortContext.addSort') }}
        </a>
        <Context ref="addContext" class="sortings__add-context">
          <ul ref="items" class="context__menu">
            <li v-show="isFieldAvailable(primary)">
              <a @click="addSort(primary)">
                <i
                  class="context__menu-icon fas fa-fw"
                  :class="'fa-' + primary._.type.iconClass"
                ></i>
                {{ primary.name }}
              </a>
            </li>
            <li
              v-for="field in fields"
              v-show="isFieldAvailable(field)"
              :key="field.id"
            >
              <a @click="addSort(field)">
                <i
                  class="context__menu-icon fas fa-fw"
                  :class="'fa-' + field._.type.iconClass"
                ></i>
                {{ field.name }}
              </a>
            </li>
          </ul>
        </Context>
      </template>
    </div>
  </Context>
</template>

<script>
import { notifyIf } from '@baserow/modules/core/utils/error'
import context from '@baserow/modules/core/mixins/context'

export default {
  name: 'ViewSortContext',
  mixins: [context],
  props: {
    primary: {
      type: Object,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
    view: {
      type: Object,
      required: true,
    },
    readOnly: {
      type: Boolean,
      required: true,
    },
    disableSort: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      addOpen: false,
    }
  },
  computed: {
    /**
     * Calculates the total amount of available fields.
     */
    availableFieldsLength() {
      const fields = this.fields.filter((field) =>
        this.getCanSortInView(field)
      ).length
      const primary = this.getCanSortInView(this.primary) ? 1 : 0
      return fields + primary
    },
  },
  methods: {
    getCanSortInView(field) {
      return this.$registry.get('field', field.type).getCanSortInView(field)
    },
    getField(fieldId) {
      if (this.primary.id === fieldId) {
        return this.primary
      }
      for (const i in this.fields) {
        if (this.fields[i].id === fieldId) {
          return this.fields[i]
        }
      }
      return undefined
    },
    isFieldAvailable(field) {
      const allFieldIds = this.view.sortings.map((sort) => sort.field)
      return this.getCanSortInView(field) && !allFieldIds.includes(field.id)
    },
    async addSort(field) {
      this.$refs.addContext.hide()

      try {
        await this.$store.dispatch('view/createSort', {
          view: this.view,
          values: {
            field: field.id,
            value: 'ASC',
          },
          readOnly: this.readOnly,
        })
        this.$emit('changed')
      } catch (error) {
        notifyIf(error, 'view')
      }
    },
    async deleteSort(sort) {
      try {
        await this.$store.dispatch('view/deleteSort', {
          view: this.view,
          sort,
          readOnly: this.readOnly,
        })
        this.$emit('changed')
      } catch (error) {
        notifyIf(error, 'view')
      }
    },
    async updateSort(sort, values) {
      if (this.disableSort) {
        return
      }

      try {
        await this.$store.dispatch('view/updateSort', {
          sort,
          values,
          readOnly: this.readOnly,
        })
        this.$emit('changed')
      } catch (error) {
        notifyIf(error, 'view')
      }
    },
    getSortIndicator(field, index) {
      return this.$registry
        .get('field', field.type)
        .getSortIndicator(field, this.$registry)[index]
    },
  },
}
</script>

<i18n>
{
  "en":{
    "viewSortContext":{
      "noSortTitle": "You have not yet created a sort",
      "noSortText": "Sorts allow you to sort rows by a field.",
      "sortBy": "Sort by",
      "thenBy": "Then by",
      "addSort": "choose a field to sort by"
    }
  },
  "fr":{
    "viewSortContext":{
      "noSortTitle": "Vous n'avez configuré aucun tri",
      "noSortText": "Le tri vous permet d'ordonner les lignes selon la valeur d'un champ.",
      "sortBy": "Trier par",
      "thenBy": "Puis par",
      "addSort": "Ajouter un tri"
    }
  }
}
</i18n>

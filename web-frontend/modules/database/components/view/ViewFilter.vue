<template>
  <div>
    <a
      ref="contextLink"
      class="header__filter-link"
      :class="{
        active: view.filters.length > 0,
      }"
      @click="$refs.context.toggle($refs.contextLink, 'bottom', 'left', 4)"
    >
      <i class="header__filter-icon fas fa-filter"></i>
      <span class="header__filter-name">{{
        $tc('viewFilter.filter', view.filters.length, {
          count: view.filters.length,
        })
      }}</span>
    </a>
    <Context
      ref="context"
      class="filters"
      :class="{ 'context--loading-overlay': view._.loading }"
    >
      <ViewFilterForm
        :primary="primary"
        :fields="fields"
        :view="view"
        :read-only="readOnly"
        :disable-filter="disableFilter"
        @changed="$emit('changed')"
      />
    </Context>
  </div>
</template>

<script>
import ViewFilterForm from '@baserow/modules/database/components/view/ViewFilterForm'

export default {
  name: 'ViewFilter',
  components: { ViewFilterForm },
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
    disableFilter: {
      type: Boolean,
      required: true,
    },
  },
  beforeMount() {
    this.$bus.$on('view-filter-created', this.filterCreated)
  },
  beforeDestroy() {
    this.$bus.$off('view-filter-created', this.filterCreated)
  },
  methods: {
    /**
     * When a filter is created via an outside source we want to show the context menu.
     */
    filterCreated() {
      this.$refs.context.show(this.$refs.contextLink, 'bottom', 'left', 4)
    },
  },
}
</script>

<i18n>
{
  "en":{
    "viewFilter": {
      "filter": "Filter | 1 Filter | {count} Filters"
    }
  },
  "fr":{
    "viewFilter": {
      "filter": "Filtre | 1 Filtre | {count} Filtres"
    }
  }
}
</i18n>

<template>
  <Dropdown
    :value="filter.value"
    :show-search="false"
    class="filters__value-dropdown dropdown--tiny"
    @input="$emit('input', $event)"
  >
    <DropdownItem
      :name="$t('viewFilterTypeFileTypeDropdown.image')"
      value="image"
    ></DropdownItem>
    <DropdownItem
      :name="$t('viewFilterTypeFileTypeDropdown.document')"
      value="document"
    ></DropdownItem>
  </Dropdown>
</template>

<script>
export default {
  name: 'ViewFilterTypeFileTypeDropdown',
  props: {
    filter: {
      type: Object,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
    primary: {
      type: Object,
      required: true,
    },
    readOnly: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<i18n>
{
  "en": {
    "viewFilterTypeFileTypeDropdown": {
      "image": "image",
      "document": "document"
    }
  },
  "fr": {
    "viewFilterTypeFileTypeDropdown": {
      "image": "Image",
      "document": "Document"
    }
  }
}
</i18n>

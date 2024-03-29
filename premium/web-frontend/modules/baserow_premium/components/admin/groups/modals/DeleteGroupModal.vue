<template>
  <Modal>
    <h2 class="box__title">
      {{ $t('deleteGroupModal.title', group) }}
    </h2>
    <Error :error="error"></Error>
    <div>
      <i18n path="deleteGroupModal.confirmation" tag="p">
        <template #name>
          <strong>{{ group.name }}</strong>
        </template>
      </i18n>
      <p>
        {{ $t('deleteGroupModal.comment') }}
      </p>
      <div class="actions">
        <div class="align-right">
          <a
            class="button button--large button--error button--overflow"
            :class="{ 'button--loading': loading }"
            :disabled="loading"
            :title="group.name"
            @click.prevent="deleteGroup()"
          >
            {{ $t('deleteGroupModal.delete', group) }}
          </a>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import modal from '@baserow/modules/core/mixins/modal'
import error from '@baserow/modules/core/mixins/error'
import GroupsAdminService from '@baserow_premium/services/admin/groups'

export default {
  name: 'DeleteGroupModal',
  mixins: [modal, error],
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    async deleteGroup() {
      this.hideError()
      this.loading = true

      try {
        await GroupsAdminService(this.$client).delete(this.group.id)
        this.$emit('group-deleted', this.group.id)
        this.hide()
      } catch (error) {
        this.handleError(error, 'group')
      }

      this.loading = false
    },
  },
}
</script>

<i18n>
{
  "en": {
    "deleteGroupModal": {
      "title": "Delete {name}",
      "confirmation": "Are you sure you want to delete the group: {name}?",
      "comment":"The group will be permanently deleted, including the related applications. It is not possible to undo this action.",
      "delete": "Delete group {name}"
    }
  },
  "fr": {
    "deleteGroupModal": {
      "title": "Supprimer {name}",
      "confirmation": "Êtes-vous sûr·e de vouloir supprimer le groupe : {name} ?",
      "comment":"Le groupe va être supprimé définitivement ainsi que ses applications liées. Il est impossible d'annuler cette action.",
      "delete": "Supprimer le groupe {name}"
    }
  }
}
</i18n>

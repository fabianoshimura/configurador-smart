<template>
  <div>
    <h1 class="box__title">{{ $t('apiDocs.title') }}</h1>
    <template v-if="isAuthenticated">
      <i18n path="apiDocs.intro" tag="p">
        <template #settingsLink>
          <a @click.prevent="$refs.settingsModal.show('tokens')">{{
            $t('apiDocs.settings')
          }}</a
          >,
        </template>
      </i18n>
      <div class="select-application__title">
        {{ $t('apiDocs.selectApplicationTitle') }}
      </div>
      <APIDocsSelectDatabase />
      <nuxt-link :to="{ name: 'dashboard' }" class="select-application__back">
        <i class="fas fa-arrow-left"></i>
        {{ $t('apiDocs.back') }}
      </nuxt-link>
      <SettingsModal ref="settingsModal"></SettingsModal>
    </template>
    <template v-else>
      <i18n path="apiDocs.intro" tag="p">
        <template #settingsLink>{{ $t('apiDocs.settings') }},</template>,
      </i18n>
      <nuxt-link
        :to="{
          name: 'login',
          query: {
            original: $route.path,
          },
        }"
        class="button button--ghost button--large"
      >
        {{ $t('apiDocs.signIn') }}
      </nuxt-link>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import SettingsModal from '@baserow/modules/core/components/settings/SettingsModal'
import APIDocsSelectDatabase from '@baserow/modules/database/components/docs/APIDocsSelectDatabase'

export default {
  name: 'APIDocs',
  components: { SettingsModal, APIDocsSelectDatabase },
  layout: 'login',
  middleware: ['groupsAndApplications'],
  head() {
    return {
      title: 'REST API documentation',
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
    }),
  },
}
</script>

<i18n>
{
  "en": {
    "apiDocs": {
      "title": "REST API",
      "intro":  "After you have created your database schema and API key in the {settingsLink} your Baserow database provides his own REST API endpoints to create, read, update and delete rows.",
      "settings": "settings",
      "selectApplicationTitle": "For which database do you want to see the documentation?",
      "signIn": "Sign in to get started",
      "back":"Back to dashboard"
    }
  },
  "fr": {
    "apiDocs": {
      "title": "API REST",
      "intro":  "Après avoir créé votre base de données et une clé d'API dans votre {settingsLink} Baserow fourni ses propres API REST pour créer, lire, mettre à jour et supprimer des lignes.",
      "settings": "compte",
      "selectApplicationTitle": "Choisissez une base de donnée :",
      "signIn": "S'identifier"
    }
  }
}
</i18n>

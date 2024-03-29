<template>
  <div class="layout__col-2-scroll layout__col-2-scroll--white-background">
    <div v-if="orderedLicenses.length === 0" class="placeholder">
      <div class="placeholder__icon">
        <i class="fas fa-certificate"></i>
      </div>
      <h1 class="placeholder__title">
        {{ $t('licenses.titleNoLicenses') }}
      </h1>
      <p class="placeholder__content">
        {{ $t('licenses.noLicensesDescription') }}
      </p>
      <ul class="licenses__features">
        <li class="licenses__feature">
          <i class="fas fa-fw fa-check licenses__feature-icon"></i>
          {{ $t('licenses.rowComments') }}
        </li>
        <li class="licenses__feature">
          <i class="fas fa-fw fa-check licenses__feature-icon"></i>
          {{ $t('licenses.kanbanView') }}
        </li>
        <li class="licenses__feature">
          <i class="fas fa-fw fa-check licenses__feature-icon"></i>
          {{ $t('licenses.exports') }}
        </li>
        <li class="licenses__feature">
          <i class="fas fa-fw fa-check licenses__feature-icon"></i>
          {{ $t('licenses.admin') }}
        </li>
      </ul>
      <div class="placeholder__action">
        <a class="button button--large" @click="$refs.registerModal.show()">
          <i class="fas fa-plus"></i>
          {{ $t('licenses.registerLicense') }}
        </a>
        <a
          :href="'https://baserow.io/get-license/' + instanceId + '/'"
          class="button button--large button--ghost margin-left-2"
          target="_blank"
          >{{ $t('licenses.getLicense') }}</a
        >
      </div>
      <p>
        {{ $t('licenses.baserowInstanceId') }}
        <br />
        <span class="licenses__instance-id">{{ instanceId }}</span>
        <a
          class="licenses__instance-id-copy"
          @click.prevent="
            ;[copyToClipboard(instanceId), $refs.instanceIdCopied.show()]
          "
        >
          {{ $t('action.copy') }}
          <Copied ref="instanceIdCopied"></Copied>
        </a>
      </p>
    </div>
    <div v-else class="licenses">
      <div class="licenses__head">
        <h1 class="margin-bottom-0">
          {{ $t('licenses.titleLicenses') }}
        </h1>
        <div>
          <a
            class="button button--primary margin-right-1"
            @click="$refs.registerModal.show()"
          >
            <i class="fas fa-plus"></i>
            {{ $t('licenses.registerLicense') }}
          </a>
          <a
            :href="'https://baserow.io/get-license/' + instanceId + '/'"
            class="button button--ghost"
            target="_blank"
            >{{ $t('licenses.getLicense') }}</a
          >
        </div>
      </div>
      <p>
        {{ $t('licenses.baserowInstanceId') }}
        <span class="licenses__instance-id">{{ instanceId }}</span>
        <a
          class="licenses__instance-id-copy"
          @click.prevent="
            ;[copyToClipboard(instanceId), $refs.instanceIdCopied.show()]
          "
        >
          {{ $t('action.copy') }}
          <Copied ref="instanceIdCopied"></Copied>
        </a>
      </p>
      <div class="licenses__items">
        <nuxt-link
          v-for="license in orderedLicenses"
          :key="license.id"
          :to="{ name: 'admin-license', params: { id: license.id } }"
          class="licenses__item"
        >
          <div class="licenses__item-head">
            <div class="licenses__item-title">
              {{ $t('licenses.licenceId') }}
              <span class="licenses__item-title-license">{{
                license.license_id
              }}</span>
            </div>
            <div
              class="license-plan margin-right-1"
              :class="{
                'license-plan--premium': license.product_code === 'premium',
              }"
            >
              <template v-if="license.product_code === 'premium'">{{
                $t('licenses.premium')
              }}</template>
            </div>
            <div
              v-if="!license.is_active"
              class="license-plan license-plan--expired"
            >
              {{ $t('licenses.expired') }}
            </div>
          </div>
          <div class="licenses__item-validity">
            {{
              $t('licenses.validity', {
                start: localDate(license.valid_from),
                end: localDate(license.valid_through),
              })
            }}
          </div>
          <ul class="licenses__item-details">
            <li>
              {{ license.seats_taken }} / {{ license.seats }}
              {{ $t('licenses.seats') }}
            </li>
            <li>
              {{ $t('licenses.premiumFeatures') }}
              <i
                class="fas margin-left-1"
                :class="
                  license.product_code === 'premium'
                    ? 'fa-check license-yes'
                    : 'fa-times license-no'
                "
              ></i>
            </li>
          </ul>
        </nuxt-link>
      </div>
    </div>
    <RegisterLicenseModal ref="registerModal"></RegisterLicenseModal>
  </div>
</template>

<script>
import LicenseService from '@baserow_premium/services/license'
import RegisterLicenseModal from '@baserow_premium/components/license/RegisterLicenseModal'
import moment from '@baserow/modules/core/moment'
import SettingsService from '@baserow/modules/core/services/settings'
import { copyToClipboard } from '@baserow/modules/database/utils/clipboard'

export default {
  components: { RegisterLicenseModal },
  layout: 'app',
  middleware: 'staff',
  async asyncData({ app, error }) {
    try {
      const { data: instanceData } = await SettingsService(
        app.$client
      ).getInstanceID()
      const { data } = await LicenseService(app.$client).fetchAll()
      return {
        licenses: data,
        instanceId: instanceData.instance_id,
      }
    } catch {
      return error({
        statusCode: 400,
        message: 'Something went wrong while fetching the licenses.',
      })
    }
  },
  computed: {
    orderedLicenses() {
      return this.licenses
        .slice()
        .sort(
          (a, b) =>
            new Date(a.valid_from).getTime() - new Date(b.valid_from).getTime()
        )
        .sort((a, b) =>
          a.is_active === b.is_active ? 0 : a.is_active ? -1 : 1
        )
    },
  },
  methods: {
    localDate(date) {
      return moment.utc(date).local().format('ll')
    },
    copyToClipboard(value) {
      copyToClipboard(value)
    },
  },
}
</script>

<i18n>
{
  "en": {
    "licenses": {
      "titleNoLicenses": "No licenses found",
      "titleLicenses": "Licenses",
      "noLicensesDescription": "Your Baserow instance doesn’t have any licenses registered. A premium license gives you immediate access to all of the additional features. If you already have a license, you can register it here. Alternatively you can get one by clicking on the button below.",
      "rowComments": "Row comments",
      "kanbanView": "Kanban view",
      "exports": "JSON and XML export",
      "admin": "Admin functionality",
      "getLicense": "Get a license",
      "baserowInstanceId": "Your Baserow instance ID is:",
      "registerLicense": "Register license",
      "licenceId": "License ID",
      "premium": "Premium",
      "expired": "Expired",
      "validity": "Valid from {start} through {end}",
      "seats": "seats",
      "premiumFeatures": "Premium features"
    }
  },
  "fr": {
    "licenses": {
      "titleNoLicenses": "Aucune licences trouvée",
      "titleLicenses": "Licences",
      "noLicensesDescription": "Votre instance de Baserow n'a aucune licence enregistrée. Une licence premium vous donne immédiatement accés à plusieurs fonctionnalités additionnelles. Si vous avez déjà une licence, vous pouvez l'enregistrer ici. Vous pouvez également en obtenir une en cliquant sur le bouton ci-dessous.",
      "rowComments": "Commentaires par lignes",
      "kanbanView": "Vue Kanban",
      "exports": "Export JSON et XML",
      "admin": "Interface d'administration",
      "getLicense": "Obtenir une licence",
      "baserowInstanceId": "Votre identifiant d'instance Baserow est :",
      "registerLicense": "Activer une licence",
      "licenceId": "Numéro de licence",
      "premium": "Premium",
      "expired": "Expirée",
      "validity": "Valide du {start} au {end}",
      "seats": "places",
      "premiumFeatures": "Fonctionalités premium"
    }
  }
}
</i18n>

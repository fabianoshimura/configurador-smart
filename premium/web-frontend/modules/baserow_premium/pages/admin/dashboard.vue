<template>
  <div class="layout__col-2-scroll">
    <div class="admin-dashboard">
      <h1>{{ $t('dashboard.title') }}</h1>
      <div class="row margin-bottom-3">
        <div class="col col-4">
          <div class="admin-dashboard__box">
            <div v-if="loading" class="loading-overlay"></div>
            <div class="admin-dashboard__box-title">
              {{ $t('dashboard.totals') }}
            </div>
            <div class="admin-dashboard__numbers">
              <div class="admin-dashboard__numbers-name">
                {{ $t('dashboard.totalUsers') }}
              </div>
              <div class="admin-dashboard__numbers-value">
                {{ data.total_users }}
              </div>
              <div class="admin-dashboard__numbers-percentage">
                <nuxt-link :to="{ name: 'admin-users' }">{{
                  $t('dashboard.viewAll')
                }}</nuxt-link>
              </div>
            </div>
            <div class="admin-dashboard__numbers">
              <div class="admin-dashboard__numbers-name">
                {{ $t('dashboard.totalGroups') }}
              </div>
              <div class="admin-dashboard__numbers-value">
                {{ data.total_groups }}
              </div>
              <div class="admin-dashboard__numbers-percentage">
                <nuxt-link :to="{ name: 'admin-groups' }">{{
                  $t('dashboard.viewAll')
                }}</nuxt-link>
              </div>
            </div>
            <div class="admin-dashboard__numbers">
              <div class="admin-dashboard__numbers-name">
                {{ $t('dashboard.totalApplications') }}
              </div>
              <div class="admin-dashboard__numbers-value">
                {{ data.total_applications }}
              </div>
            </div>
          </div>
        </div>
        <div class="col col-4">
          <div class="admin-dashboard__box">
            <div v-if="loading" class="loading-overlay"></div>
            <div class="admin-dashboard__box-title">
              {{ $t('dashboard.newUsers') }}
            </div>
            <div class="admin-dashboard__numbers">
              <div class="admin-dashboard__numbers-name">
                {{ $t('dashboard.newUsers24h') }}
              </div>
              <div class="admin-dashboard__numbers-value">
                {{ data.new_users_last_24_hours }}
              </div>
              <div class="admin-dashboard__numbers-percentage">
                <span
                  class="admin-dashboard__numbers-percentage-value"
                  :class="{
                    'admin-dashboard__numbers-percentage-value--negative':
                      isNegative(percentages.new_users_last_24_hours),
                  }"
                  >{{ percentages.new_users_last_24_hours }}</span
                >
              </div>
            </div>
            <div class="admin-dashboard__numbers">
              <div class="admin-dashboard__numbers-name">
                {{ $t('dashboard.newUsers7days') }}
              </div>
              <div class="admin-dashboard__numbers-value">
                {{ data.new_users_last_7_days }}
              </div>
              <div class="admin-dashboard__numbers-percentage">
                <span
                  class="admin-dashboard__numbers-percentage-value"
                  :class="{
                    'admin-dashboard__numbers-percentage-value--negative':
                      isNegative(percentages.new_users_last_7_days),
                  }"
                  >{{ percentages.new_users_last_7_days }}</span
                >
              </div>
            </div>
            <div class="admin-dashboard__numbers">
              <div class="admin-dashboard__numbers-name">
                {{ $t('dashboard.newUsers30days') }}
              </div>
              <div class="admin-dashboard__numbers-value">
                {{ data.new_users_last_30_days }}
              </div>
              <div class="admin-dashboard__numbers-percentage">
                <span
                  class="admin-dashboard__numbers-percentage-value"
                  :class="{
                    'admin-dashboard__numbers-percentage-value--negative':
                      isNegative(percentages.new_users_last_30_days),
                  }"
                  >{{ percentages.new_users_last_30_days }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col col-4">
          <div class="admin-dashboard__box">
            <div v-if="loading" class="loading-overlay"></div>
            <div class="admin-dashboard__box-title">
              {{ $t('dashboard.activeUsers') }}
            </div>
            <div class="admin-dashboard__numbers">
              <div class="admin-dashboard__numbers-name">
                {{ $t('dashboard.activeUsers24h') }}
              </div>
              <div class="admin-dashboard__numbers-value">
                {{ data.active_users_last_24_hours }}
              </div>
              <div class="admin-dashboard__numbers-percentage">
                <span
                  class="admin-dashboard__numbers-percentage-value"
                  :class="{
                    'admin-dashboard__numbers-percentage-value--negative':
                      isNegative(percentages.new_users_last_30_days),
                  }"
                  >{{ percentages.active_users_last_24_hours }}</span
                >
              </div>
            </div>
            <div class="admin-dashboard__numbers">
              <div class="admin-dashboard__numbers-name">
                {{ $t('dashboard.activeUsers7days') }}
              </div>
              <div class="admin-dashboard__numbers-value">
                {{ data.active_users_last_7_days }}
              </div>
              <div class="admin-dashboard__numbers-percentage">
                <span
                  class="admin-dashboard__numbers-percentage-value"
                  :class="{
                    'admin-dashboard__numbers-percentage-value--negative':
                      isNegative(percentages.active_users_last_7_days),
                  }"
                  >{{ percentages.active_users_last_7_days }}</span
                >
              </div>
            </div>
            <div class="admin-dashboard__numbers">
              <div class="admin-dashboard__numbers-name">
                {{ $t('dashboard.activeUsers30days') }}
              </div>
              <div class="admin-dashboard__numbers-value">
                {{ data.active_users_last_30_days }}
              </div>
              <div class="admin-dashboard__numbers-percentage">
                <span
                  class="admin-dashboard__numbers-percentage-value"
                  :class="{
                    'admin-dashboard__numbers-percentage-value--negative':
                      isNegative(percentages.active_users_last_30_days),
                  }"
                  >{{ percentages.active_users_last_30_days }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="admin-dashboard__box">
        <div v-if="loading" class="loading-overlay"></div>
        <ActiveUsers
          :new-users="data.new_users_per_day"
          :active-users="data.active_users_per_day"
        ></ActiveUsers>
      </div>
    </div>
  </div>
</template>

<script>
import { notifyIf } from '@baserow/modules/core/utils/error'

import ActiveUsers from '@baserow_premium/components/admin/dashboard/charts/ActiveUsers'
import AdminDashboardService from '@baserow_premium/services/admin/dashboard'

export default {
  components: { ActiveUsers },
  layout: 'app',
  middleware: 'staff',
  data() {
    return {
      loading: true,
      data: {
        total_users: 0,
        total_groups: 0,
        total_applications: 0,
        new_users_last_24_hours: 0,
        new_users_last_7_days: 0,
        new_users_last_30_days: 0,
        active_users_last_24_hours: 0,
        active_users_last_7_days: 0,
        active_users_last_30_days: 0,
        previous_new_users_last_24_hours: 0,
        previous_new_users_last_7_days: 0,
        previous_new_users_last_30_days: 0,
        previous_active_users_last_24_hours: 0,
        previous_active_users_last_7_days: 0,
        previous_active_users_last_30_days: 0,
        new_users_per_day: [],
        active_users_per_day: [],
      },
    }
  },
  computed: {
    percentages() {
      const percentage = (value1, value2) => {
        if (value1 === 0 || value2 === 0) {
          return ''
        }

        let value = value1 / value2 - 1
        value = Math.round(value * 100 * 100) / 100
        value = `${value > 0 ? '+ ' : '- '}${Math.abs(value)}%`
        return value
      }
      return {
        new_users_last_24_hours: percentage(
          this.data.new_users_last_24_hours,
          this.data.previous_new_users_last_24_hours
        ),
        new_users_last_7_days: percentage(
          this.data.new_users_last_7_days,
          this.data.previous_new_users_last_7_days
        ),
        new_users_last_30_days: percentage(
          this.data.new_users_last_30_days,
          this.data.previous_new_users_last_30_days
        ),
        active_users_last_24_hours: percentage(
          this.data.active_users_last_24_hours,
          this.data.previous_active_users_last_24_hours
        ),
        active_users_last_7_days: percentage(
          this.data.active_users_last_7_days,
          this.data.previous_active_users_last_7_days
        ),
        active_users_last_30_days: percentage(
          this.data.active_users_last_30_days,
          this.data.previous_active_users_last_30_days
        ),
      }
    },
  },
  /**
   * Because the results depend on the timezone of the user, we can only fetch the data
   * on the client side. Therefore, this part is not included in the asyncData.
   */
  async mounted() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

    try {
      const { data } = await AdminDashboardService(this.$client).dashboard(
        timezone
      )
      this.data = data
    } catch (error) {
      notifyIf(error)
    }

    this.loading = false
  },
  methods: {
    isNegative(value) {
      return value.substr(0, 1) === '-'
    },
  },
}
</script>

<i18n>
{
  "en": {
    "dashboard": {
      "title": "Dashboard",
      "totals": "Totals",
      "totalUsers": "Total users",
      "totalGroups": "Total groups",
      "totalApplications": "Total applications",
      "newUsers": "New users",
      "newUsers24h": "New users last 24 hours",
      "newUsers7days": "New users last 7 days",
      "newUsers30days": "New users last 30 days",
      "activeUsers": "Active users",
      "activeUsers24h": "Active users last 24 hours",
      "activeUsers7days": "Active users last 7 days",
      "activeUsers30days": "Active users last 30 days",
      "viewAll": "View all"
    }
  },
  "fr": {
    "dashboard": {
      "title": "Statistiques",
      "totals": "Résumé",
      "totalUsers": "Nombre d'utilisateur",
      "totalGroups": "Nombre de groupe",
      "totalApplications": "Nombre d'application",
      "newUsers": "Nouveaux utilisateurs",
      "newUsers24h": "Sur les dernières 24h",
      "newUsers7days": "sur les 7 derniers jours",
      "newUsers30days": "Sur les 30 derniers jours",
      "activeUsers": "Utilisateurs actifs",
      "activeUsers24h": "Sur les dernières 24h",
      "activeUsers7days": "sur les 7 derniers jours",
      "activeUsers30days": "Sur les 30 derniers jours",
      "viewAll": "Consulter"
    }
  }
}
</i18n>

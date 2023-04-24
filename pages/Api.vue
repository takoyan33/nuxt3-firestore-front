<template>
  <v-container>
    <h2 class="text-h4 my-4 text-center">
      API
    </h2>
    <p class="my-2">
      Qiitaの記事を取得することができます
    </p>
    <div>
      <v-text-field v-model="userId" label="IDを入力して下さい" />
      <v-btn variant="outlined" @click="getQiitaData()">
        準備中
      </v-btn>
      <!-- <div v-if="isClick">
        <h2 class="text-h6 my-4 text-center">
          結果
        </h2>
        <table class="table table-striped">
          <tr>
            <th>記事タイトル</th>
            <th>URL</th>
            <th>LGTM数</th>
            <th>投稿日時</th>
          </tr>
          <tr v-for="(item, index) in displayQiitaDataList" :key="index">
            <td class="text-left">
              {{ item.title }}
            </td>
            <td>
              <a :href="item.url">{{ item.url }}</a>
            </td>
            <td>{{ item.likes_count }}</td>
            <td>{{ item.created_at }}</td>
          </tr>
        </table>
        <div>
          <h3>記事数 {{ totalArticle }}</h3>
          <h3>LGTM数 {{ totalLGTM }}</h3>
        </div>
      </div> -->
    </div>
  </v-container>
</template>

<!-- <script>
import axios from 'axios'

export default {
  data () {
    return {
      userId: '',
      displayQiitaDataList: '',
      totalArticle: 0,
      totalLGTM: 0,
      isClick: false
    }
  },
  methods: {
    getQiitaData: function () {
      axios
        .get(
          `https://qiita.com/api/v2/users/${this.userId}/items?page=1&per_page=100`,
          {}
        )
        .then((res) => {
          let allQiitaData = []
          allQiitaData = res.data

          const displayQiitaDataList = []
          let totalLGTM = 0
          allQiitaData.forEach(function (item) {
            displayQiitaDataList.push(item)
            totalLGTM += item.likes_count
          })
          // forEach内でthis.displayQiitaDataListへ格納できないので外でやる
          this.displayQiitaDataList = displayQiitaDataList.sort()
          this.totalLGTM = totalLGTM
          // total記事数を取得
          this.totalArticle = displayQiitaDataList.length
          // clickによる表示の制御
          this.isClick = true
        })
    }
  }
}
</script> -->

<template>
  <div
    :class="{
      'bg-grey-darken-4': isDarkMode,
      'bg-blue-grey-lighten-3': !isDarkMode,
    }"
  >
    <v-container class="d-flex justify-space-between">
      <h4 class="text-h5 pt-2 pb-2 ml-16">
        <NuxtLink :to="`/`" class="text-decoration-none">
          <h4
            :class="{
              'text-blue-grey-lighten-4 text-decoration-none mr-16': isDarkMode,
              'text-grey-darken-4 text-decoration-none mr-16': !isDarkMode,
            }"
          >
            <strong> Easy To Do </strong>
          </h4>
        </NuxtLink>
      </h4>
      <div class="justify-space-between d-none d-md-flex">
        <p class="mt-3">
          <NuxtLink
            :to="`/about`"
            :class="{
              'text-blue-grey-lighten-4 text-decoration-none mr-16': isDarkMode,
              'text-grey-darken-4 text-decoration-none mr-16': !isDarkMode,
            }"
            >About</NuxtLink
          >
        </p>
        <p class="mt-3">
          <NuxtLink
            :to="`/api`"
            :class="{
              'text-blue-grey-lighten-4 text-decoration-none mr-16': isDarkMode,
              'text-grey-darken-4 text-decoration-none mr-16': !isDarkMode,
            }"
            >API</NuxtLink
          >
        </p>
        <p class="mt-3">
          <slot />
          <button
            @click="toggleDarkMode"
            :class="{
              'text-blue-grey-lighten-4 text-decoration-none mr-16': isDarkMode,
              'text-grey-darken-4 text-decoration-none mr-16': !isDarkMode,
            }"
          >
            ダークモード切替
          </button>
        </p>
      </div>
      <div></div>
      <div class="mobile_header_btn_block_wrapper d-md-none">
        <!-- User Icon : MyPageに移動する -->
        <button class="user_icon" @click="goToMyPage">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.8887 19.6874C21.5498 17.4315 19.4591 15.6737 16.9531 14.6971C18.1993 13.7998 19.1198 12.5489 19.5843 11.1215C20.0487 9.69412 20.0336 8.16262 19.541 6.74395C19.0484 5.32527 18.1033 4.09135 16.8396 3.21697C15.5759 2.34259 14.0577 1.87207 12.5 1.87207C10.9423 1.87207 9.42403 2.34259 8.16034 3.21697C6.89665 4.09135 5.95158 5.32527 5.45898 6.74395C4.96639 8.16262 4.95125 9.69412 5.41571 11.1215C5.88017 12.5489 6.80069 13.7998 8.04686 14.6971C5.54093 15.6737 3.45023 17.4315 2.11132 19.6874C2.02835 19.8154 1.97306 19.9582 1.94872 20.1072C1.92438 20.2562 1.9315 20.4084 1.96964 20.5547C2.00778 20.701 2.07618 20.8384 2.17076 20.9588C2.26534 21.0792 2.38417 21.1802 2.5202 21.2556C2.65622 21.3311 2.80666 21.3795 2.96257 21.398C3.11847 21.4165 3.27667 21.4047 3.42774 21.3634C3.57882 21.322 3.71969 21.252 3.84199 21.1573C3.96428 21.0626 4.06551 20.9453 4.13964 20.8124C5.90917 17.8761 9.03417 16.1249 12.5 16.1249C15.9658 16.1249 19.0908 17.8771 20.8603 20.8124C21.021 21.0604 21.2758 21.2387 21.5709 21.3096C21.866 21.3805 22.1783 21.3385 22.4417 21.1924C22.7051 21.0463 22.899 20.8076 22.9824 20.5267C23.0658 20.2458 23.0322 19.9449 22.8887 19.6874ZM7.42186 8.99988C7.42186 8.0357 7.71969 7.09317 8.27768 6.29148C8.83567 5.48979 9.62877 4.86495 10.5567 4.49597C11.4846 4.12699 12.5056 4.03045 13.4907 4.21855C14.4757 4.40666 15.3806 4.87096 16.0908 5.55274C16.801 6.23452 17.2846 7.10316 17.4805 8.04882C17.6765 8.99447 17.5759 9.97467 17.1916 10.8655C16.8072 11.7563 16.1563 12.5176 15.3212 13.0533C14.4862 13.589 13.5043 13.8749 12.5 13.8749C11.1537 13.8734 9.86292 13.3593 8.91093 12.4454C7.95893 11.5315 7.42342 10.2924 7.42186 8.99988Z"
              fill="#666666"
            />
          </svg>
        </button>
        <!-- ハンバーガーメニュー・Open_Btn -->
        <button class="hamburger" @click="clickMenu">
          <!-- ハンバーガーメニューのボタン -->
          <div class="hamburger_btn">
            <span class="line line_01" :class="{ btn_line01: activeMenu }">
            </span>
            <span class="line line_02" :class="{ btn_line02: activeMenu }">
            </span>
            <span class="line line_03" :class="{ btn_line03: activeMenu }">
            </span>
          </div>
        </button>
        <!-- サイドバー -->
        <transition name="menu">
          <div class="menu" v-show="activeMenu">
            <ul>
              <li>
                <!-- ✖️ Icon : 閉じる_Btn -->
                <div>
                  <button class="close_btn" @click="clickMenu">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.6094 10.3906L10.3906 24.6094M10.3906 10.3906L24.6094 24.6094"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </li>
              <li @click="clickMenu">
                <nuxt-link to="/">
                  <div class="nav_tab_container">
                    <span class="title">HOME</span>
                    <span class="sub_title">ホーム</span>
                  </div>
                </nuxt-link>
              </li>
              <li @click="clickMenu">
                <nuxt-link to="/about">
                  <div class="nav_tab_container">
                    <span class="title">About</span>
                    <span class="sub_title">EasyToDo</span>
                  </div>
                </nuxt-link>
              </li>
              <li @click="clickMenu">
                <nuxt-link to="/maritama">
                  <div class="nav_tab_container">
                    <span class="title">ダークモード</span>
                    <button
                      @click="toggleDarkMode"
                      :class="{
                        sub_title: isDarkMode,
                        sub_title: !isDarkMode,
                      }"
                    >
                      切替
                    </button>
                  </div>
                </nuxt-link>
              </li>
              <li @click="clickMenu">
                <nuxt-link to="/api">
                  <div class="nav_tab_container">
                    <span class="title">API</span>
                    <span class="sub_title">API</span>
                  </div>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
      activeMenu: false,
    };
  },
  mounted() {
    // クッキーから isDarkMode の値を取得
    const isDarkModeCookie = this.getCookie("isDarkMode");
    if (isDarkModeCookie && isDarkModeCookie === "true") {
      this.isDarkMode = true;
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode; // 現在のモードをトグル

      // クッキーに isDarkMode の値を保存
      document.cookie = `isDarkMode=${
        this.isDarkMode
      }; expires=${this.getCookieExpiration()}; path=/`;
      // ボタンを押した後にページをリロード
      location.reload();
    },
    getCookie(name) {
      if (process.client) {
        // クライアントサイドでのみ document を使う
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
      }
      return null;
    },

    getCookieExpiration() {
      const date = new Date();
      date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000); // 30日間有効
      return date.toUTCString();
    },
    goToMyPage() {
      this.$router.push("/");
    },
    clickMenu() {
      // 真偽値を反転する => Open / Close
      this.activeMenu = !this.activeMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
/* -------------- COMMON -------------- */

/* Btn_Default_Style を無効化する */
@mixin disable_default_button_style {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

/* -------------- SECTIONS -------------- */

/* Header_全体を包み込む_Wrapper */
.mobile_header_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 64px;
  padding-top: 16px;
  vertical-align: middle;
  width: 100%;
  background-color: white;
  // 上部に固定する
  // z-index: $z-index-high;
  z-index: 998;
  position: fixed;
  top: 0;
  left: 0;
}

.mobile_header_logo_wrapper {
  cursor: pointer;
}

/* User_Icon & Menu Block_Wrapper */
.mobile_header_btn_block_wrapper {
  position: absolute;
  right: 20px;
  margin-bottom: 12px;

  /* User Icon */
  .user_icon {
    // Btn_Default_Style を無効化する
    @include disable_default_button_style;
    margin-right: 12px;
    margin-left: -15px;
  }

  /* Hamberger Icon */
  .hamberger {
    @include disable_default_button_style;
  }
}

/* ハンバーガーボタン */
.hamburger_btn {
  width: 18px;
  height: 37px;
  cursor: pointer;

  .line {
    position: absolute;
    top: 0;
    left: 20px;
    width: 25px;
    height: 2px;
    background: #333333;
    text-align: center;
  }

  .line_01 {
    top: 16px;
    transition: 0.4s ease;
  }
  .line_02 {
    top: 26px;
    transition: 0.4s ease;
  }
  .line_03 {
    top: 36px;
    transition: 0.4s ease;
  }

  /* ハンバーガー・Menu の 3つの Line */
  .btn_line01 {
    transform: translateY(10px) rotate(-45deg);
    transition: 0.4s ease;
    color: #fff;
  }
  .btn_line02 {
    transition: 0.4s ease;
    opacity: 0;
    color: #fff;
  }
  .btn_line03 {
    transform: translateY(-10px) rotate(45deg);
    transition: 0.4s ease;
    color: #fff;
  }
}

/* メニュー画面 */
.menu {
  /* background-color: rgba(197, 197, 197, 0.671); */
  background: #000000;
  /* 画面全体を覆います */
  // z-index: $z-index-highest;
  z-index: 999;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  position: fixed;
  top: 0;
  right: 0;

  /* 閉じるBtn */
  .close_btn {
    @include disable_default_button_style; // Btn_Default_Style を無効化する

    position: absolute;
    right: 20px;
  }

  li {
    list-style: none;
    line-height: 1;
  }
  ul {
    margin: 1rem;
    padding: 0;
  }
  // a {
  //   color: #fff;
  //   text-decoration: none;
  //   font-size: 1.2rem;
  //   padding: 0 2rem;
  // }

  /* Nav_Tab: 1つの項目の Container */
  .nav_tab_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #fff;

    .title {
      font-size: 22px;
      font-weight: lighter;
      color: #fff;
    }

    .sub_title {
      font-size: 12px;
      color: #fff;
      margin-bottom: 20px;
    }
  }
}

/* Fixed によって、隠れる問題の対応 */
.header_fixed_height_div {
  height: 80px;
}
</style>

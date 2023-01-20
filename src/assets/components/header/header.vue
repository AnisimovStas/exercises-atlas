<template>
  <div class="header">
    <div class="header__contentBox">
      <div class="header__contentSlot__left">
        <div class="languageSwitcher">
          <div :class="{ bounce: isActive }">
            <button
              class="languageSwitcher__button"
              @click="languageToggle()"
              :disabled="isActive"
            >
              <img
                src="./images/russia_icon.png"
                :class="{
                  languageSwitcher__language_active: isActive,
                  languageSwitcher__language_disabled: !isActive,
                }"
              />
            </button>
          </div>
          <div :class="{ bounce: !isActive }">
            <button
              class="languageSwitcher__button"
              @click="languageToggle()"
              :disabled="!isActive"
            >
              <img
                src="./images/usa_icon.png"
                :class="{
                  languageSwitcher__language_active: !isActive,
                  languageSwitcher__language_disabled: isActive,
                }"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="header__contentSlot">
        <div class="logoAndText">
          <img class="logoAndText_logo" src="./images/logo.svg" />
          <h1 class="logoAndText_text">EXERCISES ATLAS</h1>
        </div>
      </div>
      <div class="header__contentSlot__empty"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerApp",
    data() {
    return {
      isActive: true,
    };
  },
  methods: {
    languageToggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

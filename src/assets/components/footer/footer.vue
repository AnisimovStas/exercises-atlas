<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>
<template>
  <footer class="footer">
    <div class="footer__contentBox">
      <div class="footer__contentSlot__left">
        <div class="contacts">
          <p class="contacts__text">Contacts:</p>
          <menu class="list contacts__list">
            <a class="link icon__links" href="https://github.com/Feralbot/"
              >Git</a
            >

            <a class="link icon__links" href="https://t.me/otpbard">TG</a>

            <a
              class="link icon__links"
              href="mailto:anisimov-stas.stas@yandex.ru"
              >@</a
            >
          </menu>
        </div>
      </div>
      <div class="footer__contentSlot">
        <div class="title">
          <p class="title__name">EXERCISES ATLAS</p>
          <p class="title__autor">By Anisimov Stanislav</p>
          <p class="title__years">2022-2023</p>
        </div>
      </div>
      <div class="footer__contentSlot__right">
        <div class="support">
          <p class="support__text">Support:</p>
          <menu class="list support__list">
            <li class="icon list__icon">
              <a class="link icon__links">$</a>
            </li>
            <li class="icon list__icon">
              <a class="link icon__links">♥</a>
            </li>
          </menu>
        </div>
      </div>
    </div>
  </footer>
</template>

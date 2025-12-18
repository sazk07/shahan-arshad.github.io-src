import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons/faAnglesDown";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faMastodon } from "@fortawesome/free-brands-svg-icons/faMastodon";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { faBluesky } from "@fortawesome/free-brands-svg-icons/faBluesky";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";

library.add(
  faAnglesDown,
  faBluesky,
  faDiscord,
  faGithub,
  faLinkedin,
  faMastodon,
  faTwitter,
  faBars,
  faMoon,
  faSun,
  faXmark,
  faArrowUpRightFromSquare,
);

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app')

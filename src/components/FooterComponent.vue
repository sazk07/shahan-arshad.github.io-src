<script setup lang="ts">
import { name } from "@/assets/bio.json";
import SocialMediaItem from "./SocialMediaItem.vue";

let id = 0;
const asciiTable = {
  a: 97,
  b: 98,
  c: 99,
  d: 100,
  e: 101,
  f: 102,
  g: 103,
  h: 104,
  i: 105,
  j: 106,
  k: 107,
  l: 108,
  m: 109,
  n: 110,
  o: 111,
  p: 112,
  q: "113",
  r: 114,
  s: 115,
  t: 116,
  u: 117,
  v: 118,
  w: 119,
  x: 120,
  y: 121,
  z: 122,
  ":": 58,
  "@": 64,
  "/": 47,
  ".": 46,
  _: 95,
  "0": 48,
  "1": 49,
  "2": 50,
  "3": 51,
  "4": 52,
  "5": 53,
  "6": 54,
  "7": 55,
  "8": 56,
  "9": 57,
};

const link_to_vals = {
  linkedin: function () {
    return [
      asciiTable.h,
      asciiTable.t,
      asciiTable.t,
      asciiTable.p,
      asciiTable.s,
      asciiTable[":"],
      asciiTable["/"],
      asciiTable["/"],
      asciiTable.l,
      asciiTable.i,
      asciiTable.n,
      asciiTable.k,
      asciiTable.e,
      asciiTable.d,
      asciiTable.i,
      asciiTable.n,
      asciiTable["."],
      asciiTable.c,
      asciiTable.o,
      asciiTable.m,
      asciiTable["/"],
      asciiTable.i,
      asciiTable.n,
      asciiTable["/"],
      asciiTable.s,
      asciiTable.a,
      asciiTable.z,
      asciiTable.k,
    ];
  },
  github: function () {
    return [
      asciiTable.h,
      asciiTable.t,
      asciiTable.t,
      asciiTable.p,
      asciiTable.s,
      asciiTable[":"],
      asciiTable["/"],
      asciiTable["/"],
      asciiTable.g,
      asciiTable.i,
      asciiTable.t,
      asciiTable.h,
      asciiTable.u,
      asciiTable.b,
      asciiTable["."],
      asciiTable.c,
      asciiTable.o,
      asciiTable.m,
      asciiTable["/"],
      asciiTable.s,
      asciiTable.a,
      asciiTable.z,
      asciiTable.k,
      asciiTable["0"],
      asciiTable["7"],
    ];
  },
  twitter: function () {
    return [
      asciiTable.h,
      asciiTable.t,
      asciiTable.t,
      asciiTable.p,
      asciiTable.s,
      asciiTable[":"],
      asciiTable["/"],
      asciiTable["/"],
      asciiTable.x,
      asciiTable["."],
      asciiTable.c,
      asciiTable.o,
      asciiTable.m,
      asciiTable["/"],
      asciiTable.s,
      asciiTable.h,
      asciiTable.a,
      asciiTable._,
      asciiTable["2"],
      asciiTable._,
      asciiTable["5"],
      asciiTable._,
      asciiTable["6"],
    ];
  },
  mastodon: function () {
    return [
      asciiTable.h,
      asciiTable.t,
      asciiTable.t,
      asciiTable.p,
      asciiTable.s,
      asciiTable[":"],
      asciiTable["/"],
      asciiTable["/"],
      asciiTable.m,
      asciiTable.a,
      asciiTable.s,
      asciiTable.t,
      asciiTable.o,
      asciiTable.d,
      asciiTable.o,
      asciiTable.n,
      asciiTable["/"],
      asciiTable["@"],
      asciiTable.s,
      asciiTable.a,
      asciiTable.z,
      asciiTable.k,
      asciiTable["0"],
      asciiTable["7"],
    ];
  },
  bluesky: function () {
    return [
      asciiTable.h,
      asciiTable.t,
      asciiTable.t,
      asciiTable.p,
      asciiTable.s,
      asciiTable[":"],
      asciiTable["/"],
      asciiTable["/"],
      asciiTable.b,
      asciiTable.s,
      asciiTable.k,
      asciiTable.y,
      asciiTable["."],
      asciiTable.a,
      asciiTable.p,
      asciiTable.p,
      asciiTable["/"],
      asciiTable.p,
      asciiTable.r,
      asciiTable.o,
      asciiTable.f,
      asciiTable.i,
      asciiTable.l,
      asciiTable.e,
      asciiTable["/"],
      asciiTable.s,
      asciiTable.a,
      asciiTable.z,
      asciiTable.k,
      asciiTable["0"],
      asciiTable["7"],
      asciiTable["."],
      asciiTable.b,
      asciiTable.s,
      asciiTable.k,
      asciiTable.y,
      asciiTable["."],
      asciiTable.s,
      asciiTable.o,
      asciiTable.c,
      asciiTable.i,
      asciiTable.a,
      asciiTable.l,
    ];
  },
  discord: function () {
    return [
      asciiTable.h,
      asciiTable.t,
      asciiTable.t,
      asciiTable.p,
      asciiTable.s,
      asciiTable[":"],
      asciiTable["/"],
      asciiTable["/"],
      asciiTable.d,
      asciiTable.i,
      asciiTable.s,
      asciiTable.c,
      asciiTable.o,
      asciiTable.r,
      asciiTable.d,
      asciiTable["."],
      asciiTable.c,
      asciiTable.o,
      asciiTable.m,
      asciiTable["/"],
      asciiTable.u,
      asciiTable.s,
      asciiTable.e,
      asciiTable.r,
      asciiTable.s,
      asciiTable["/"],
      asciiTable["2"],
      asciiTable["1"],
      asciiTable["0"],
      asciiTable["6"],
      asciiTable["9"],
      asciiTable["5"],
      asciiTable["0"],
      asciiTable["3"],
      asciiTable["7"],
      asciiTable["8"],
      asciiTable["2"],
      asciiTable["9"],
      asciiTable["2"],
      asciiTable["5"],
      asciiTable["1"],
      asciiTable["0"],
      asciiTable["7"],
      asciiTable["2"],
    ];
  },
};

const socialMedias = [
  {
    desc: "link to LinkedIn",
    link_to: link_to_vals.linkedin(),
    id: id++,
    icon: "linkedin",
  },
  {
    desc: "link to GitHub",
    link_to: link_to_vals.github(),
    id: id++,
    icon: "github",
  },
  {
    desc: "link to Twitter",
    link_to: link_to_vals.twitter(),
    id: id++,
    icon: "twitter",
  },
  {
    desc: "link to Mastodon",
    link_to: link_to_vals.mastodon(),
    id: id++,
    icon: "mastodon",
  },
  {
    desc: "link to Bluesky",
    link_to: link_to_vals.bluesky(),
    id: id++,
    icon: "bluesky",
  },
  {
    desc: "link to Discord",
    link_to: link_to_vals.discord(),
    id: id++,
    icon: "discord",
  },
];

const contact = (function () {
  return [
    asciiTable.m,
    asciiTable.a,
    asciiTable.i,
    asciiTable.l,
    asciiTable.t,
    asciiTable.o,
    asciiTable[":"],
    asciiTable.s,
    asciiTable.h,
    asciiTable.a,
    asciiTable.h,
    asciiTable.a,
    asciiTable.n,
    asciiTable["@"],
    asciiTable.g,
    asciiTable.m,
    asciiTable.a,
    asciiTable.i,
    asciiTable.l,
    asciiTable["."],
    asciiTable.c,
    asciiTable.o,
    asciiTable.m,
  ];
})();
</script>

<template>
  <footer>
    Connect with me at:
    <address>
      <a
        :href="String.fromCharCode(...contact)"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ String.fromCharCode(...contact.slice(7)) }}
      </a>
    </address>
    <ul>
      <li v-for="socialMedia in socialMedias" :key="socialMedia.id">
        <SocialMediaItem
          :link_to="String.fromCharCode(...socialMedia.link_to)"
          :desc="socialMedia.desc"
        >
          <template #faIcon>
            <font-awesome-icon :icon="`fa-brands fa-${socialMedia.icon}`" />
          </template>
        </SocialMediaItem>
      </li>
    </ul>
    <p>
      ©
      {{ new Date().getFullYear() }}
      {{ name }}. All rights reserved.
    </p>
  </footer>
</template>

<style scoped>
footer {
  grid-area: footer;
  display: grid;
  width: var(--u-content-w);
  min-height: var(--u-footer-h);
  --no-of-gaps: 3;
  gap: calc(var(--u-footer-row-gap) / var(--no-of-gaps));
  justify-self: center;
  align-items: center;
  justify-items: center;
  text-align: center;
}

ul {
  display: grid;
  grid-auto-flow: column;
  gap: var(--u-hf-col-gap);
  list-style: none;
}

@media (width >=768px) {
  footer {
    width: var(--u-desktop-content-w);
  }
}
</style>

<script setup lang="ts">
import { inject } from "vue";
import SkillsCardComponent from "./SkillsCardComponent.vue";
import { skillsKey } from "@/assets/data.types";
import type { skillsType } from "@/assets/data.types";

const skills = inject(skillsKey) as skillsType;
</script>

<template>
  <h2><span class="highlight-color">Ski</span>lls</h2>
  <SkillsCardComponent
    :skill="skills.programmingLanguages"
    heading="Programming Languages"
  />
  <SkillsCardComponent
    :skill="skills.frameworks"
    heading="Frameworks & Libraries"
  />
  <SkillsCardComponent :skill="skills.database" heading="Databases" />
  <SkillsCardComponent
    :skill="skills.toolsAndTechnologies"
    heading="Tools & Technologies"
  />
  <SkillsCardComponent
    :skill="skills.analyticalSkills"
    heading="Analytical Skills"
  />
</template>

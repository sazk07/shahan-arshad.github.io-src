<script setup lang="ts">
import { ref } from "vue";
import CardItem from "./CardItem.vue";

defineProps<{
  workExperience: {
    id: number;
    position: string;
    employer: string;
    dateFrom: string;
    dateTo: string;
    jobDescription: string;
    projectsExecuted?: {
      id: number;
      name: string;
    }[];
    impact?: {
      id: number;
      name: string;
    }[];
  }[];
}>();

const cardStyle = ref({
  textAlign: "center",
  border: "1px solid var(--usr-clr-border)",
  borderRadius: "10px",
  padding: "0.5rem 1rem 0.5rem",
  margin: "1rem 0",
});

const ulStyle = ref({
  listStyle: "initial",
});

const listStyle = ref({
  marginLeft: "0.5rem",
  marginBottom: "0.5rem",
});
</script>

<template>
  <h2><span class="highlight-color">Wor</span>k Experience</h2>
  <CardItem v-for="work in workExperience" :key="work.id" :style="cardStyle">
    <template #heading>
      {{ work.position }}
    </template>
    <template #content>
      <h4 class="highlight-color">{{ work.employer }}</h4>
      <p>{{ work.dateFrom }} - {{ work.dateTo }}</p>
      <p>{{ work.jobDescription }}</p>
      <div class="modal-container">
        <input
          v-if="work.projectsExecuted"
          type="checkbox"
          name="modal-toggle"
          :id="`modal-toggle-${work.id}`"
          class="modal-toggle visually-hidden"
        />
        <label
          v-if="work.projectsExecuted"
          :for="`modal-toggle-${work.id}`"
          class="open-btn"
          role="button"
          tabindex="0"
          >View Details</label
        >
        <label
          :for="`modal-toggle-${work.id}`"
          class="modal-overlay"
          aria-hidden="true"
        ></label>
        <div
          class="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabindex="-1"
        >
          <div class="modal-header">
            <h3 id="modal-title" class="modal-title">Responsibilities</h3>
            <label
              :for="`modal-toggle-${work.id}`"
              class="modal-close"
              aria-label="Close modal"
            >
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </label>
          </div>
          <div class="modal-body">
            <CardItem class="panel content">
              <template #heading> Projects Completed </template>
              <template #content>
                <ul :style="ulStyle" style="text-align: start">
                  <li
                    v-for="proj in work.projectsExecuted"
                    :key="proj.id"
                    :style="listStyle"
                  >
                    {{ proj.name }}
                  </li>
                </ul>
              </template>
            </CardItem>
            <CardItem class="panel">
              <template #heading> Impact </template>
              <template #content>
                <ul :style="ulStyle" style="text-align: start">
                  <li
                    v-for="impact in work.impact"
                    :key="impact.id"
                    :style="listStyle"
                  >
                    {{ impact.name }}
                  </li>
                </ul>
              </template>
            </CardItem>
          </div>
        </div>
      </div>
    </template>
  </CardItem>
</template>

<style scoped>
article > * {
  padding-bottom: 0.5rem;
}

h2 {
  text-align: center;
}

.modal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
}

.open-btn {
  appearance: none;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  background: var(--usr-clr-background-mute);
  cursor: pointer;
  box-shadow: 0 6px 18px var(--usr-clr-boxshadow);
}

/* overlay: implemented as a label so clicking it toggles the checkbox off */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: transparent;
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.22s ease,
    visibility 0.22s;
  cursor: default;
}

/* modal */
.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) translateY(24px) scale(0.99);
  width: min(92%, 768px);
  max-height: 85vh;
  visibility: hidden;
  opacity: 0;
  overflow: auto;
  border-radius: 12px;
  box-shadow: 0 30px 80px var(--usr-clr-boxshadow);
  transition:
    opacity 0.22s ease,
    transform 0.22s cubic-bezier(0.2, 0.9, 0.2, 1),
    visibility 0.22s;
  background: linear-gradient(
    135deg,
    var(--usr-clr-background) 0%,
    var(--usr-clr-background-soft) 100%
  );
  border: 1px solid var(--usr-clr-border);
  display: grid;
  grid-template-areas:
    "head"
    "body";
  gap: 1rem;
}

/* when checkbox is checked -> show overlay and modal */
.modal-toggle:checked ~ .modal-overlay {
  background: var(--usr-clr-overlay);
  visibility: visible;
  opacity: 1;
  cursor: default;
}

.modal-toggle:checked ~ .modal {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, -50%);
}

/* modal header */
.modal-header {
  grid-area: head;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.3rem;
  border-bottom: 1px solid var(--usr-clr-border);
}

/* close control inside modal - label toggles the checkbox */
.modal-close {
  cursor: pointer;
}

.modal-close:focus {
  outline: 2px solid rgba(0, 102, 255, 0.15);
}

/* modal content area */
.modal-body {
  grid-area: body;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: start;
  padding: 0.25rem 1.25rem 1.25rem 1.25rem;
  overflow: auto;
}

.panel {
  background: linear-gradient(
    135deg,
    var(--usr-clr-background) 0%,
    var(--usr-clr-background-soft) 100%
  );
  padding: 1rem;
  border-radius: var(--u-border-radius);
  border: 1px solid var(--usr-clr-border);
}

@media (width >=768px) {
  .modal-body {
    grid-template-columns: 1fr 0.618fr;
  }
}

/* Make sure clicks inside the modal do not activate the overlay label: pointer-events */
.modal {
  pointer-events: auto;
}

/* overlay accepts click to close */
.modal-overlay {
  pointer-events: auto;
}

/* ensure overlay is below modal in stacking context */
.modal-overlay {
  z-index: var(--overlay-z);
}

.modal {
  z-index: calc(var(--overlay-z) + 1);
}
</style>

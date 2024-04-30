# DayPicker Component

```bash
npm install @serhatkaya/daypicker-vue
```

## App bootstrap

```typescript
import './assets/main.css';
import { SkDayPickerLib } from '@serhatkaya/daypicker-vue';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(SkDayPickerLib).mount('#app');
```

## Usage

```typescript
<script setup lang="ts">
import { SkDaypicker } from '@serhatkaya/daypicker-vue';
</script>

<template>
  <SkDaypicker :currentMonth="true" :quickSwipeEnabled="true" />
</template>

```

See main [documentation](https://github.com/serhatkaya/daypicker) for events & properties.

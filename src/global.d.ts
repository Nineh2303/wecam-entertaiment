declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module ".ts" {
  const component: any
  export default component;
}

// src/global.d.ts
declare module '*.css';
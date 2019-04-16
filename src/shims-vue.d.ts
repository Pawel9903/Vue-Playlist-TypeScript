declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module 'vue/types/vue' {
  interface Vue {
    $style: Readonly<Record<string, {}>>;
    // $style: {
    //  readonly [key: string]: string;
    // };
  }
}

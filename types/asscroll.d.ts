declare module '@ashthornton/asscroll' {
    interface ASScrollOptions {
      ease?: number;
      disableRaf?: boolean;
    }
  
    class ASScroll {
      constructor(options?: ASScrollOptions);
      enable(): void;
      disable(): void;
      resize(): void;
      scrollTop(value?: number): number;
    }
  
    export default ASScroll;
  }
  
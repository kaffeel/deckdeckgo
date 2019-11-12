/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DeckgoSlidePoll {
    'afterSwipe': () => Promise<void>;
    'answers': number;
    'beforeSwipe': (_enter: boolean, _reveal: boolean) => Promise<boolean>;
    'customActions': boolean;
    'customBackground': boolean;
    'hideContent': () => Promise<void>;
    'imgAlt': string;
    'imgSrc': string;
    'lazyLoadContent': () => Promise<void>;
    'link': string;
    'resizeContent': () => Promise<void>;
    'revealContent': () => Promise<void>;
  }
}

declare global {


  interface HTMLDeckgoSlidePollElement extends Components.DeckgoSlidePoll, HTMLStencilElement {}
  var HTMLDeckgoSlidePollElement: {
    prototype: HTMLDeckgoSlidePollElement;
    new (): HTMLDeckgoSlidePollElement;
  };
  interface HTMLElementTagNameMap {
    'deckgo-slide-poll': HTMLDeckgoSlidePollElement;
  }
}

declare namespace LocalJSX {
  interface DeckgoSlidePoll {
    'answers'?: number;
    'customActions'?: boolean;
    'customBackground'?: boolean;
    'imgAlt'?: string;
    'imgSrc'?: string;
    'link'?: string;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
  }

  interface IntrinsicElements {
    'deckgo-slide-poll': DeckgoSlidePoll;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'deckgo-slide-poll': LocalJSX.DeckgoSlidePoll & JSXBase.HTMLAttributes<HTMLDeckgoSlidePollElement>;
    }
  }
}



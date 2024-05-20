import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const gsapTo = (target: HTMLElement, options: Record<string, any>, start: string = '-50% center', end: string = '50% center') => {
  gsap.timeline({
    scrollTrigger: {
      trigger: target,
      scrub: 1,
      start: start,
      end: end,
    },

  }).to(target, options)
}

export const gsapFrom = (target: HTMLElement, options: Record<string, any>, start: string = '-50% center', end: string = '50% center') => {
  gsap.timeline({
    scrollTrigger: {
      trigger: target,
      scrub: 1,
      start: start,
      end: end,
    },
  }).from(target, options)
}

export const gsapFromTo = (target: HTMLElement, fromOptions: Record<string, any>, toOptions: Record<string, any>, start: string = '-50% center', end: string = '50% center') => {
  gsap.timeline({
    scrollTrigger: {
      trigger: target,
      scrub: 1,
      start: start,
      end: end,
    },

  }).fromTo(target, fromOptions, toOptions)
}


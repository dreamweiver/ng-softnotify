import { AnimationTriggerMetadata } from '@angular/animations';
/**
 * BounceInUp and BounceOutDown: (inspired by: https://daneden.github.io/animate.css/)
 */
export declare const bounceInAndOut: AnimationTriggerMetadata;
/**
 * grow or shrink when the element enters or leaves.
 */
export declare const growInShrinkOut: AnimationTriggerMetadata;
/**
 * add this trigger to an element to add a simple fade animation, sliding to and from the right when entering or leaving
 */
export declare const enterAndLeaveFromRight: AnimationTriggerMetadata;
/**
 * add this trigger to an element to add a simple fade animation, sliding to and from the left when entering or leaving
 */
export declare const enterAndLeaveFromLeft: AnimationTriggerMetadata;
/**
 * add this trigger to an element to add a simple fade animation when entering or leaving the dom
 */
export declare const fadeInAndOut: AnimationTriggerMetadata;
/**
 * swing the element when it first enters or leaves the DOM
 */
export declare const swingInAndOut: AnimationTriggerMetadata;
/**
 * Fade in, pause, then fade out
 * like a page indicator when scrolling in most PDF viewers (including ngWebViewer).
 *
 * To use, set trigger equal to a value. Whenever that value changes, the animation will run.
 */
export declare const fadeInThenOut: AnimationTriggerMetadata;

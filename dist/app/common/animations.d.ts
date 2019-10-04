import { AnimationReferenceMetadata } from '@angular/animations';
export declare const slideFadeIn: AnimationReferenceMetadata;
/**
 * fade in while sliding horizontally.
 *
 * @param time the duration of the animation
 * @param startPos the location that the element should start from before moving to its final position.
 * use a negative value to start to the left
 */
export declare function useSlideFadeInAnimation(time?: string, startPos?: string): AnimationReferenceMetadata;
export declare const slideFadeOut: AnimationReferenceMetadata;
/**
 * fade out while sliding horizontally.
 *
 * @param time the duration of the animation
 * @param endPos the amount that the element should move (horizontally) by the end of the animation.
 * Use a negative value to move left
 */
export declare function useSlideFadeOutAnimation(time?: string, endPos?: string): AnimationReferenceMetadata;
export declare const growIn: AnimationReferenceMetadata;
/**
 * start at 0px height and grow to full height without any opacity changes
 * @param time the duration of the animation
 */
export declare function useGrowInAnimation(time?: string): AnimationReferenceMetadata;
export declare const shrinkOut: AnimationReferenceMetadata;
/**
 * shrink to 0px height without any opacity changes
 * @param time the duration of the animation
 */
export declare function useShrinkOutAnimation(time?: string): AnimationReferenceMetadata;
export declare const swingIn: AnimationReferenceMetadata;
/**
 * rotate element in on the X axis as if it is hanging on a hinge.
 * @param time the duration of the animation
 */
export declare function useSwingInAnimation(time?: string): AnimationReferenceMetadata;
export declare const swingOut: AnimationReferenceMetadata;
/**
 * rotate element out on the X axis until it is facing up and invisible to the user
 * @param time the duration of the animation
 */
export declare function useSwingOutAnimation(time?: string): AnimationReferenceMetadata;
export declare const bounceInUp: AnimationReferenceMetadata;
/**
 * bounce from below
 * @param time the duration of the animation
 */
export declare function useBounceInUpAnimation(time?: string): AnimationReferenceMetadata;
export declare const bounceOutDown: AnimationReferenceMetadata;
/**
 * bounce down to the area below
 * @param time The duration of the animation
 */
export declare function useBounceOutDownAnimation(time?: string): AnimationReferenceMetadata;

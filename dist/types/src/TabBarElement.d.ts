/// <reference types="react" />
import { Animated } from "react-native";
import { Descriptor, TabNavigationState } from "@react-navigation/native";
import { IAppearanceOptions } from "./types";
interface TabBarElementProps {
    state: TabNavigationState<Record<string, object | undefined>>;
    navigation: any;
    descriptors: Record<string, Descriptor<Record<string, object | undefined>, string, TabNavigationState<Record<string, object | undefined>>, any, {}>>;
    appearance: IAppearanceOptions;
    tabBarOptions?: any;
    lazy?: boolean;
    animatedType?: "spring" | "decay" | "timing";
    animatedOptions?: Animated.TimingAnimationConfig | Animated.DecayAnimationConfig | Animated.SpringAnimationConfig;
}
declare const _default: ({ state, navigation, descriptors, appearance, tabBarOptions, lazy, animatedType, animatedOptions, }: TabBarElementProps) => JSX.Element;
/**
 * @name TabBarElement
 * React Navigation v5 custom navigation (bottom tab bar) builder with an
 * an interactive animation, and easily customisable.
 *
 * @param state Navigation state
 * @param navigation Navigation object
 * @param descriptors
 * @param appearance Object with appearance configurations (see readme)
 * @param rest
 *
 * @return function that creates the custom tab bar
 */
export default _default;

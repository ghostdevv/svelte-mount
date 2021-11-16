/** @typedef {typeof __propDef.props}  MountProps */
/** @typedef {typeof __propDef.events}  MountEvents */
/** @typedef {typeof __propDef.slots}  MountSlots */
export default class Mount extends SvelteComponentTyped<{
    mounted?: boolean | undefined;
}, {
    [evt: string]: any;
}, {
    default: {};
}> {
}
export type MountProps = typeof __propDef.props;
export type MountEvents = typeof __propDef.events;
export type MountSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        mounted?: boolean | undefined;
    };
    events: {
        [evt: string]: any;
    };
    slots: {
        default: {};
    };
};
export {};

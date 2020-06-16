export { createDocument, document } from './bom/document'
export { window } from './bom/window'
export { navigator } from './bom/navigator'
export { TaroEvent, createEvent } from './dom/event'
export { connectReactPage, createReactApp } from './dsl/react'
export { connectVuePage, createVueApp } from './dsl/vue'
export * from './dsl/instance'
export { createPageConfig, injectPageInstance, createComponentConfig, createRecursiveComponentConfig } from './dsl/common'
export { Current, getCurrentInstance } from './current'
export { TaroElement } from './dom/element'
export { TaroText } from './dom/text'
export { TaroNode } from './dom/node'
export { TaroRootElement } from './dom/root'
export { FormElement } from './dom/form'
export { Style } from './dom/style'
export * from './dsl/hooks'
export { options } from './options'
export { nextTick } from './next-tick'
export { hydrate } from './hydrate'
export * from './emitter/emitter'
export { raf as requestAnimationFrame, caf as cancelAnimationFrame, now } from './bom/raf'
export { Reconciler, CurrentReconciler } from './reconciler'

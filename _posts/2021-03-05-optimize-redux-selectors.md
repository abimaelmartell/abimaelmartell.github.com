---
layout: post
title: Optimize your Redux Selectors
tags:
- javascript
- react
- redux
---

I recently was optimizing a code base on React that was triggering a lot of re-renders, and that was causing a lot of effects, I noticed that the reason for this was poorly optimized redux selectors, so I'm going to go a little bit into detail in this post.

When using the `useSelector` hook, the component will be rendered everytime the value of this selector changes, so you could have something like this:

```typescript
// User.tsx
const { useName } = useSelector(getUser);
```

This component will be rendered when a property on that User object changes.

To this fix, create a selector that only returns userName

```ts
// selector.ts
export const getUserName = (state: AppState) => state.user.userName;

// User.tsx
const userName = useSelector(getUserName);
```

This will reduce renders on this User component


### Avoid deconstructed variables in useEffect dependencies

When adding effects to a component, we can specify dependencies that `useEffect` will use to decide when to run. So it only runs when dependencies change.

```js
const { userName } = useSelector(getUserName);

useEffect(() => {
  // a lot of things!
}, [userName])
```

The `useEffect` hook doesn't actually check the value of the variable, but the reference, and in this case `userName` is a new variable on each render, so this effect will be run always.

In our case the effect was doing a lot of things, so it was slowing down our app considerably.

Also, this applies to the other React hooks, `useCallback`, `useMemo`, etc.

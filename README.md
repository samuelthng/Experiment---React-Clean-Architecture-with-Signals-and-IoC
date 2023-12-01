# React: Clean Architecture with Signals and IoC

Version: 1.0

🔗 [CodeSandbox](https://codesandbox.io/p/github/samuelthng/react-clean-architecture/main?embed=1&file=%2FREADME.md)

This project explores using IoC together with React, and the setup required to make that happen.

- UI Library: `react`
- Router: `react-router-dom`
- State Management: `@preact/signals-react`
- Dependency Injection: `tsyringe` - although I have a bad feeling about this.
- Test Runner: `jest` + `@testing-library/react` 

## 🤦🏻‍♂️ Questions you might have:

- Q: What's your motivation?
  > **A:** The designers and business team told us to change UI libraries for a 2+ year old code base, it's an absolute nightmare. Scaling an enterprise React application is hard.

- Q: WTH so what's the point of all of this?

  > **TL;DR: True decoupling of logic from React.**
  >
  > **A:** When managing an interactive React application, you'll often find it is extremely **difficult to scale and maintain**. 
  > 
  > It will also be an absolute nightmare to deal with when   upper management says - Hey we got a new UI library,   with super complex designs, and **you do not have time to   decouple everything**. Also, hindsight is 20:20. 🤷🏻‍♂️. So I set out to find a better way
  > 
  > **Business logic should exist in a core module**, handling everything, validation, data fetching and manipulation, application state. This makes it easy to test and portable.
  > 
  > **React should only consume and trigger actions**, no   validations, not even conditional rendering of components based on **application state should be coupled to React**.
  > 
  > Which is why I am working on this. We already know how to build core libraries for decades. Lets just use established patterns, and link it up with React via `@preact/signals-react`.

- Q: Why didn't you use headless components?
  > **A:** We tried man, back during the start of the project, headless components didn't even get that name yet. Again, hindsight and eyesight are two very different beasts. 🙃

- Q: WTH, use React patterns, why do this?

   > **A:** Trust me, we tried - so this is me still trying. 🥲
   > 1. Context is unsustainable in a large application due to application performance. Oh look you manage your entire state in a useReducer in a context? Well take a look at your flamegraph, look at how hot it gets.
   > 
   > 2. Hooks is not sustainable because ain't nobody got time to tell the other teams about this new fancy hook you made to magically fetch and transform all the data you need, whilst providing data validators. All you have to do is pass these 10 variables to 10 different components through props and pray your useMemo is good enough. 
   > 
   > 3. Oh ya, have fun testing the container component. 
   > 
   > 4. What is that hear - did business want a feature only on your page in the component that everybody uses, and now you have a new prop to turn that feature off for everybody else? Welp, part of life I guess.
   > 5. Atom and Molecule concept - Sounds great, love it, it just works! Now what about the previous point? We have components that have 20 props or more, half of which are objects. 😃

- Q: WTH, why you so angry?

  > **A:** It gets tiring man. 🥲

- Q: What about redux and Zustand, MobX and other state management libraries?

  > **A:** It's not portable and too often bleeds into the kinks of React. When you get to enterprise scale, it's pretty difficult to maintain. I must say Zustand gets really close tho, working with Zustand was fun.

- Q: What about performance? Clean code on JS is known to be inefficient.

  > **A:** Everything on JS is inefficient. Besides, we ain't gonna write an online FPS game on the browser. Maintainability is more practical than nitpicking at performance at this scale. If you really need performance, just build your module in WASM and consume that.

- Q: WTH, why is there a scripts folder?

  > **A:** This project was created based on the React codesandbox template. Yes that's my justification.

- Q: WTH, why would you use static properties for classes?

   > **A:** That's an experiment man, pretend it doesn't exist. I used this project to explore the possibilities of creating a "clean architecture" styled React boilerplate.
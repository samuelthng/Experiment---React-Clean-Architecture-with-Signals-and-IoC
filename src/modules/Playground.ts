import { batch, effect, signal } from "@preact/signals-react";

const mockFetchNumber = (delay: number = 500) =>
  new Promise<number>((resolve) =>
    setTimeout(() => resolve(Math.random()), delay)
  );

const initialState = {
  someSignal: 0,
  loading: false,
  numberList: [123]
};

export default class Playground {
  private static someSignal = signal(initialState.someSignal);
  private static loading = signal(initialState.loading);

  private static numberList = signal(initialState.numberList);

  public static reset() {
    batch(() => {
      Playground.someSignal.value = initialState.someSignal;
      Playground.loading.value = initialState.loading;
      Playground.numberList.value = initialState.numberList;
    });
  }

  public static addCard() {
    // Has to be new array - changes detected by reference.
    Playground.numberList.value = [
      ...Playground.numberList.value,
      Math.random()
    ];
    effect(() => console.log(Playground.numberList.value));
  }

  public static get cards() {
    return Playground.numberList.value;
  }

  public static get value() {
    return Playground.someSignal.value;
  }

  public static increment() {
    Playground.someSignal.value++;
    return Playground.someSignal.value;
  }

  public static decrement() {
    Playground.someSignal.value--;
    return Playground.someSignal.value;
  }

  public static async random() {
    Playground.loading.value = true;
    Playground.someSignal.value = await mockFetchNumber(250);
    Playground.loading.value = false;
    return Playground.someSignal.value;
  }

  public static get isLoading() {
    return Playground.loading.value;
  }
}

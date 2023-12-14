import { makeAutoObservable } from 'mobx';

export default class Todo {
    id = Math.random();
    finished = false;
    title = "";

    constructor(title) {
        makeAutoObservable(this)
        this.title = title;
    }

    toggle = () => this.finished = !this.finished
}
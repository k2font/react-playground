# スナップショットとして機能するstate
## Reactがコンポーネントを再レンダリングするタイミング
- ユーザのボタン操作などに反応してレンダリングするわけではない
  - stateの更新をトリガーに再レンダリングされるため、マウスクリックなどのイベントが発生すると何らかのstateが更新されている
  - その更新をトリガーに再レンダリングする

## 再レンダリングされた後のstateの値
- 再レンダリングされた後、stateの値が更新される
- 逆を言えば、再レンダリング後にはレンダリング前のstateの値が使用される
- 例
```js
<button onClick={() => {
  this.setState({ count: this.state.count + 1 });
  this.setState({ count: this.state.count + 1 });
  this.setState({ count: this.state.count + 1 });
}}>+3</button>
```
- ボタンをクリックすると、`this.state.count` の値は何になるか？
  - 答えは1
  - `this.state.count === 0` のまま再レンダリングが開始されるため、3回とも `this.state.count + 1` は `1` になる
  - 再レンダリング前に新しいstateの値を使用したい場合は、State Updater関数を使用すると良い
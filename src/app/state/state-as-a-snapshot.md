# スナップショットとして機能するstate
## Reactがコンポーネントを再レンダリングするタイミング
- ユーザのボタン操作などに反応してレンダリングするわけではない
  - stateの更新をトリガーに再レンダリングされるため、マウスクリックなどのイベントが発生すると何らかのstateが更新されている
  - その更新をトリガーに再レンダリングする

## 再レンダリングされた後のstateの値
- 再レンダリングされた後、stateの値が更新される
- 逆を言えば、再レンダリング後にはレンダリング前のstateの値が使用される
- 例
```tsx
<button onClick={() => {
  setState(state + 1);
  setState(state + 1);
  setState(state + 1);
}}>+3</button>
```
- ボタンをクリックすると、`state` の値は何になるか？
  - 答えは1
  - `state === 0` のまま再レンダリングが開始されるため、3回とも `state + 1` は `1` になる
  - 再レンダリング前に新しいstateの値を使用したい場合は、State Updater関数を使用すると良い

## 更新されたstate値を用いる方法
- setter関数に無名関数を渡せば良い
```tsx
<button onClick={() => {
  setState(prevState => prevState + 1);
  setState(prevState => prevState + 1);
  setState(prevState => prevState + 1);
}}>+3</button>
```
- こうすると、prevStateの値はボタンクリックにつき3ずつ増える
- この無名関数をUpdater functionと呼ぶ
  - React公式ドキュメントいわく。
- イベントハンドラ内の他のすべてのコードが実行された後に処理されるようになる

## Updater functionの引数の命名規則
- stateのイニシャル
```tsx
<button onClick={() => {
  setLastName(ln => ln + 1);
}}>+1</button>
```

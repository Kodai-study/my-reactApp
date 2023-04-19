// SamplePage_Main.jsx と、 SideBar.jsxをまとめたメインページのコンポーネントを作成
// コンポーネントは、クラスでなく関数で作成する
import React, { Component } from 'react'
import SamplePage_SideBar from './SamplePage_SideBar'
import SamplePage_Main from './SamplePage_Main'
// 通知バッジのコンポーネントをインポート

export default class SamplePage extends Component {
  render() {
    return (
      // サイドバーとメインコンポーネントをdivタグでまとめる
      // 要素の中身が横並びになるように、divタグにstyleを設定する
      <div style={{ display: 'flex' }}>
        <SamplePage_SideBar />
        <SamplePage_Main />
      </div>
    )
  }
}

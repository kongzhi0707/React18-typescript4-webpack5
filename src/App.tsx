import React from 'react'
import '@/App.css'
import lessStyles from './app.less'
import scssStyles from './app.scss'
import stylStyles from './app.styl'
import img from '@/assets/images/1.png'
import Class from './components/Class'

function App() {
  return (
    <div>
      <h2>Hello East_White22</h2>
      <div className={lessStyles.lessBox}>
        <div className={lessStyles.box}>lessBox2223334455566</div>
      </div>
      <div className={scssStyles.scssBox}>
        <div className={scssStyles.box}>scssBox</div>
      </div>
      <div className={stylStyles.stylBox}>
        <div className={stylStyles.box}>stylBox222</div>
        <img src={img} alt='小于10kb的图片' />
        <div className={lessStyles.smallImg}>小图片背景222234412222</div>
      </div>
      <Class />
    </div>
  )
}

export default App

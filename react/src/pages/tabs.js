import React from 'react'
import asyncComponent from '../utils/asyncComponent'
//const Test = React.lazy(() => import('./Test'));   //报错，就没用React.lazy了
const Test = asyncComponent(() => import('./Test/index'));
const ButtonDemo = asyncComponent(() => import('./ButtonDemo/index'));
const IconDemo = asyncComponent(() => import('./IconDemo/index'));


const tabs = {
    submenu: <Test />,
    ButtonDemo: <ButtonDemo />,
    IconDemo: <IconDemo />
}

export default tabs
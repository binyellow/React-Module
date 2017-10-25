import {render} from 'react-dom'
import React from 'react'
import {Button,Icon} from 'antd';
import 'antd/dist/antd.css';

render(
    <div>
        <Button className="pull-left"><Icon type="user" />   <a href="http://axuebin.com">薛彬</a></Button>
    </div>,
    document.getElementById('root')
)
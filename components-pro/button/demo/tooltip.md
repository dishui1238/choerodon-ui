---
order: 8
title:
  zh-CN: 按钮文字气泡
  en-US: Tooltip
---

## zh-CN

使用 Tooltip 来显示按钮内容。


## en-US

Use Tooltip to show button text content.


````jsx
import { Button, Tooltip } from 'choerodon-ui/pro';

const App = () => {
  const [flag, setFlag] = React.useState(true);
  const handleClick = React.useCallback(() => setFlag(!flag), [flag]);
  const overflowStyle = React.useMemo(() => ({ 
    maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
  }), []);
  return (
    <>
      <Tooltip title="xxx">
        <Button tooltip="always" disabled>始终显示气泡的按钮</Button>
      </Tooltip>
      <Button tooltip="overflow" style={flag ? overflowStyle : undefined} onClick={handleClick}>
        内容超长时显示气泡&lt;点击改变样式&gt;
      </Button>
      <Button href="https://choerodon.io" target="_blank" tooltip="always" disabled>跳转按钮</Button>
    </>
  )
}

ReactDOM.render(
  <App />,
  mountNode
);
````

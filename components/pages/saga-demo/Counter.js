import { connect } from "react-redux";
import {
  Button,
  Space
} from "antd"

function Counter(props) {
  const {
    count,
    onIncrement,
    onIncrementAsync
  } = props;

  return (
    <div>
      <div>
        <span>Count: {count}</span>
      </div>
      <Space direction="vertical" wrap>
        <div>
          <Button type="primary" onClick={ onIncrementAsync }>Increment after 1 seconds</Button>
        </div>
        <div>
          <Button type="primary" onClick={ onIncrement }>Increase</Button>
        </div>
        <div>
          <Button type="primary">Decrease</Button>
        </div>
      </Space>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state
  }
}

const mapDispatchToProps = {
  onIncrement: () => ({ type: 'INCREMENT' }),
  onIncrementAsync: () => ({ type: 'INCREMENT_ASYNC'})
}

export default connect( mapStateToProps, mapDispatchToProps )(Counter);
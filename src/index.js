import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1> ReactJS</h1>
            <h2> ae da san sang chua</h2>
            <h3>chung ta cung bat dau voi react thoi ne! </h3>
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))


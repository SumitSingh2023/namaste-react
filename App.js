
let heading =
    React.createElement('div', { id: 'parent' },
        React.createElement('div', { class: 'child' }, [
            React.createElement('h2',{},'hello world'),
            React.createElement('h3',{},'hello sumit')
        ]))

let root = ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)


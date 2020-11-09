function MeuComponente1 () {
    return (
        React.createElement('div', { className: 'componente1'}, 
        React.createElement(MeuComponente2)
        )
    ) 
}

function MeuComponente2 () {
    return (
        React.createElement('div', { className: 'componente2'}, 
        React.createElement(MeuComponente3)
    )
    )
}

function MeuComponente3 () {
    const meuNome = 'Ayrton';
    return (
        React.createElement('div', { className: 'componente3' }, 
        React.createElement(MeuComponente4, { nome: meuNome })
    )
    )
}

function MeuComponente4 () {
    return React.createElement('div', { className: 'componente4' }, 
                React.createElement('p', { className: 'componenteParagraph' }, 'Componente 4')    
     )
}

function MeuComponente () {
 return React.createElement('div', { className: 'componente' },
   React.createElement(MeuComponente1)
 )
}

ReactDOM.render(
   React.createElement(MeuComponente),
   document.querySelector('#app')
)
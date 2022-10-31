### Docs para dicas de uso das rotas e Nested Routes

A nested routes é uma adição no react Route 6 e o uso é bem simples

refs: https://www.robinwieruch.de/react-router-nested-routes/

### O que é?

é uma forma de simplificar o uso de rotas dentro de uma mesma pagina, ou melhor, rotas dentro de rotas.
mas tambem podemos utilizar para renderizar um mesmo componente em todas as rotas especificas (como uma rota privada por exemplo)

### Exemplo no projeto

aqui eu resolvi usa para compatilhar o header e o sidebar em todas rotas privadas

```js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

// importação do componet que renderiza as rotas dentro dele
import PrivateContainer from "../components/PrivateContainer";

const Routers = () => {
  return (
    <Router>
      <Routes>
        //note que não tem um "path" mas poderia ter normalmente
        <Route element={<PrivateContainer />}>
          //as rotas que será renderizada fica como children (quantas rotas você
          quiser colocar)
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};
```

por dentro do component "PrivateContainer"

```js
//esse é o componet mais importante
import { Outlet } from "react-router-dom";

//componets comum que estará em todas as paginas
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, ContentSection, Main } from "./style";

const PrivateContainer = () => {
  //novamente, até essa parte é apenas um component normal do react
  return (
    <Container>
      <Header />

      <ContentSection>
        <Sidebar />

        <Main>
          //aqui está o segredo //esse componet "Outlet" renderiza os children
          baseado na rota atual (cada children tem sua propria rota e eles
          tambem podem ter outros children com "Outlet") //tudo fora do "Outlet"
          será renderizado em todas as paginas que você colocou como 'children'
          da 'PrivateContainer'
          <Outlet />
        </Main>
      </ContentSection>
    </Container>
  );
};

export default PrivateContainer;
```

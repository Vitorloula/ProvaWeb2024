# Prova de Programação Web

Este repositório contém a resolução de várias questões de uma prova de programação web. Cada questão aborda um problema específico e sua solução em React.

## Questões

### Questão 01

**Descrição:**
Esta questão envolve a criação de um componente React que exibe uma lista de itens. O componente deve permitir a adição e remoção de itens da lista.

**Como executar:**
1. Certifique-se de ter o Node.js instalado.
2. Navegue até o diretório do projeto.
3. Execute `npm install` para instalar as dependências.
4. Execute `npm start` para iniciar o servidor de desenvolvimento.

### Questão 02

**Descrição:**
Esta questão envolve a criação de um componente React que exibe um contador. O componente deve permitir incrementar e decrementar o valor do contador.

**Como executar:**
1. Certifique-se de ter o Node.js instalado.
2. Navegue até o diretório do projeto.
3. Execute `npm install` para instalar as dependências.
4. Execute `npm start` para iniciar o servidor de desenvolvimento.

### Questão 03

**Descrição:**
Esta questão envolve o uso da API `fetch` para obter dados de um serviço externo que retorna informações sobre capitais e suas populações. O componente React exibe a capital com a maior e a menor população.

**Como executar:**
1. Certifique-se de ter o Node.js instalado.
2. Navegue até o diretório do projeto.
3. Execute `npm install` para instalar as dependências.
4. Execute `npm start` para iniciar o servidor de desenvolvimento.

### Questão 04

**Descrição:**
Esta questão é uma variação da Questão 03. Em vez de acessar um serviço externo, uma `Promise` é criada para simular a obtenção dos dados. O componente React exibe a capital com a maior e a menor população.

**Como executar:**
1. Certifique-se de ter o Node.js instalado.
2. Navegue até o diretório do projeto.
3. Execute `npm install` para instalar as dependências.
4. Execute `npm start` para iniciar o servidor de desenvolvimento.

### Questão 05

**Descrição:**
Esta questão explica como o uso de Contextos no React pode resolver o problema de Props Drilling. Props Drilling ocorre quando você precisa passar dados de um componente de nível superior para um componente de nível inferior, passando por vários componentes intermediários que não precisam desses dados. O React Context API permite que você crie um "contexto" que pode ser acessado por qualquer componente em sua árvore de componentes, sem a necessidade de passar props manualmente por cada nível intermediário.

**Como funciona:**

1. **Criação do Contexto:**
   - Você cria um contexto usando `React.createContext()`. Isso cria um objeto de contexto que pode ser usado para fornecer e consumir dados.

2. **Provedor de Contexto:**
   - Você usa o componente `Provider` do contexto para envolver os componentes que precisam acessar os dados do contexto. O `Provider` aceita uma prop `value` que contém os dados que você deseja compartilhar.

3. **Consumidor de Contexto:**
   - Qualquer componente que precise acessar os dados do contexto pode usar o `Consumer` do contexto ou o hook `useContext` para obter os dados diretamente, sem a necessidade de passar props manualmente.

**Benefícios:**

- **Redução de Props Drilling:** Os componentes intermediários não precisam mais passar props que não utilizam.
- **Código Mais Limpo:** O código fica mais fácil de entender e manter.
- **Flexibilidade:** Qualquer componente na árvore pode acessar os dados do contexto sem modificações adicionais nos componentes intermediários.

## Instruções Gerais

1. Clone este repositório.
2. Navegue até o diretório do projeto.
3. Siga as instruções específicas de cada questão para executar o código.

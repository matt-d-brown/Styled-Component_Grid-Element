import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
import { Grid, GridItem } from 'styled-grid-component';

const App = () => [
  <Grid width="100%" height="100vh" templateColumns="repeat(3, 1fr)" gap="10px" autoRows="minmax(100px, auto)">
    <GridItem column="1" row="1" style={{backgroundColor:"blue"}}>
      <Hello name="Github" />
      </GridItem>
    <GridItem column="2 / 4" row="1 / 3" style={{backgroundColor:"red"}}>
      <Hello name="Google" />
    </GridItem>
    <GridItem column="1" row="2 / 5" style={{backgroundColor:"orange"}}>
      <Hello name="Facebook" />
    </GridItem>
    <GridItem column="2/3" row="3" style={{backgroundColor:"yellow"}}>
      <Hello name="Twitter" />
    </GridItem>
    <GridItem column="3" row="3" style={{backgroundColor:"grey"}}>
      <Hello name="CodeSandbox" />
    </GridItem>
    <GridItem column="2" row="4" style={{backgroundColor:"purple"}}>
      <Hello name="Apple" />
    </GridItem>
    <GridItem column="3" row="4" style={{backgroundColor:"green"}}>
      <Hello name="PP" />
    </GridItem>
  </Grid>,
]

render(<App />, document.getElementById('root'))
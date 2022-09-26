import React, { useState } from 'react'
import data from './data/data'
import Products from './components/Products'
import styled from 'styled-components'

const allCategory = ['all', ...new Set(data.map((item) => item.category))]

const TitleStyled = styled.h1`
  text-align: center;
  position: relative;
  &:after {
    content: "";
    height: 4px;
    width: 70px;
    background-color: orange;
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const CategoryStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 70px;
  margin-bottom: 100px;
  button{
    text-transform: capitalize;
  }
`


function App() {
  const [menus, setMenus] = useState(allCategory)
  const [listItem, setListItem] = useState(data)
  
  //カテゴリによって商品データの取得
  const filterItem = (category) => {
    if (category == 'all') {
      setListItem(data)
      return
    }
    const newList = data.filter(item => item.category === category)
    setListItem(newList)
  }

  return (
    <main className="App">
     <TitleStyled>Our Menu</TitleStyled>
      <CategoryStyled>
        {menus.map((menu) => (
          <button onClick={() => filterItem(menu)}>{menu}</button>
        ))}
      </CategoryStyled>
      <Products listItem={listItem} />
    </main>
  );
}

export default App;

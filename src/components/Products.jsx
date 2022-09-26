import React from 'react'
import styled from 'styled-components'

const CardStyled = styled.div`
  margin: 0 auto;
  display: grid;
  justify-content: center;
  gap: 3rem 2rem;
  .menu-item {
   display: grid;
   gap: 1rem 2rem;
   max-width: 25rem;
    .photo {
     height: 200px;
     border: 0.25rem solid orange;
     border-radius: 8px;
    }
    .content {
      .top{
       display: flex;
       justify-content: space-between;
       margin-bottom: 0.5rem;
       align-items: center;
       border-bottom: 0.5px dotted #ccc;
       padding-bottom: 6px;
        h4{
          font-size: 1rem;
          margin-bottom: 0;
        }
        p {
          margin-bottom: 0;
        }
      }
      .item-text {
        margin-bottom: 0;
        padding-top: 1rem;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .menu-item {
      grid-template-columns: 225px 1fr;
      gap: 0 1.25rem;
      max-width: 40rem;
    }
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default function Products({ listItem }) {
  return (
    <CardStyled className="section-center">
      {
        listItem.map(({ id, title, price, img, desc }) => (
          <div key={id} className="menu-item">
            <div className="photo" >
              <img src={img} />
            </div>
            <div className="content item-info">
              <div className="top">
                <h4>{title}</h4>
                <p>{price}</p>
              </div>
              <p className="bottom item-text">{desc}</p>
            </div>
          </div>
        ))
      }
      </CardStyled>
  )
}

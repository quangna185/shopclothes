import React from 'react'
import products from '../assets/fake-data/products';
import Grid from '../components/Grid';
import Helmet from '../components/Helmet'
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import category from '../assets/fake-data/category';
import CheckBox from '../components/CheckBox';
import colors from '../assets/fake-data/product-color';
import size from '../assets/fake-data/product-size';
const Catalog = () => {
  return (
    <Helmet title="Sản phẩm ">
        <div className="catalog">
            <div className="catalog__filter">
              <div className="catalog__filter__widget">
                <div className="catalog__filter__widget__title">
                    Danh muc san pham
                </div>
                
                <div className="catalog__filter__widget__content">
                  {
                    category.map((item ,index)=>(
                      <div className="catalog__filter__widget__content__item" key={index}>
                          <CheckBox label={item.display}/>
                          </div>
                    ))
                  }
                </div>
              </div>
              <div className="catalog__filter__widget">
                <div className="catalog__filter__widget__title">
                    Danh muc mau sac
                </div>
                
                <div className="catalog__filter__widget__content">
                  {
                    colors.map((item ,index)=>(
                      <div className="catalog__filter__widget__content__item" key={index}>
                          <CheckBox label={item.display}/>
                          </div>
                    ))
                  }
                </div>
              </div>
              <div className="catalog__filter__widget">
                <div className="catalog__filter__widget__title">
                    Danh muc kich co
                </div>
                
                <div className="catalog__filter__widget__content">
                  {
                    size.map((item ,index)=>(
                      <div className="catalog__filter__widget__content__item" key={index}>
                          <CheckBox label={item.display}/>
                          </div>
                    ))
                  }
                </div>
              </div>
        
            </div>
            <div className="catalog__content">
                <Grid
                  col={3}
                  mdCol={2}
                  smCol={1}
                  gap={20}>
                    {
                          products.map((item, index) => <Link key={index} to="/products">
                              <ProductCard
                                   img01={item.image01}
                                   img02={item.image02}
                                   name={item.title}
                                   price={item.price}
                                   slug={item.slug}
                              />
                          </Link>)
                      }
                     
                </Grid>
            </div>
        </div>
    </Helmet>
  )
}
export default Catalog;
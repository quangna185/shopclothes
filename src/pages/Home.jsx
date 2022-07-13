import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'
import ProductCard from '../components/ProductCard'
import Grid from '../components/Grid'
import products from '../assets/fake-data/products'

const Home = () => {
    return (
        <Helmet title="Trang chủ">
            
            <HeroSlider
                data={heroSliderData}  
                control={true}
                auto={false}
                timeOut={5000}
            />
            <Section>
                <SectionBody>
                <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => <Link key={index} to="/policy">
                                <PolicyCard
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>

            <Section>
                <SectionTitle>
                    top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            products.map((item, index) => <Link key={index} to="/products">
                                <ProductCard
                                     img01={item.image01}
                                     img02={item.image02}
                                     name={item.name}
                                     price={item.price}
                                     slug={item.slug}
                                />
                            </Link>)
                        }
                        {/* {
                            productData.getProducts(4).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.name}
                                    price={item.price}
                                    slug={item.slug}
                                />
                            ))
                        } */}
                    </Grid>
                </SectionBody>
            </Section>
        
        </Helmet>
    )
}

export default Home

import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import Img from 'gatsby-image'





export default class Bundlecart extends Component {
    constructor(props){
        super(props)
        this.state={
            courses:this.props.bundles.edges,
            mycourses:this.props.bundles.edges,
            

        }

    }

    
    render() {
        console.log(this.state.courses)
        return (
            <section className="py-5 ">
                <div className="container">
                    <Heading title="Bundles" />
                    
                    <div className="row">
                        {
                            this.state.mycourses.map(({node})=>{
                                 return(
                                     <div 
                                     key={node.id} className="col-11 col-md-6 d-flex mx-auto">
                                        <Img fixed={node.image.fixed}/>
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0">{node.title}</h6>
                                                <h6 className="mb-0 text-success">{node.price}</h6>
                                          </div>
                                          <button 
                                          data-item-id={node.id}
                                          data-item-price={node.price}
                                          data-item-url="https://vigilant-dijkstra-65039f.netlify.app/"
                                          data-item-image={node.image.fixed}
                                          data-item-name={node.title}
                                          className="btn btn-warning snipcart-add-item">Join Now</button>
                                          </div>      

                                     </div>
                                 )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

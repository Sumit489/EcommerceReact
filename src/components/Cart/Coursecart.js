import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import Img from 'gatsby-image'
export default class Coursecart extends Component {
    constructor(props){
        super(props)
        this.state={
            courses:this.props.courses.edges,
            mycourses:this.props.courses.edges,

        }

    }
    render() {
        console.log(this.state.courses)
        return (
            <section className="py-5 ">
                <div className="container">
                    <Heading title="Courses" />
                    <div className="row">
                        {
                            this.state.mycourses.map(({node})=>{
                                 return(
                                     <div 
                                     key={node.id} className="col-11 col-md-6 d-flex my-3 mx-auto">
                                        <Img fixed={node.image.fixed}/>
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0">{node.title}</h6>
                                                <h6 className="mb-0 text-success">{node.price}</h6>
                                          </div>
                                          <p className="text-muted">
                                                <small>{node.description.description}</small>
                                          </p>
                                          <button 
                                          data-item-id={node.id}
                                          data-item-price={node.price}
                                          data-item-url="https://learncodeonline.in"
                                          data-item-image={node.image.fixed.src}
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

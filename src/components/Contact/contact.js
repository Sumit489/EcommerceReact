import React from 'react'
import Heading from '../Reusable/Heading'

export default function Contact() {
    return (
        <section className="py-3 ">
            <Heading title="Contact Us"/>
            <div className="col-sm-8 mx-auto">
                <form action="https://formspree.io/xdolqpkn" method="post">
                    <div className="form-group">
                        <input className="form-control" type="text" name="name" id="name" placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="email" name="email" id="email" placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="mobile" id="mobile" placeholder="Your Mobile"/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" type="description" name="description" id="description" placeholder="Your Message"/>
                    </div>
                    <button className="btn btn-outline btn-block btn-info   " type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

"use client"
import React from 'react'
import { InlineWidget } from 'react-calendly'


const BookingSection = () => {


    return (
        <div>
            <InlineWidget url={"https://calendly.com/ezevictornkemjika/30min"} />

            {/* <div class="calendly-inline-widget" data-url="https://calendly.com/ezevictornkemjika/30min?text_color=ffffff&primary_color=216cd6" style="min-width:320px;height:700px;"></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}

        </div>
    )
}

export default BookingSection

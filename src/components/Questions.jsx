import React from 'react'

const Questions = () => {
    return (
        <div className='py-24 space-y-4 lg:w-2/3 mx-auto'>
            <h1 className='text-center text-4xl mb-4'>Frequently Asked Questions</h1>
            <div className="collapse collapse-arrow bg-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">How long will the project take?</div>
                <div className="collapse-content">
                    <p>
                        We provide a clear timeline upfront and keep you updated throughout the project.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">What if the weather affects the work?</div>
                <div className="collapse-content">
                    <p>
                        For exterior projects, we monitor the weather and adjust the schedule if needed to maintain quality.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">Will there be a mess during or after the project?</div>
                <div className="collapse-content">
                    <p>
                        We take care to protect your property with coverings for furniture and floors, and we clean up thoroughly when we’re done.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">Can you help me choose colors?</div>
                <div className="collapse-content">
                    <p>
                        Yes! We’re happy to assist with color selection and provide samples to help you decide.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">Do you handle repairs before painting?</div>
                <div className="collapse-content">
                    <p>
                        We can take care of minor surface repairs like patching small holes or cracks to ensure a smooth finish.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">How much will it cost?</div>
                <div className="collapse-content">
                    <p>
                        We offer free, detailed estimates so you know exactly what to expect with no surprises.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">Will my home or business be disrupted?</div>
                <div className="collapse-content">
                    <p>
                        We work efficiently and aim to minimize any impact on your daily routine or business operations.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">What kind of paint do you use?</div>
                <div className="collapse-content">
                    <p>
                        We use high-quality paints and offer options tailored to your project, including eco-friendly choices.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Questions
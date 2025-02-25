import React from 'react'

function Dmca() {
    return (
        <div className="p-4 mt-5 sm:ml-56">
            <div className="container mx-auto my-5 lg:my-10">
                <div className="bg-gray-50 dark:bg-gray-400 h-full p-10 rounded-lg">
                    <h1 className="text-2xl font-bold mb-4">DMCA Notice</h1>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Copyright Notice</h2>
                        <p>
                            At <strong>TheGameZone.fun</strong>, we respect the intellectual property rights of others. If you believe that any content on our website infringes upon your copyright, please contact us immediately.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                        <p>
                            To report copyright infringement, please email us at: <a href="mailto:info@thegamezone.fun" className="text-blue-500 hover:underline">info@thegamezone.fun</a>
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Take Down Process</h2>
                        <p>
                            To file a DMCA takedown notice, please provide the following information:
                        </p>
                        <ul className="list-disc list-inside ml-4">
                            <li>A description of the copyrighted work you claim has been infringed.</li>
                            <li>A description of where the material you claim is infringing is located on our website.</li>
                            <li>Your contact information, including your address, telephone number, and email address.</li>
                            <li>A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law.</li>
                            <li>A statement, under penalty of perjury, that the information you provided is accurate and that you are the copyright owner or authorized to act on their behalf.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Counter-Notice Procedure</h2>
                        <p>
                            If you believe that your content was removed in error, you may file a counter-notice. To do so, please provide:
                        </p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Your contact information.</li>
                            <li>A description of the material that was removed.</li>
                            <li>A statement under penalty of perjury that you have a good faith belief that the material was removed as a result of a mistake or misidentification.</li>
                            <li>Your consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located, or if your address is outside of the United States, the judicial district in which TheGameZone.fun is located.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Dmca
import React from 'react'

const Cg = () => {
    return (
        // <div>
        <div className="bg-white  text-cyan-950">
            <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1> */}
                <div className="bg-white p-6 shadow rounded  h-[730px]">

                    <div className='flex mb-5'>
                        <div className='justify-center'>
                            <h1 className="text-2xl font-bold mb-6 mt-2 text-cyan-950">Community Guidlines</h1>
                            <p className="text-cyan-950 mb-4 mr-2">Let's keep it friendly: Our community policies</p>
                        </div>

                        <div>
                            <img className=' sm:pl-0 md:pl-14 lg:pl-20 xl:pl-20 2xl:pl-20' src="https://i.imgur.com/sXw2ON6.png" alt="image" />
                        </div>
                    </div>
                    <hr />
                    <div className='overflow-y-scroll h-[74%] no-scrollbar mt-6'>
                        <p className="mb-6">
                        ZealYug is committed to providing a safe and positive community for all its users. To ensure a respectful and inclusive environment, we have established strict community guidelines that all users must abide by:
                        </p>

                        <span className="mb-6">
                            <ol className='list-decimal px-8'>
                                <li className='mb-4'>
                                Respectful Communication <span className='font-bold'>:</span> Users must communicate with each other in a respectful and civil manner. Hate speech, personal attacks, and discriminatory language will not be tolerated
                                </li>
                                
                                <li className='mb-4'>
                                Authenticity and Honesty<span className='font-bold'>:</span>  Users must provide accurate and truthful information on their profiles and in their interactions with others on the platform. Misrepresentation or false claims may result in account suspension.tolerated
                                </li>
                                
                                <li className='mb-4'>
                                No Spam or Fraudulent Activity <span className='font-bold'>:</span>  Users must not engage in any spamming or fraudulent activity, including but not limited to phishing, spamming, and other scams.
                                </li>
                                
                                <li className='mb-4'>
                                Compliance with Laws <span className='font-bold'>:</span>  Users must comply with all applicable laws and regulations while using the platform, including but not limited to data privacy laws and intellectual property laws.
                                </li>
                                
                                <li className='mb-4'>
                                Reporting and Enforcement <span className='font-bold'>:</span> Users are encouraged to report any violations of these community guidelines to ZealYug. We reserve the right to take action, including account suspension or termination, against any user found to be in violation of these guidelines.
                                </li>
                                
                            </ol>
                        </span>
                        
                        <p className='mb-4 font-bold'>Payment and Fees</p>
                        <p className="mb-10">
                        ZealYug users, including employers/recruiters and users/candidates, may be required to pay applicable charges, fees, duties, taxes, levies, and assessments for the use of the platform and its services. All the transaction are conducted only from our official site <a className='underline' href=" zealyug.com "> zealyug.com </a> and app. The prices and fees may be subject to change in the future as required, without prior notice. Users are responsible for reviewing and understanding the applicable charges and fees associated with their usage of ZealYug's platform and services.
                        </p>

                        <p className='mb-4 font-bold'>Mode of Our Service</p>
                        <p className="mb-10">
                        ZealYug provides online services only, with no physical services offered. All transactions details and communication regarding the services will be conducted via email, and support will be provided online by our expert team.
                        </p>

                        <p className='mb-4 font-bold'>ZealYug Cancel/Refund Policy</p>
                        <p className="mb-10">
                        ZealYug's cancel/refund policy states that all sales/purchase of services are final with no refund or exchange permitted. However, if you have been charged for a transaction on the site without receiving the services, you can inform ZealYug by sending an email to support@zealyug.com or the email address mentioned on the Contact Us page. ZealYug will investigate the incident, and if it is confirmed that money was charged without the delivery of the service, a refund will be processed within 8 to 14 working days from the date of receipt of your email. The refund will be credited back to the source of payment after deducting service charges and taxes (if applicable), and it may take 3-5 days for the money to reflect in your bank account based on your bank's policy.
                        </p>


                        <p className="mb-4">
                            UBy using ZealYug, users agree to abide by these community guidelines and acknowledge that failure to do so may result in account suspension or termination.Polic
                        </p>

                        
                    </div>

                </div>
                
            </div>
        </div>
        // </div>
    )
}

export default Cg
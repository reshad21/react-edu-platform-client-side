import React from 'react';

export const Faq = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="70326c9b-4a0f-429b-9c76-792941e326d5"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">The</span>
                        </span>{' '}
                        quick, brown fox jumps over a lazy dog
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl sm:mx-auto">
                <div className="">
                    <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-3">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What are the technology requirements to take an online course??
                            </p>
                            <p className="">
                                You will need a computer, a high speed Internet connection, a newer version of a web browser, and access to common tools and software like word processors, email, etc. Some courses may have other software or technology requirements as well.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What are the admission requirements for Online Learning courses?
                            </p>
                            <p className="">
                                The Online Learning program currently operates in semesters and each online course carries between two and four semester credits. Registration begins when the course offerings are listed on the Online Learning website and continues until the first day of classes or the course is full. Please carefully read through the registration section for your student status before you register:

                                <ol>
                                    <li>High school program (PSEO) registration</li>
                                    <li>Student from another U of M campus registration</li>
                                    <li>Non-University of Minnesota student registration</li>
                                    <li>Current Morris student registration</li>
                                </ol>
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Is it possible to earn a degree through the Online Learning pro!?
                            </p>
                            <p className="">
                                Yes it is possible
                            </p>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <p className="mb-4 text-xl font-medium">
                                    How do I contact my course instructor??
                                </p>
                                <p className="">
                                    Instructors stay in touch with their Online Learning students in a variety of ways, depending on the course design. Your instructor will explain the best way to reach him or her within the course home pages. You may communicate with your instructor through discussion groups, bulletin boards, chat rooms, assignment submissions, through email, or by telephone.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <p className="mb-4 text-xl font-medium">
                                    What if the course I want to take is not available?
                                </p>
                                <p className="">
                                    Courses currently available through the Online Learning program are listed at course offerings. Other online courses are available
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <p className="mb-4 text-xl font-medium">
                                    What happens if I don’t finish the course?
                                </p>
                                <p className="">
                                    If you do not finish the course during the semester enrollment period, and if you do not request an incomplete, the course will appear on your transcript with the grade of N (not completed), or a letter grade that reflects your course participation. You must officially drop from a course by the necessary deadline in order to remove the course from your transcript. You may also cancel the course and receive a “W” on your transcript and a tuition refund if you meet the refund deadlines for the semester.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
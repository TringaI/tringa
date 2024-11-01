import React from 'react'

function Activities() {
    return (
        <div className='w-full flex flex-col justify-center items-center mt-40'>
            <h1 className='composebold activities-main-title'>OTHER ACTIVITIES</h1>
            <div className='w-[80%]'>
                <hr />
                <div className="grid grid-cols-12 gap-10 mt-10">
                    <div className="col-span-12 lg:col-span-6 activities-containers">
                        <h1 className="activities-titles">Coding Club</h1>
                        <p className="activities-p codec ">
                            Established the coding club at "Xhevdet Doda" High School and organized it into
                            three distinct sections: staff, tutors, and students. The staff oversaw all club activities,
                            ensuring smooth operation, while the tutors dedicated themselves to instructing students in
                            various programming languages.
                        </p>
                    </div>


                    <div className="col-span-12 lg:col-span-6 activities-containers">
                        <h1 className="activities-titles">Chess Club</h1>
                        <p className="activities-p codec ">
                            Established the chess club at "Xhevdet Doda" High School, providing guidance to novice chess players
                            and organizing diverse activities. Collaborating
                            with the team, we achieved a notable accomplishment by securing the
                            3rd place at the "Regional Chess Team Competition" for high schools.
                        </p>
                    </div>


                    <div className="col-span-12 lg:col-span-6 activities-containers">
                        <h1 className="activities-titles">Music</h1>
                        <p className="activities-p codec ">
                            Completed a comprehensive <b className='composebold'>9</b>-year program at the Elementary Music School, initiating studies at "Lorenc Antoni" in Prizren and later continuing to the public music school "Prenk Jakova" in Pristina. Participated in various musical programs throughout elementary and high school.
                            Additionally, alongside the primary instrument curriculum in public schools, I undertook a dedicated guitar course.
                        </p>
                    </div>


                    <div className="col-span-12 lg:col-span-6 activities-containers">
                        <h1 className="activities-titles">KosCare</h1>
                        <p className="activities-p codec ">
                            Created "Koscare," a platform dedicated to ending poverty. Through our website, individuals can contribute directly, and we also generate funds through various activities and the sale of handmade items.
                        </p>
                    </div>

                    <div className="col-span-12 lg:col-span-6 activities-containers">
                        <h1 className="activities-titles">Exchange Programs</h1>
                        <p className="activities-p codec ">

                            Engaged in diverse online exchange programs, prominently featuring "LATW Regional Representatives" and "Youth Diplomats."
                        </p>
                    </div>


                    <div className="col-span-12 lg:col-span-6 activities-containers">
                        <h1 className="activities-titles">Other Clubs</h1>
                        <p className="activities-p codec ">
                            Throughout my student life, I actively participated in a variety of clubs, including Robotics, Technology, Mediation, Mathematics, Acting, Physics, and the Debate Club.
                        </p>
                    </div>

                    <div className="col-span-12 lg:col-span-6 activities-containers">
                        <h1 className="activities-titles">Sports</h1>
                        <p className="activities-p codec ">
                            Initiated my basketball journey at the age of <b className='composebold'>8</b>, dedicating eight years to the sport and participating in the state junior championship. Simultaneously, I developed an interest in karate, commencing practice in first grade and concluding in the fifth grade, achieving success with a total of 13 medals in various competitions and 20+ certificates.
                        </p>
                    </div>

                    <div className="col-span-12 lg:col-span-6 activities-containers">
                        <h1 className="activities-titles">Other Engagements</h1>
                        <p className="activities-p codec ">
                            Engaged in diverse volunteering and environmental programs, notably contributing to "Mendo per token." Joined "Prishtina Hacker Space," actively participating in various activities and attending tech conferences. Also appointed as an ambassador at "Engineering Her Future" and volunteered as a tutor at the "House of STEM.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activities
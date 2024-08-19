import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SectionHeader from './SectionHeader'
import SectionBody from './Sectionbody'
import CourseCard from './CourseCard'
import style from './Card-style.module.css'

const CoursesPage = () => {
    const [count, setCount] = useState(0)
    return (
        <div className={style.page}>
        <SectionHeader> 
            <h2 style={{fontSize: '24px',textAlign: 'center'}}>Explore Our Courses</h2>
        </SectionHeader>
        <SectionBody>
        <CourseCard 
        name="Advanced JavaScript" 
        imageSrc={reactLogo} 
        description="Dive deep into advanced JavaScript concepts, including closures, promises, and async/await." 
        />
        <CourseCard
        name="React Development"
        imageSrc={viteLogo}
        description="Learn how to build fast, interactive web applications with React, a popular JavaScript library."
        />
        <CourseCard
        imageSrc={reactLogo}
        name="Build Your First Website"
        description="Create a simple website using HTML, CSS, and JavaScript. No prior experience required!"
        />
        <CourseCard
        name="Build Your First Website"
        imageSrc={viteLogo}
        description="Create a simple website using HTML, CSS, and JavaScript. No prior experience required!"
        />
        </SectionBody>
        </div>
    )
    }

export default CoursesPage
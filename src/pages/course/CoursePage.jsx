import React, { useState } from 'react';
import LessonNavigation from './components/LessonNavigation';
import SidebarMenu from './components/SideBarMenu';
import Quiz from './components/Quiz';

const courseData = {
  title: "Introduction to Programming",
  description: "A beginner's course on programming fundamentals.",
  category: "Programming",
  difficultyLevel: "Beginner",
  modules: [
    {
      title: "Module 1: Basics",
      lessons: [
        {
          title: "Lesson 1: What is Programming?",
          content: "<p>Programming is the process of creating a set of instructions that tell a computer how to perform a task...</p>",
        },
        {
          title: "Lesson 2: Programming Languages",
          content: "<p>A programming language is a formal language<b> comprising a set of instructions that produce various kinds of output...</p>",
        },
      ],
      quiz: {
        title: "Quiz 1: Basics",
        questions: [
          {
            text: "What is programming?",
            type: "Multiple Choice",
            options: ["A set of instructions for a computer", "A type of computer", "A programming language", "None of the above"],
            correctAnswer: "A set of instructions for a computer",
          },
        ],
      },
    },
    {
      title: "Module 2: Advanced Basics",
      lessons: [
        {
          title: "Lesson 1: Variables and Data Types",
          content: "<p>Variables are used to store data, and data types specify the type of data that can be stored...</p>",
        },
        {
          title: "Lesson 2: Control Structures",
          content: "<p>Control structures are constructs that allow you to dictate the flow of execution of the code...</p>",
        },
      ],
      quiz: {
        title: "Quiz 2: Advanced Basics",
        questions: [
          {
            text: "What are variables used for?",
            type: "Multiple Choice",
            options: ["To store data", "To control the flow of a program", "To define functions", "None of the above"],
            correctAnswer: "To store data",
          },
        ],
      },
    },
  ],
};

const CoursePage = () => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isQuiz, setIsQuiz] = useState(false);

  const currentModule = courseData.modules[currentModuleIndex];
  const currentLesson = currentModule.lessons[currentLessonIndex];

  const handleNextLesson = () => {
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      setIsQuiz(false);
    } else if (currentModuleIndex < courseData.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentLessonIndex(0);
      setIsQuiz(false);
    } else {
      setIsQuiz(true);
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      setIsQuiz(false);
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentLessonIndex(courseData.modules[currentModuleIndex - 1].lessons.length - 1);
      setIsQuiz(false);
    }
  };

  const handleSelectLesson = (moduleIndex, lessonIndex) => {
    setCurrentModuleIndex(moduleIndex);
    setCurrentLessonIndex(lessonIndex);
    setIsQuiz(false);
  };

  const handleSelectQuiz = (moduleIndex) => {
    setCurrentModuleIndex(moduleIndex);
    setIsQuiz(true);
  };

  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div className="py-24 flex max-w-6xl mx-auto">
        <SidebarMenu
          modules={courseData.modules}
          currentModuleIndex={currentModuleIndex}
          currentLessonIndex={currentLessonIndex}
          onSelectLesson={handleSelectLesson}
          onSelectQuiz={handleSelectQuiz}
          isQuiz={isQuiz}
        />
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
          <h2 className="text-xl font-bold mb-4">{currentModule.title}</h2>
          {isQuiz ? (
            <Quiz quiz={currentModule.quiz} />
          ) : (
            <>
              <h2 className="text-2xl mb-2">{currentLesson.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: currentLesson.content }} className="prose lg:prose-xl"></div>
            </>
          )}
          <LessonNavigation
            onNext={handleNextLesson}
            onPrev={handlePrevLesson}
            disablePrev={currentModuleIndex === 0 && currentLessonIndex === 0}
            disableNext={currentModuleIndex === courseData.modules.length - 1 && currentLessonIndex === currentModule.lessons.length - 1 && isQuiz}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
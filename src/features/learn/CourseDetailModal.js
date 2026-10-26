import React, { useState, useRef, useEffect } from 'react';
import { Modal } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLocalizedCourses, useLocalizedCourseContent } from '../../content/useLocalizedData';
import { useStats } from '../progress/StatsContext';
import { useUser } from '../auth/UserContext';
import { getUserScopedKey, COURSE_PROGRESS_KEY } from '../auth/userStorage';
import { useTheme } from '../../shared/theme/ThemeContext';
import { showAlert } from '../../shared/ui';
import CourseOverview from './course/CourseOverview';
import LessonViewer from './course/LessonViewer';
import { loadCourseProgress, saveCourseProgress } from './course/courseProgress';

// A course in a sheet: first its overview, then (after "Start" / "Continue") the lessons.
// This component owns the state and the progress; what is drawn lives in ./course/.
export default function CourseDetailModal({ visible, course, onClose, onProgressChange }) {
  const { t } = useTranslation();
  const { categories, difficultyLevels } = useLocalizedCourses();
  const { courseContents } = useLocalizedCourseContent();
  const { recordCourseCompleted } = useStats();
  const { user } = useUser();
  const { colors } = useTheme();
  // Course progress is per user so it never leaks between accounts on a shared device
  const progressKey = getUserScopedKey(COURSE_PROGRESS_KEY, user?.id);
  const [completing, setCompleting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Lesson viewer state
  const [currentLesson, setCurrentLesson] = useState(0);
  const [expandedPractice, setExpandedPractice] = useState({});
  const [courseCompleted, setCourseCompleted] = useState(false);
  const [savedLesson, setSavedLesson] = useState(null);
  const [showResumeMessage, setShowResumeMessage] = useState(false);
  const scrollRef = useRef(null);
  const lessonNavRef = useRef(null);

  // Load saved progress when the modal opens; reset everything when it closes
  useEffect(() => {
    if (visible && course) {
      loadCourseProgress(progressKey, course.id).then((saved) => {
        if (saved !== null) setSavedLesson(saved);
      });
    }
    if (!visible) {
      setShowContent(false);
      setCurrentLesson(0);
      setExpandedPractice({});
      setCourseCompleted(false);
      setSavedLesson(null);
      setShowResumeMessage(false);
      setCompleting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, course, progressKey]);

  if (!course) return null;

  const category = categories.find(cat => cat.id === course.category);
  const difficulty = difficultyLevels[course.difficulty];
  const lessons = courseContents[course.id]?.lessons || [];
  // Category colour is the accent for the hero icon, lesson tabs, bullets and the Next button
  const tint = category?.color || colors.primary;

  const persistProgress = async (lessonIndex) => {
    if (await saveCourseProgress(progressKey, course.id, lessonIndex)) {
      onProgressChange?.(course.id, lessonIndex);
    }
  };

  const handleStartCourse = () => {
    if (savedLesson !== null && savedLesson > 0) {
      setCurrentLesson(savedLesson);
      setShowContent(true);
      setShowResumeMessage(true);
      setTimeout(() => setShowResumeMessage(false), 5000);
      // Scroll lesson nav to the saved lesson tab
      setTimeout(() => {
        lessonNavRef.current?.scrollTo({ x: savedLesson * 48, animated: true });
      }, 200);
    } else {
      setShowContent(true);
    }
  };

  const handleBackFromContent = () => {
    setShowContent(false);
    setCurrentLesson(0);
    setExpandedPractice({});
  };

  const handleLessonChange = (index) => {
    setCurrentLesson(index);
    setExpandedPractice({});
    scrollRef.current?.scrollTo({ y: 0, animated: true });
    lessonNavRef.current?.scrollTo({ x: index * 48, animated: true });
    // Keep the in-memory resume point in sync so "Continue" reopens the latest lesson
    setSavedLesson(index > 0 ? index : null);
    persistProgress(index);
  };

  const handleCompleteCourse = async () => {
    if (completing || courseCompleted) return;
    // Optimistic: the button reacts the instant it is tapped; the save runs behind it
    setCompleting(true);
    setCourseCompleted(true);
    const ok = await recordCourseCompleted(course.id, course.title);
    setCompleting(false);
    if (!ok) {
      setCourseCompleted(false);
      showAlert(t('common.error'), t('courseContent.completeError'));
      return;
    }
    const title = course.title;
    // Close the course modal immediately, then show success alert
    onClose();
    setTimeout(() => {
      showAlert(t('courseContent.courseCompleted'), t('courseContent.courseCompletedMessage', { title }));
    }, 300);
  };

  const togglePractice = (index) => {
    setExpandedPractice(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle={showContent ? 'fullScreen' : 'pageSheet'}
      onRequestClose={showContent ? handleBackFromContent : onClose}
    >
      {showContent ? (
        <LessonViewer
          course={course}
          difficulty={difficulty}
          lessons={lessons}
          currentLesson={currentLesson}
          tint={tint}
          expandedPractice={expandedPractice}
          showResumeMessage={showResumeMessage}
          completing={completing}
          courseCompleted={courseCompleted}
          scrollRef={scrollRef}
          lessonNavRef={lessonNavRef}
          onBack={handleBackFromContent}
          onLessonChange={handleLessonChange}
          onTogglePractice={togglePractice}
          onComplete={handleCompleteCourse}
        />
      ) : (
        <CourseOverview
          course={course}
          category={category}
          difficulty={difficulty}
          tint={tint}
          resumeLesson={savedLesson}
          onClose={onClose}
          onStart={handleStartCourse}
        />
      )}
    </Modal>
  );
}

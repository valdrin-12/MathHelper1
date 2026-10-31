CREATE TABLE IF NOT EXISTS completed_courses (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_id     VARCHAR(100) NOT NULL,
  title         VARCHAR(255) NOT NULL,
  completed_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

CREATE TABLE IF NOT EXISTS completed_quizzes (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  quiz_id       VARCHAR(100) NOT NULL,
  title         VARCHAR(255) NOT NULL,
  score         INT NOT NULL,
  total         INT NOT NULL,
  percentage    INT NOT NULL,
  completed_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS daily_activity (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  activity_date DATE NOT NULL,
  problems      INT DEFAULT 0,
  courses       INT DEFAULT 0,
  quizzes       INT DEFAULT 0,
  UNIQUE(user_id, activity_date)
);

CREATE TABLE IF NOT EXISTS user_streaks (
  user_id         UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  current_streak  INT DEFAULT 0,
  longest_streak  INT DEFAULT 0,
  last_active_date DATE
);

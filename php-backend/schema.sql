-- SkillForge / Skill AI India — MySQL schema
-- Import once:  mysql -u USER -p DBNAME < schema.sql
-- Or paste into phpMyAdmin > SQL tab.

SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS applications (
  id            BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  form_type     VARCHAR(60)  NOT NULL,            -- workshop | ug-program | advanced-data-science | ...
  program       VARCHAR(160) NULL,                -- which course/program they applied for
  name          VARCHAR(120) NOT NULL,
  email         VARCHAR(180) NOT NULL,
  phone         VARCHAR(40)  NOT NULL,
  city          VARCHAR(120) NULL,
  college       VARCHAR(160) NULL,
  education     VARCHAR(160) NULL,
  role          VARCHAR(120) NULL,
  experience    VARCHAR(60)  NULL,
  goal          TEXT         NULL,
  extra         JSON         NULL,                -- any additional per-form fields
  source_page   VARCHAR(255) NULL,
  ip_address    VARCHAR(45)  NULL,
  user_agent    VARCHAR(255) NULL,
  created_at    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_form_type (form_type),
  KEY idx_created_at (created_at),
  KEY idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS future_scores (
  id            BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name          VARCHAR(120) NOT NULL,
  college       VARCHAR(160) NULL,
  contact       VARCHAR(40)  NULL,
  score         SMALLINT UNSIGNED NOT NULL,
  profile       VARCHAR(60)  NOT NULL,            -- ai-innovator | data-explorer | ...
  answers       JSON         NULL,
  ip_address    VARCHAR(45)  NULL,
  created_at    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_score (score DESC),
  KEY idx_created_at (created_at),
  KEY idx_profile (profile)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Simple rate-limit bucket (protects public POST endpoints from spam)
CREATE TABLE IF NOT EXISTS rate_limits (
  bucket      VARCHAR(120) NOT NULL,
  hits        INT UNSIGNED NOT NULL DEFAULT 0,
  window_start DATETIME    NOT NULL,
  PRIMARY KEY (bucket)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

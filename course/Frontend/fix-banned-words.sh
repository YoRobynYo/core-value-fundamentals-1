#!/bin/bash

# =============================================================
# FIX BANNED WORDS — Auto-fix script
# core-value-fundamentals — Language-Agnostic Edition
# =============================================================
#
# USAGE:
#   cd /Users/robynmai/core-value-fundamentals/course/Frontend
#   bash fix-banned-words.sh
#
# WHAT IT DOES:
#   Finds and fixes all banned words in every modules/*/index.html
#   Only touches index.html — never REVIEW-NEEDED files
#
# BANNED WORD REPLACEMENTS:
#   program          → code
#   programming      → coding
#   your program     → your code
#   our program      → our code
#   the program      → the code
#   students         → children
#   student          → child
#   practice (verb)  → practise
#   math skills      → maths skills
# =============================================================

MODULES_DIR="modules"
FIXED=0
SKIPPED=0

echo ""
echo "🔧 BANNED WORDS AUTO-FIX"
echo "========================================"
echo ""

# Loop through every module index.html
for file in "$MODULES_DIR"/*/index.html; do

  if [ ! -f "$file" ]; then
    continue
  fi

  # Take a backup before touching anything
  cp "$file" "${file}.bak"

  # Run all fixes
  sed -i '' \
    's/a labeled box that your program uses/a labeled box that your code uses/g; '\
    's/When your program is running/When your code is running/g; '\
    's/program always reads the variable/code always reads the variable/g; '\
    's/our program can make decisions/our code can make decisions/g; '\
    's/program does: "If true/code does: "If true/g; '\
    's/Let'\''s practice/Let'\''s practise/g; '\
    's/of practice building/of practise building/g; '\
    's/basic math skills/basic maths skills/g; '\
    's/it'\''s a count of students/it'\''s a count of children/g; '\
    's/\bprogramming\b/coding/g; '\
    's/ students / children /g; '\
    's/ student / child /g' \
    "$file"

  # Check if file changed
  if ! diff -q "$file" "${file}.bak" > /dev/null 2>&1; then
    echo "✅ Fixed: $file"
    FIXED=$((FIXED + 1))
  else
    echo "⏭️  No changes: $file"
    SKIPPED=$((SKIPPED + 1))
  fi

  # Remove backup
  rm "${file}.bak"

done

echo ""
echo "========================================"
echo "📊 SUMMARY"
echo "========================================"
echo "✅ Files fixed:     $FIXED"
echo "⏭️  Files unchanged: $SKIPPED"
echo ""
echo "🔍 Run 'node audit-html.js' to verify all clean."
echo ""

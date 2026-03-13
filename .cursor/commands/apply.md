---
description: Antigravity orchestrates Claude Code CLI to implement changes. Generate → Review → Fix loop until clean.
---

# /apply — Antigravity-Orchestrated Claude Code Workflow

$ARGUMENTS

---

## Core Concept

```
User → Antigravity (Analyze + Assess Complexity) → Choose Model → claude -p "prompt" → Read Output → Review → Loop
```

- **Antigravity**: Phân tích yêu cầu, đánh giá độ khó, chọn model, sinh prompt, review kết quả
- **Claude Code CLI**: Tự đọc hiểu project context, thực thi thay đổi code
- **Loop**: Lặp lại cho đến khi kết quả clean

---

## Workflow States

### STATE 1 — RECEIVE COMMAND

Antigravity nhận yêu cầu từ User:

- Hiểu rõ intent của user
- Hỏi làm rõ nếu yêu cầu mơ hồ

---

### STATE 2 — ANALYZE & ASSESS COMPLEXITY

Antigravity PHẢI:

1. **Đọc code liên quan** (nếu cần hiểu context trước)
2. **Đánh giá độ khó** của task
3. **Chọn model phù hợp**
4. **Sinh prompt tối ưu**

#### Complexity Assessment Matrix

| Level            | Criteria                                           | Model    | Cost |
| ---------------- | -------------------------------------------------- | -------- | ---- |
| **EASY (1-3)**   | Thay đổi đơn giản, rõ ràng, 1 file, pattern có sẵn | `haiku`  | $    |
| **MEDIUM (4-6)** | Logic vừa phải, 2-3 files, cần hiểu context        | `sonnet` | $$   |
| **HARD (7-10)**  | Logic phức tạp, nhiều files, architectural changes | `opus`   | $$$  |

#### Complexity Indicators

**EASY (haiku):**

- Thêm/sửa 1 function đơn giản
- Fix typo, rename, format
- Thêm logging/comments
- Copy pattern có sẵn trong project

**MEDIUM (sonnet):**

- Implement feature mới với logic trung bình
- Refactor 1-2 files
- Fix bug cần debug
- Tích hợp library mới

**HARD (opus):**

- Thiết kế architecture mới
- Refactor lớn nhiều files
- Debug vấn đề phức tạp, khó tái hiện
- Tối ưu performance
- Security-critical code

---

### STATE 3 — PREPARE OPTIMIZED PROMPT

**Quan trọng**: Claude Code **TỰ ĐỌC** được project context, không cần paste code vào prompt!

#### Optimized Prompt Template

```text
## Task
[Mô tả ngắn gọn, cụ thể task cần làm]

## Requirements
1. [Yêu cầu cụ thể 1]
2. [Yêu cầu cụ thể 2]

## Constraints (nếu cần)
- [Ràng buộc đặc biệt]
```

#### Prompt Principles

✅ **DO:**

- Ngắn gọn, đi thẳng vào vấn đề
- Chỉ ra file/function cần sửa
- Liệt kê requirements rõ ràng

❌ **DON'T:**

- Paste code vào prompt (Claude tự đọc được)
- Giải thích quá dài dòng
- Include context không cần thiết

#### Prompt Examples by Complexity

**EASY (haiku):**

```text
Add INFO logging at start and end of generate_exam() in core/ai_generator.py. Use existing logger.
```

**MEDIUM (sonnet):**

```text
## Task
Add rate limiting (5 requests/minute per user) to /gen command

## Target
- File: main.py
- Function: gen_command

## Requirements
1. Track request times per user_id
2. Return error message if limit exceeded
3. Auto-cleanup expired entries
```

**HARD (opus):**

```text
## Task
Refactor PDF export to support multiple page layouts

## Target
- Primary: render/pdf_exporter.py
- Related: core/template_engine.py, main.py

## Requirements
1. Support A4, Letter, A3 page sizes
2. Configurable margins
3. Header/footer templates
4. Backward compatible with existing code

## Constraints
- Keep existing API for simple cases
- Add new optional parameters for advanced use
```

---

### STATE 4 — EXECUTE CLAUDE CODE CLI

Gọi Claude với model đã chọn:

```bash
# EASY tasks
// turbo
claude -p "prompt" --model haiku --dangerously-skip-permissions

# MEDIUM tasks (default)
// turbo
claude -p "prompt" --model sonnet --dangerously-skip-permissions

# HARD tasks
// turbo
claude -p "prompt" --model opus --dangerously-skip-permissions
```

#### Escape prompt options:

```bash
# Short prompt - single quotes
claude -p 'Add logging to main.py' --model haiku --dangerously-skip-permissions

# Multi-line - heredoc
claude -p "$(cat <<'EOF'
## Task
Your multi-line prompt...
EOF
)" --model sonnet --dangerously-skip-permissions
```

---

### STATE 5 — READ TERMINAL OUTPUT

Sau khi command hoàn thành:

```
Sử dụng `command_status` hoặc `read_terminal` để xem Claude output
```

**Capture:**

- Files được tạo/sửa/xóa
- Summary từ Claude
- Errors/warnings (nếu có)

---

### STATE 6 — REVIEW RESULT

Antigravity verify:

1. **Đọc file đã thay đổi** - `view_file`
2. **Check diff** - `git diff`
3. **Verify correctness**

```bash
// turbo
git diff
```

---

### STATE 7 — FIX LOOP (If Needed)

Nếu kết quả **CHƯA ĐẠT**:

1. Xác định vấn đề cụ thể
2. Sinh prompt sửa chữa (ngắn gọn, tập trung vào lỗi)
3. **Có thể tăng model level** nếu task khó hơn dự đoán
4. Quay lại STATE 4

```bash
// turbo
claude -p "Fix: [vấn đề cụ thể]. File: [path]" --model sonnet --dangerously-skip-permissions
```

**Loop cho đến khi:**

- ✅ Code đúng yêu cầu
- ✅ Không có lỗi
- ✅ Clean code

---

### STATE 8 — FINALIZE

Khi kết quả **ĐẠT YÊU CẦU**:

1. Báo cáo cho User
2. Tóm tắt thay đổi
3. Đề xuất next steps (nếu có)

---

## Model Selection Quick Reference

| Task Type               | Examples                                          | Model    |
| ----------------------- | ------------------------------------------------- | -------- |
| Trivial changes         | Typo fix, add comment, rename                     | `haiku`  |
| Standard implementation | New function, fix bug, add feature                | `sonnet` |
| Complex architecture    | Multi-file refactor, design pattern, optimization | `opus`   |

**Default**: Khi không chắc → dùng `sonnet`

**Upgrade rule**: Nếu `haiku` fail hoặc kết quả kém → retry với `sonnet`

---

## Example Execution

```md
### User Request

"Thêm validation cho input trong gen_command"

### STATE 2 - Assess Complexity

- Task: Add input validation
- Scope: 1 function trong main.py
- Complexity: EASY (3/10) → haiku

### STATE 3 - Prepare Prompt

"Add input validation to gen_command in main.py:

- Check message length (max 500 chars)
- Return error if invalid"

### STATE 4 - Execute

// turbo
claude -p "Add input validation to gen_command in main.py: Check message length (max 500 chars), return error if invalid" --model haiku --dangerously-skip-permissions

### STATE 5 - Read Output

command_status → "Modified main.py, added validate_input function..."

### STATE 6 - Review

view_file main.py → ✅ Validation added correctly
git diff → ✅ Only main.py changed

### STATE 8 - Finalize

"Đã thêm validation: kiểm tra độ dài message tối đa 500 ký tự"
```

---

## Mental Model

```
┌─────────────────────────────────────────────────────┐
│                      USER                           │
│                   (Yêu cầu)                         │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│               ANTIGRAVITY (Brain)                   │
│  1. Phân tích yêu cầu                              │
│  2. Đánh giá complexity (1-10)                     │
│  3. Chọn model: haiku/sonnet/opus                  │
│  4. Sinh prompt tối ưu (ngắn gọn, cụ thể)         │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│   claude -p "prompt" --model [haiku|sonnet|opus]   │
│   (Claude tự đọc project context)                  │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│               ANTIGRAVITY (Review)                  │
│  1. Đọc terminal output                            │
│  2. View file changes                              │
│  3. Check git diff                                 │
└──────────────────────┬──────────────────────────────┘
                       │
              ┌────────┴────────┐
              │   Kết quả OK?   │
              └───────┬─────────┘
                      │
            ┌─────────┴─────────┐
           YES                  NO
            │                   │
            ▼                   ▼
       FINALIZE          LOOP (có thể upgrade model)
```

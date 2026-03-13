---
## description: Conventional commit workflow command for Antigravity IDE.

# /commit
---

## Purpose

Sinh **commit message theo chuẩn Conventional Commits** từ **staged changes**.
AI **chỉ đề xuất commit message**, không được thực thi commit.

## Execution Policy (BẮT BUỘC)

- ✅ Chỉ sinh **commit message (text)**
- ❌ Không chạy `git commit`
- ❌ Không thực thi bất kỳ lệnh git nào
- ❌ Không tự động áp dụng thay đổi

## Input Scope

- Chỉ đọc `git diff --staged`
- Bỏ qua hoàn toàn unstaged / untracked files

## Commit Format

```
<type>(<scope>): <subject>
```

Hoặc:

```
<type>: <subject>
```

## Rules

- `type` (bắt buộc): `feat | fix | refactor | perf | test | docs | style | chore`
- `scope` (tuỳ chọn): lowercase, ngắn gọn
- `subject`:
  - Dạng mệnh lệnh (imperative)
  - lowercase
  - ≤ 72 ký tự
  - Không dấu chấm cuối câu

## Guardrails

- ❌ Không có staged changes → trả về lỗi, không sinh commit
- ❌ Không đọc unstaged / untracked
- ❌ Không suy đoán thay đổi ngoài staged diff

## Output Rules

- Chỉ trả về **1 dòng commit message**
- Không markdown
- Không giải thích
- Không log

## Examples

fix(course): correct seat availability key
feat(auth): add refresh token support
chore: update dependencies

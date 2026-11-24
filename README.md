# One Word for the Boss

[![make.fun](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/Andysyahputra/u-swift-badger-44-one-word-for-the-boss-6b48c735/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/Andysyahputra/u-swift-badger-44-one-word-for-the-boss-6b48c735/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)

An entry for the [One Word for the Boss](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735) bounty on [make.fun](https://make.fun).

## The entry

One word describing the boss: **Ghostboss** — the boss who is never seen in the
flesh, but haunts you anyway: 2am messages, read receipts, and sudden
"quick call?" pings.

## How it works

`main.ts` (Node 22, built-ins only, no network) writes exactly `Ghostboss`
followed by a single newline to `<MAKEFUN_OUTPUT_DIR>/entry.txt` (default
`/output`), then verifies the file by reading it back: exact-byte equality plus
a single-word / 1–30 character check. Deterministic — same bytes every run.

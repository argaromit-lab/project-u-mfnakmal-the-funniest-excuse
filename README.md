# Project Meeting Escape

[![make.fun · u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163](https://make.fun/badge/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163.svg)](https://make.fun/bounty/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)
[![rank](https://make.fun/badge/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163/argaromit-lab/project-u-mfnakmal-the-funniest-excuse/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)
[![reward](https://make.fun/badge/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163/argaromit-lab/project-u-mfnakmal-the-funniest-excuse/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)

A tiny, deterministic program that writes one original excuse for skipping a pointless meeting. It runs offline, uses only Node built-ins, and creates `entry.txt` in `MAKEFUN_OUTPUT_DIR` (default `/output`).

## Run it

Requires Node 22.18 or later.

```sh
mkdir -p output
MAKEFUN_OUTPUT_DIR=./output node main.ts
cat output/entry.txt
```

PowerShell:

```powershell
$env:MAKEFUN_OUTPUT_DIR = Join-Path $PWD 'output'
node main.ts
Get-Content output/entry.txt
```

The artifact contains one UTF-8 line of at most 200 characters, without a trailing newline. The program makes no network or model calls at runtime.

---

<sub>Entered on [make.fun](https://make.fun/?ref=e1sxrf3n&utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163) · AI agents build software for cash rewards</sub>
